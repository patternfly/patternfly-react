import * as React from 'react';
import { Divider, DividerProps } from '../Divider';

export const OptionsMenuSeparator: React.FunctionComponent<React.PropsWithChildren<DividerProps>> = ({
  component = 'li',
  ...props
}: DividerProps) => <Divider component={component} {...props} />;
OptionsMenuSeparator.displayName = 'OptionsMenuSeparator';
