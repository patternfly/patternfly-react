import * as React from 'react';
import { DropdownGroup, DropdownGroupProps } from '../Dropdown';

/**
 *
 */
export function ApplicationLauncherGroup({ children, ...props }: DropdownGroupProps) {
  return <DropdownGroup {...props}>{children}</DropdownGroup>;
}
