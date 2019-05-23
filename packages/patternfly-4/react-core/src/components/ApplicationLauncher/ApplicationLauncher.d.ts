import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ApplicationLauncherProps extends HTMLProps<HTMLDivElement> {
  dropdownItems: ReactNode[];
  isOpen?: boolean;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  onToggle?(event: React.SyntheticEvent<HTMLDivElement>): void;
}

declare const ApplicationLauncher: FunctionComponent<ApplicationLauncherProps>;

export default ApplicationLauncher;
