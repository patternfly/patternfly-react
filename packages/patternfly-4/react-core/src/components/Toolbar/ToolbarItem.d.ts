import { FunctionComponent, HTMLProps } from 'react';

export interface ToolbarItemProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarItem: FunctionComponent<ToolbarItemProps>;

export default ToolbarItem;
