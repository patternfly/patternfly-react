import { isRowExpanded } from './utils';
import { buildExpandableRows } from '../../../test-helpers/data-helpers';

const assertExpanded = (rows, expandedRowIndexes) => {
  expandedRowIndexes.forEach(expandedRowIndex => {
    const expandedRow = rows[expandedRowIndex];
    expect(isRowExpanded(expandedRow, rows)).toBeTruthy();
  });
};

const assertNotExpanded = (rows, notExpandedRowIndexes) => {
  notExpandedRowIndexes.forEach(expandedRowIndex => {
    const expandedRow = rows[expandedRowIndex];
    expect(isRowExpanded(expandedRow, rows)).toBeFalsy();
  });
};

describe('Util functions', () => {
  describe('isRowExpanded', () => {
    test('basic', () => {
      const rows = buildExpandableRows({ 6: 5 }, [5]);
      assertExpanded(rows, [6]);
      assertNotExpanded(rows, [0, 1, 5, 9]);
    });
    test('two open, one closed', () => {
      const rows = buildExpandableRows({ 1: 0, 3: 2, 5: 4 }, [0, 2]);
      assertExpanded(rows, [1, 3]);
      assertNotExpanded(rows, [0, 2, 4, 5, 8]);
    });
    test('all closed', () => {
      const rows = buildExpandableRows({ 1: 0, 3: 2, 5: 4 });
      assertNotExpanded(rows, [...Array(10).keys()]);
    });
    test('parent-child chain', () => {
      const rows = buildExpandableRows(
        {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 4,
          6: 5,
          7: 6
        },
        [...Array(7).keys()]
      );
      assertExpanded(rows, [1, 2, 3, 4, 5, 6, 7]);
      assertNotExpanded(rows, [0, 8, 9]);
    });
    test('two parent-child chains', () => {
      const rows = buildExpandableRows(
        {
          1: 0,
          3: 1,
          4: 2,
          5: 3,
          6: 4,
          7: 6
        },
        [...Array(7).keys()]
      );
      assertExpanded(rows, [1, 3, 4, 5, 6, 7]);
      assertNotExpanded(rows, [0, 2, 8, 9]);
    });
    test('not in order', () => {
      const rows = buildExpandableRows(
        {
          0: 1,
          1: 4
        },
        [4, 1]
      );
      assertExpanded(rows, [0, 1]);
      assertNotExpanded(rows, [2, 3, 4, 5]);
    });
    test('child parent circle', () => {
      const rows = buildExpandableRows({ 1: 0, 0: 1 }, [0, 1]);
      assertNotExpanded(rows, [...Array(10).keys()]);
    });
    test('undefined without a parent', () => {
      const rows = buildExpandableRows();
      expect(isRowExpanded(rows[1], rows)).toBeUndefined();
    });
  });
});
