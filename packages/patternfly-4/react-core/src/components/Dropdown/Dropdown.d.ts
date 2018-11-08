import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import DropdownToggle from './DropdownToggle';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  dropdownItems: ReactNode[];
  isOpen?: boolean;
  isAction?: boolean;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  toggle?: OneOf<typeof DropdownToggle, keyof typeof DropdownToggle>;
}

declare const Dropdown: SFC<DropdownProps>;

export default Dropdown;
