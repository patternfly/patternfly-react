/**
 * resolve-row-key.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */

import { RowType, RowKeyType } from './types';

/**
 * @param {{rowData: RowType, rowIndex: number, rowKey: RowKeyType}} rowData - row data
 */
export function resolveRowKey({
  rowData,
  rowIndex,
  rowKey
}: {
  rowData: RowType;
  rowIndex: number;
  rowKey: RowKeyType;
}) {
  if (typeof rowKey === 'function') {
    return `${rowKey({ rowData, rowIndex })}-row`;
  } else if (process.env.NODE_ENV !== 'production') {
    // Arrays cannot have rowKeys by definition so we have to go by index there.
    if (!Array.isArray(rowData) && (rowData as any)[rowKey] === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Table.Body - Missing valid rowKey!', rowData, rowKey);
    }
  }

  if ((rowData as any)[rowKey] === 0) {
    return `${(rowData as any)[rowKey] as string}-row`;
  }

  return `${((rowData as any)[rowKey] as string) || rowIndex}-row`;
}
