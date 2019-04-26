import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface OptionsMenuItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelect?(event: React.SyntheticEvent<HTMLDivElement>): void;
  id?: string;
}

declare const OptionsMenuItem: FunctionComponent<OptionsMenuItemProps>;

export default OptionsMenuItem;
