import React from 'react';
import SortColumn from '../SortColumn';
import { css } from '@patternfly/react-styles';
import { tableSort, modifiers } from '@patternfly/patternfly-next/components/Table/table.css';
import { SortByDirection } from '../SortColumn';

export const scopeColTransformer = () => ({
  scope: 'col'
});

export const sortable = (label, { column: { extraParams: { sortBy, onSort } }, columnIndex }) => {
  const isSortedBy = columnIndex === sortBy.index;
  const direction = sortBy.direction === SortByDirection.asc ? modifiers.ascending : modifiers.descending;
  return ({
    className: css(tableSort, isSortedBy && direction),
    children: (
      <SortColumn isSortedBy={isSortedBy}
        onSort={
          event => {
            let reversedDirection;
            if (!isSortedBy) {
              reversedDirection = SortByDirection.asc
            } else {
              reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
            }
            onSort && onSort(event, columnIndex, reversedDirection);
          }}>
        {label}
      </SortColumn>
    )
  })
};
