/**
 * columns-are-equal.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { isFunction, isEqualWith } from 'lodash-es';

function columnsAreEqual(oldColumns, newColumns) {
  return isEqualWith(oldColumns, newColumns, (a, b) => {
    if (isFunction(a) && isFunction(b)) {
      return true;
    }

    return undefined;
  });
}

export default columnsAreEqual;
