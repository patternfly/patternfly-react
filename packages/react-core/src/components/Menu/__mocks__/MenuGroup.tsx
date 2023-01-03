import React from 'react';
import { MenuGroupProps } from '../MenuGroup';

export const MenuGroup = ({ className, children, label, labelHeadingLevel }: MenuGroupProps) => (
  <>
    <div className={className} data-testid="menu-group-mock">
      {children}
    </div>
    <p>{`label: ${label}`}</p>
    <p>{`labelHeadingLevel: ${labelHeadingLevel}`}</p>
  </>
);
