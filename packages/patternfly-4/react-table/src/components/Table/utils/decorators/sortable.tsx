import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { SortByDirection, IExtra, IFormatterValueType, OnSortCallback } from '../../Table';
import { SortColumn } from '../../SortColumn';

const sortableFn = (sortCallback: OnSortCallback, label: IFormatterValueType, { columnIndex, column, property }: IExtra) => {
  const {
    extraParams: { sortBy, onSort, firstUserColumnIndex = 0 }
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
    onSort && onSort(event, correctedColumnIndex, reversedDirection, extraData, sortCallback);
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

const SortHelpers = {
  numbers(a: number, b: number) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  },

  booleans(a: boolean, b: boolean) {
    const toNumber = (v: boolean) => (v ? 1 : 0);
    return SortHelpers.numbers(toNumber(a), toNumber(b));
  },

  strings(a: string, b: string) {
    return a.localeCompare(b);
  }
};

const partialOnSort = (fn: OnSortCallback) => sortableFn.bind(null, fn);
const defaultSortable = partialOnSort(SortHelpers.strings);
const sortableFunctions = {
  custom: partialOnSort,
  numbers: partialOnSort(SortHelpers.numbers),
  booleans: partialOnSort(SortHelpers.booleans),
  strings: partialOnSort(SortHelpers.strings),
};

const sortable = Object.assign(defaultSortable, sortableFunctions);

export { sortable, SortHelpers };
