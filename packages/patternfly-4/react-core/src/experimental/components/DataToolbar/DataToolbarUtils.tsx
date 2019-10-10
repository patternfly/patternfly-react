import * as React from 'react';
import { RefObject } from 'react';
import {
  global_breakpoint_md as globalBreakpointMd,
  global_breakpoint_lg as globalBreakpointLg,
  global_breakpoint_xl as globalBreakpointXl,
  global_breakpoint_2xl as globalBreakpoint2xl
} from '@patternfly/react-tokens';

interface DataToolbarContextProps {
  chipGroupContentRef: RefObject<HTMLDivElement>;
  updateNumberFilters: (categoryName: string, numberOfFilters: number) => void;
}

export const DataToolbarContext = React.createContext<Partial<DataToolbarContextProps>>({
  chipGroupContentRef: null,
  updateNumberFilters: (categoryName: string, numberOfFilters: number) => {}
});

interface DataToolbarContentContextProps {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
  expandableContentRef: RefObject<HTMLDivElement>;
  expandableContentId: string;
}

export const DataToolbarContentContext = React.createContext<Partial<DataToolbarContentContextProps>>({
  isExpanded: false,
  toggleIsExpanded: () => {},
  expandableContentRef: null,
  expandableContentId: '',
});

export interface DataToolbarBreakpointMod {
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
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
}

export const globalBreakpoints = (breakpoint: string) => {
  const breakpoints: { [key: string]: number } = {
    md: parseInt(globalBreakpointMd.value),
    lg: parseInt(globalBreakpointLg.value),
    xl: parseInt(globalBreakpointXl.value),
    '2xl': parseInt(globalBreakpoint2xl.value)
  };
  return breakpoints[breakpoint];
};
