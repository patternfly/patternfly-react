import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import { DropdownToggleProps } from './DropdownToggle';

export const DropdownPosition: {
  right: 'right';
  left: 'left';
}

export const DropdownDirection: {
  up: 'up';
  down: 'down';
}

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