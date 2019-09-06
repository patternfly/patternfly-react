import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatItemSpacers
} from './DataToolbarUtils';

export enum DataToolbarItemMod {
  separator = 'separator',
  'bulk-select' = 'bulk-select',
  'overflow-menu' = 'overflow-menu',
  pagination = 'pagination',
  'search-filter' = 'search-filter',
}

export interface DataToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar item */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of item */
  mod?: DataToolbarItemMod | 'separator' | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter';
  /** An array of objects representing the various modifiers to apply to the Data toolbar item at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** An array of objects representing the various spacers to apply to the Data toolbar item at various breakpoints */
  spacers?: DataToolbarSpacer[];
  /** Content to be rendered inside the Data toolbar item */
  children?: React.ReactNode;
}

export const DataToolbarItem: React.FunctionComponent<DataToolbarItemProps> = ({
    className,
    mod,
    breakpointMods = [] as DataToolbarBreakpointMod[],
    spacers = [] as DataToolbarSpacer[],
    children,
    ...props
  }: DataToolbarItemProps) => {

  return (
    <div
      className={css(
        styles.dataToolbarItem,
        mod && getModifier(styles, mod),
        formatBreakpointMods(breakpointMods),
        formatItemSpacers(spacers),
        className)}
      {...props}
    >
      {children}
    </div>
  );
};
