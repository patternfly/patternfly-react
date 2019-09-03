import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, DataToolbarSpacer, formatBreakpointMods, formatItemSpacers } from './DataToolbarUtils';

export enum DataToolbarItemMod {
  separator = 'separator',
  'bulk-select' = 'bulk-select',
  'overflow-menu' = 'overflow-menu',
  pagination = 'pagination',
  'search-filter' = 'search-filter',
  'chip-group' = 'chip-group',
  clear = 'clear'
}

export interface DataToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  mod?: DataToolbarItemMod;
  /** TODO */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** TODO */
  spacers?: DataToolbarSpacer[];
  /** TODO */
  children?: React.ReactNode;
}

export const DataToolbarItem: React.FunctionComponent<DataToolbarItemProps> = ({
    className = '',
    mod,
    breakpointMods = [] as DataToolbarBreakpointMod[],
    spacers = [] as DataToolbarSpacer[],
    children,
    ...props
  }: DataToolbarItemProps) => {

  return (
    <div className={css(styles.dataToolbarItem,
      mod && getModifier(styles, mod),
      formatBreakpointMods(breakpointMods),
      formatItemSpacers(spacers),
      className)}
         {...props}>
      {children}
    </div>
  );
};
