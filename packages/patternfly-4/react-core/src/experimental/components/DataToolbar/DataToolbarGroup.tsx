import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatGroupSpacers
} from './DataToolbarUtils';

export enum DataToolbarGroupMod {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group',
}

export interface DataToolbarGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  mod?: DataToolbarGroupMod | 'filter-group' | 'icon-button-group' | 'button-group';
  /** TODO */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** TODO */
  spacers?: DataToolbarSpacer[];
  /** TODO */
  children?: React.ReactNode;
}


export const DataToolbarGroup: React.FunctionComponent<DataToolbarGroupProps> = ({
   breakpointMods = [] as DataToolbarBreakpointMod[],
   spacers = [] as DataToolbarSpacer[],
   className = "",
   mod,
   children,
   ...props
 }: DataToolbarGroupProps) => {

  return (
    <div className={css(styles.dataToolbarGroup,
      mod && getModifier(styles, mod),
      formatBreakpointMods(breakpointMods),
      formatGroupSpacers(spacers),
      className)}
         {...props}>
      {children}
    </div>
  );

};



