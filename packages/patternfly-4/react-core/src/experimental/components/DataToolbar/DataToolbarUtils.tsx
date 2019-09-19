import * as React from 'react';
import { RefObject } from 'react';

interface DataToolbarContextProps {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
  expandableContentRef: RefObject<HTMLDivElement>;
  expandableContentId: string;
  chipGroupContentRef: RefObject<HTMLDivElement>;
  updateShowClearFiltersButton: (showClearFiltersButton: boolean) => void;
}

export const DataToolbarContext = React.createContext<Partial<DataToolbarContextProps>>({});

export type DataToolbarBreakpointMod = {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible' | 'align-right' | 'align-left';
  /** The breakpoint at which to apply the modifier */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
};

export type DataToolbarSpacer = {
  /** The size of the spacer */
  spacerSize: 'none' | 'sm' | 'md' | 'lg';
  /** The breakpoint at which to apply the spacer */
  breakpoint?: 'md' | 'lg' | 'xl';
};

export const formatSpacers = (spacers: DataToolbarSpacer[], type = 'pf-m-spacer') => {

  return spacers.reduce((acc, curr) => (
    `${acc} ${type}-${curr.spacerSize}${curr.breakpoint ? `-on-${curr.breakpoint}` : ''}`
  ), '');
};
