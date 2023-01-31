import React from 'react';
import { MenuItemProps } from '../MenuItem';

export const MenuItem = ({ className, children, description, itemId }: MenuItemProps) => (
  <>
    <div className={className} data-testid="menu-item-mock">
      {children}
    </div>
    <p>{`description: ${description}`}</p>
    <p>{`itemId: ${itemId}`}</p>
  </>
);
