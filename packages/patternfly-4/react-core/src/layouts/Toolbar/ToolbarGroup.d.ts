import { FunctionComponent, HTMLProps } from 'react';

export interface ToolbarGroupProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarGroup: FunctionComponent<ToolbarGroupProps>;

export default ToolbarGroup;
