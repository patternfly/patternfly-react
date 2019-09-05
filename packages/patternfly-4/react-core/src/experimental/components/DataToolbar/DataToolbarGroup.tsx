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
  /** Classes applied to root element of the Data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  mod?: DataToolbarGroupMod | 'filter-group' | 'icon-button-group' | 'button-group';
  /** An array of objects representing the various modifiers to apply to the Data toolbar group at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** An array of objects representing the various spacers to apply to the Data toolbar group at various breakpoints */
  spacers?: DataToolbarSpacer[];
  /** Content to be rendered inside the Data toolbar group */
  children?: React.ReactNode;
}

export const DataToolbarGroup: React.FunctionComponent<DataToolbarGroupProps> = ({
   breakpointMods = [] as DataToolbarBreakpointMod[],
   spacers = [] as DataToolbarSpacer[],
   className,
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



