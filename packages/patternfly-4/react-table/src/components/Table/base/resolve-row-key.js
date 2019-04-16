/**
 * resolve-row-key.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { isArray } from 'lodash-es';

function resolveRowKey({ rowData, rowIndex, rowKey }) {
  if (typeof rowKey === 'function') {
    return `${rowKey({ rowData, rowIndex })}-row`;
  } else if (process.env.NODE_ENV !== 'production') {
    // Arrays cannot have rowKeys by definition so we have to go by index there.
    if (!isArray(rowData) && rowData[rowKey] === undefined) {
      console.warn(
        // eslint-disable-line no-console
        'Table.Body - Missing valid rowKey!',
        rowData,
        rowKey
      );
    }
  }

  if (rowData[rowKey] === 0) {
    return `${rowData[rowKey]}-row`;
  }

  return `${rowData[rowKey] || rowIndex}-row`;
}

export default resolveRowKey;
