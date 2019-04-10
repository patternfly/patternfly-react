import { FunctionComponent, HTMLProps } from 'react';

export interface SplitItemProps extends HTMLProps<HTMLDivElement> {
  isFilled: boolean;
}

declare const SplitItem: FunctionComponent<SplitItemProps>;

export default SplitItem;
