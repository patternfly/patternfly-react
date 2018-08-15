import { SFC, HTMLProps } from 'react';

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  isMain: boolean;
}

declare const StackItem: SFC<StackItemProps>;

export default StackItem;
