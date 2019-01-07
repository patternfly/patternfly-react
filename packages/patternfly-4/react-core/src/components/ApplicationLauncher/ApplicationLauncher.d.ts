import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import { DropdownPosition, DropdownDirection } from '../Dropdown/dropdownConstants';

export interface ApplicationLauncherProps extends HTMLProps<HTMLDivElement> {
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  dropdownItems: ReactNode[];
  isOpen?: boolean;
  isPlain?: boolean;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  onToggle?(event: React.SyntheticEvent<HTMLDivElement>): void;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
}

declare const ApplicationLauncher: SFC<ApplicationLauncherProps>;

export default ApplicationLauncher;
