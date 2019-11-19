import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

export interface DropdownIconProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Icon to be rendered in the dropdown item */
  children?: React.ReactNode;
  /** Classes applied to span element of dropdown icon item */
  className?: string;
}

export const DropdownIcon: React.FunctionComponent<DropdownIconProps> = ({
  children,
  className = '',
  ...props
}: DropdownIconProps) => (
  <span className={css(styles.dropdownMenuItemIcon)} {...props}>
    {children}
  </span>
);
