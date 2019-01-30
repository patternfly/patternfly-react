import { FunctionComponent, HTMLProps } from 'react';

export interface ToolbarProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const Toolbar: FunctionComponent<ToolbarProps>;

export default Toolbar;
