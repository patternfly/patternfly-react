import { FunctionComponent } from 'react';
import { DropdownGroup, DropdownGroupProps } from '../Dropdown';

export const ApplicationLauncherGroup: FunctionComponent<DropdownGroupProps> = ({
  children,
  ...props
}: DropdownGroupProps) => <DropdownGroup {...props}>{children}</DropdownGroup>;
ApplicationLauncherGroup.displayName = 'ApplicationLauncherGroup';
