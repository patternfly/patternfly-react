import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { css } from '@patternfly/react-styles';
import { toCamel } from './utils';
import { IVisibility } from './utils/decorators/classNames';
import { useOUIAProps, OUIAProps, handleArrows, setTabIndex } from '@patternfly/react-core';
import { TableGridBreakpoint, TableVariant } from './TableTypes';

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
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

export interface TableProps extends React.HTMLProps<HTMLTableElement>, OUIAProps {
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
  /** @hide Forwarded ref */
  innerRef?: React.RefObject<any>;
  /** Flag indicating table is a tree table */
  isTreeTable?: boolean;
  /** Flag indicating this table is nested within another table */
  isNested?: boolean;
  /** Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components. */
  isStriped?: boolean;
  /** Flag indicating this table contains expandable rows to maintain proper striping */
  isExpandable?: boolean;
  /** Flag indicating this table's rows will not have the inset typically reserved for expanding/collapsing rows in a tree table. Intended for use on tree tables with no visible rows with children. */
  hasNoInset?: boolean;
  /** Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584 */
  nestedHeaderColumnSpans?: number[];
  /** Visible text to add alongside the hidden a11y caption for tables with selectable rows. */
  selectableRowCaptionText?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

interface TableContextProps {
  registerSelectableRow?: () => void;
}

export const TableContext = React.createContext<TableContextProps>({
  registerSelectableRow: () => {}
});

const TableBase: React.FunctionComponent<TableProps> = ({
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
  isStriped = false,
  isExpandable = false,
  hasNoInset = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  nestedHeaderColumnSpans,
  selectableRowCaptionText,
  ...props
}: TableProps) => {
  const ref = React.useRef(null);
  const tableRef = innerRef || ref;

  const [hasSelectableRows, setHasSelectableRows] = React.useState(false);
  const [tableCaption, setTableCaption] = React.useState<JSX.Element | undefined>();

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

  React.useEffect(() => {
    if (selectableRowCaptionText) {
      setTableCaption(
        <caption>
          {selectableRowCaptionText}
          <div className="pf-v5-screen-reader">
            This table has selectable rows. It can be navigated by row using tab, and each row can be selected using
            space or enter.
          </div>
        </caption>
      );
    } else {
      setTableCaption(
        <caption className="pf-v5-screen-reader">
          This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space
          or enter.
        </caption>
      );
    }
  }, [selectableRowCaptionText]);

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
      !(tableRef && tableRef.current && tableRef.current.classList.contains(stylesTreeView.modifiers.treeView)) || // implements roving tab-index to tree tables only
      (tableRef && tableRef.current !== (event.target as HTMLElement).closest(`.${styles.table}:not(.pf-m-nested)`))
    ) {
      return;
    }
    const activeElement = document.activeElement;
    const key = event.key;
    const rows = (Array.from(tableRef.current.querySelectorAll('tbody tr')) as Element[]).filter(
      (el) => !el.classList.contains('pf-m-disabled') && !(el as HTMLElement).hidden
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

  const registerSelectableRow = () => {
    !hasSelectableRows && setHasSelectableRows(true);
  };

  return (
    <TableContext.Provider value={{ registerSelectableRow }}>
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
          isStriped && styles.modifiers.striped,
          isExpandable && styles.modifiers.expandable,
          hasNoInset && stylesTreeView.modifiers.noInset,
          isNested && 'pf-m-nested'
        )}
        ref={tableRef}
        {...(isTreeTable && { role: 'treegrid' })}
        {...ouiaProps}
        {...props}
      >
        {hasSelectableRows && tableCaption}
        {children}
      </table>
    </TableContext.Provider>
  );
};

export const Table = React.forwardRef((props: TableProps, ref: React.Ref<HTMLTableElement>) => (
  <TableBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
Table.displayName = 'Table';
