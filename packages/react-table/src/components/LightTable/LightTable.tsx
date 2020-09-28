import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import { css } from '@patternfly/react-styles';
import { TableGridBreakpoint, TableVariant, toCamel } from '../Table';

export interface LightTableProps {
  /** Content rendered inside the Table */
  children?: React.ReactNode;
  /** Additional classes added to the Table  */
  className?: string;
  /** Style variant for the Table  */
  variant?: 'compact';
  /** Render borders  */
  borders?: boolean;
  /** If set to true, the table header sticks to the top of its container */
  isStickyHeader?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /**
   * Provides an accessible name for the table when a descriptive <caption> or <h*> is not available.
   * Required in the absence of <caption> or <h*>
   */
  'aria-label'?: string;
}

export const LightTable: React.FunctionComponent<LightTableProps> = ({
  children,
  className,
  variant,
  borders = true,
  isStickyHeader = false,
  gridBreakPoint = TableGridBreakpoint.gridMd,
  'aria-label': ariaLabel,
  ...props
}: LightTableProps) => (
  <table
    className={css(
      className,
      styles.table,
      gridBreakPoint &&
        stylesGrid.modifiers[
          toCamel(gridBreakPoint).replace(/-?2xl/, '_2xl') as 'grid' | 'gridMd' | 'gridLg' | 'gridXl' | 'grid_2xl'
        ],
      styles.modifiers[variant],
      // ((onCollapse && variant === TableVariant.compact) || onExpand) && styles.modifiers.expandable,
      variant === TableVariant.compact && borders === false && styles.modifiers.noBorderRows,
      isStickyHeader && styles.modifiers.stickyHeader
    )}
    role="grid"
    aria-label={ariaLabel}
    {...props}
  >
    {children}
  </table>
);
LightTable.displayName = 'LightTable';
