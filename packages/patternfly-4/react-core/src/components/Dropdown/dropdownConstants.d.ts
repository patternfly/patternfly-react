import * as React from 'react';
import { any } from 'glamor';

export const DropdownPosition = {
  right: 'right',
  left: 'left'
};

export const DropdownDirection = {
  up: 'up',
  down: 'down'
};

export const DropdownContext = React.createContext({
  onSelect: (event: any): any => undefined
});

export const DropdownArrowContext = React.createContext({
  keyHandler: null,
  sendRef: null
});
