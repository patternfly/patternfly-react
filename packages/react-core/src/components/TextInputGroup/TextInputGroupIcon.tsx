import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupIconProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the text input group utilities div */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group utilities container */
  className?: string;
  /** Flag indicating if the icon is a status icon and should inherit status styling. */
  isStatus?: boolean;
}

export const TextInputGroupIcon: React.FunctionComponent<TextInputGroupIconProps> = ({
  children,
  className,
  isStatus,
  ...props
}: TextInputGroupIconProps) => (
  <span className={css(styles.textInputGroupIcon, isStatus && styles.modifiers.status, className)} {...props}>
    {children}
  </span>
);

TextInputGroupIcon.displayName = 'TextInputGroupIcon';
