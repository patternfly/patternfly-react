import { FunctionComponent, HTMLProps, ReactNode, ReactType } from 'react';

export interface DropdownToggleProps extends HTMLProps<HTMLButtonElement> {
  id?: string;
  ariaLabel?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: Function;
  parentRef?: HTMLElement;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  isPlain?: boolean;
  isDisabled?: boolean;
  iconComponent?: ReactType | null;
  splitButtonItems?: ReactNode[];
}

declare const DropdownToggle: FunctionComponent<DropdownToggleProps>;

export default DropdownToggle;
