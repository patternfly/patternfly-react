import * as React from 'react';
import { RefObject } from 'react';

import globalBreakpointMd from '@patternfly/react-tokens/dist/js/global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/js/global_breakpoint_xl';
import globalBreakpoint2xl from '@patternfly/react-tokens/dist/js/global_breakpoint_2xl';

interface ToolbarContextProps {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
  chipGroupContentRef: RefObject<HTMLDivElement>;
  updateNumberFilters: (categoryName: string, numberOfFilters: number) => void;
  numberOfFilters: number;
  clearAllFilters?: () => void;
  clearFiltersButtonText?: string;
  showClearFiltersButton?: boolean;
  toolbarId?: string;
}

export const ToolbarContext = React.createContext<ToolbarContextProps>({
  isExpanded: false,
  toggleIsExpanded: () => {},
  chipGroupContentRef: null,
  updateNumberFilters: () => {},
  numberOfFilters: 0,
  clearAllFilters: () => {}
});

interface ToolbarContentContextProps {
  expandableContentRef: RefObject<HTMLDivElement>;
  expandableContentId: string;
  chipContainerRef: RefObject<any>;
}

export const ToolbarContentContext = React.createContext<ToolbarContentContextProps>({
  expandableContentRef: null,
  expandableContentId: '',
  chipContainerRef: null
});

export interface ToolbarBreakpointMod {
  /** The attribute to modify  */
  modifier:
    | 'hidden'
    | 'visible'
    | 'align-right'
    | 'align-left'
    | 'spacer-none'
    | 'spacer-sm'
    | 'spacer-md'
    | 'spacer-lg'
    | 'space-items-none'
    | 'space-items-sm'
    | 'space-items-md'
    | 'space-items-lg';
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'md' | 'lg' | 'xl' | '2xl';
}

const breakpoints = {
  md: parseInt(globalBreakpointMd.value),
  lg: parseInt(globalBreakpointLg.value),
  xl: parseInt(globalBreakpointXl.value),
  '2xl': parseInt(globalBreakpoint2xl.value)
};

export const globalBreakpoints = (breakpoint: keyof typeof breakpoints) => breakpoints[breakpoint];
