import React from 'react';
import SortColumn, { SortByDirection } from '../../SortColumn';
import { css } from '@patternfly/react-styles';
import { tableSort, modifiers } from '@patternfly/patternfly-next/components/Table/table.css';

export default (label, { column: { extraParams: { sortBy, onSort } }, columnIndex }) => {
  const isSortedBy = sortBy && columnIndex === sortBy.index;
  const direction = sortBy && sortBy.direction === SortByDirection.asc ? modifiers.ascending : modifiers.descending;
  function sortClicked(event) {
    let reversedDirection;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    onSort && onSort(event, columnIndex, reversedDirection);
  }

  return ({
    className: css(tableSort, isSortedBy && direction),
    'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
    children: (
      <SortColumn isSortedBy={isSortedBy} onSort={sortClicked}>
        {label}
      </SortColumn>
    )
  })
};
