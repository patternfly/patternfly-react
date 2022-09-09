import React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { MenuGroupProps, MenuGroup } from '../../../components/Menu';

export interface DropdownGroupProps extends Omit<MenuGroupProps, 'ref'> {
  /** Anything which can be rendered in a dropdown group. */
  children: React.ReactNode;
  /** Classes applied to root element of dropdown group */
  className?: string;
  /** Label of the dropdown group */
  label?: string;
}

export const DropdownGroup: React.FunctionComponent<DropdownGroupProps> = ({
  children,
  className,
  label,
  labelHeadingLevel = 'h1',
  ...props
}: DropdownGroupProps) => (
  <MenuGroup
    className={css(styles.dropdownGroup, className)}
    {...props}
    label={label}
    labelHeadingLevel={labelHeadingLevel}
  >
    {children}
  </MenuGroup>
);
DropdownGroup.displayName = 'DropdownGroup';
