import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../typeUtils';

export const PopoverPosition: {
  top: 'top';
  bottom: 'bottom';
  left: 'left';
  right: 'right';
};

export interface PopoverDialogProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode
  position: OneOf<typeof PopoverPosition, keyof typeof PopoverPosition>;
}

declare const PopoverDialog: SFC<PopoverDialogProps>;

export default PopoverDialog;

