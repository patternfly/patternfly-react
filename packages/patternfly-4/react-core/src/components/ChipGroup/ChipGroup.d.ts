import { ReactNode, HTMLProps } from 'react';

export interface ChipGroupProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  collapsedText?: string;
  expandedText?: string;
  withToolbar?: boolean;
}

declare const ChipGroup: React.ComponentClass<ChipGroupProps>;

export default ChipGroup;
