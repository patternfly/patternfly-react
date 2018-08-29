import { SFC, HTMLProps, ReactNode } from 'react';

export interface ToolbarSectionProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarSection: SFC<ToolbarSectionProps>;

export default ToolbarSection;
