import React from 'react';
import SortColumn, { SortByDirection } from '../../SortColumn';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';

export default (
  label,
  {
    column: {
      extraParams: { sortBy, onSort }
    },
    columnIndex
  }
) => {
  const isSortedBy = sortBy && columnIndex === sortBy.index;
  function sortClicked(event) {
    let reversedDirection;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    onSort && onSort(event, columnIndex, reversedDirection);
  }

  return {
    className: css(styles.tableSort, isSortedBy && styles.modifiers.selected),
    'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
    children: (
      <SortColumn
        isSortedBy={isSortedBy}
        sortDirection={isSortedBy ? sortBy.direction : ''}
        onSort={sortClicked}
        className={css(buttonStyles.button, buttonStyles.modifiers.plain)}
      >
        {label}
      </SortColumn>
    )
  };
};
