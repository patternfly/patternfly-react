import { FunctionComponent, HTMLProps } from 'react';

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  isMain: boolean;
}

declare const StackItem: FunctionComponent<StackItemProps>;

export default StackItem;
