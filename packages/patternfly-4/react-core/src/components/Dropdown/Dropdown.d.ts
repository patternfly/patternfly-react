import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import { DropdownToggleProps } from './DropdownToggle';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  isOpen?: Boolean;
  isAction?: Boolean;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  toggle?: DropdownToggleProps;
}

declare const Dropdown: SFC<DropdownProps>;

export default Dropdown;
