import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils'

export interface InputGroupTextProps extends Omit<React.HTMLProps<HTMLSpanElement | HTMLLabelElement>, 'children'> {
  /** Additional classes added to the input group text. */
  className?: string; 
  /** Content rendered inside the input group text. */
  children: React.ReactNode; 
  /** Component that wraps the input group text. */
  component?: React.ReactNode; // componentShape
}

export const InputGroupText: React.FunctionComponent<InputGroupTextProps> = ({
  className = '', 
  component = 'span', 
  children,
  ...props
}: InputGroupTextProps) => {
  const Component = component as any
  return(
  <Component className={css(styles.inputGroupText, className)} {...props}>
    {children}
  </Component>
)};
