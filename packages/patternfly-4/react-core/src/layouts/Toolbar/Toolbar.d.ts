import { SFC, HTMLProps, ReactNode } from 'react';

export interface ToolbarProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const Toolbar: SFC<ToolbarProps>;

export default Toolbar;
