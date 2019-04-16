/**
 * calculateAverageHeight.js
 * https://github.com/reactabular/reactabular/blob/v8.17.0/packages/reactabular-virtualized/src/calculate-average-height.js
 *
 * Forked from version 8.17.0
 * 
 * Changes:
 * - Use arrow-rowindex based measured amounts for simplicity
 * - prevent divide by zero exception
 * */
const calculateAverageHeight = (measuredRows) => {
  const measuredAmounts = Object.keys(measuredRows).map(key => measuredRows[key]);
  const amountOfMeasuredRows = measuredAmounts.length;
  // prevent divide by zero exception
  return Math.max(measuredAmounts.reduce((a, b) => a + b / amountOfMeasuredRows, 0), 1);
};

export default calculateAverageHeight;
