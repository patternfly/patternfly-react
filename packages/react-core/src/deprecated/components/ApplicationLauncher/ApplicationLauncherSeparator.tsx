import { FunctionComponent } from 'react';
import { DropdownSeparator, SeparatorProps } from '../Dropdown/DropdownSeparator';

export const ApplicationLauncherSeparator: FunctionComponent<SeparatorProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: SeparatorProps) => <DropdownSeparator {...props} />;
ApplicationLauncherSeparator.displayName = 'ApplicationLauncherSeparator';
