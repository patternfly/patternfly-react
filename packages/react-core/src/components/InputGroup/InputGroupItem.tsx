import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';

export interface InputGroupItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the input group item. */
  className?: string;
  /** Content rendered inside the input group item. */
  children: React.ReactNode;
  /** Enables box styling to the input group item */
  isBox?: boolean;
  /** Flag to indicate if the input group item is plain. */
  isPlain?: boolean;
  /** Flag to indicate if the input group item should fill the available horizontal space */
  isFill?: boolean;
  /** Flag to indicate if the input group item is disabled. */
  isDisabled?: boolean;
}

export const InputGroupItem: React.FunctionComponent<InputGroupItemProps> = ({
  className,
  children,
  isFill = false,
  isBox = false,
  isPlain,
  isDisabled,
  ...props
}: InputGroupItemProps) => (
  <div
    className={css(
      styles.inputGroupItem,
      isFill && styles.modifiers.fill,
      isBox && styles.modifiers.box,
      isPlain && styles.modifiers.plain,
      isDisabled && styles.modifiers.disabled,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
InputGroupItem.displayName = 'InputGroupItem';
