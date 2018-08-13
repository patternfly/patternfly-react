import React from 'react';
import PropTypes from 'prop-types';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { compose } from 'recompose';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { KEY_CODES } from '../../../common/helpers';
import {
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { ConfirmButton, CancelButton } from '../../InlineEdit';
import { mockRows } from './mockRows';
import { Form, FormControl, InputGroup } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */

export class SelectableFormControl extends React.Component {
  componentDidMount() {
    if (this.props.selected) {
      this.input.select();
    }
  }

  render() {
    const { selected, ...otherProps } = this.props;
    return (
      <FormControl
        {...otherProps}
        inputRef={ref => {
          this.input = ref;
        }}
      />
    );
  }
}
SelectableFormControl.propTypes = {
  selected: PropTypes.bool.isRequired
};

// eslint-disable-next-line react/no-multi-comp
export class MockInlineEditCellTable extends React.Component {
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
      isEditing: ({ rowIndex, columnIndex, rowData, property }) =>
        rowData.editing && rowData.editing[property] !== undefined,
      onActivate: (e, { rowIndex, columnIndex, rowData, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].editing = rows[index].editing || {};
        rows[index].editing[property] = rows[index][property];

        const lastSelected = {
          rowIndex,
          columnIndex
        };

        this.setState({ rows, lastSelected });
      },
      onConfirm: (value, { rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        if (rowData.editing && rowData.editing[property] !== undefined) {
          rows[index][property] = value !== null ? value : rows[index].editing[property];
          delete rows[index].editing[property];
        }

        this.setState({ rows, lastSelected: {} });
      },
      onCancel: ({ rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        if (rowData.editing && rowData.editing[property] !== undefined) {
          delete rows[index].editing[property];
        }

        this.setState({ rows, lastSelected: {} });
      },
      onChange: (value, { rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].editing[property] = value;

        this.setState({ rows, lastSelected: {} });
      }
    };

    const inlineEditFormatter = inlineEditFormatterFactory({
      isEditing: additionalData => inlineEditController.isEditing(additionalData),
      renderValue: (value, additionalData) => (
        <td className="editable">
          <div onMouseUp={e => inlineEditController.onActivate(e, additionalData)} className="input">
            {value}
          </div>
        </td>
      ),
      renderEdit: (value, additionalData) => {
        const { rowData, property, rowIndex, columnIndex } = additionalData;
        const { lastSelected } = this.state;
        const selected = lastSelected && lastSelected.rowIndex === rowIndex && lastSelected.columnIndex === columnIndex;

        return (
          <td className="editable editing">
            <InputGroup>
              <SelectableFormControl
                type="text"
                selected={selected}
                defaultValue={rowData.editing[property]}
                onBlur={e => inlineEditController.onChange(e.target.value, additionalData)}
                onKeyUp={e => {
                  if (e.keyCode === KEY_CODES.ENTER_KEY) {
                    inlineEditController.onConfirm(e.target.value, additionalData);
                  } else if (e.keyCode === KEY_CODES.ESCAPE_KEY) {
                    inlineEditController.onCancel(additionalData);
                  }
                }}
              />
              <Form.InputGroup.Button>
                <ConfirmButton
                  bsStyle="primary"
                  key="confirm"
                  onMouseUp={() => inlineEditController.onConfirm(null, additionalData)}
                />
                <CancelButton
                  bsStyle="default"
                  key="cancel"
                  onMouseUp={() => inlineEditController.onCancel(additionalData)}
                />
              </Form.InputGroup.Button>
            </InputGroup>
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
                width: '25%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
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
                width: '25%'
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
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [tableCellFormatter]
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
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedRows}
            rowKey="id"
            onRow={() => ({
              role: 'row'
            })}
          />
        </Table.PfProvider>
      </div>
    );
  }
}

export const mockInlineEditCellTableSource = `
import React from 'react';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { compose } from 'recompose';
import { cloneDeep, findIndex, orderBy } from 'lodash';
import { KEY_CODES } from '../../../common/helpers';
import {
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  inlineEditFormatterFactory,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { ConfirmButton, CancelButton } from '../../InlineEdit';
import { mockRows } from './mockRows';
import { Form, FormControl, InputGroup } from '../../../index';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */

export class MockInlineEditCellTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.
    const getSortingColumns = () => this.state.sortingColumns || {};

    const sortableTransform = sort.sort({
      getSortingColumns,
      onSort: selectedColumn => {
        const { rows, sortingColumns, columns } = this.state;

        const sortedRows = compose(
          sort.sorter({
            columns,
            sortingColumns,
            sort: orderBy,
            strategy: sort.strategies.byProperty
          })
        )(rows);

        this.setState({
          rows: sortedRows,
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
      isEditing: ({ rowIndex, columnIndex, rowData, property }) =>
        rowData.backup && rowData.backup[property] !== undefined,
      onActivate: (e, { rowIndex, columnIndex, rowData, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index].backup = rows[index].backup || {};
        rows[index].backup[property] = rows[index][property];

        this.setState({ rows });
      },
      onConfirm: (value, { rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        if (rowData.backup && rowData.backup[property] !== undefined) {
          delete rows[index].backup[property];
        }

        this.setState({ rows });
      },
      onCancel: (value, { rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        if (rowData.backup && rowData.backup[property] !== undefined) {
          rows[index][property] = rows[index].backup[property];
          delete rows[index].backup[property];
        }

        this.setState({ rows });
      },
      onChange: (value, { rowData, rowIndex, columnIndex, property }) => {
        const rows = cloneDeep(this.state.rows);
        const index = findIndex(rows, { id: rowData.id });

        rows[index][property] = value;

        this.setState({ rows });
      }
    };

    const inlineEditFormatter = inlineEditFormatterFactory({
      isEditing: additionalData =>
        inlineEditController.isEditing(additionalData),
      renderValue: (value, additionalData) => (
        <td className="editable">
          <div
            onClick={e => inlineEditController.onActivate(e, additionalData)}
            className="input"
          >
            {value}
          </div>
        </td>
      ),
      renderEdit: (value, additionalData) => (
        <td className="editable editing">
          <InputGroup>
            <FormControl
              type="text"
              defaultValue={value}
              onBlur={e =>
                inlineEditController.onChange(e.target.value, additionalData)
              }
            />
            <Form.InputGroup.Button>
              <ConfirmButton
                bsStyle="primary"
                key="confirm"
                onMouseUp={() =>
                  inlineEditController.onConfirm(value, additionalData)
                }
              />
              <CancelButton
                bsStyle="default"
                key="cancel"
                onMouseUp={() =>
                  inlineEditController.onCancel(value, additionalData)
                }
              />
            </Form.InputGroup.Button>
          </InputGroup>
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
                width: '25%'
              }
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
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
                width: '25%'
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
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [tableCellFormatter]
          }
        }
      ],
      rows: mockRows.slice(0, 6)
    };
  }
  render() {
    const { rows, sortingColumns, columns } = this.state;

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
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={rows}
            rowKey="id"
            onRow={() => ({
              role: 'row'
            })}
          />
        </Table.PfProvider>
      </div>
    );
  }
}`;
