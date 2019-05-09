import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { DropdownDirection, DropdownPosition } from '../Dropdown';
import { OneOf } from '../../helpers';

export interface OptionsMenuProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  id: string;
  menuItems: ReactNode[];
  toggle: ReactNode;
  isPlain?: boolean;
  isOpen?: boolean;
  ariaLabelMenu?: string;
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
}

declare const OptionsMenu: FunctionComponent<OptionsMenuProps>;

export default OptionsMenu;
