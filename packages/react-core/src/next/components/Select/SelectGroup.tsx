import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuGroupProps, MenuGroup } from '../../../components/Menu';

export interface SelectGroupProps extends Omit<MenuGroupProps, 'ref'> {
  /** Anything which can be rendered in a select group */
  children: React.ReactNode;
  /** Classes applied to root element of select group */
  className?: string;
  /** Label of the select group */
  label?: string;
}

export const SelectGroup: React.FunctionComponent<SelectGroupProps> = ({
  children,
  className,
  label,
  ...props
}: SelectGroupProps) => (
  <MenuGroup className={css(className)} label={label} {...props}>
    {children}
  </MenuGroup>
);
SelectGroup.displayName = 'SelectGroup';
