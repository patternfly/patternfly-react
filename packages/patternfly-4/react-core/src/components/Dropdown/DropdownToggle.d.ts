import { SFC, HTMLProps, ReactType, ReactNode } from 'react';

export interface DropdownToggleProps extends HTMLProps<HTMLButtonElement> {
  id?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: Function;
  parentRef?: HTMLElement;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  iconComponent?: ReactType;
}

declare const DropdownToggle: SFC<DropdownToggleProps>;

export default DropdownToggle;
