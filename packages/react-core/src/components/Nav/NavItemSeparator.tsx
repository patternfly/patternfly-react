import * as React from 'react';
import { Divider, DividerProps } from '../Divider';

/**
 *
 */
export function NavItemSeparator({ component = 'li', ...props }: DividerProps) {
  return <Divider component={component} {...props} />;
}
