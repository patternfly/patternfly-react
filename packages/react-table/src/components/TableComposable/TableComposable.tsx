import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import { css } from '@patternfly/react-styles';
import { toCamel } from '../Table/utils/utils';
import { IVisibility } from '../Table/utils/decorators/classNames';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';
import { TableGridBreakpoint, TableVariant } from '../Table/TableTypes';

export interface BaseCellProps {
  /** Content rendered inside the cell */
  children?: React.ReactNode;
  /** Additional classes added to the cell  */
  className?: string;
  /** Element to render */
  component?: React.ReactNode;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Width percentage modifier */
  width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;
  /** Visibility breakpoint modifiers */
  visibility?: (keyof IVisibility)[];
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

export interface TableComposableProps extends React.HTMLProps<HTMLTableElement>, OUIAProps {
  /** Adds an accessible name for the Table */
  'aria-label'?: string;
  /** Content rendered inside the Table */
  children?: React.ReactNode;
  /** Additional classes added to the Table  */
  className?: string;
  /**
   * Style variant for the Table
   * compact: Reduces spacing and makes the table more compact
   */
  variant?: TableVariant | 'compact';
  /**
   * Render borders
   * Borders can only currently be disabled if the variant is set to 'compact'
   * https://github.com/patternfly/patternfly/issues/3650
   */
  borders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** If set to true, the table header sticks to the top of its container */
  isStickyHeader?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** */
  isTreeTable?: boolean;
}

const TableComposableBase: React.FunctionComponent<TableComposableProps> = ({
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
  isTreeTable = false,
  ...props
}: TableComposableProps) => {
  const ouiaProps = useOUIAProps('Table', ouiaId, ouiaSafe);
  return (
    <table
      aria-label={ariaLabel}
      role={role}
      className={css(
        className,
        styles.table,
        stylesGrid.modifiers?.[
          toCamel(gridBreakPoint || '').replace(/-?2xl/, '_2xl') as 'grid' | 'gridMd' | 'gridLg' | 'gridXl' | 'grid_2xl'
        ],
        styles.modifiers[variant],
        !borders && styles.modifiers.noBorderRows,
        isStickyHeader && styles.modifiers.stickyHeader,
        isTreeTable && 'pf-m-tree-view'
      )}
      ref={innerRef}
      {...(isTreeTable && { role: 'treegrid' })}
      {...ouiaProps}
      {...props}
    >
      {children}
    </table>
  );
};

export const TableComposable = React.forwardRef((props: TableComposableProps, ref: React.Ref<HTMLTableElement>) => (
  <TableComposableBase {...props} innerRef={ref} />
));
TableComposable.displayName = 'TableComposable';
