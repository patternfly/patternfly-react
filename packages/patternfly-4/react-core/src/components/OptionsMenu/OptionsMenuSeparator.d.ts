import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface OptionsMenuSeparatorProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

declare const OptionsMenuSeparator: FunctionComponent<OptionsMenuSeparatorProps>;

export default OptionsMenuSeparator;
