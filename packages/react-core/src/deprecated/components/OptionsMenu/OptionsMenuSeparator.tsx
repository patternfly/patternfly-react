import { FunctionComponent } from 'react';
import { Divider, DividerProps } from '../../../components/Divider';

export const OptionsMenuSeparator: FunctionComponent<DividerProps> = ({ component = 'li', ...props }: DividerProps) => (
  <Divider component={component} {...props} />
);
OptionsMenuSeparator.displayName = 'OptionsMenuSeparator';
