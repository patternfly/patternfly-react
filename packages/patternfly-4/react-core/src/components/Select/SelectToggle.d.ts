import { SFC, HTMLProps, ReactType, ReactNode } from 'react';

export interface SelectToggleProps extends HTMLProps<HTMLButtonElement> {
  id?: string;
  children?: ReactNode;
  isExpanded?: boolean;
  onToggle?: Function;
  parentRef?: HTMLElement;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  isPlain?: boolean;
  type?: string;
  iconComponent?: ReactType;
}

declare const SelectToggle: SFC<SelectToggleProps>;

export default SelectToggle;
