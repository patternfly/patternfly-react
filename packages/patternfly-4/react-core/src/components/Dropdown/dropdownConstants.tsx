import * as React from 'react';

export enum DropdownPosition {
  right = 'right',
  left = 'left'
};

export enum DropdownDirection {
  up = 'up',
  down = 'down'
};

export const DropdownContext = React.createContext({
  onSelect: (event?: any) => undefined as any,
  menuClass: '',
  itemClass: '',
  toggleClass: '',
  baseClass: '',
  baseComponent: 'div',
  sectionClass: '',
  sectionTitleClass: '',
  sectionComponent: 'section',
  disabledClass: '',
  hoverClass: '',
  separatorClass: ''
});

export const DropdownArrowContext = React.createContext({
  keyHandler: null,
  sendRef: null
});
