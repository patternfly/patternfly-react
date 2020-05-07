import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { SortByDirection, IExtra, IFormatterValueType, ITransform } from '../../Table';
import { SortColumn } from '../../SortColumn';

export const sortable: ITransform = (label: IFormatterValueType, { columnIndex, column, property }: IExtra) => {
  const {
    extraParams: { sortBy, onSort }
  } = column;

  const extraData = {
    columnIndex,
    column,
    property
  };

  const isSortedBy = sortBy && columnIndex === sortBy.index;
  /**
   * @param {React.MouseEvent} event - React mouse event
   */
  function sortClicked(event: React.MouseEvent) {
    let reversedDirection: SortByDirection;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    // tslint:disable-next-line:no-unused-expression
    onSort && onSort(event, columnIndex, reversedDirection, extraData);
  }

  return {
    className: css(styles.tableSort, isSortedBy && styles.modifiers.selected),
    'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
    children: (
      <SortColumn isSortedBy={isSortedBy} sortDirection={isSortedBy ? sortBy.direction : ''} onSort={sortClicked}>
        {label}
      </SortColumn>
    )
  };
};
