import { useMemo, useState } from 'react';
import { IExtraColumnData, IRows, OnSort, OnSortCallback, SortByDirection } from '../Table';

export function useSortableRows(rows: IRows) {
  const [sortBy, setSortBy] = useState<
    | { index: number; direction: SortByDirection; columnData: IExtraColumnData; sortCallback: OnSortCallback }
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

  const sortCb = (rowA: any, rowB: any) => {
    const [a, b] =
      sortBy.direction === 'desc' ? [rowA[sortBy.index], rowB[sortBy.index]] : [rowB[sortBy.index], rowA[sortBy.index]];
    const aValue = typeof a === 'object' && a.title ? a.title : a;
    const bValue = typeof b === 'object' && b.title ? b.title : b;
    return sortBy.sortCallback(aValue, bValue, a, b);
  };

  const sortedRows = useMemo(() => (!sortBy ? rows : rows.sort(sortCb)), [sortBy, rows, sortCb]);

  return [sortedRows, onSort, sortBy];
}
