import { FunctionComponent, HTMLProps } from 'react';

export interface SplitItemProps extends HTMLProps<HTMLDivElement> {
  isMain: boolean;
}

declare const SplitItem: FunctionComponent<SplitItemProps>;

export default SplitItem;
