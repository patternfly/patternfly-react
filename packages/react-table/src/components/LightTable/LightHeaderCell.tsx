import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { SortByDirection, SortColumn } from '../Table';

export interface LightHeaderCellProps {
  /** Content rendered inside the <th> header cell */
  children?: React.ReactNode;
  /** Additional classes added to the <th> header cell  */
  className?: string;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  sortable?: boolean;
  onSort?: Function;
  sortDirection?: SortByDirection | 'none';
  active?: boolean;
}

export const LightHeaderCell: React.FunctionComponent<LightHeaderCellProps> = ({
  children,
  className,
  textCenter = false,
  sortable = false,
  onSort,
  sortDirection = 'none',
  active,
  ...props
}: LightHeaderCellProps) => {
  const [sortDirectionState, setSortDirectionState] = React.useState(sortDirection);
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
      role="columnheader"
      scope="col"
      className={css(
        className,
        textCenter && styles.modifiers.center,
        sortable && styles.tableSort,
        active && styles.modifiers.selected
      )}
      aria-sort={getAriaSort()}
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
LightHeaderCell.displayName = 'LightHeaderCell';
