import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import { mount } from 'enzyme';
import {
  Table,
  TableHeader,
  TableBody,
  TableGridBreakpoint,
  TableVariant,
  cellWidth,
  headerCol,
  sortable,
  expandable
} from '@patternfly/react-table';
import { VirtualTableBody } from './index';
import { rows, columns, actions } from '@patternfly/react-table/src/test-helpers/data-sets';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';

const measurementCache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 44,
  keyMapper: (rowIndex: any) => rowIndex
});

describe('Simple virtualized table', () => {
  const rowRenderer = ( index: number , isVisible: any ) => {
    const text = rows[index].cells[0];

    const className = clsx({
      isVisible
    });
  };

  test('className', () => {
    const view = mount(
      <Table cells={columns} rows={rows}>
        <TableHeader />
        {({ width }: { width: number }) => (
          <VirtualTableBody
            className="pf-c-table pf-c-virtualized pf-c-window-scroller"
            height={400}
            rowCount={rows.length}
            rowHeight={measurementCache.rowHeight}
            rows={rows}
            width={width}
            rowRenderer={rowRenderer}
          />
        )}
      </Table>
    );
    expect(view).toMatchSnapshot();
  });

  test('aria-label', () => {
    const view = mount(
      <Table cells={columns} rows={rows}>
        <TableHeader />
        {({ width }: { width: number }) => (
          <VirtualTableBody
            aria-label="Aria labeled"
            height={400}
            rowCount={rows.length}
            rowHeight={measurementCache.rowHeight}
            rowRenderer={rowRenderer}
            rows={rows}
            width={width}
          />
        )}
      </Table>
    );
    expect(view).toMatchSnapshot();
  });
});

test('Sortable Virtualized Table', () => {
  const rowRenderer = ( index: number , isVisible: any ) => {
    const text = rows[index].cells[0];

    const className = clsx({
      isVisible
    });
  };

  const onSortCall = () => undefined as any;
  columns[0] = { ...columns[0], transforms: [sortable] };
  const view = mount(
    <Table aria-label="Aria labeled" onSort={onSortCall} sortBy={{}} cells={columns} rows={rows}>
      <TableHeader />
      {({ width }: { width: number }) => (
        <VirtualTableBody
          height={400}
          rowCount={rows.length}
          rowHeight={measurementCache.rowHeight}
          rowRenderer={rowRenderer}
          rows={rows}
          width={width}
        />
      )}
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Simple Actions table', () => {
  const rowRenderer = ( index: number , isVisible: any ) => {
    const text = rows[index].cells[0];

    const className = clsx({
      isVisible
    });
  };

  const rowsWithDisabledAction = [
    ...rows,
    {
      cells: ['one', 'two', 'three', 'four', 'five'],
      disableActions: true
    }
  ];

  const view = mount(
    <Table aria-label="Aria labeled" actions={actions} cells={columns} rows={rowsWithDisabledAction}>
      <TableHeader />
      {({ width }: { width: number }) => (
        <VirtualTableBody
          rowHeight={measurementCache.rowHeight}
          height={400}
          overscanRowCount={2}
          columnCount={1}
          rows={rows}
          rowCount={rows.length}
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Actions virtualized table', () => {
  const rowRenderer = ( index: number , isVisible: any ) => { 
    const text = rows[index].cells[0];

    const className = clsx({
      isVisible
    });
  };

  const view = mount(
    <Table
      aria-label="Aria labeled"
      actionResolver={() => actions}
      areActionsDisabled={() => false}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      {({ width }: { width: number }) => (
        <VirtualTableBody
          rowHeight={measurementCache.rowHeight}
          height={400}
          overscanRowCount={2}
          columnCount={1}
          rows={rows}
          rowCount={rows.length}
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Selectable virtualized table', () => {
  const rowRenderer = ( index: number , isVisible: any ) => { 
    const text = rows[index].cells[0];

    const className = clsx({
      isVisible
    });
  };

  const onSelect = () => undefined as any;
  const view = mount(
    <Table aria-label="Aria labeled" onSelect={onSelect} cells={columns} rows={rows}>
      <TableHeader />
      {( width: number ) => (
        <VirtualTableBody
          height={400}
          rowCount={rows.length}
          rowHeight={measurementCache.rowHeight}
          rowRenderer={rowRenderer}
          rows={rows}
          width={width}
        />
      )}
    </Table>
  );
  expect(view).toMatchSnapshot();
});
