/**
 * calculateRows.js
 * https://github.com/reactabular/reactabular/blob/v8.17.0/packages/reactabular-virtualized/src/calculate-rows.js
 *
 * Forked from version 8.17.0; includes the following modifications:
 * 1) Calculate actual row heights in determining startIndex. This allows dynamic row heights.
 * */
// import calculateAverageHeight from './calculateAverageHeight';

const calculateRows = ({ measuredRows, height, rowKey, rows, scrollTop = 0 }) => {
  // default overscan to 10 for now, could be accepted as a prop in the future
  const overscan = 20;

  // averageHeight of measuredRows can still be used to closely approximate amount of rows to render
  const measuredAmounts = Object.keys(measuredRows).map(key => measuredRows[key]);
  const amountOfMeasuredRows = measuredAmounts.length;
  const totalMeasuredHeight = measuredAmounts.reduce((a, b) => a + b, 0);

  // if we have no rows, use a small row height so we get a good sample in future loops
  const averageHeight = amountOfMeasuredRows > 0 ? totalMeasuredHeight / amountOfMeasuredRows : 50;

  let startIndex = 0;
  let startHeight = 0;
  let accruedHeight = 0;
  let i = 0;

  while (accruedHeight < scrollTop) {
    // measuredRows use aria-rowindex as identifiers which is 1 based
    if (measuredRows.hasOwnProperty(i + 1)) {
      accruedHeight += measuredRows[i + 1];
    } else {
      accruedHeight += averageHeight;
    }
    if (scrollTop <= accruedHeight) {
      startIndex = i;
      break;
    } else if (i + overscan > rows.length) {
      // stop accruing after we reach i + overscan  (the end)
      startHeight = accruedHeight;
      startIndex = i;
      break;
    }
    // accrue and continue
    startHeight = accruedHeight;
    i += 1;
  }

  const amountOfRowsToRender = Math.ceil(height / averageHeight) + overscan;
  const rowsToRender = rows.slice(startIndex, Math.max(startIndex + amountOfRowsToRender, 0));

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.LOG_VIRTUALIZED) {
    console.log(
      // eslint-disable-line no-console
      'update rows to render',
      'scroll top',
      scrollTop,
      'measured rows',
      measuredRows,
      'amount of rows to render',
      amountOfRowsToRender,
      'rows to render',
      rowsToRender,
      'start index',
      startIndex
    );
  }

  // Escape if there are no rows to render for some reason
  if (!rowsToRender.length) {
    return null;
  }

  // Calculate the padding of the last row so we can match whole height. This
  // won't be totally accurate if row heights differ but should get close
  // enough in most cases.
  const endHeight = Math.max((rows.length - amountOfRowsToRender) * averageHeight - startHeight, 0);

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.LOG_VIRTUALIZED) {
    console.log(
      // eslint-disable-line no-console
      'average height',
      averageHeight,
      'body height',
      height,
      'scroll top',
      scrollTop,
      'start height',
      startHeight,
      'end height',
      endHeight
    );
  }

  return {
    amountOfRowsToRender,
    startIndex,
    showExtraRow: !(startIndex % 2),
    startHeight,
    endHeight
  };
};

export default calculateRows;
