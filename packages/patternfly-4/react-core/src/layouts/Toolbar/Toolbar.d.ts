import { SFC, HTMLProps, ReactNode } from 'react';

export interface ToolbarProps extends HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered as toolbar content */
  children?: React.ReactNode
}

declare const Toolbar: SFC<ToolbarProps>;

export default Toolbar;
