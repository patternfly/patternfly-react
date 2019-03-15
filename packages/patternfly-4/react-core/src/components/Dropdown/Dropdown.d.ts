import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  dropdownItems?: ReactNode[];
  isPlain?: boolean;
  isOpen?: boolean;
  isAction?: boolean;
  onSelect?(event: React.SyntheticEvent<HTMLDivElement>): void;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  toggle?: ReactNode;
}

declare const Dropdown: FunctionComponent<DropdownProps>;

export default Dropdown;
