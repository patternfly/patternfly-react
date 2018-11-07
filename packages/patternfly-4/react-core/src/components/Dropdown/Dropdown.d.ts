import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import DropdownToggle from './DropdownToggle';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  dropdownItems: ReactNode[];
  isOpen?: boolean;
  isAction?: boolean;
  onSelect?: Function;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  toggle?: DropdownToggle;
}

declare const Dropdown: SFC<DropdownProps>;

export default Dropdown;
