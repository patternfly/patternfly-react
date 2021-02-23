import React from 'react';
import { Menu } from './Menu';
import { MenuContent } from './MenuContent';
import { MenuList } from './MenuList';

export interface DrilldownMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref' | 'onSelect'> {
  /** Items within drilldown sub-menu */
  children?: React.ReactNode;
  /** ID of the drilldown sub-menu */
  id?: string;
  /** Flag indicating whether the menu is drilled in */
  isMenuDrilledIn?: boolean;
  /** Callback to get the height of the sub menu */
  getHeight?: (height: string) => void;
  /** Callback for the selection of the sub menu */
  onSelect?: (event?: React.MouseEvent, itemId?: string | number) => void;
}

export const DrilldownMenu: React.FunctionComponent<DrilldownMenuProps> = ({
  children,
  id,
  isMenuDrilledIn = false,
  getHeight,
  onSelect,
  ...props
}: DrilldownMenuProps) => (
  <Menu id={id} isMenuDrilledIn={isMenuDrilledIn} onSelect={onSelect} {...props} ref={React.createRef()}>
    <MenuContent getHeight={getHeight}>
      <MenuList>{children}</MenuList>
    </MenuContent>
  </Menu>
);

DrilldownMenu.displayName = 'DrilldownMenu';
