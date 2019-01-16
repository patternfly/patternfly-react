import { SFC, HTMLProps, ReactNode } from 'react';

export interface ChipGroupToolbarItemProps extends HTMLProps<HTMLDivElement> {
  categoryName?: string;
}

declare const ChipGroupToolbarItem: SFC<ChipGroupToolbarItemProps>;

export default ChipGroupToolbarItem;
