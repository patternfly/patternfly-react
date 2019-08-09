import { useMemo, useState } from 'react';
import { IExtraColumnData, IRows, OnSort, OnSortCallback, OnSortDirection } from '../Table';

export const SortHelpers = {
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

export function useSortableRows(rows: IRows) {
  const [sortBy, setSortBy] = useState<
    | { index: number; direction: OnSortDirection; columnData: IExtraColumnData; sortCallback: OnSortCallback }
    | undefined
  >();

  const onSort: OnSort = (_event, index, direction, columnData, sortCallback) => {
    setSortBy({
      index,
      direction,
      columnData,
      sortCallback
    });
  };

  const sortCb = (rowA, rowB) => {
    const [a, b] =
      sortBy.direction === 'desc' ? [rowA[sortBy.index], rowB[sortBy.index]] : [rowB[sortBy.index], rowA[sortBy.index]];
    const aValue = typeof a === 'object' && a.title ? a.title : a;
    const bValue = typeof b === 'object' && b.title ? b.title : b;
    return sortBy.sortCallback(aValue, bValue, a, b);
  };

  const sortedRows = useMemo(() => (!sortBy ? rows : rows.sort(sortCb)), [sortBy, rows, sortCb]);

  return [sortedRows, onSort, sortBy];
}
