import { FunctionComponent } from 'react';
import { Divider, DividerProps } from '../Divider';

export const NavItemSeparator: FunctionComponent<DividerProps> = ({ component = 'li', ...props }: DividerProps) => (
  <Divider component={component} {...props} />
);
NavItemSeparator.displayName = 'NavItemSeparator';
