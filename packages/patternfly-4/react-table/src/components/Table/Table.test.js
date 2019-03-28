import React from 'react';
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
} from './index';
import { rows, columns, actions } from '../../test-helpers/data-sets';

describe('Simple table', () => {
  test('caption', () => {
    const view = mount(
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view).toMatchSnapshot();
  });

  test('header', () => {
    const view = mount(
      <Table header={<h4>Header title</h4>} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view).toMatchSnapshot();
  });
  test('aria-label', () => {
    const view = mount(
      <Table aria-label="Aria labeled" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view).toMatchSnapshot();
  });
});

test('Sortable table', () => {
  const onSortCall = () => undefined;
  columns[0] = { ...columns[0], transforms: [sortable] };
  const view = mount(
    <Table aria-label="Aria labeled" onSort={onSortCall} sortBy={{}} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

describe('Table variants', () => {
  Object.values(TableGridBreakpoint).forEach(oneBreakpoint => {
    test(`Breakpoint - ${oneBreakpoint}`, () => {
      const view = mount(
        <Table aria-label="Aria labeled" gridBreakPoint={oneBreakpoint} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(view).toMatchSnapshot();
    });
  });
  Object.values(TableVariant).forEach(onevariant => {
    test(`Size - ${onevariant}`, () => {
      const view = mount(
        <Table aria-label="Aria labeled" variant={onevariant} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(view).toMatchSnapshot();
    });
  });
});

test('Simple Actions table', () => {
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
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Actions table', () => {
  const view = mount(
    <Table
      aria-label="Aria labeled"
      actionResolver={() => actions}
      areActionsDisabled={() => false}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Cell header table', () => {
  columns[0] = { ...columns[0], cellTransforms: [headerCol] };
  const view = mount(
    <Table aria-label="Aria labeled" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Collapsible table', () => {
  rows[0] = { ...rows[0], isOpen: true };
  rows[1] = { ...rows[1], parent: 0 };
  rows[3] = { ...rows[3], isOpen: false };
  rows[4] = { ...rows[4], parent: 3 };
  columns[0] = { ...columns[0], cellFormatters: [expandable] };
  const onCollapse = () => undefined;
  const view = mount(
    <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Collapsible nested table', () => {
  rows[0] = { ...rows[0], isOpen: false };
  rows[1] = { ...rows[1], parent: 0, isOpen: true };
  rows[2] = { ...rows[2], parent: 1 };
  const onCollapse = () => undefined;
  const view = mount(
    <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Selectable table', () => {
  const onSelect = () => undefined;
  const view = mount(
    <Table aria-label="Aria labeled" onSelect={onSelect} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Header width table', () => {
  columns[0] = { ...columns[0], transforms: [cellWidth(10)] };
  columns[2] = { ...columns[2], transforms: [cellWidth(30)] };
  columns[4] = { ...columns[4], transforms: [cellWidth('max')] };
  const view = mount(
    <Table aria-label="Aria labeled" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view).toMatchSnapshot();
});

test('Selectable table with selected expandable row', () => {
  const data = {
    cells: ['column'],
    rows: [
      {
        cells: ['one'],
        selected: true
      },
      {
        cells: ['one'],
        parent: 0
      }
    ],
    onSelect: f => f
  };

  const view = mount(
    <Table aria-label="Aria labeled" {...data}>
      <TableHeader />
      <TableBody />
    </Table>
  );

  expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});
