import { SFC, HTMLProps } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export const StackItemVariant: {
  primary: 'primary';
  secondary: 'secondary';
}

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  variant?: OneOf<typeof StackItemVariant, keyof typeof StackItemVariant>;
}

declare const StackItem: SFC<StackItemProps>;

export default StackItem;