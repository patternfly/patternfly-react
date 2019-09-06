import { getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import * as React from 'react';
import { RefObject } from 'react';

interface DataToolbarContextProps {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
  expandableContentRef: RefObject<HTMLDivElement>;
  expandableContentId: string;
}

export const DataToolbarContext = React.createContext<Partial<DataToolbarContextProps>>({});

export type DataToolbarBreakpointMod = {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible' | 'align-right' | 'align-left';
  /** The breakpoint at which to apply the modifier */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
};

export const formatBreakpointMods = (breakpointMods: DataToolbarBreakpointMod[]) => {

  let formattedBreakpointMods = '';
  for (const breakpointMod of breakpointMods) {
    formattedBreakpointMods += `${getModifier(styles, `${breakpointMod.modifier}-on-${breakpointMod.breakpoint}`)} `;
  }
  return formattedBreakpointMods;
};

export type DataToolbarSpacer = {
  /** The size of the spacer */
  spacerSize: 'none' | 'sm' | 'md' | 'lg';
  /** The breakpoint at which to apply the spacer */
  breakpoint?: 'md' | 'lg' | 'xl';
};

export const formatItemSpacers = (spacers: DataToolbarSpacer[]) => {

  let formattedSpacers = '';
  for (const spacer of spacers) {
    formattedSpacers += 'pf-m-spacer-' + spacer.spacerSize;
    if (spacer.breakpoint) {
      formattedSpacers += '-on-' + spacer.breakpoint + ' ';
    } else {
      formattedSpacers += ' ';
    }
  }
  return formattedSpacers;
};

export const formatGroupSpacers = (spacers: DataToolbarSpacer[]) => {

  let formattedSpacers = '';
  for (const spacer of spacers) {
    formattedSpacers += 'pf-m-space-items-' + spacer.spacerSize;
    if (spacer.breakpoint) {
      formattedSpacers += '-on-' + spacer.breakpoint + ' ';
    } else {
      formattedSpacers += ' ';
    }
  }
  return formattedSpacers;
};
