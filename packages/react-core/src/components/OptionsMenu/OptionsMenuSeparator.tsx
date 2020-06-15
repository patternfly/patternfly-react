import * as React from 'react';
import { Divider, DividerProps } from '../Divider';

/**
 *
 */
export function OptionsMenuSeparator({ component = 'li', ...props }: DividerProps) {
  return <Divider component={component} {...props} />;
}
