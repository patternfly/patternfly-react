import React from 'react';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { compose } from 'recompose';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';

import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { mockRows } from './mockRows';
import { FormControl } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */
export class MockInlineEditRowTable extends React.Component {
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
      isEditing: ({ rowData }) => rowData.editing !== undefined,
      onActivate: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].editing = cloneDeep(rows[index]);

        this.setState({ rows, editing: true });
      },
      onConfirm: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index] = cloneDeep(rows[index].editing);
        delete rows[index].editing;

        this.setState({ rows, editing: false });
      },
      onCancel: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        delete rows[index].editing;

        this.setState({ rows, editing: false });
      },
      onChange: (value, { rowData, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].editing[property] = value;

        this.setState({ rows });
      }
    };
    this.inlineEditController = inlineEditController;

    const inlineEditFormatter = inlineEditFormatterFactory({
      isEditing: additionalData => inlineEditController.isEditing(additionalData),
      renderValue: (value, additionalData) => (
        <td className="editable">
          <span className="static">{value}</span>
        </td>
      ),
      renderEdit: (value, additionalData) => {
        const { rowData, property } = additionalData;
        return (
          <td className="editable editing">
            <FormControl
              type="text"
              defaultValue={rowData.editing[property]}
              onBlur={e => inlineEditController.onChange(e.target.value, additionalData)}
            />
          </td>
        );
      }
    });

    const inlineEditButtonsFormatter = inlineEditFormatterFactory({
      isEditing: additionalData => this.state.editing,
      renderValue: (value, additionalData) => (
        <td style={{ padding: '2px' }}>
          <Button bsStyle="default" onClick={() => inlineEditController.onActivate(additionalData)}>
            <Icon type="pf" name="edit" />
          </Button>
        </td>
      ),
      renderEdit: (value, additionalData) => (
        <td style={{ padding: '2px' }}>
          <Button bsStyle="default" disabled>
            <Icon type="pf" name="edit" />
          </Button>
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
        },
        {
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 5
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
            },
            formatters: [inlineEditButtonsFormatter]
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
                })
            },
            body: {
              row: Table.InlineEditRow
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedRows}
            rowKey="id"
            onRow={(rowData, { rowIndex }) => ({
              role: 'row',
              isEditing: () => this.inlineEditController.isEditing({ rowData }),
              onCancel: () => this.inlineEditController.onCancel({ rowData, rowIndex }),
              onConfirm: () => this.inlineEditController.onConfirm({ rowData, rowIndex }),
              last: rowIndex === sortedRows.length - 1
            })}
          />
        </Table.PfProvider>
      </div>
    );
  }
}

export const mockInlineEditRowTableSource = `
import React from 'react';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { compose } from 'recompose';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';

import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { mockRows } from './mockRows';
import { FormControl } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */
export class MockInlineEditRowTable extends React.Component {
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
      isEditing: ({ rowData }) => rowData.backup !== undefined,
      onActivate: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].backup = cloneDeep(rows[index]);

        this.setState({ rows, editing: true });
      },
      onConfirm: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        delete rows[index].backup;

        this.setState({ rows, editing: false });
      },
      onCancel: ({ rowData }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index] = cloneDeep(rows[index].backup);
        delete rows[index].backup;

        this.setState({ rows, editing: false });
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
      renderValue: (value, additionalData) => (
        <td className="editable">
          <span className="static">{value}</span>
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

    const inlineEditButtonsFormatter = inlineEditFormatterFactory({
      isEditing: additionalData => this.state.editing,
      renderValue: (value, additionalData) => (
        <td style={{ padding: '2px' }}>
          <Button
            bsStyle="default"
            onClick={() => inlineEditController.onActivate(additionalData)}
          >
            <Icon type="pf" name="edit" />
          </Button>
        </td>
      ),
      renderEdit: (value, additionalData) => (
        <td style={{ padding: '2px' }}>
          <Button bsStyle="default" disabled>
            <Icon type="pf" name="edit" />
          </Button>
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
        },
        {
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 5
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
            },
            formatters: [inlineEditButtonsFormatter]
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
                })
            },
            body: {
              row: Table.InlineEditRow,
              cell: cellProps => cellProps.children
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedRows}
            rowKey="id"
            onRow={(rowData, { rowIndex }) => ({
              role: 'row',
              isEditing: () => this.inlineEditController.isEditing({ rowData }),
              onCancel: () =>
                this.inlineEditController.onCancel({ rowData, rowIndex }),
              onConfirm: () =>
                this.inlineEditController.onConfirm({ rowData, rowIndex }),
              last: rowIndex === sortedRows.length - 1
            })}
          />
        </Table.PfProvider>
      </div>
    );
  }
}`;
