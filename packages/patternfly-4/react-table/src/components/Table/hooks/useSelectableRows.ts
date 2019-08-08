import { useCallback, useMemo, useRef, useState } from 'react';
import { IRows, ISelectableArray, OnSelectCallback } from '../Table';

const defaultOptions = {
  getRowKey: (rowData, rowIndex) => rowIndex
};

/**
 * Returns the onSelect callback required by the Table component to allow for
 * selecting rows, and the updated `rows` with the right internal flags to tell
 * the Table component which rows are selected and which are not.
 *
 * @example
 * const [selectedRows, selectedRows] = useSelectableRows(rows);
 *
 * @param rows
 * @param getRowKey - optional, a function to return an unique key for a row. By
 * default the row's index is used. For the table to be also sortable while being
 * selectable, a key that uniquely identify the row among its siblings is required.
 */
export function useSelectableRows(rows: IRows, { getRowKey } = defaultOptions) {
  // Selected rows's keys will be saved in the component's state
  const [selectedKeys, setSelectedKeys] = useState<ReturnType<typeof getRowKey>>([]);

  // When selecting/deselecting all lines, or when transitioning from an all rows
  // selected state, we need to compute the new keys based on the full list of keys
  // available in the original rows array.
  // Since that array can be composed of many entries, we cache the value so we don't
  // pay the cost of the map when the user is not changing the original data.
  const allKeys = useMemo(() => rows.map((r, idx) => getRowKey(r, idx)), [rows, getRowKey]);

  // Since the Table component will not re-render rows if unchanged (because of the
  // BodyRow:shouldComponentUpdate method), we need to have a reference to an alway
  // up to date value of the selected keys in the callback we pass to the selectable
  // cell. This way we can ensure that that callback will not run against stale state
  // data.
  const latestSelectedKeys = useRef<typeof selectedKeys>(selectedKeys);

  // The callback that should be passed to the Table's onSelect property.
  // It will update the list of selected keys based on the user action.
  // Note that the user could be interacting with the select/deselect all button
  // in the header: that case is identified by the rowIndex value passed as -1
  // by the Table component.
  const onSelect = useCallback<OnSelectCallback>(
    (event, isSelected, rowIndex, rowData, extraData) => {
      const latestIndexes = latestSelectedKeys.current;
      let updatedIndexes = selectedKeys;
      // A rowIndex -1 indicates that the user clicked on the select all checkbox.
      if (rowIndex === -1) {
        updatedIndexes = isSelected ? allKeys : [];
      } else {
        // A specific row has been selected/deselected
        const rowKey = getRowKey(rowData, rowIndex);
        updatedIndexes = isSelected
          ? Array.from(new Set([...latestIndexes, rowKey]))
          : latestIndexes.filter(index => index !== rowKey);
      }
      // Here we make sure that other onSelect callbacks will work against the latest
      // set of selected keys.
      latestSelectedKeys.current = updatedIndexes;
      // We still have to save the selected keys in the state, to trigger a re-render
      // of the component so that selected rows will actually be displayed as
      // selected.
      setSelectedKeys(updatedIndexes);
    },
    [setSelectedKeys, latestSelectedKeys, allKeys, getRowKey]
  );

  const selectedRows = rows.map((row, index) => {
    const isRowSelected = selectedKeys.includes(getRowKey(row, index));
    if (Array.isArray(row)) {
      const updatedRow = [...row] as typeof row;
      updatedRow.selected = isRowSelected;
      return updatedRow;
    }

    const updatedRow = { ...row };
    updatedRow.selected = isRowSelected;
    return updatedRow;
  });

  return [selectedRows, onSelect];
}
