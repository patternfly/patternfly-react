import { getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';

export type DataToolbarBreakpointMod = {
  /** TODO */
  modifier: 'hidden' | 'visible' | 'align-right' | 'align-left';
  /** TODO */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
}

export const formatBreakpointMods = (breakpointMods:DataToolbarBreakpointMod[]) => {
  let formattedBreakpointMods = "";
  for (const breakpointMod of breakpointMods) {
    formattedBreakpointMods += `${getModifier(styles, `${breakpointMod.modifier}-on-${breakpointMod.breakpoint}`)} `;
  }
  return formattedBreakpointMods;
};

export type DataToolbarSpacer = {
  /** TODO */
  spacerSize: 'none' | 'sm' | 'md' | 'lg';
  /** TODO */
  breakpoint?: 'md' | 'lg' | 'xl';
}

export const formatItemSpacers = (spacers:DataToolbarSpacer[]) => {
  let formattedSpacers = "";
  for (const spacer of spacers) {
    formattedSpacers += "pf-m-spacer-" + spacer.spacerSize;
    if (spacer.breakpoint) {
      formattedSpacers += "-on-" + spacer.breakpoint + " ";
    } else {
      formattedSpacers += " ";
    }
  }
  return formattedSpacers;
};

export const formatGroupSpacers = (spacers:DataToolbarSpacer[]) => {
  let formattedSpacers = "";
  for (const spacer of spacers) {
    formattedSpacers += "pf-m-space-items-" + spacer.spacerSize;
    if (spacer.breakpoint) {
      formattedSpacers += "-on-" + spacer.breakpoint + " ";
    } else {
      formattedSpacers += " ";
    }
  }
  return formattedSpacers;
};
