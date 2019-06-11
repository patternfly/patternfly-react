import * as React from 'react';
import { any } from 'glamor';

export enum DropdownPosition {
  right = 'right',
  left = 'left'
}

export enum DropdownDirection {
  up = 'up',
  down = 'down'
}

export const DropdownContext: React.Context<
  (event: any) => void
>

export const DropdownArrowContext: React.Context<{
  keyHandler: (index: number, position: any, custom: boolean) => void,
  sendRef: (index: number, node: any, isDisabled: boolean) => void
}>
