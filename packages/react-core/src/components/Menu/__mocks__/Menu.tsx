import React from 'react';
import { MenuProps } from '../Menu';

export const Menu = ({ className, isPlain, isScrollable, style, onSelect, ...props }: MenuProps) => (
  <>
    <div className={className} data-testid="menu-mock" {...props}></div>
    <div onClick={onSelect}>{'Mock item'}</div>
    <p>{`isPlain: ${isPlain}`}</p>
    <p>{`isScrollable: ${isScrollable}`}</p>
    <p>{`minWidth: ${style?.['--pf-v5-c-menu--MinWidth']}`}</p>
  </>
);
