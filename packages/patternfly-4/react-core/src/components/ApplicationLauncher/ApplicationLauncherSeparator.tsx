import * as React from 'react';
import { DropdownSeparator, SeparatorProps } from '../Dropdown';

export const ApplicationLauncherSeparator: React.FunctionComponent<SeparatorProps> = ({
  children,
  ...props
}: SeparatorProps) => <DropdownSeparator {...props} />;
