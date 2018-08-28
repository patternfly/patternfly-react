import { SFC, HTMLProps } from 'react';

export interface SplitItemProps extends HTMLProps<HTMLDivElement> {
  isMain: boolean;
}

declare const SplitItem: SFC<SplitItemProps>;

export default SplitItem;
