import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';

export enum DataToolbarGroupVariant {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group'
}

export interface DataToolbarGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: DataToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
  /** Array of objects representing the various modifiers to apply to the Data toolbar group at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** Content to be rendered inside the Data toolbar group */
  children?: React.ReactNode;
}

export const DataToolbarGroup: React.FunctionComponent<DataToolbarGroupProps> = ({
  breakpointMods = [] as DataToolbarBreakpointMod[],
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
        formatBreakpointMods(breakpointMods, styles),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
