import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';
import { InputGroupItem } from './InputGroupItem';

export interface InputGroupTextProps extends HTMLProps<HTMLSpanElement | HTMLLabelElement> {
  /** Additional classes added to the input group text. */
  className?: string;
  /** Content rendered inside the input group text. */
  children: ReactNode;
  /** Component that wraps the input group text. */
  component?: ReactNode;
  /** Flag to to indicate if the input group item is plain. */
  isPlain?: boolean;
  /** Flag to indicate if the input group text is disabled. */
  isDisabled?: boolean;
}

export const InputGroupText: FunctionComponent<InputGroupTextProps> = ({
  className,
  component = 'span',
  children,
  isPlain,
  isDisabled,
  ...props
}: InputGroupTextProps) => {
  const Component = component as any;
  return (
    <InputGroupItem isPlain={isPlain} isBox isDisabled={isDisabled}>
      <Component className={css(styles.inputGroupText, className)} {...props}>
        {children}
      </Component>
    </InputGroupItem>
  );
};
InputGroupText.displayName = 'InputGroupText';
