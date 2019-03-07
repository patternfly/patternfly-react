import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { ApplicationLauncherDirection, ApplicationLauncherPosition } from './applicationLauncherConstants';

export interface ApplicationLauncherProps extends HTMLProps<HTMLDivElement> {
  direction?: OneOf<typeof ApplicationLauncherDirection, keyof typeof ApplicationLauncherDirection>;
  dropdownItems: ReactNode[];
  isOpen?: boolean;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  onToggle?(event: React.SyntheticEvent<HTMLDivElement>): void;
  position?: OneOf<typeof ApplicationLauncherPosition, keyof typeof ApplicationLauncherPosition>;
}

declare const ApplicationLauncher: FunctionComponent<ApplicationLauncherProps>;

export default ApplicationLauncher;
