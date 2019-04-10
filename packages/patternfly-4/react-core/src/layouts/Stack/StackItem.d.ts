import { FunctionComponent, HTMLProps } from 'react';

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  isFilled: boolean;
}

declare const StackItem: FunctionComponent<StackItemProps>;

export default StackItem;
