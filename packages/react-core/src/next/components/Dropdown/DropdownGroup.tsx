import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuGroupProps, MenuGroup } from '../../../components/Menu';

export interface DropdownGroupProps extends Omit<MenuGroupProps, 'ref'> {
  /** Anything which can be rendered in a dropdown group. */
  children: React.ReactNode;
  /** Classes applied to root element of dropdown list */
  className?: string;
  /** Label of the dropdown group */
  label?: string;
  /** Group label heading level.*/
  labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const DropdownGroup: React.FunctionComponent<DropdownGroupProps> = ({
  children,
  className,
  label,
  labelHeadingLevel = 'h1',
  ...props
}: DropdownGroupProps) => (
  <MenuGroup className={css(className)} {...props} label={label} labelHeadingLevel={labelHeadingLevel}>
    {children}
  </MenuGroup>
);
DropdownGroup.displayName = 'DropdownGroup';
