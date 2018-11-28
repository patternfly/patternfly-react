import { calculateColumns } from './headerUtils';

describe('headerUtils', () => {
  describe('calculateColumns', () => {
    test('collapsibleTransfroms', () => {
      const collapsibleTransfroms = calculateColumns(['Some'], { onCollapse: () => undefined })
      expect(collapsibleTransfroms[0].cell.formatters.length).toBe(1);
      expect(collapsibleTransfroms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(collapsibleTransfroms[0].cell.transforms.length).toBe(2);
      expect(collapsibleTransfroms[0].extraParams.onCollapse).toBeDefined();
      expect(collapsibleTransfroms[0].header.transforms.length).toBe(3);
      expect(collapsibleTransfroms[1].cell.transforms.length).toBe(3);
      expect(collapsibleTransfroms[1].cell.transforms.find(
        transform => transform.name === 'parentId')
      ).toBeDefined();
      expect(collapsibleTransfroms[1].cell.transforms.find(
        transform => transform.name === 'expandedRowFormatter')
      ).toBeDefined();
    });

    test('selectableTransforms', () => {
      const selectableTransforms = calculateColumns([], { onSelect: () => undefined })
      expect(selectableTransforms[0].cell.formatters.length).toBe(1);
      expect(selectableTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(selectableTransforms[0].cell.transforms.length).toBe(2);
      expect(selectableTransforms[0].extraParams.onSelect).toBeDefined();
      expect(selectableTransforms[0].header.transforms.length).toBe(3);
    });

    test('actionsTransforms', () => {
      const actionsTransforms = calculateColumns([], { actions: { title: 'some' } })
      expect(actionsTransforms[0].cell.formatters.length).toBe(1);
      expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(actionsTransforms[0].cell.transforms.length).toBe(2);
      expect(actionsTransforms[0].extraParams).toEqual({ actions: { title: 'some' } });
      expect(actionsTransforms[0].header.transforms.length).toBe(3);
    });

    describe('mixed strings and objects', () => {
      const cells = ['first', { title: 'second' }, 'third', { title: 'some' }];
      const mixed = calculateColumns(cells, {});
      cells.forEach((oneCell, key) => {
        test(`${oneCell}`, () => {
          expect(mixed[key].property).toBe(oneCell.title || oneCell)
          expect(mixed[key].header.label).toBe(oneCell.title || oneCell)
          expect(mixed[key].header.transforms.length).toBe(2)
          expect(mixed[key].cell.transforms.length).toBe(1)
          expect(mixed[key].cell.formatters.length).toBe(1)
        });
      })
    });

    test('correct property', () => {
      expect(calculateColumns(['some'], {})[0].property).toBe('some');
      expect(calculateColumns(['some with space'], {})[0].property).toBe('some-with-space');
      expect(calculateColumns([''], {})[0].property).toBe('column-0');
    });

    describe('generateHeader', () => {
      test('additional data', () => {
        const result = calculateColumns([{
          header: {
            someData: 'test'
          }
        }], {});
        expect(result[0].header).toMatchObject({ someData: 'test' });
      });

      test('custom functions', () => {
        const testFunc = () => undefined;
        const result = calculateColumns([{
          title: '',
          transforms: [
            testFunc
          ],
          formatters: [
            testFunc
          ]
        }], {});
        expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });

      test('custom functions in header', () => {
        const testFunc = () => undefined;
        const result = calculateColumns([{
          title: '',
          header: {
            transforms: [
              testFunc
            ],
            formatters: [
              testFunc
            ]
          }
        }], {});
        expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });
    });

    describe('generateCell', () => {
      test('additional data', () => {
        const result = calculateColumns([{
          cell: {
            someData: 'test'
          }
        }], {});
        expect(result[0].cell).toMatchObject({ someData: 'test' });
      });

      test('custom functions', () => {
        const testFunc = () => undefined;
        const result = calculateColumns([{
          title: '',
          cellTransforms: [
            testFunc
          ],
          cellFormatters: [
            testFunc
          ]
        }], {});
        expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });

      test('custom functions in header', () => {
        const testFunc = () => undefined;
        const result = calculateColumns([{
          title: '',
          cell: {
            transforms: [
              testFunc
            ],
            formatters: [
              testFunc
            ]
          }
        }], {});
        expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
        expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
      });
    });
  });
});
