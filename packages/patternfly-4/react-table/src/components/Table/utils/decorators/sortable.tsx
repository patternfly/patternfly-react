import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { SortByDirection, IExtra, IFormatterValueType } from '../../Table';
import { SortColumn } from '../../SortColumn';

export const sortable = (label: IFormatterValueType, { columnIndex, column, property }: IExtra) => {
  const {
    extraParams: { sortBy, onSort, firstUserColumnIndex }
  } = column;

  // correct the column index based on the presence of extra columns added on the
  // left of the user provided ones
  const correctedColumnIndex = columnIndex - firstUserColumnIndex;

  const extraData = {
    columnIndex: correctedColumnIndex,
    column,
    property
  };

  const isSortedBy = sortBy && correctedColumnIndex === sortBy.index;
  function sortClicked(event: React.MouseEvent) {
    let reversedDirection;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    // tslint:disable-next-line:no-unused-expression
    onSort && onSort(event, correctedColumnIndex, reversedDirection, extraData);
  }

  return {
    "className": css(styles.tableSort, isSortedBy && styles.modifiers.selected),
    'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
    "children": (
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
