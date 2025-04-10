import { Divider, DividerProps } from '../Divider';

export const NavItemSeparator: React.FunctionComponent<DividerProps> = ({
  component = 'li',
  role = 'presentation',
  ...props
}: DividerProps) => <Divider component={component} role={role} {...props} />;
NavItemSeparator.displayName = 'NavItemSeparator';
