import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import * as resolve from 'table-resolver';
import { mockRows } from './__mocks__/mockDataTableRows';
import { MenuItem } from '../MenuItem';
import { DropdownKebab } from '../DropdownKebab';
import { Table } from '../Table';
import { ControlLabel } from '../Form';
import { actionHeaderCellFormatter, tableCellFormatter } from './index';

test('DataTable renders', () => {
  const sortableHeaderCellFormatter = ({ column, cellProps }) => {
    return (
      <Table.Heading
        sort
        sortDirection={'asc'}
        aria-label={column.header.label}
        {...cellProps}
      >
        {column.header.label}
      </Table.Heading>
    );
  };
  sortableHeaderCellFormatter.propTypes = {
    column: PropTypes.object,
    cellProps: PropTypes.object
  };

  const selectionHeaderCellFormatter = ({ column, cellProps }) => {
    return (
      <Table.SelectionHeading aria-label={column.header.label} {...cellProps}>
        <ControlLabel srOnly htmlFor="selectAll">
          Select all rows
        </ControlLabel>
        <input type="checkbox" id="selectAll" checked onChange={jest.fn()} />
      </Table.SelectionHeading>
    );
  };
  selectionHeaderCellFormatter.propTypes = {
    column: PropTypes.object,
    cellProps: PropTypes.object
  };

  const selectionCellFormatter = (value, { rowData, rowIndex }) => {
    const id = `select${rowIndex}`;
    const label = `Select row ${rowIndex}`;
    return (
      <Table.SelectionCell>
        <ControlLabel srOnly htmlFor={id}>
          {label}
        </ControlLabel>
        <input type="checkbox" id={id} checked onChange={jest.fn()} />
      </Table.SelectionCell>
    );
  };

  const columns = [
    {
      property: 'select',
      header: {
        label: 'Select all rows',
        props: {
          index: 0,
          rowSpan: 1,
          colSpan: 1
        },
        customFormatters: [selectionHeaderCellFormatter]
      },
      cell: {
        props: {
          index: 0
        },
        formatters: [selectionCellFormatter]
      }
    },
    {
      property: 'name',
      header: {
        label: 'Name',
        props: {
          index: 1,
          rowSpan: 1,
          colSpan: 1
        },
        customFormatters: [sortableHeaderCellFormatter]
      },
      cell: {
        props: {
          index: 1
        },
        formatters: [tableCellFormatter]
      }
    },
    {
      property: 'actions',
      header: {
        label: 'Actions',
        props: {
          index: 2,
          rowSpan: 1,
          colSpan: 2
        },
        customFormatters: [actionHeaderCellFormatter]
      },
      cell: {
        props: {
          index: 2
        },
        formatters: [
          (value, { rowData }) => {
            return [
              <Table.Actions key="0">
                <Table.Button onClick={jest.fn()}>Actions</Table.Button>
              </Table.Actions>,
              <Table.Actions key="1">
                <DropdownKebab id="myKebab" pullRight>
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Another Action</MenuItem>
                  <MenuItem>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem>Separated link</MenuItem>
                </DropdownKebab>
              </Table.Actions>
            ];
          }
        ]
      }
    }
  ];

  const customHeaderCell = cellProps => {
    const { index } = cellProps;
    const column = columns[index];
    const customFormatters = column.header.customFormatters;

    return customFormatters.reduce(
      (params, formatter) => ({
        value: formatter(params)
      }),
      { column, cellProps }
    ).value;
  };

  const component = renderer.create(
    <Table.PfProvider
      striped
      bordered
      hover
      dataTable
      columns={columns}
      components={{
        header: { cell: customHeaderCell }
      }}
    >
      <Table.Header headerRows={resolve.headerRows({ columns })} />
      <Table.Body rows={mockRows.slice(0, 2)} rowKey="id" onRow={jest.fn()} />
    </Table.PfProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
