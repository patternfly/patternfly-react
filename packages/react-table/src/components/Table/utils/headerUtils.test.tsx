import { calculateColumns, mapOpenedRows } from './headerUtils';
import { ICell, IRow } from '../TableTypes';
import { HeaderType } from '../base/types';

describe('headerUtils', () => {
  describe('calculateColumns', () => {
    test('collapsibleTransfroms', () => {
      const collapsibleTransfroms = calculateColumns(['Some'], { onCollapse: () => undefined as any });
      expect(collapsibleTransfroms[0].cell.formatters).toHaveLength(1);
      expect(collapsibleTransfroms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(collapsibleTransfroms[0].cell.transforms).toHaveLength(3);
      expect(collapsibleTransfroms[0].extraParams.onCollapse).toBeDefined();
      expect(collapsibleTransfroms[0].header.transforms).toHaveLength(2);
      expect(collapsibleTransfroms[1].cell.transforms).toHaveLength(3);
      expect(collapsibleTransfroms[1].cell.transforms.find(transform => transform.name === 'parentId')).toBeDefined();
      expect(
        collapsibleTransfroms[1].cell.transforms.find(transform => transform.name === 'expandedRowFormatter')
      ).toBeDefined();
    });

    test('selectableTransforms', () => {
      const selectableTransforms = calculateColumns([], { onSelect: () => undefined as any, canSelectAll: true });
      expect(selectableTransforms[0].cell.formatters).toHaveLength(1);
      expect(selectableTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(selectableTransforms[0].cell.transforms).toHaveLength(2);
      expect(selectableTransforms[0].extraParams.onSelect).toBeDefined();
      expect(selectableTransforms[0].header.transforms).toHaveLength(3);
    });

    test('basicActionsTransforms', () => {
      const actionsTransforms = calculateColumns([], { actions: [{ title: 'some' }] });
      expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
      expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
      expect(actionsTransforms[0].extraParams).toEqual({ actions: [{ title: 'some' }] });
      expect(actionsTransforms[0].header.transforms).toHaveLength(3);
    });

    test('actionsTransforms', () => {
      const actionsTransforms = calculateColumns([], {
        areActionsDisabled: () => false,
        actionResolver: () => [{ title: 'some' }]
      });
      expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
      expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(actionsTransforms[0].extraParams.areActionsDisabled).toBeDefined();
      expect(actionsTransforms[0].extraParams.actionResolver).toBeDefined();
      expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
      expect(actionsTransforms[0].header.transforms).toHaveLength(3);
    });

    test('emptyTransforms', () => {
      const actionsTransforms = calculateColumns([], {});
      expect(actionsTransforms).toHaveLength(0);
    });

    describe('mixed strings and objects', () => {
      const cells = ['first', { title: 'second' }, 'third', { title: 'some' }] as ICell[];
      const mixed = calculateColumns(cells, {});
      cells.forEach((oneCell: ICell, key) => {
        test(`${oneCell}`, () => {
          expect(mixed[key].property).toBe(oneCell.title || oneCell);
          expect(mixed[key].header.label).toBe(oneCell.title || oneCell);
          expect(mixed[key].header.transforms).toHaveLength(2);
          expect(mixed[key].cell.transforms).toHaveLength(1);
          expect(mixed[key].cell.formatters).toHaveLength(1);
        });
      });
    });

    test('correct property', () => {
      expect(calculateColumns(['some'], {})[0].property).toBe('some');
      expect(calculateColumns(['some with space'], {})[0].property).toBe('some-with-space');
      expect(calculateColumns([''], {})[0].property).toBe('column-0');
    });

    describe('generateHeader', () => {
      test('additional data', () => {
        const result = calculateColumns(
          [
            {
              header: {
                someData: 'test'
              } as HeaderType
            }
          ] as ICell[],
          {}
        );
        expect(result[0].header).toMatchObject({ someData: 'test' });
      });

      test('custom functions', () => {
        const testFunc = () => undefined as any;
        const result = calculateColumns(
          [
            {
              title: '',
              transforms: [testFunc],
              formatters: [testFunc]
            }
          ],
          {}
        );
        expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });

      test('custom functions in header', () => {
        const testFunc = () => undefined as any;
        const result = calculateColumns(
          [
            {
              title: '',
              header: {
                transforms: [testFunc],
                formatters: [testFunc]
              }
            }
          ],
          {}
        );
        expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });
    });

    describe('generateCell', () => {
      test('additional data', () => {
        const result = calculateColumns(
          [
            {
              cell: {
                someData: 'test'
              }
            }
          ],
          {}
        );
        expect(result[0].cell).toMatchObject({ someData: 'test' });
      });

      test('custom functions', () => {
        const testFunc = () => undefined as any;
        const result = calculateColumns(
          [
            {
              title: '',
              cellTransforms: [testFunc],
              cellFormatters: [testFunc]
            }
          ],
          {}
        );
        expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });

      test('custom functions in header', () => {
        const testFunc = () => undefined as any;
        const result = calculateColumns(
          [
            {
              title: '',
              cell: {
                transforms: [testFunc],
                formatters: [testFunc]
              }
            }
          ],
          {}
        );
        expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });

      describe('custom dataLabel', () => {
        const cells = [
          { title: 'expanded first', dataLabel: 'compact first' },
          { title: 'expanded second' }
        ] as ICell[];
        const mixed = calculateColumns(cells, {});
        cells.forEach((oneCell: ICell, key) => {
          test(`${oneCell}`, () => {
            expect(mixed[key].props['data-label']).toBe(oneCell.dataLabel || oneCell.title);
          });
        });
      });
    });
  });

  describe('mapOpenedRows', () => {
    test('flat structure', () => {
      const rows = [{}, { parent: 0 }, {}, { parent: 2 }] as IRow[];
      const children = ['one', 'two', 'three', 'four'];
      const mappedRows = mapOpenedRows(rows, children);
      expect(mappedRows).toHaveLength(2);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject({ rows: ['one', 'two'] });
    });

    test('nested children', () => {
      const rows = [{}, { parent: 0 }, { parent: 1 }, { parent: 2 }] as IRow[];
      const children = ['one', 'two', 'three', 'four'];
      const mappedRows = mapOpenedRows(rows, children);
      expect(mappedRows).toHaveLength(1);
      expect(mappedRows[0].rows).toHaveLength(4);
      expect(mappedRows[0]).toMatchObject({ rows: children });
    });

    test('no parent', () => {
      const rows = [{ parent: 'something' }, { parent: 0 }, {}, { parent: 2 }] as IRow[];
      const children = ['one', 'two', 'three', 'four'];
      const mappedRows = mapOpenedRows(rows, children);
      expect(mappedRows).toHaveLength(1);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject({ rows: ['three', 'four'] });
    });

    test('should add rest props', () => {
      const rows = [{ isOpen: true, somethig: 'other' }, { parent: 0 }, { isOpen: false }, { parent: 2 }] as IRow[];
      const children = ['one', 'two', 'three', 'four'];
      const mappedRows = mapOpenedRows(rows, children);
      expect(mappedRows).toHaveLength(2);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject({ ...rows[0], rows: ['one', 'two'] });
    });
  });
});
