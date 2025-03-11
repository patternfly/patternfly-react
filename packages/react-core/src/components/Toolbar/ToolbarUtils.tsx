import { createContext, RefObject } from 'react';
import globalBreakpointMd from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_xl';
import globalBreakpoint2xl from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_2xl';

export interface ToolbarContextProps {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
  labelGroupContentRef: RefObject<HTMLDivElement | null>;
  updateNumberFilters: (categoryName: string, numberOfFilters: number) => void;
  numberOfFilters: number;
  clearAllFilters?: () => void;
  clearFiltersButtonText?: string;
  showClearFiltersButton?: boolean;
  toolbarId?: string;
  customLabelGroupContent?: React.ReactNode;
}

export const ToolbarContext = createContext<ToolbarContextProps>({
  isExpanded: false,
  toggleIsExpanded: () => {},
  labelGroupContentRef: null,
  updateNumberFilters: () => {},
  numberOfFilters: 0,
  clearAllFilters: () => {}
});

interface ToolbarContentContextProps {
  expandableContentRef: RefObject<HTMLDivElement | null>;
  expandableContentId: string;
  labelContainerRef: RefObject<any>;
  isExpanded?: boolean;
  clearAllFilters?: () => void;
  clearFiltersButtonText?: string;
  showClearFiltersButton?: boolean;
}

export const ToolbarContentContext = createContext<ToolbarContentContextProps>({
  expandableContentRef: null,
  expandableContentId: '',
  labelContainerRef: null,
  clearAllFilters: () => {}
});

export const globalBreakpoints = {
  md: parseInt(globalBreakpointMd.value) * 16,
  lg: parseInt(globalBreakpointLg.value) * 16,
  xl: parseInt(globalBreakpointXl.value) * 16,
  '2xl': parseInt(globalBreakpoint2xl.value) * 16
};
