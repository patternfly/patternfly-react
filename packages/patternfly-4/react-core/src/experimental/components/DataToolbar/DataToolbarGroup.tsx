import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatSpacers
} from './DataToolbarUtils';

export enum DataToolbarGroupVariant {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group',
}

export interface DataToolbarGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: DataToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
  /** Array of objects representing the various modifiers to apply to the Data toolbar group at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** Array of objects representing the various spacers to apply to the Data toolbar group at various breakpoints */
  spacers?: DataToolbarSpacer[];
  /** Array of objects representing the spacers to apply to the items in this group at various breakpoints */
  itemSpacers?: DataToolbarSpacer[];
  /** Content to be rendered inside the Data toolbar group */
  children?: React.ReactNode;
}

export const DataToolbarGroup: React.FunctionComponent<DataToolbarGroupProps> = ({
   breakpointMods = [] as DataToolbarBreakpointMod[],
   spacers = [] as DataToolbarSpacer[],
   itemSpacers = [] as DataToolbarSpacer[],
   className,
   variant,
   children,
   ...props
 }: DataToolbarGroupProps) => {

  return (
    <div
      className={css(
        styles.dataToolbarGroup,
        variant && getModifier(styles, variant),
        formatBreakpointMods(breakpointMods),
        formatSpacers(itemSpacers, 'pf-m-space-items'),
        formatSpacers(spacers),
        className)}
      {...props}
    >
      {children}
    </div>
  );

};
