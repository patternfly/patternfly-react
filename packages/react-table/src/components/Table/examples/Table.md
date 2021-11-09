---
id: Table
cssPrefix: pf-c-table
section: components
propComponents: ['Table', 'TableHeader', 'TableBody', 'ISortBy']
ouia: true
---

# Table

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

PatternFly has two implementations of a React table.

The first is the newer `TableComposable` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an html table. Generally, updates and new feature requests are implemented in the `ComposableTable`.

The second is the original `Table` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it.

**For most common use cases, we recommend using `TableComposable`. Both implementations are supported and fully maintained.**

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

import DemoSortableTable from './DemoSortableTable';

### Table Columns

Array items for columns provided to the `Table`'s `cells` prop, can be simple strings or objects.

```
cells: (ICell | string)[];
```

`ICell` (excerpt):

```
interface ICell {
  /* cell contents */
  title?: string | React.ReactNode;
  /** transformations applied to the header cell */
  transforms?: ITransform[];
  /** transformations applied to the cells within the column's body */
  cellTransforms?: ITransform[];
  /** transformations applied to the entire column */
  columnTransforms?: ITransform[];
  /** Additional header props, it contains the info prop as well which can be used to add tooltip/popover */
  header?: HeaderType;
  /** Additional props passed into the rendered column header element */
  props?: any;
  /** Text to display when data from this column is rendered in mobile view */
  dataLabel?: string;
}
```

If you wish to enable other built in features, use `transforms` to apply them to
column headers or `cellTransforms` to apply them to every cell in that column.

```
// simple
columns: ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit']
// with tooltip
columns: [
  {
    title: 'Repositories',
    transforms: [
      info({
        tooltip: 'More information about repositories'
      })
    ]
  }
]
// center header and body cells within the column
columns: [
  {
    title: 'Last commit',
    transforms: [textCenter],
    cellTransforms: [textCenter]
  }
]
```

Many of the subsequent examples demonstrate how to apply different transformations to enable `Table` features.

### Table Rows

Array items for rows provided to the `Table`'s `rows` prop, can be simple strings or objects.

```
rows: (IRow | string[])[]
```

`IRow` (excerpt):

```
interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
}
interface IRowCell {
  title?: string | React.ReactNode | RowCellContent;
  props?: any;
  formatters?: IFormatter[];
}
```

## Table examples

### Basic

```js
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 'default'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(isSelected, event) {
    this.setState({
      choice: event.currentTarget.id
    });
  }

  render() {
    // need to make a comment to change
    const { choice } = this.state;

    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
      ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
      ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three']
    ];

    return (
      <React.Fragment>
        <ToggleGroup aria-label="Default with single selectable">
          <ToggleGroupItem
            text="Default"
            buttonId="default"
            isSelected={choice === 'default'}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Compact"
            buttonId="compact"
            isSelected={choice === 'compact'}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Compact without borders"
            buttonId="compactBorderless"
            isSelected={choice === 'compactBorderless'}
            onChange={this.handleItemClick}
          />
        </ToggleGroup>
        <Table
          aria-label="Simple Table"
          variant={choice !== 'default' ? 'compact' : null}
          borders={choice !== 'compactBorderless'}
          cells={columns}
          rows={rows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
```

### Custom row wrapper

Custom row wrappers are passed to the `Table` component via the `rowWrapper` prop.
Each `rowWrapper` should return a tr element.

```
rowWrapper?: (props: RowWrapperProps) => JSX.Element;
```

RowWrapperProps:

```
interface RowWrapperProps {
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: IRow;
  rowProps?: {
    rowIndex: number;
    rowKey: string;
  };
  children?: React.ReactNode;
}
```

```js
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';

class RowWrapperTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces'],
      rows: [
        {
          cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one']
        },
        {
          cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two']
        },
        {
          cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three']
        }
      ]
    };
    this.customRowWrapper = ({ trRef, className, rowProps, row, ...props }) => {
      const isOddRow = (rowProps.rowIndex + 1) % 2;
      const customStyle = {
        borderLeft: '3px solid var(--pf-global--primary-color--100)'
      };
      return (
        <tr
          {...props}
          ref={trRef}
          className={css(className, isOddRow ? 'odd-row-class' : 'even-row-class', 'custom-static-class')}
          style={isOddRow ? customStyle : {}}
        />
      );
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Table with custom row wrapper that styles odd rows"
        cells={columns}
        rows={rows}
        rowWrapper={this.customRowWrapper}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Sortable & wrapping column headers

To implement sortable columns:

1. Import and apply the `sortable` transform to the desired column.
2. Pass a managed `sortBy` prop to the `Table` component.
   `` `sortBy` - Specifies the initial sorting pattern for the table - asc/desc and the index of the column to sort by ``
3. Pass an `onSort` callback to the `Table` component
   `` `onSort` - (event: React.MouseEvent, columnIndex: number, sortByDirection: SortByDirection, extraData: IExtraColumnData) => void; ``

Note: If you want to add a tooltip/popover to a sortable header, in the `transforms` array the `info` transform has to precede the `sortable` transform.

The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small. The example below showcases how sorting may have a custom control display that can be used for small screen sizes.

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  wrappable,
  cellWidth,
  info
} from '@patternfly/react-table';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        {
          title: 'Branches',
          transforms: [
            info({
              tooltip: 'More information about branches'
            }),
            sortable
          ]
        },
        { title: 'Pull requests', transforms: [sortable] },
        {
          title: 'Workspaces - Also this long header will wrap since we have applied the wrappable transform',
          transforms: [sortable, wrappable, cellWidth(20)]
        },
        {
          title: 'Last commit',
          transforms: [
            info({
              tooltip: 'More information about commits'
            })
          ]
        }
      ],
      rows: [
        ['one', 'two', 'a', 'four', 'five'],
        ['a', 'two', 'k', 'four', 'five'],
        ['p', 'two', 'b', 'four', 'five']
      ],
      sortBy: {
        defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'
      }
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table aria-label="Sortable Table" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Sortable - custom control

Sorting a table may also be controlled with a toolbar. This toolbar item may also be hidden at large screen sizes and only displayed when the screen size is small to support responsive tables.

```js
import React from 'react';
import { Table, TableHeader, TableBody, sortable, SortByDirection, info } from '@patternfly/react-table';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  OptionsMenu,
  OptionsMenuItemGroup,
  OptionsMenuItem,
  OptionsMenuSeparator,
  OptionsMenuToggle
} from '@patternfly/react-core';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        {
          title: 'Branches',
          transforms: [
            info({
              tooltip: 'More information about branches'
            }),
            sortable
          ]
        },
        { title: 'Pull requests', transforms: [sortable] },
        {
          title: 'Workspaces',
          transforms: [sortable]
        },
        {
          title: 'Last commit',
          transforms: [
            info({
              tooltip: 'More information about commits'
            }),
            sortable
          ]
        }
      ],
      rows: [
        ['one', 'two', 'a', 'four', 'five'],
        ['a', 'five', 'k', 'two', 'three'],
        ['p', 'seven', 'b', 'one', 'six']
      ],
      sortBy: {},
      isSortDropdownOpen: false
    };

    this.onSort = this.onSort.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  onToggle(isSortDropdownOpen) {
    this.setState({
      isSortDropdownOpen
    });
  }

  render() {
    const { columns, rows, sortBy, isSortDropdownOpen } = this.state;

    return (
      <React.Fragment>
        <Toolbar id="toolbar">
          <ToolbarContent>
            <ToolbarItem>
              <OptionsMenu
                id="options-menu-multiple-options-example"
                menuItems={[
                  <OptionsMenuItemGroup key="first group" aria-label="Sort column">
                    {columns.map((column, columnIndex) => (
                      <OptionsMenuItem
                        key={column.title}
                        isSelected={sortBy.index === columnIndex}
                        onSelect={evt => this.onSort(evt, columnIndex, sortBy.direction ? sortBy.direction : 'asc')}
                      >
                        {column.title}
                      </OptionsMenuItem>
                    ))}
                  </OptionsMenuItemGroup>,
                  <OptionsMenuSeparator key="separator" />,
                  <OptionsMenuItemGroup key="second group" aria-label="Sort direction">
                    <OptionsMenuItem
                      onSelect={evt => this.onSort(evt, sortBy.index ? sortBy.index : 0, 'asc')}
                      isSelected={sortBy.direction === 'asc'}
                      id="ascending"
                      key="ascending"
                    >
                      Ascending
                    </OptionsMenuItem>
                    <OptionsMenuItem
                      onSelect={evt => this.onSort(evt, sortBy.index ? sortBy.index : 0, 'desc')}
                      isSelected={sortBy.direction === 'desc'}
                      id="descending"
                      key="descending"
                    >
                      Descending
                    </OptionsMenuItem>
                  </OptionsMenuItemGroup>
                ]}
                isOpen={isSortDropdownOpen}
                toggle={
                  <OptionsMenuToggle
                    hideCaret
                    onToggle={() => this.onToggle(!isSortDropdownOpen)}
                    toggleTemplate={<SortAmountDownIcon />}
                  />
                }
                isPlain
                isGrouped
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Table aria-label="Sortable Table" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
```

### Selectable with checkbox

To enable row selection, set the `onSelect` callback prop on the Table.

To control whether a row is selected or not, the Table looks for `selected: true | falsy` on the row definition.

To disable selection for a row, set `disableSelection: true` on the row definition.

To include a 'select all' checkbox in the header row, pass `true` to the`canSelectAll` prop on the Table.

Note: this example also demonstrates the use of the `headerCol` transformation being applied to the first
column via the `cellTransforms` in the column definition. `headerCol` transforms the column so that instead
of using `td` elements, the cells in that column use `th` elements.

```js
import React from 'react';
import { Table, TableHeader, TableBody, headerCol } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

class SelectableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five'],
          disableSelection: true
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five']
        }
      ],
      canSelectAll: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map(oneRow => {
        if (!oneRow.disableSelection) {
          oneRow.selected = isSelected;
        }
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  render() {
    const { columns, rows, canSelectAll } = this.state;

    return (
      <div>
        <Checkbox
          label="Can select all"
          className="pf-u-mb-lg"
          isChecked={canSelectAll}
          onChange={this.toggleSelect}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
        />
        <Table
          onSelect={this.onSelect}
          canSelectAll={canSelectAll}
          aria-label="Selectable Table"
          cells={columns}
          rows={rows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
```

### Selectable radio input

To enable row radio selection, set the `onSelect` callback prop on the Table, and set `RowSelectVariant.radio` as the
`selectVariant` prop on the Table.

To disable selection for a row, set `disableSelection: true` on the row definition.

```js
import React from 'react';
import { Table, TableHeader, TableBody, RowSelectVariant, headerCol } from '@patternfly/react-table';

class SelectableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five'],
          disableSelection: true
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five']
        }
      ]
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event, isSelected, rowId) {
    let rows = this.state.rows.map((oneRow, index) => {
      oneRow.selected = rowId === index;
      return oneRow;
    });
    this.setState({
      rows
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        onSelect={this.onSelect}
        selectVariant={RowSelectVariant.radio}
        aria-label="Selectable Table"
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Hoverable rows, selectable rows, and header cell tooltips/popovers

This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.

```js
import React from 'react';
import { Table, TableHeader, TableBody, textCenter } from '@patternfly/react-table';
import styles from '@patternfly/react-styles/css/components/Table/table';

class RowClickTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Repositories',
          transforms: [
            info({
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            })
          ]
        },
        'Branches',
        {
          title: 'Pull requests',
          transforms: [
            info({
              popover: (
                <div>
                  More <strong>information</strong> on pull requests
                </div>
              ),
              ariaLabel: 'More information on pull requests',
              popoverProps: {
                headerContent: 'Pull requests',
                footerContent: <a href="">Click here for even more info</a>
              }
            })
          ]
        },
        'Workspaces',
        {
          title: 'Last commit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        }
      ],
      rows: [
        {
          cells: ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
          isHoverable: true,
          isRowSelected: false
        },
        {
          cells: [
            {
              title: <div>one - 2</div>,
              props: { title: 'hover title', colSpan: 3 }
            },
            'four - 2',
            'five - 2'
          ],
          isHoverable: true,
          isRowSelected: false
        },
        {
          cells: [
            'one - 3',
            'two - 3',
            'three - 3',
            'four - 3',
            {
              title: 'five - 3 (not centered)',
              props: { textCenter: false }
            }
          ],
          isHoverable: true,
          isRowSelected: false
        }
      ]
    };

    this.rowClickHandler = (event, row, rowProps) => {
      this.setState(prevState => {
        const updatedRows = [...prevState.rows];
        updatedRows[rowProps.rowIndex].isRowSelected = !prevState.rows[rowProps.rowIndex].isRowSelected;
        return {
          rows: updatedRows
        };
      });
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Row click handler table" cells={columns} rows={rows}>
        <TableHeader className={styles.modifiers.nowrap} />
        <TableBody onRowClick={this.rowClickHandler} />
      </Table>
    );
  }
}
```

### Actions and first cell in body rows as th

To use actions you can either specify an array of actions and pass that into the `Table`'s `actions` prop, or for more control you can use the `actionResolver` callback prop to add actions conditionally.

```js
import React from 'react';
import { Table, TableHeader, TableBody, headerCol } from '@patternfly/react-table';
import {
  ButtonVariant,
  Checkbox,
  DropdownToggle,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

class ActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propToUse: 'actions',
      useCustomToggle: false,
      useExtraAction: false,
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last commit'
      ],
      rows: [
        {
          cells: ['a', 'two', 1, 'four', 'five']
        },
        {
          cells: ['disable actions', 'two', 3, 'four', 'five'],
          disableActions: true
        },
        {
          cells: ['green actions', 'two', 4, 'four', 'five'],
          type: 'green'
        },
        {
          cells: ['extra action props', 'two', 5, 'four', 'five'],
          actionProps: {
            'data-specific-attr': 'some-value'
          }
        },
        {
          cells: ['blue actions', 'two', 6, 'four', 'five'],
          type: 'blue'
        }
      ]
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.toggleCustomToggle = this.toggleCustomToggle.bind(this);
    this.toggleExtraAction = this.toggleExtraAction.bind(this);
  }

  /**
   * Use actions or actionResolver, not both
   */
  actions() {
    return [
      {
        title: 'Some action',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
      },
      {
        title: <a href="https://www.patternfly.org">Link action</a>
      },
      {
        isSeparator: true
      },
      {
        title: 'Third action',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on Third action, on row: ', rowId)
      },
      ...(this.state.useExtraAction
        ? [
            {
              title: 'Start',
              variant: ButtonVariant.secondary,
              onClick: (event, rowId, rowData, extra) => console.log('clicked on extra action on row: ', rowId),
              isOutsideDropdown: true
            }
          ]
        : [])
    ];
  }

  /**
   * Use actions or actionResolver, not both
   */
  actionResolver(rowData, { rowIndex }) {
    if (rowIndex === 1) {
      return null;
    }

    const thirdAction = rowData.type
      ? [
          {
            isSeparator: true
          },
          {
            title: `${rowData.type} action`,
            onClick: (event, rowId, rowData, extra) =>
              console.log(`clicked on ${rowData.type} action, on row ${rowId} of type ${rowData.type}`)
          }
        ]
      : [];

    return [
      {
        title: 'actionResolver action',
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`)
      },
      {
        title: <div>Another action</div>,
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`)
      },
      ...thirdAction
    ];
  }

  /**
   * Use actions or actionResolver, not both
   */
  actionResolverWithActions(rowData, { rowIndex }) {
    if (rowIndex === 1) {
      return null;
    }

    const thirdAction = rowData.type
      ? [
          {
            isSeparator: true
          },
          {
            title: `${rowData.type} action`,
            onClick: (event, rowId, rowData, extra) =>
              console.log(`clicked on ${rowData.type} action, on row ${rowId} of type ${rowData.type}`)
          }
        ]
      : [];

    return [
      {
        title: 'Start',
        variant: ButtonVariant.secondary,
        onClick: (event, rowId, rowData, extra) => console.log('clicked on extra action on row: ', rowId),
        isOutsideDropdown: true
      },
      {
        title: 'actionResolver action',
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`)
      },
      {
        title: <div>Another action</div>,
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`)
      },
      ...thirdAction
    ];
  }

  areActionsDisabled(rowData, { rowIndex }) {
    return rowIndex === 3;
  }

  handleItemClick(isSelected, event) {
    const action = event.currentTarget.id;
    this.setState({
      propToUse: action
    });
  }

  toggleCustomToggle(checked) {
    this.setState({
      useCustomToggle: checked
    });
  }

  toggleExtraAction(checked) {
    this.setState({
      useExtraAction: checked
    });
  }

  render() {
    const { columns, rows, propToUse, useCustomToggle, useExtraAction } = this.state;

    const customActionsToggle = props => (
      <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>
        Actions
      </DropdownToggle>
    );

    return (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <ToggleGroup aria-label="actions or actionResolver">
                <ToggleGroupItem
                  text="Use actions prop"
                  buttonId="actions"
                  isSelected={propToUse === 'actions'}
                  onChange={this.handleItemClick}
                />
                <ToggleGroupItem
                  text="Use actionResolver prop"
                  buttonId="actionResolver"
                  isSelected={propToUse === 'actionResolver'}
                  onChange={this.handleItemClick}
                />
              </ToggleGroup>
            </ToolbarItem>
            <ToolbarItem>
              <Checkbox
                label="Use custom actions toggle"
                isChecked={useCustomToggle}
                onChange={this.toggleCustomToggle}
                aria-label="toggle use of custom actions toggle"
                id="toggle-custom-actions-toggle"
                name="toggle-custom-actions-toggle"
              />
            </ToolbarItem>
            <ToolbarItem>
              <Checkbox
                label="Add extra actions"
                isChecked={useExtraAction}
                onChange={this.toggleExtraAction}
                aria-label="toggle extra actions"
                id="toggle-extra-action"
                name="toggle-extra-action"
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Table
          aria-label="Actions table"
          cells={columns}
          rows={rows}
          actions={propToUse === 'actions' ? this.actions() : null}
          {...(propToUse === 'actionResolver' && {
            actionResolver: useExtraAction ? this.actionResolverWithActions : this.actionResolver
          })}
          areActionsDisabled={this.areActionsDisabled}
          dropdownPosition="left"
          dropdownDirection="bottom"
          actionsToggle={useCustomToggle ? customActionsToggle : undefined}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
```

### Expandable

To make an exapandable row, define a child row with the `parent` field set to its parent's row index.
The parent row can have an `isOpen` field for managing the expanded state of the parent row.

Also, pass an `onCollapse` event handler via the prop on the Table

```js
import React from 'react';
import { Table, TableHeader, TableBody, TableVariant, expandable } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

class CompactExpandableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompact: true,
      columns: [
        {
          title: 'ID',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        { title: '' /* deliberately empty */, dataLabel: 'Label for mobile view' }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four']
        },
        {
          isOpen: true,
          cells: ['parent - 1', 'two', 'three', 'four']
        },
        {
          parent: 1,
          cells: ['single cell']
        },
        {
          isOpen: true,
          cells: ['parent - 2', 'two', 'three', 'four']
        },
        {
          parent: 3,
          fullWidth: true,
          cells: ['single cell - fullWidth']
        },
        {
          isOpen: true,
          cells: ['parent - 3', 'two', 'three', 'four']
        },
        {
          parent: 5,
          noPadding: true,
          cells: ['single cell - noPadding']
        },
        {
          isOpen: true,
          cells: ['parent - 4', 'two', 'three', 'four']
        },
        {
          parent: 7,
          noPadding: true,
          fullWidth: true,
          cells: ['single cell - fullWidth & noPadding']
        },
        {
          isOpen: true,
          cells: ['parent - 5', 'two', 'three', 'four']
        },
        {
          parent: 9,
          cells: [
            {
              title: "spans 'Header cell' and 'Branches'",
              props: {
                colSpan: 2
              }
            },
            {
              title: "spans 'Pull requests' and the empty column",
              props: {
                colSpan: 2
              }
            }
          ]
        },
        {
          isOpen: true,
          cells: ['parent - 6', 'two', 'three', 'four']
        },
        {
          parent: 11,
          fullWidth: true,
          cells: [
            {
              title: "fullWidth, spans the collapsible column and 'Header cell'",
              props: {
                colSpan: 2
              }
            },
            {
              title: "fullWidth, spans 'Branches' and 'Pull requests'",
              props: {
                colSpan: 2
              }
            },
            'fullWidth, spans the empty column'
          ]
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.toggleCompact = this.toggleCompact.bind(this);
  }

  onCollapse(event, rowKey, isOpen) {
    const { rows } = this.state;
    /**
     * Please do not use rowKey as row index for more complex tables.
     * Rather use some kind of identifier like ID passed with each row.
     */
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  toggleCompact(checked) {
    this.setState({
      isCompact: checked
    });
  }

  render() {
    const { columns, rows, isCompact } = this.state;

    return (
      <React.Fragment>
        <Checkbox
          label="Compact"
          isChecked={isCompact}
          onChange={this.toggleCompact}
          aria-label="toggle compact variation"
          id="toggle-compact"
          name="toggle-compact"
        />
        <Table
          aria-label="Expandable table"
          variant={isCompact ? TableVariant.compact : null}
          onCollapse={this.onCollapse}
          rows={rows}
          cells={columns}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
```

### Compound expandable

To build a compound expandable table:

1. Pass the `compoundExpand` transformation via the `cellTransforms` field in the column definition for each column that will have an expanded section.
2. For each expandable parent row, the cells in the expandable columns should:
   1. have a managed `isOpen` prop passed to the cell definition
   2. have an `ariaControls` value which matches the `id` of it’s child row
3. For each expandable child row, the row definition needs:
   1. A `parent` field set to its parent’s row index
   2. A `compoundParent` field set to the cell index which will control the expanding/collapsing of this row
4. An `onExpand` event handler prop should be passed to the Table.

```js
import React from 'react';
import { Table, TableHeader, TableBody, compoundExpand } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/Table/composable-table-examples/DemoSortableTable.js
import DemoSortableTable from './DemoSortableTable';

class CompoundExpandableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        'Repositories',
        {
          title: 'Branches',
          cellTransforms: [compoundExpand]
        },
        {
          title: 'Pull requests',
          cellTransforms: [compoundExpand]
        },
        {
          title: 'Workspaces',
          cellTransforms: [compoundExpand]
        },
        'Last Commit',
        {
          title: '',
          dataLabel: 'Action'
        }
      ],
      rows: [
        {
          isOpen: true,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 10
                </React.Fragment>
              ),
              props: { isOpen: true, ariaControls: 'compound-expansion-table-1' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compound-expansion-table-2' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compound-expansion-table-3' }
            },
            '20 minutes',
            { title: <a href="#">Open in Github</a> }
          ]
        },
        {
          parent: 0,
          compoundParent: 1,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-1', 'three', 'four', 'five']}
                  id="compound-expansion-table-1"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-2', 'three', 'four', 'five']}
                  id="compound-expansion-table-2"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-3', 'three', 'four', 'five']}
                  id="compound-expansion-table-3"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          isOpen: false,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 3
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compound-expansion-table-4' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compound-expansion-table-5' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 2
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compound-expansion-table-6' }
            },
            '20 minutes',
            { title: <a href="#">Open in Github</a> }
          ]
        },
        {
          parent: 4,
          compoundParent: 1,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-1', 'three', 'four', 'five']}
                  id="compound-expansion-table-4"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 2,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-2', 'three', 'four', 'five']}
                  id="compound-expansion-table-5"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 3,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-3', 'three', 'four', 'five']}
                  id="compound-expansion-table-6"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        }
      ]
    };
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand(event, rowIndex, colIndex, isOpen, rowData, extraData) {
    const { rows } = this.state;
    if (!isOpen) {
      // set all other expanded cells false in this row if we are expanding
      rows[rowIndex].cells.forEach(cell => {
        if (cell.props) cell.props.isOpen = false;
      });
      rows[rowIndex].cells[colIndex].props.isOpen = true;
      rows[rowIndex].isOpen = true;
    } else {
      rows[rowIndex].cells[colIndex].props.isOpen = false;
      rows[rowIndex].isOpen = rows[rowIndex].cells.some(cell => cell.props && cell.props.isOpen);
    }
    this.setState({
      rows
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Compound expandable table" onExpand={this.onExpand} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### With width and breakpoint visibility modifiers

```js
import React from 'react';
import { Table, TableHeader, TableBody, cellWidth, classNames, Visibility } from '@patternfly/react-table';

class WidthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', transforms: [cellWidth(10)] },
        {
          title: 'Branches (visible only on md)',
          columnTransforms: [
            classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg, Visibility.visibleOn2Xl)
          ]
        },
        {
          title: 'Pull requests (hidden only on md)',
          columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg)]
        },
        {
          title: 'Workspaces (hidden on xs)',
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnSm)]
        },
        {
          title: 'Last commit',
          transforms: [cellWidth(30)]
        }
      ],
      rows: [
        [
          'one - 1',
          'two - 1 (visible only on md)',
          'three - 1 (hidden only on md)',
          'four - 1 (hidden on xs)',
          'five - 1'
        ],
        [
          'one - 2',
          'two - 2 (visible only on md)',
          'three - 2 (hidden only on md)',
          'four - 2 (hidden on xs)',
          'five - 2'
        ]
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Table with width and breakpoint visibility modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Controlling text

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  wrappable,
  truncate,
  nowrap,
  breakWord,
  cellWidth,
  fitContent
} from '@patternfly/react-table';

class ControllingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Truncate (width 20%)', transforms: [cellWidth(20)], cellTransforms: [truncate] },
        { title: 'Break word', cellTransforms: [breakWord] },
        { title: 'Wrapping table header text. This th text will wrap instead of truncate.', transforms: [wrappable] },
        { title: 'Fit content', transforms: [fitContent] },
        { title: '', cellTransforms: [nowrap] }
      ],
      rows: [
        [
          'This text will truncate instead of wrap.',
          { title: <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a> },
          {
            title: (
              <p>
                By default,
                <code>thead</code> cells will truncate and
                <code>tbody</code> cells will wrap. Use
                <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
              </p>
            )
          },
          "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
          { title: <a href="#">No wrap</a> }
        ]
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Controlling text" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Modifiers with table text

```js
import React from 'react';
import { Table, TableHeader, TableBody, TableText, cellWidth } from '@patternfly/react-table';

class ModifiersWithTableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Truncating text', transforms: [cellWidth(30)] },
        { title: 'Wrapping table header text. This th text will wrap instead of truncate.' }
      ],
      rows: [
        [
          { title: <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText> },
          {
            title: (
              <TableText wrapModifier="nowrap">
                <a href="#">This is a link that needs to be on one line and fully readable.</a>
              </TableText>
            )
          }
        ]
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Controlling text" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Empty state

```js
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { Button, EmptyState, EmptyStateBody, Bullseye, Title, EmptyStateIcon } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

EmptyStateTable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    {
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={SearchIcon} />
                <Title headingLevel="h2" size="lg">
                  No results found
                </Title>
                <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>
                <Button variant="link">Clear all filters</Button>
              </EmptyState>
            </Bullseye>
          )
        }
      ]
    }
  ];
  return (
    <React.Fragment>
      <Table caption="Empty State Table Example" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};
```

### Editable rows

To make a table row editable:

1. Pass a callback to Table via the `onRowEdit` prop.
2. Define the title for the editable cells using the RowCellContent type function.
3. Have the function return an `EditableTextCell`.
4. Pass the `value` and `name` of the cell's input to the `EditableTextCell` via the cell's `props` field, which is
   defined as being of type `EditableTextCellProps`.

Example:

```
{
  title: (value, rowIndex, cellIndex, props) => (
    <EditableTextCell
      value={value}
      rowIndex={rowIndex}
      cellIndex={cellIndex}
      props={props}
      handleTextInputChange={this.handleTextInputChange}
      inputAriaLabel="Row 1 cell 1 content"
    />
  ),
  props: {
    value: 'Row 1 cell 1 content',
    name: 'uniqueIdRow1Cell1'
  }
},
```

```js
import React from 'react';
import { SelectOption } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  cancelCellEdits,
  validateCellEdits,
  applyCellEdits,
  EditableTextCell,
  EditableSelectInputCell
} from '@patternfly/react-table';

class EditableRowsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: ['Text input col 1', 'Disabled text input col 2', 'Text input col 3', 'Text input col 4'],
      actions: [
        {
          title: 'Some action',
          onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
        }
      ],
      rows: [
        {
          rowEditBtnAriaLabel: idx => `Edit row ${idx}`,
          rowSaveBtnAriaLabel: idx => `Save edits for row ${idx}`,
          rowCancelBtnAriaLabel: idx => `Cancel edits for row ${idx}`,
          rowEditValidationRules: [
            {
              name: 'required',
              validator: value => value.trim() !== '',
              errorText: 'This field is required'
            }
          ],
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 1 content"
                />
              ),
              props: {
                value: 'Row 1 cell 1 content',
                name: 'uniqueIdRow1Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 1 cell 2 content"
                />
              ),
              props: {
                value: 'Row 1 cell 2, disabled content',
                name: 'uniqueIdRow1Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 3 content"
                />
              ),
              props: {
                value: 'Row 1 cell 3 content',
                name: 'uniqueIdRow1Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => (
                    <SelectOption
                      key={index}
                      value={option.value}
                      id={'uniqueIdRow1Cell4Option' + index}
                      isPlaceholder={option.isPlaceholder}
                    />
                  ))}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Option 1'],
                name: 'uniqueIdRow1Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || ['Option 1'],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'single',
                  'aria-label': 'Row 1 cell 4 content'
                }
              }
            }
          ]
        },
        {
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 1 content"
                />
              ),
              props: {
                value: 'Row 2 cell 1 content',
                name: 'uniqueIdRow2Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 2 cell 2 content"
                />
              ),
              props: {
                value: 'Row 2 cell 2, disabled content',
                name: 'uniqueIdRow2Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 3 content"
                />
              ),
              props: {
                value: 'Row 2 cell 3 content',
                name: 'uniqueIdRow2Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => {
                    return (
                      <SelectOption
                        key={index}
                        value={option.value}
                        id={'uniqueIdRow2Cell4Option' + index}
                        isPlaceholder={option.isPlaceholder}
                      />
                    );
                  })}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Placeholder...'],
                name: 'uniqueIdRow2Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || [],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'typeaheadmulti',
                  'aria-label': 'Row 2 cell 4 content',
                  toggleId: 'editable-toggle'
                }
              }
            }
          ]
        },
        {
          rowEditValidationRules: [
            {
              name: 'required',
              validator: value => value.trim() !== '',
              errorText: 'This field is required'
            },
            {
              name: 'notFoo',
              validator: value => value.trim().toLowerCase() !== 'foo',
              errorText: 'Value cannot be "foo"'
            },
            {
              name: 'minLength',
              validator: value => value.trim().length >= 7,
              errorText: 'Value must be at least 7 characters'
            },
            {
              name: 'notXyz',
              validator: value => value.trim().toLowerCase() !== 'xyz',
              errorText: 'Value cannot be xyz'
            }
          ],
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 3 cell 1 content"
                />
              ),
              props: {
                value: 'Row 3 cell 1 content',
                name: 'uniqueIdRow3Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 3 cell 2 content"
                />
              ),
              props: {
                value: 'Row 3 cell 2, disabled content',
                name: 'uniqueIdRow3Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 3 cell 3 content"
                />
              ),
              props: {
                value: 'Row 3 cell 3 content',
                name: 'uniqueIdRow3Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => (
                    <SelectOption
                      key={index}
                      value={option.value}
                      id={'uniqueIdRow3Cell4Option' + index}
                      isPlaceholder={option.isPlaceholder}
                    />
                  ))}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Option 3'],
                name: 'uniqueIdRow3Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || ['Option 3'],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'checkbox',
                  'aria-label': 'Row 3 cell 4 content'
                }
              }
            }
          ]
        }
      ]
    };

    this.updateEditableRows = (evt, type, isEditable, rowIndex, validationErrors) => {
      let newRows = Array.from(this.state.rows);

      if (validationErrors && Object.keys(validationErrors).length) {
        newRows[rowIndex] = validateCellEdits(newRows[rowIndex], type, validationErrors);
        this.setState({ rows: newRows });
        return;
      }

      if (type === 'cancel') {
        newRows[rowIndex] = cancelCellEdits(newRows[rowIndex]);
        this.setState({ rows: newRows });
        return;
      }

      newRows[rowIndex] = applyCellEdits(newRows[rowIndex], type);

      this.setState({ rows: newRows });
    };

    this.handleTextInputChange = (newValue, evt, rowIndex, cellIndex) => {
      let newRows = Array.from(this.state.rows);
      newRows[rowIndex].cells[cellIndex].props.editableValue = newValue;
      this.setState({
        rows: newRows
      });
    };

    this.onSelect = (newValue, evt, rowIndex, cellIndex, isPlaceholder) => {
      const newRows = Array.from(this.state.rows);
      const newCellProps = newRows[rowIndex].cells[cellIndex].props;

      if (isPlaceholder) {
        newCellProps.editableValue = [];
        newCellProps.selected = [];
      } else {
        if (newCellProps.editableValue === undefined) {
          newCellProps.editableValue = [];
        }

        let newSelected = Array.from(newCellProps.selected);

        switch (newCellProps.editableSelectProps.variant) {
          case 'typeaheadmulti':
          case 'checkbox': {
            if (!newSelected.includes(newValue)) {
              newSelected.push(newValue);
            } else {
              newSelected = newSelected.filter(el => el !== newValue);
            }
            break;
          }
          default: {
            newSelected = newValue;
          }
        }

        newCellProps.editableValue = newSelected;
        newCellProps.selected = newSelected;
      }

      this.setState({
        rows: newRows
      });
    };

    this.clearSelection = (rowIndex, cellIndex) => {
      const newRows = Array.from(this.state.rows);
      const newCellProps = newRows[rowIndex].cells[cellIndex].props;
      newCellProps.editableValue = [];
      newCellProps.selected = [];
      this.setState({
        rows: newRows
      });
    };

    this.onToggle = (isOpen, rowIndex, cellIndex) => {
      let newRows = Array.from(this.state.rows);
      newRows[rowIndex].cells[cellIndex].props.isSelectOpen = isOpen;
      this.setState({
        rows: newRows
      });
    };
  }

  render() {
    const { columns, rows, actions } = this.state;

    return (
      <Table
        actions={actions}
        onRowEdit={this.updateEditableRows}
        aria-label="Editable Rows Table"
        variant={TableVariant.compact}
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

### Favoritable

To enable favoriting of a row, set the `onFavorite` callback prop on the Table.

To control whether a row is favorited or not, the Table looks for `favorited: true | falsy` on the row definition.

When you also pass a sort callback through the `onSort` prop, favorites sorting is also enabled.

If you want to exclude favorites from sorting, set `canSortFavorites={false}` on the Table.

```js
import React from 'react';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

class FavoritesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        'Branches',
        'Pull requests',
        'Workspaces',
        'Last commit'
      ],
      rows: [
        {
          favorited: true,
          // The favorites button has defaults that can be overriden
          favoritesProps: {
            'aria-label': 'Favorited', // Defaults to 'Starred' / 'Not starred'
            id: 'favorites-button-a', // Defaults to `favorites-button-${rowIndex}`
            'aria-labelledby': 'favorites-button-a repository-1' // Defaults to `favorites-button-${rowIndex}`
          },
          cells: ['c', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five'],
          disableSelection: true
        },
        {
          favorited: true,
          cells: ['b', 'two', 'b', 'four', 'five']
        }
      ],
      sortBy: {},
      canSortFavorites: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
    this.onSort = this.onSort.bind(this);
    this.toggleFavsSort = this.toggleFavsSort.bind(this);
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      // header row
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      // body row
      rows = [...this.state.rows];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  onFavorite(event, isFavorited, rowId) {
    this.setState({
      rows: this.state.rows.map((row, index) => {
        if (index === rowId) {
          row.favorited = isFavorited;
          row.favoritesProps = {
            ...row.favoritesProps,
            // Example of how to override the default aria-label of Starred / Not starred
            'aria-label': isFavorited ? 'Favorited' : 'Not favorited'
          };
        }
        return row;
      })
    });
  }

  onSort(_event, index, direction) {
    // index 0 === select column
    // index 1 === favorites column
    // index 2 === first user defined column
    let sortedRows;
    if (index === 1) {
      // favorites column
      sortedRows = this.state.rows.sort((a, b) => {
        if (a.favorited && !b.favorited) {
          return -1;
        } else if (!a.favorited && b.favorited) {
          return 1;
        }
        return 0;
      });
    } else {
      const userIndex = index - 2; // subtract for select and favorites column
      sortedRows = this.state.rows.sort((a, b) =>
        a.cells[userIndex] < b.cells[userIndex] ? -1 : a.cells[userIndex] > b.cells[userIndex] ? 1 : 0
      );
    }
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  toggleFavsSort(checked) {
    this.setState({
      canSortFavorites: checked
    });
  }

  render() {
    const { columns, rows, sortBy, canSortFavorites } = this.state;

    return (
      <div>
        <Checkbox
          label="Can sort favorites"
          isChecked={canSortFavorites}
          onChange={this.toggleFavsSort}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
        />
        <Table
          // using this prop enables the favorites column
          onFavorite={this.onFavorite}
          // if the onSort prop is detected, favorites can be sorted
          // if you want to exclude favorites from sorting you can use this prop with a value of `false`
          canSortFavorites={canSortFavorites}
          onSelect={this.onSelect}
          onSort={this.onSort}
          sortBy={sortBy}
          aria-label="Favoritable Table"
          cells={columns}
          rows={rows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
```

### Tree table

To enable a tree table:

1. Pass the `isTreeTable` prop to the `Table` component
2. Pass the following props to each row:
   - `isExpanded` - Flag indicating the node is expanded and its children are visible
   - `isDetailsExpanded` - (optional) Flag indicating the row's details are visible in responsive view
   - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
   - `aria-level` - number representing how many levels deep this node is nested
   - `aria-posinset` - number representing where in the order this node sits amongst its siblings
   - `aria-setsize` - number representing the number of children this node has
   - `isChecked` - (optional) boolean used if this row uses checkboxes, flag indicating the checkbox checked
   - `icon` - (optional) ReactNode icon to display before the row title
   - `toggleAriaLabel` - (optional) accessible label for the expand/collapse children rows toggle arrow
   - `checkAriaLabel` - (optional) accessible label for the checkbox
   - `showDetailsAriaLabel` - (optional) accessible label for the show row details button in the responsive view
3. Use the `treeRow` cellTransform in the first column of the table. `treeRow` expects one or two callbacks as params.
   - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
   - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
   - `onToggleRowDetails` - (optional) Callback when user shows/hides the row details in responsive view.

Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level,
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.

```js isBeta
import React from 'react';
import { Table, TableHeader, TableBody, headerCol, treeRow } from '@patternfly/react-table';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          repositories: 'Repositories one',
          branches: 'Branch one',
          pullRequests: 'Pull request one',
          workspaces: 'Workplace one',
          children: [
            {
              repositories: 'Repositories two',
              branches: 'Branch two',
              pullRequests: 'Pull request two',
              workspaces: 'Workplace two',
              children: [
                {
                  repositories: 'Repositories three',
                  branches: 'Branch three',
                  pullRequests: 'Pull request three',
                  workspaces: 'Workplace three'
                },
                {
                  repositories: 'Repositories four',
                  branches: 'Branch four',
                  pullRequests: 'Pull request four',
                  workspaces: 'Workplace four'
                }
              ]
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five'
            },
            {
              repositories: 'Repositories six',
              branches: 'Branch six',
              pullRequests: 'Pull request six',
              workspaces: 'Workplace six'
            }
          ]
        },
        {
          repositories: 'Repositories seven',
          branches: 'Branch seven',
          pullRequests: 'Pull request seven',
          workspaces: 'Workplace seven',
          children: [
            {
              repositories: 'Repositories eight',
              branches: 'Branch eight',
              pullRequests: 'Pull request eight',
              workspaces: 'Workplace eight'
            }
          ]
        },
        {
          repositories: 'Repositories nine',
          branches: 'Branch nine',
          pullRequests: 'Pull request nine',
          workspaces: 'Workplace nine'
        }
      ],
      expandedRows: ['Repositories one', 'Repositories six'],
      expandedDetailsRows: [],
      checkedRows: []
    };

    /** 
      Recursive function which flattens the data into an array flattened IRow objects 
      to be passed to the `rows` prop of the Table
      params: 
        - rowData - array of data
        - level - number representing how deeply nested the current row is
        - posinset - position of the row relative to this row's siblings
        - isHidden - defaults to false, true if this row's parent is expanded
    */
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isDetailsExpanded = this.state.expandedDetailsRows.includes(x.repositories);
        const isChecked = this.mapChecked(x);
        let icon = <LeafIcon />;
        if (x.children) {
          icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
        }

        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded,
              isDetailsExpanded,
              isHidden,
              'aria-level': level,
              'aria-posinset': posinset,
              'aria-setsize': x.children ? x.children.length : 0,
              isChecked,
              icon
            }
          },
          ...(x.children && x.children.length ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : []),
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ];
      }
      return [];
    };

    this.onToggleRowDetails = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedDetailsRows } = prevState;
        const openedIndex = expandedDetailsRows.indexOf(title);
        const newExpandedDetailsRows =
          openedIndex === -1 ? [...expandedDetailsRows, title] : expandedDetailsRows.filter(o => o !== title);
        return {
          expandedDetailsRows: newExpandedDetailsRows
        };
      });
    };

    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        };
      });
    };

    this.onCheck = (event, checked, rowIndex, checkedTitle) => {
      this.setState(prevState => {
        let flattenedData = this.getFlattenedTitles(prevState.data, checkedTitle);
        const prevChecked = prevState.checkedRows;
        return {
          checkedRows: checked
            ? prevChecked.concat(flattenedData.filter(title => !prevChecked.includes(title)))
            : prevChecked.filter(title => !flattenedData.includes(title))
        };
      });
    };

    // // helper methods for determining the checkbox's checked state for each row  ///

    /** Recursive function which flattens the data into an array of row titles
     * whose checkboxes' checked states are being updated.
     * Titles are only added to the array if they are the root checked title node,
     * or if they are a descendent of the root checked title node */
    this.getFlattenedTitles = (data, checkedTitle, parentChecked) => {
      let flattenedData = [];
      data.forEach(item => {
        if (item.repositories === checkedTitle || parentChecked) {
          flattenedData.push(item.repositories);
        }
        if (item.children) {
          flattenedData = flattenedData.concat(
            this.getFlattenedTitles(item.children, checkedTitle, item.repositories === checkedTitle || parentChecked)
          );
        }
        return flattenedData;
      });
      return flattenedData;
    };

    this.areAllDescendantsChecked = row =>
      row.children
        ? row.children.every(child => this.areAllDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.areSomeDescendantsChecked = row =>
      row.children
        ? row.children.some(child => this.areSomeDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.mapChecked = row => {
      if (this.areAllDescendantsChecked(row)) {
        return true;
      }
      if (this.areSomeDescendantsChecked(row)) {
        return null;
      }
      return false;
    };
  }

  render() {
    return (
      <Table
        isTreeTable
        aria-label="Tree table"
        cells={[
          {
            title: 'Repositories',
            cellTransforms: [treeRow(this.onCollapse, this.onCheck, this.onToggleRowDetails)]
          },
          'Branches',
          { title: 'Pull requests' },
          'Workspaces'
        ]}
        rows={this.buildRows(this.state.data, 1, 1)}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```
