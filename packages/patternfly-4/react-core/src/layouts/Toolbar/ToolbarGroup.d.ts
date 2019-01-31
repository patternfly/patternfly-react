import { SFC, HTMLProps, ReactNode } from 'react';

export interface ToolbarGroupProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarGroup: SFC<ToolbarGroupProps>;

export default ToolbarGroup;
