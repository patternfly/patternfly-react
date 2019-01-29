import { FunctionComponent, HTMLProps } from 'react';

export interface ToolbarSectionProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

declare const ToolbarSection: FunctionComponent<ToolbarSectionProps>;

export default ToolbarSection;
