/**
 * columns-are-equal.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { isFunction, isEqualWith } from 'lodash';
import { ColumnsType } from './types';

/**
 * @param {ColumnsType} oldColumns - previous columns
 * @param {ColumnsType} newColumns - new columns
 */
export function columnsAreEqual(oldColumns: ColumnsType, newColumns: ColumnsType) {
  return isEqualWith(oldColumns, newColumns, (a, b) => {
    if (isFunction(a) && isFunction(b)) {
      return a === b;
    }

    return undefined;
  });
}
