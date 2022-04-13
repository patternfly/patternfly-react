import * as React from 'react';
import { DropdownGroup, DropdownGroupProps } from '../Dropdown';

export const ApplicationLauncherGroup: React.FunctionComponent<React.PropsWithChildren<DropdownGroupProps>> = ({
  children,
  ...props
}: DropdownGroupProps) => <DropdownGroup {...props}>{children}</DropdownGroup>;
ApplicationLauncherGroup.displayName = 'ApplicationLauncherGroup';
