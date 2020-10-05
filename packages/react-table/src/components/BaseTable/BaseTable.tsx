import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import { css } from '@patternfly/react-styles';
import { TableGridBreakpoint, TableVariant, toCamel } from '../Table';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';

export interface BaseTableProps extends React.HTMLProps<HTMLTableElement>, OUIAProps {
  /** Adds an accessible name for the Table */
  'aria-label'?: string;
  /** Content rendered inside the Table */
  children?: React.ReactNode;
  /** Additional classes added to the Table  */
  className?: string;
  /** Style variant for the Table  */
  variant?: 'compact';
  /** Render borders  */
  borders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** If set to true, the table header sticks to the top of its container */
  isStickyHeader?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableBase: React.FunctionComponent<BaseTableProps> = ({
  children,
  className,
  variant,
  borders = true,
  isStickyHeader = false,
  gridBreakPoint = TableGridBreakpoint.gridMd,
  'aria-label': ariaLabel,
  role = 'grid',
  innerRef,
  ouiaId,
  ouiaSafe = true,
  ...props
}: BaseTableProps) => {
  const ouiaProps = useOUIAProps('Table', ouiaId, ouiaSafe);
  return (
    <table
      aria-label={ariaLabel}
      role={role}
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
      ref={innerRef}
      {...ouiaProps}
      {...props}
    >
      {children}
    </table>
  );
};

export const BaseTable = React.forwardRef((props: BaseTableProps, ref: React.Ref<HTMLTableElement>) => (
  <BaseTableBase {...props} innerRef={ref} />
));
BaseTable.displayName = 'BaseTable';
