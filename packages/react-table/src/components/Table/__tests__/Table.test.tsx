import * as React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  Table,
  TableHeader,
  TableBody,
  TableGridBreakpoint,
  TableVariant,
  RowSelectVariant,
  cellWidth,
  headerCol,
  sortable,
  expandable,
  compoundExpand,
  IRow,
  OnCollapse,
  OnExpand,
  OnSelect,
  OnRowEdit,
  OnSort,
  wrappable,
  nowrap,
  truncate,
  breakWord,
  fitContent,
  ICell
} from '../index';
import { rows, columns, editableRows, editableColumns, actions } from '../../../test-helpers/data-sets';
import { ColumnsType } from '../base';

describe('Table', () => {
  describe('simple', () => {
    test('caption', () => {
      render(
        <Table caption="Simple Table" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });

    test('header', () => {
      render(
        <Table header={<h4>Header title</h4>} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });
    test('aria-label', () => {
      render(
        <Table aria-label="Aria labeled" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });

    test('Editable table', () => {
      const onRowEdit: OnRowEdit = () => undefined;
      render(
        <Table caption="Editable Table" cells={editableColumns} rows={editableRows} onRowEdit={onRowEdit}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });

    test('Sortable table', () => {
      const onSortCall: OnSort = () => undefined;
      columns[0] = { ...(columns[0] as object), transforms: [sortable] };
      render(
        <Table aria-label="Aria labeled" onSort={onSortCall} sortBy={{}} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });

    test('Row click table', () => {
      const rowClickHandler = jest.fn();
      render(
        <Table aria-label="Row click table" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody onRowClick={rowClickHandler} />
        </Table>
      );
      expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
    });
  });

  describe('Table variants', () => {
    Object.values(TableGridBreakpoint).forEach(oneBreakpoint => {
      test(`Breakpoint - ${oneBreakpoint}`, () => {
        render(
          <Table aria-label="Aria labeled" gridBreakPoint={oneBreakpoint} cells={columns} rows={rows}>
            <TableHeader />
            <TableBody />
          </Table>
        );
        expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
      });
    });
    Object.values(TableVariant).forEach(onevariant => {
      test(`Size - ${onevariant}`, () => {
        render(
          <Table aria-label="Aria labeled" variant={onevariant} cells={columns} rows={rows}>
            <TableHeader />
            <TableBody />
          </Table>
        );
        expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
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

    render(
      <Table aria-label="Aria labeled" actions={actions} cells={columns} rows={rowsWithDisabledAction}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Actions table', () => {
    render(
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
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Cell header table', () => {
    columns[0] = { ...(columns[0] as object), cellTransforms: [headerCol('test-headercol-')] };
    render(
      <Table aria-label="Aria labeled" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Collapsible table', () => {
    rows[0] = { ...rows[0], isOpen: true };
    rows[1] = { ...rows[1], parent: 0 };
    rows[3] = { ...rows[3], isOpen: false };
    rows[4] = { ...rows[4], parent: 3 };
    columns[0] = { ...(columns[0] as object), cellFormatters: [expandable] };
    const onCollapse: OnCollapse = () => undefined;
    render(
      <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Compound Expandable table', () => {
    const compoundColumns: ColumnsType = [
      { title: 'col1', cellTransforms: [compoundExpand] },
      { title: 'col2', cellTransforms: [compoundExpand] }
    ];
    const compoundRows: IRow[] = [
      {
        isOpen: true,
        cells: [
          { title: '1', props: { isOpen: true } },
          { title: '2', props: { isOpen: false } }
        ]
      },
      { parent: 0, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] },
      {
        isOpen: false,
        cells: [
          { title: '3', props: { isOpen: false } },
          { title: '4', props: { isOpen: false } }
        ]
      },
      { parent: 2, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] }
    ];
    const onExpand: OnExpand = () => undefined;
    render(
      <Table aria-label="Aria labeled" onExpand={onExpand} cells={compoundColumns} rows={compoundRows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Collapsible nested table', () => {
    rows[0] = { ...rows[0], isOpen: false };
    rows[1] = { ...rows[1], parent: 0, isOpen: true };
    rows[2] = { ...rows[2], parent: 1 };
    const onCollapse: OnCollapse = () => undefined;
    render(
      <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Selectable table', () => {
    const onSelect: OnSelect = () => undefined;
    render(
      <Table aria-label="Aria labeled" onSelect={onSelect} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Selectable table with Radio', () => {
    const onSelect: OnSelect = () => undefined;
    render(
      <Table
        aria-label="Aria labeled"
        selectVariant={RowSelectVariant.radio}
        onSelect={onSelect}
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Control text table', () => {
    const controlTextColumns: ICell[] = [
      { ...(columns[0] as object), transforms: [nowrap] },
      { title: 'new object column', transforms: [wrappable] },
      { ...(columns[2] as object), transforms: [breakWord] },
      { title: 'new object column', transforms: [truncate] },
      { ...(columns[4] as object), transforms: [fitContent] }
    ];

    render(
      <Table aria-label="Aria labeled" cells={controlTextColumns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Header width table', () => {
    columns[0] = { ...(columns[0] as object), transforms: [cellWidth(10)] };
    columns[2] = { ...(columns[2] as object), transforms: [cellWidth(30)] };
    columns[4] = { ...(columns[4] as object), transforms: [cellWidth(100)] };
    render(
      <Table aria-label="Aria labeled" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
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
      onSelect: (e: React.FormEvent<HTMLInputElement>) => e
    };

    render(
      <Table aria-label="Aria labeled" {...data}>
        <TableHeader />
        <TableBody />
      </Table>
    );

    expect(screen.getByRole('grid').outerHTML).toMatchSnapshot();
  });

  test('Empty state table', () => {
    const data = {
      cells: ['Hostname', 'IP address', 'Role', 'Team'],
      rows: [
        {
          heightAuto: true,
          cells: [
            {
              title: <div>Empty State Component</div>,
              props: { colSpan: 8 }
            }
          ]
        }
      ]
    };

    render(
      <Table aria-label="Aria labeled" {...data}>
        <TableHeader />
        <TableBody />
      </Table>
    );

    expect(screen.getByText('Empty State Component').parentElement.getAttribute('colspan')).toEqual('8');
  });
});
