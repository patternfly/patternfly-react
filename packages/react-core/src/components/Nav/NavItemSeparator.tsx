import * as React from 'react';
import { Divider, DividerProps } from '../Divider';

export const NavItemSeparator: React.FunctionComponent<React.PropsWithChildren<DividerProps>> = ({
  component = 'li',
  ...props
}: DividerProps) => <Divider component={component} {...props} />;
NavItemSeparator.displayName = 'NavItemSeparator';
