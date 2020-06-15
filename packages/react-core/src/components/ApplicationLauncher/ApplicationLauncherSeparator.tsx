import * as React from 'react';
import { DropdownSeparator, SeparatorProps } from '../Dropdown';

/**
 *
 */
export function ApplicationLauncherSeparator({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: SeparatorProps) {
  return <DropdownSeparator {...props} />;
}
