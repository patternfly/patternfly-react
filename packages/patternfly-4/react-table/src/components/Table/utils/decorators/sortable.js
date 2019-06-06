import React from 'react';
import SortColumn, { SortByDirection } from '../../SortColumn';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

export default (label, { columnIndex, column, property }) => {
  const {
    extraParams: { sortBy, onSort }
  } = column;
  const extraData = {
    columnIndex,
    column,
    property
  };

  const isSortedBy = sortBy && columnIndex === sortBy.index;
  function sortClicked(event) {
    let reversedDirection;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    onSort && onSort(event, columnIndex, reversedDirection, extraData);
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
