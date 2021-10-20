import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group container */
  className?: string;
  /** Flag indicating that an icon will be placed on the left side of the text input group */
  hasLeftIcon?: boolean;
}

export const TextInputGroup: React.FunctionComponent<TextInputGroupProps> = ({
  children,
  className,
  hasLeftIcon,
  ...props
}: TextInputGroupProps) => (
  <div className={css(styles.textInputGroup, hasLeftIcon && styles.modifiers.icon, className)} {...props}>
    {children}
  </div>
);

TextInputGroup.displayName = 'TextInputGroup';
