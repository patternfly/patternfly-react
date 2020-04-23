import * as React from 'react';

export enum DropdownPosition {
  right = 'right',
  left = 'left'
}

export enum DropdownDirection {
  up = 'up',
  down = 'down'
}

export const DropdownContext = React.createContext<{
  onSelect?: (event?: any) => void;
  id?: string;
  toggleIndicatorClass?: string;
  toggleIconClass?: string;
  toggleTextClass?: string;
  menuClass?: string;
  itemClass?: string;
  toggleClass?: string;
  baseClass?: string;
  baseComponent?: string;
  sectionClass?: string;
  sectionTitleClass?: string;
  sectionComponent?: string;
  disabledClass?: string;
  plainTextClass?: string;
  menuComponent?: string;
}>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect: (event?: any) => undefined as any,
  id: '',
  toggleIndicatorClass: '',
  toggleIconClass: '',
  toggleTextClass: '',
  menuClass: '',
  itemClass: '',
  toggleClass: '',
  baseClass: '',
  baseComponent: 'div',
  sectionClass: '',
  sectionTitleClass: '',
  sectionComponent: 'section',
  disabledClass: '',
  plainTextClass: '',
  menuComponent: 'ul'
});

export const DropdownArrowContext = React.createContext({
  keyHandler: null,
  sendRef: null
});
