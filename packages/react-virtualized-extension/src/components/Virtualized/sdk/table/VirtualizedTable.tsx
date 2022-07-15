import { Th, Thead, Tr, TableComposable } from '@patternfly/react-table';
import { AutoSizer, WindowScroller } from '../../../index';
import * as _ from 'lodash-es';
import * as React from 'react';
import { Size, WindowScrollerChildProps } from 'react-virtualized';
import { LoadError, StatusBox } from '../status/StatusBox';
import { RowProps, TableColumn } from './VirtualizedTableBody';
import VirtualizedTableBody from './VirtualizedTableBody';

export interface VirtualizedTableProps<D> {
  /** Optional flag indicating that filters are applied to data. */
  areFiltersApplied?: boolean;
  /** Data array. */
  data: D[];
  /** Flag indicating data has been loaded. */
  loaded: boolean;
  /** Optional load error object. */
  loadError?: LoadError;
  /** Table columns array. */
  columns: TableColumn<D>[];
  /** Table row component. */
  Row: React.FC<RowProps<D>>;
  /** Optional isSelected row callback */
  isRowSelected?: (item: D) => boolean;
  /** Optional onSelect row callback */
  onSelect?: (event: React.FormEvent<HTMLInputElement>, isRowSelected: boolean, data: D[]) => void;
  /** Optional no data empty state component. */
  CustomNoDataEmptyState?: React.ComponentType;
  /** Optional no applicable data empty state component. */
  CustomEmptyState?: React.ComponentType;
  /** Optional empty state description. */
  emptyStateDescription?: string;
  /** Optional aria label. */
  'aria-label'?: string;
  /** Optional scroll node. */
  scrollNode?: HTMLElement;
}

export type AnyObject = Record<string, unknown>;

const isHTMLElement = (n: Node): n is HTMLElement => n.nodeType === Node.ELEMENT_NODE;

export const getParentScrollableElement = (node: HTMLElement) => {
  let parentNode: Node | null = node;
  while (parentNode) {
    if (isHTMLElement(parentNode)) {
      let overflow = parentNode.style?.overflow;
      if (!overflow.includes('scroll') && !overflow.includes('auto')) {
        overflow = window.getComputedStyle(parentNode).overflow;
      }
      if (overflow.includes('scroll') || overflow.includes('auto')) {
        return parentNode;
      }
    }
    parentNode = parentNode.parentNode;
  }
  return undefined;
};

interface WithScrollContainerProps {
  children: (scrollContainer: HTMLElement) => React.ReactElement | null;
}

export const WithScrollContainer: React.FC<WithScrollContainerProps> = ({ children }) => {
  const [scrollContainer, setScrollContainer] = React.useState<HTMLElement>();
  const ref = React.useCallback(node => {
    if (node) {
      setScrollContainer(getParentScrollableElement(node));
    }
  }, []);
  return scrollContainer ? children(scrollContainer) : <span ref={ref} />;
};
WithScrollContainer.displayName = 'WithScrollContainer';

export const sortData = (a: unknown, b: unknown, direction: string): number => {
  if (typeof a === 'number' && typeof b === 'number') {
    return direction === 'asc' ? a - b : b - a;
  }
  return direction === 'asc' ? String(a).localeCompare(String(b)) : String(b).localeCompare(String(a));
};

const VirtualizedTable = <D extends AnyObject>({
  areFiltersApplied,
  data: initialData,
  loaded,
  loadError,
  columns,
  Row,
  CustomNoDataEmptyState,
  CustomEmptyState,
  emptyStateDescription,
  onSelect,
  isRowSelected,
  scrollNode,
  'aria-label': ariaLabel
}: VirtualizedTableProps<D>) => {
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  const [data, setData] = React.useState(initialData);

  const onSort = (event: React.FormEvent, index: number, direction: string) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // back compatibility with sort column attribute defined as a string + transforms: [sortable]
    const columnSort = _.isString(columns[index].sort) ? columns[index].sort : undefined;
    const updatedRows = data.sort((objA, objB) =>
      sortData(
        columnSort ? _.get(objA, String(columnSort)) : Object.values(objA)[index],
        columnSort ? _.get(objB, String(columnSort)) : Object.values(objB)[index],
        direction
      )
    );
    setData(updatedRows);
  };

  const renderVirtualizedTable = (scrollContainer: (() => HTMLElement) | HTMLElement) => (
    <WindowScroller scrollElement={typeof scrollContainer === 'function' ? scrollContainer() : scrollContainer}>
      {({ height, isScrolling, registerChild, onChildScroll, scrollTop }: WindowScrollerChildProps) => (
        <AutoSizer disableHeight>
          {({ width }: Size) => (
            <div ref={registerChild}>
              <VirtualizedTableBody
                Row={Row}
                height={process.env.NODE_ENV === 'test' ? 1000 : height}
                width={process.env.NODE_ENV === 'test' ? 1000 : width}
                isRowSelected={isRowSelected}
                isScrolling={isScrolling}
                onChildScroll={onChildScroll}
                onSelect={onSelect}
                data={data}
                columns={columns}
                scrollTop={scrollTop}
              />
            </div>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );

  return (
    <StatusBox
      areFiltersApplied={areFiltersApplied}
      emptyStateDescription={emptyStateDescription}
      CustomEmptyState={CustomEmptyState}
      loaded={loaded}
      loadError={loadError}
      noData={!data || _.isEmpty(data)}
      CustomNoDataEmptyState={CustomNoDataEmptyState}
    >
      <div role="grid" aria-label={ariaLabel} aria-rowcount={data?.length || 0}>
        <TableComposable aria-label={ariaLabel} role="presentation">
          <Thead>
            <Tr>
              {onSelect && (
                <Th
                  data-testid="check-all-rows"
                  select={{
                    onSelect: (event, rowSelected) => onSelect?.(event, rowSelected, data),
                    isSelected: data.every(item => isRowSelected?.(item))
                  }}
                />
              )}
              {columns.map(({ title, props: properties, sort, transforms, visibility, id }, columnIndex) => {
                const isSortable = !!transforms?.find(item => item?.name === 'sortable');
                const defaultSort = {
                  sortBy: {
                    index: activeSortIndex,
                    direction: activeSortDirection
                  },
                  onSort,
                  columnIndex
                };
                return (
                  <Th
                    // eslint-disable-next-line react/no-array-index-key
                    key={`column-${columnIndex}-${id}`}
                    sort={isSortable ? defaultSort : sort}
                    visibility={visibility}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...properties}
                  >
                    {title}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
        </TableComposable>
        {scrollNode ? (
          renderVirtualizedTable(scrollNode)
        ) : (
          <WithScrollContainer>{renderVirtualizedTable}</WithScrollContainer>
        )}
      </div>
    </StatusBox>
  );
};

export default VirtualizedTable;
