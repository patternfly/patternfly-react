import { isRowExpanded } from './utils';
import { buildExpandableRows } from '../../../test-helpers/data-helpers';
import { IRow } from '../TableTypes';

const assertExpanded = (rows: IRow[], expandedRowIndexes: number[]) => {
  expandedRowIndexes.forEach((expandedRowIndex: number) => {
    const expandedRow = rows[expandedRowIndex];
    expect(isRowExpanded(expandedRow, rows)).toBeTruthy();
  });
};

const assertNotExpanded = (rows: IRow[], notExpandedRowIndexes: number[]) => {
  notExpandedRowIndexes.forEach((expandedRowIndex: number) => {
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
      assertNotExpanded(rows, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
        [0, 1, 2, 3, 4, 5, 6]
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
        [0, 1, 2, 3, 4, 5, 6]
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
      assertNotExpanded(rows, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('undefined without a parent', () => {
      const rows = buildExpandableRows();
      expect(isRowExpanded(rows[1], rows)).toBeUndefined();
    });
    test('compound parent', () => {
      const rows = [
        {
          isOpen: true,
          cells: [
            '1',
            {
              title: '2',
              props: {
                isOpen: true
              }
            },
            {
              title: '3',
              props: {
                isOpen: false
              }
            },
            {
              title: '4',
              props: {
                isOpen: false
              }
            },
            '5',
            '6'
          ]
        },
        {
          parent: 0,
          compoundParent: 1,
          cells: [
            {
              title: 'parent 0 compound child - 1'
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            {
              title: 'parent 0 compound child - 2'
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            {
              title: 'parent 0 compound child - 3'
            }
          ]
        },
        {
          isOpen: false,
          cells: [
            '1',
            {
              title: '2',
              props: {
                isOpen: false
              }
            },
            {
              title: '3',
              props: {
                isOpen: false
              }
            },
            {
              title: '4',
              props: {
                isOpen: false
              }
            },
            '5',
            '6'
          ]
        },
        {
          parent: 4,
          compoundParent: 1,
          cells: [
            {
              title: 'parent 4 compound child - 1'
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 2,
          cells: [
            {
              title: 'parent 4 compound child - 2'
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 3,
          cells: [
            {
              title: 'parent 4 compound child - 3'
            }
          ]
        }
      ];

      // test an expanded compound child to be expanded
      const expandedRow = {
        parent: 0,
        compoundParent: 1,
        cells: [
          {
            title: 'parent 0 compound child - 1'
          }
        ]
      };
      expect(isRowExpanded(expandedRow, rows)).toEqual(true);

      // test a collapsed compound child to be false
      const collapsedRow = {
        parent: 0,
        compoundParent: 2,
        cells: [
          {
            title: 'parent 0 compound child - 2'
          }
        ]
      };
      expect(isRowExpanded(collapsedRow, rows)).toEqual(false);

      // test a row with different parent that is collapsed
      const collapsedRowParent4 = {
        parent: 4,
        compoundParent: 1,
        cells: [
          {
            title: 'parent 4 compound child - 1'
          }
        ]
      };
      expect(isRowExpanded(collapsedRowParent4, rows)).toEqual(false);
    });
  });
});
