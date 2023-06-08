import React from 'react';
import { MenuProps } from '../Menu';
import cssMenuMinWidth from '@patternfly/react-tokens/dist/esm/c_menu_MinWidth';

export const Menu = ({ className, isPlain, isScrollable, style, onSelect, ...props }: MenuProps) => (
  <>
    <div className={className} data-testid="menu-mock" {...props}></div>
    <div onClick={onSelect}>{'Mock item'}</div>
    <p>{`isPlain: ${isPlain}`}</p>
    <p>{`isScrollable: ${isScrollable}`}</p>
    <p>{`minWidth: ${style?.[cssMenuMinWidth.name]}`}</p>
  </>
);
