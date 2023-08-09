import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';
import { FormSelect } from '../FormSelect';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';

export interface InputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the input group. */
  className?: string;
  /** Content rendered inside the input group. */
  children: React.ReactNode;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.Ref<any>;
}

export const InputGroupBase: React.FunctionComponent<InputGroupProps> = ({
  className,
  children,
  innerRef,
  ...props
}: InputGroupProps) => {
  const getIdItem = () => {
    const getChildId = (_children: any) =>
      React.Children.toArray(_children).find(
        (_child: any) => !formCtrls.includes(_child?.type?.displayName) && _child?.props?.id
      );
    let childId = getChildId(children);
    if (childId) {
      return childId;
    }
    React.Children.toArray(children).find((child: any) => {
      const _childId = getChildId(child.props.children);
      if (_childId) {
        childId = _childId;
        return true;
      }
    });
    return childId;
  };
  const formCtrls = [FormSelect, TextArea, TextInput].map((comp) => comp.displayName);
  const idItem = getIdItem() as React.ReactElement<{ id: string }>;
  const ref = React.useRef(null);
  const inputGroupRef = innerRef || ref;

  const childrenWithId = React.Children.map(children, (child: any) => {
    if (child?.type.displayName === 'InputGroupItem') {
      const newChildren = React.Children.map(child.props.children, (_child) => {
        if (!_child.props) {
          return _child;
        }
        if (_child.props['aria-describedby']) {
          return _child;
        }
        if (!formCtrls.includes(_child.type.displayName)) {
          return _child;
        }
        return React.cloneElement(_child, {
          'aria-describedby': _child.props['aria-describedby'] === '' ? undefined : idItem?.props?.id
        });
      });
      return React.cloneElement(child, {}, newChildren);
    }

    if (child?.props['aria-describedby']) {
      return child;
    }
    if (!formCtrls.includes(child?.type.displayName)) {
      return child;
    }
    return React.cloneElement(child, {
      'aria-describedby': child.props['aria-describedby'] === '' ? undefined : idItem?.props?.id
    });
  });
  return (
    <div ref={inputGroupRef} className={css(styles.inputGroup, className)} {...props}>
      {idItem ? childrenWithId : children}
    </div>
  );
};
InputGroupBase.displayName = 'InputGroupBase';

export const InputGroup = React.forwardRef((props: InputGroupProps, ref: React.Ref<HTMLDivElement>) => (
  <InputGroupBase innerRef={ref} {...props} />
));
InputGroup.displayName = 'InputGroup';
