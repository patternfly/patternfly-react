import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { css } from '@patternfly/react-styles';
import { toCamel } from '../Table/utils/utils';
import { IVisibility } from '../Table/utils/decorators/classNames';
import { useOUIAProps, OUIAProps, handleArrows, setTabIndex } from '@patternfly/react-core';
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
  /** Render borders */
  borders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** If set to true, the table header sticks to the top of its container */
  isStickyHeader?: boolean;
  /** Forwarded ref */
  innerRef?: React.RefObject<any>;
  /** Flag indicating table is a tree table */
  isTreeTable?: boolean;
  /** Flag indicating this table is nested within another table */
  isNested?: boolean;
  /** Collection of column spans for nested headers */
  nestedHeaderColumnSpans?: number[];
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
  isNested = false,
  nestedHeaderColumnSpans,
  ...props
}: TableComposableProps) => {
  const tableRef = innerRef || React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeys);

    // sets up roving tab-index to tree tables only
    if (tableRef && tableRef.current && tableRef.current.classList.contains('pf-m-tree-view')) {
      const tbody = tableRef.current.querySelector('tbody');
      tbody && setTabIndex(Array.from(tbody.querySelectorAll('button, a, input')));
    }

    return function cleanup() {
      document.removeEventListener('keydown', handleKeys);
    };
  }, [tableRef, tableRef.current]);

  const ouiaProps = useOUIAProps('Table', ouiaId, ouiaSafe);
  const grid =
    stylesGrid.modifiers?.[
      toCamel(gridBreakPoint || '').replace(/-?2xl/, '_2xl') as 'grid' | 'gridMd' | 'gridLg' | 'gridXl' | 'grid_2xl'
    ];
  const breakPointPrefix = `treeView${gridBreakPoint.charAt(0).toUpperCase() + gridBreakPoint.slice(1)}`;
  const treeGrid =
    stylesTreeView.modifiers?.[
      toCamel(breakPointPrefix || '').replace(/-?2xl/, '_2xl') as
        | 'treeViewGrid'
        | 'treeViewGridMd'
        | 'treeViewGridLg'
        | 'treeViewGridXl'
        | 'treeViewGrid_2xl'
    ];

  const handleKeys = (event: KeyboardEvent) => {
    if (
      isNested ||
      !(tableRef && tableRef.current && tableRef.current.classList.contains('pf-m-tree-view')) || // implements roving tab-index to tree tables only
      (tableRef && tableRef.current !== (event.target as HTMLElement).closest('.pf-c-table:not(.pf-m-nested)'))
    ) {
      return;
    }
    const activeElement = document.activeElement;
    const key = event.key;
    const rows = (Array.from(tableRef.current.querySelectorAll('tbody tr')) as Element[]).filter(
      el => !el.classList.contains('pf-m-disabled') && !(el as HTMLElement).hidden
    );
    if (key === 'Space' || key === 'Enter') {
      (activeElement as HTMLElement).click();
      event.preventDefault();
    }

    const getFocusableElement = (element: Element) =>
      element.querySelectorAll('button:not(:disabled), input:not(:disabled), a:not(:disabled)')[0];

    handleArrows(
      event,
      rows,
      (element: Element) => element === activeElement.closest('tr'),
      getFocusableElement,
      ['button', 'input', 'a'],
      undefined,
      false,
      true,
      false
    );
  };

  return (
    <table
      aria-label={ariaLabel}
      role={role}
      className={css(
        className,
        styles.table,
        isTreeTable ? treeGrid : grid,
        styles.modifiers[variant],
        !borders && styles.modifiers.noBorderRows,
        isStickyHeader && styles.modifiers.stickyHeader,
        isTreeTable && stylesTreeView.modifiers.treeView,
        isNested && 'pf-m-nested'
      )}
      ref={tableRef}
      {...(isTreeTable && { role: 'treegrid' })}
      {...ouiaProps}
      {...props}
    >
      {nestedHeaderColumnSpans &&
        nestedHeaderColumnSpans.map((span: number, index) => {
          if (span === 1) {
            return <col key={index} />;
          } else {
            return <colgroup key={index} span={span} />;
          }
        })}
      {children}
    </table>
  );
};

export const TableComposable = React.forwardRef((props: TableComposableProps, ref: React.Ref<HTMLTableElement>) => (
  <TableComposableBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
TableComposable.displayName = 'TableComposable';
