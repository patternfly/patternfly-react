import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { SortByDirection, SortColumn } from '../Table';

export interface BaseHeaderCellProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
  /** Content rendered inside the <th> header cell */
  children?: React.ReactNode;
  /** Additional classes added to the <th> header cell  */
  className?: string;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Wraps the content in a button and adds a sort icon */
  sortable?: boolean;
  /** Req. sortable={true} - Click callback on the sortable cell */
  onSort?: Function;
  /** Req. sortable={true} - Determines the sort icon direction */
  sortDirection?: SortByDirection | 'none';
  /** Gives the cell an active styling */
  active?: boolean;
  /** Adds data-label attribute */
  dataLabel?: string;
  /** Cell key */
  dataKey?: number;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseHeaderCellBase: React.FunctionComponent<BaseHeaderCellProps> = ({
  children,
  className,
  textCenter = false,
  sortable = false,
  onSort,
  sortDirection = 'none',
  active,
  dataLabel,
  dataKey,
  modifier,
  innerRef,
  ...props
}: BaseHeaderCellProps) => {
  const getAriaSort = () => {
    if (sortDirection === 'asc') {
      return 'ascending';
    } else if (sortDirection === 'desc') {
      return 'descending';
    } else {
      return 'none';
    }
  };
  return (
    <th
      scope="col"
      aria-sort={sortable ? getAriaSort() : null}
      ref={innerRef}
      data-label={dataLabel || (typeof children === 'string' ? children : null)}
      data-key={dataKey}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        sortable && styles.tableSort,
        active && styles.modifiers.selected,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap']
      )}
      {...props}
    >
      {sortable ? (
        <SortColumn
          isSortedBy={sortDirection !== 'none'}
          sortDirection={sortDirection !== 'none' ? sortDirection : ''}
          onSort={onSort}
        >
          {children}
        </SortColumn>
      ) : (
        children
      )}
    </th>
  );
};

export const BaseHeaderCell = React.forwardRef(
  (props: BaseHeaderCellProps, ref: React.Ref<HTMLTableHeaderCellElement>) => (
    <BaseHeaderCellBase {...props} innerRef={ref} />
  )
);
BaseHeaderCell.displayName = 'BaseHeaderCell';
