import { SFC, HTMLProps, ReactNode } from 'react';

export interface ToolbarItemProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarItem: SFC<ToolbarItemProps>;

export default ToolbarItem;
