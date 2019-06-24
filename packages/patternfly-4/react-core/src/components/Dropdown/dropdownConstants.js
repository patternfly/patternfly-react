import React from 'react';

export const DropdownPosition = {
  right: 'right',
  left: 'left'
};

export const DropdownDirection = {
  up: 'up',
  down: 'down'
};

export const DropdownContext = React.createContext({
  onSelect: () => {},
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
