import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  SortByDirection,
  sortable,
  selectable,
  OnSelect,
  IFormatterValueType,
  IColumn,
  ISortBy,
  OnSort
} from '../Table';

export interface BaseHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect'> {
  /** Content rendered inside the <th> header cell */
  children?: React.ReactNode;
  /** Additional classes added to the <th> header cell  */
  className?: string;
  /** Element to render */
  component?: React.ReactNode;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Wraps the content in a button and adds a sort icon - Click callback on the sortable cell */
  onSort?: Function;
  /** Sort direction of the currently sorted column */
  activeSortDirection?: SortByDirection | 'asc' | 'desc' | 'none';
  /** Index of the currently sorted column */
  activeSortIndex?: number;
  /** Adds data-label attribute */
  dataLabel?: string;
  /** The column index */
  columnIndex?: number;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Transforms the cell into a selectable cell - Click callback on select */
  onSelect?: OnSelect;
  /** The selectable variant */
  selectVariant?: 'checkbox' | 'radio';
  /** Whether all rows are selected */
  allRowsSelected?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseHeaderCellBase: React.FunctionComponent<BaseHeaderCellProps> = ({
  children,
  className,
  component = 'th',
  textCenter = false,
  onSort,
  activeSortDirection = 'none',
  activeSortIndex,
  dataLabel,
  columnIndex,
  modifier,
  onSelect,
  selectVariant = 'checkbox',
  allRowsSelected,
  innerRef,
  ...props
}: BaseHeaderCellProps) => {
  const sortParams = onSort
    ? sortable(children as IFormatterValueType, {
        columnIndex,
        column: {
          extraParams: {
            sortBy: {
              index: activeSortIndex,
              direction: activeSortDirection
            } as ISortBy,
            onSort: onSort as OnSort
          }
        } as IColumn
      })
    : null;
  const selectParams = onSelect
    ? selectable(children as IFormatterValueType, {
        columnIndex,
        column: {
          extraParams: {
            onSelect: onSelect as OnSelect,
            selectVariant: selectVariant as 'checkbox' | 'radio',
            allRowsSelected
          }
        }
      })
    : null;
  const Component: any = (sortParams && sortParams.component) || (selectParams && selectParams.component) || component;
  const transformedChildren =
    (sortParams && sortParams.children) || (selectParams && selectParams.children) || children;
  return (
    <Component
      scope="col"
      aria-sort={sortParams ? (sortParams['aria-sort'] as 'none' | 'ascending' | 'descending') : null}
      ref={innerRef}
      data-label={dataLabel || (typeof children === 'string' ? children : null)}
      data-key={columnIndex}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        sortParams && sortParams.className,
        selectParams && selectParams.className,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap']
      )}
      {...props}
    >
      {transformedChildren}
    </Component>
  );
};

export const BaseHeaderCell = React.forwardRef(
  (props: BaseHeaderCellProps, ref: React.Ref<HTMLTableHeaderCellElement>) => (
    <BaseHeaderCellBase {...props} innerRef={ref} />
  )
);
BaseHeaderCell.displayName = 'BaseHeaderCell';
