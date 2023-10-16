import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';

export interface InputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the input group. */
  className?: string;
  /** Content rendered inside the input group. */
  children: React.ReactNode;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.RefObject<any>;
}

export const InputGroup: React.FunctionComponent<InputGroupProps> = ({
  className = '',
  children,
  innerRef,
  ...props
}: InputGroupProps) => {
  const ref = React.useRef(null);
  const inputGroupRef = innerRef || ref;

  return (
    <div ref={inputGroupRef} className={css(styles.inputGroup, className)} {...props}>
      {children}
    </div>
  );
};
InputGroup.displayName = 'InputGroup';
