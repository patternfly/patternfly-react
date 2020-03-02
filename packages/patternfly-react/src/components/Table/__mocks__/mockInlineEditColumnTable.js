import React from 'react';
import PropTypes from 'prop-types';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { compose } from 'recompose';
import {
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';

import { mockRows } from './mockRows';
import { FormControl } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */
export class MockInlineEditColumnTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.
    const getSortingColumns = () => this.state.sortingColumns || {};

    const sortableTransform = sort.sort({
      getSortingColumns,
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            sortingOrder: defaultSortingOrder,
            selectedColumn
          })
        });
      },
      // Use property or index dependening on the sortingColumns structure specified
      strategy: sort.strategies.byProperty
    });

    const sortingFormatter = sort.header({
      sortableTransform,
      getSortingColumns,
      strategy: sort.strategies.byProperty
    });

    // enables our custom header formatters extensions to reactabular
    this.customHeaderFormatters = customHeaderFormattersDefinition;

    const inlineEditController = {
      isEditing: ({ columnIndex }) => {
        if (this.props.fullTableEdit) {
          return this.state.editingColumn !== undefined;
        }
        return columnIndex === this.state.editingColumn;
      },
      onActivate: additionalData => {
        const { columnIndex } = additionalData;
        const editedRows = cloneDeep(this.state.rows);

        this.setState({ editingColumn: columnIndex, editedRows });
      },
      onConfirm: () => {
        const rows = cloneDeep(this.state.editedRows);
        this.setState({
          editingColumn: undefined,
          editedRows: undefined,
          rows
        });
      },
      onCancel: () => {
        this.setState({
          editingColumn: undefined,
          editedRows: undefined
        });
      },
      onChange: (value, { rowData, property }) => {
        const editedRows = cloneDeep(this.state.editedRows);
        const index = findIndex(editedRows, { id: rowData.id });

        editedRows[index][property] = value;

        this.setState({ editedRows });
      }
    };
    this.inlineEditController = inlineEditController;

    const inlineEditFormatter = inlineEditFormatterFactory({
      isEditing: additionalData => inlineEditController.isEditing(additionalData),
      // renderValue: (value, additionalData) => <span>{value}</span>,
      renderValue: (value, additionalData) => (
        <td className="editable">
          <div onClick={e => inlineEditController.onActivate(additionalData)} className="input">
            {value}
          </div>
        </td>
      ),
      renderEdit: (value, additionalData) => {
        const { property, rowData } = additionalData;
        const index = findIndex(this.state.editedRows, { id: rowData.id });
        const defaultValue = this.state.editedRows[index][property];
        return (
          <td className="editable editing">
            <FormControl
              type="text"
              defaultValue={defaultValue}
              onBlur={e => inlineEditController.onChange(e.target.value, additionalData)}
            />
          </td>
        );
      }
    });

    this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: TABLE_SORT_DIRECTION.ASC,
          position: 0
        }
      },
      columns: [
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 0,
              sort: true,
              style: {
                width: '20%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            formatters: [inlineEditFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 1,
              sort: true,
              style: {
                width: '20%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 1
            },
            formatters: [inlineEditFormatter]
          }
        },
        {
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 2,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 2
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 3,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 3
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 4,
              sort: true,
              style: {
                width: '15%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [inlineEditFormatter]
          }
        }
      ],
      rows: mockRows.slice(0, 6)
    };
  }

  render() {
    const { rows, sortingColumns, columns } = this.state;

    const sortedRows = compose(
      sort.sorter({
        columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);

    return (
      <div>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          inlineEdit
          columns={columns}
          components={{
            header: {
              cell: cellProps =>
                this.customHeaderFormatters({
                  cellProps,
                  columns,
                  sortingColumns
                }),
              row: Table.TableInlineEditHeaderRow
            }
          }}
        >
          <Table.Header
            headerRows={resolve.headerRows({ columns })}
            onRow={() => ({
              role: 'row',
              isEditing: () => this.state.editingColumn !== undefined,
              onCancel: () => this.inlineEditController.onCancel(),
              onConfirm: () => this.inlineEditController.onConfirm()
            })}
          />
          <Table.Body rows={sortedRows} rowKey="id" />
        </Table.PfProvider>
      </div>
    );
  }
}
MockInlineEditColumnTable.propTypes = {
  fullTableEdit: PropTypes.bool.isRequired
};

export const mockInlineEditColumnTableSource = `
import React from 'react';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { compose } from 'recompose';
import {
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';

import { mockRows } from './mockRows';
import { FormControl } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */
export class MockInlineEditColumnTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.
    const getSortingColumns = () => this.state.sortingColumns || {};

    const sortableTransform = sort.sort({
      getSortingColumns,
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            sortingOrder: defaultSortingOrder,
            selectedColumn
          })
        });
      },
      // Use property or index dependening on the sortingColumns structure specified
      strategy: sort.strategies.byProperty
    });

    const sortingFormatter = sort.header({
      sortableTransform,
      getSortingColumns,
      strategy: sort.strategies.byProperty
    });

    // enables our custom header formatters extensions to reactabular
    this.customHeaderFormatters = customHeaderFormattersDefinition;

    const inlineEditController = {
      isEditing: ({ columnIndex }) => columnIndex === this.state.editingColumn,
      onActivate: additionalData => {
        const { columnIndex } = additionalData;
        const backup = cloneDeep(this.state.rows);

        this.setState({ editingColumn: columnIndex, backup });
      },
      onConfirm: () => {
        this.setState({
          editingColumn: undefined,
          backup: undefined
        });
      },
      onCancel: () => {
        const rows = cloneDeep(this.state.backup);
        this.setState({
          editingColumn: undefined,
          backup: undefined,
          rows
        });
      },
      onChange: (value, { rowData, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index][property] = value;

        this.setState({ rows });
      }
    };
    this.inlineEditController = inlineEditController;

    const inlineEditFormatter = inlineEditFormatterFactory({
      isEditing: additionalData =>
        inlineEditController.isEditing(additionalData),
      // renderValue: (value, additionalData) => <span>{value}</span>,
      renderValue: (value, additionalData) => (
        <td className="editable">
          <div
            onClick={e => inlineEditController.onActivate(additionalData)}
            className="input"
          >
            {value}
          </div>
        </td>
      ),
      renderEdit: (value, additionalData) => (
        <td className="editable editing">
          <FormControl
            type="text"
            defaultValue={value}
            onBlur={e =>
              inlineEditController.onChange(e.target.value, additionalData)
            }
          />
        </td>
      )
    });

    this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: TABLE_SORT_DIRECTION.ASC,
          position: 0
        }
      },
      columns: [
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 0,
              sort: true,
              style: {
                width: '20%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            formatters: [inlineEditFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 1,
              sort: true,
              style: {
                width: '20%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 1
            },
            formatters: [inlineEditFormatter]
          }
        },
        {
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 2,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 2
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 3,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 3
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 4,
              sort: true,
              style: {
                width: '15%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [inlineEditFormatter]
          }
        }
      ],
      rows: mockRows.slice(0, 6)
    };
  }

  render() {
    const { rows, sortingColumns, columns } = this.state;

    const sortedRows = compose(
      sort.sorter({
        columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);

    return (
      <div>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          inlineEdit
          columns={columns}
          components={{
            header: {
              cell: cellProps =>
                this.customHeaderFormatters({
                  cellProps,
                  columns,
                  sortingColumns
                }),
              row: Table.TableInlineEditHeaderRow
            }
          }}
        >
          <Table.Header
            headerRows={resolve.headerRows({ columns })}
            onRow={() => ({
              role: 'row',
              isEditing: () => this.state.editingColumn !== undefined,
              onCancel: () => this.inlineEditController.onCancel(),
              onConfirm: () => this.inlineEditController.onConfirm()
            })}
          />
          <Table.Body rows={sortedRows} rowKey="id" />
        </Table.PfProvider>
      </div>
    );
  }
}`;
