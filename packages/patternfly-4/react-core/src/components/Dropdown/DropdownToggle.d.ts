import { SFC, HTMLProps, ReactType, ReactNode } from 'react';

export interface DropdownToggleProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  isOpen?: Boolean;
  onToggle?: Function;
  parentRef: HTMLElement;
}

declare const DropdownToggle: SFC<DropdownToggleProps>;

export default DropdownToggle;