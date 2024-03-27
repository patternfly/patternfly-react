import { HTMLProps, ReactNode, Ref, FunctionComponent, useRef, forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';

export interface InputGroupProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the input group. */
  className?: string;
  /** Content rendered inside the input group. */
  children: ReactNode;
  /** @hide A reference object to attach to the input box */
  innerRef?: Ref<any>;
}

export const InputGroupBase: FunctionComponent<InputGroupProps> = ({
  className,
  children,
  innerRef,
  ...props
}: InputGroupProps) => {
  const ref = useRef(null);
  const inputGroupRef = innerRef || ref;

  return (
    <div ref={inputGroupRef} className={css(styles.inputGroup, className)} {...props}>
      {children}
    </div>
  );
};
InputGroupBase.displayName = 'InputGroupBase';

export const InputGroup = forwardRef((props: InputGroupProps, ref: Ref<HTMLDivElement>) => (
  <InputGroupBase innerRef={ref} {...props} />
));
InputGroup.displayName = 'InputGroup';
