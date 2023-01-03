import React from 'react';
import { MenuListProps } from '../MenuList';

export const MenuList = ({ className, children }: MenuListProps) => (
  <>
    <div className={className} data-testid="menu-list-mock">
      {children}
    </div>
  </>
);
