import * as React from 'react';

export enum DropdownPosition {
  right = 'right',
  left = 'left'
}

export enum DropdownDirection {
  up = 'up',
  down = 'down'
}

export const DropdownContext: React.Context<{
  onSelect: (event: any) => void,
  menuClass?: string,
  itemClass?: string,
  toggleClass?: string,
  baseClass?: string
}>

export const DropdownArrowContext: React.Context<{
  keyHandler: (index: number, position: any, custom: boolean) => void,
  sendRef: (index: number, node: any, isDisabled: boolean) => void
}>
