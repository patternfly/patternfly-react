import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface OptionsMenuItemGroupProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
}

declare const OptionsMenuItemGroup: FunctionComponent<OptionsMenuItemGroupProps>;

export default OptionsMenuItemGroup;
