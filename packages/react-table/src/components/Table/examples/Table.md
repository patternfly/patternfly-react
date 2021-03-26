---
id: Table
cssPrefix: pf-c-table
section: components
propComponents:
  [
    'Table',
    'TableHeader',
    'TableBody',
    'EditableSelectInputCell',
    'EditableTextCell',
    'TableComposable',
    'Thead',
    'Tbody',
    'Tr',
    'Th',
    'Td',
    'Caption',
  ]
ouia: true
---

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

import DemoSortableTable from './DemoSortableTable';

## Table examples

### Basic

The `Table` component is a configuration based component that takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it. For a more explicit and declarative approach, you can use the `TableComposable` component.

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

### Row click handler and header cell tooltips/popovers

Array items for columns provided to the `Table`'s `cells` prop, can be simple strings or objects.

```
cells: (ICell | string)[];
```

ICell (excerpt):

```
interface ICell {
  /* cell contents */
  title?: string | React.ReactNode;
  /** transformations applied to the header cell */
  transforms?: ITransform[];
  /** transformations applied to the cells within the column's body */
  cellTransforms?: ITransform[];
  /** Additional header props, it contains the info prop as well which can be used to add tooltip/popover */
  header?: HeaderType;
}
```

If you wish to pass additional `props`, `formatters`, or add a tooltip/popover, use objects.
Examples:

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

Similarly, the rows array can contain string arrays, or object arrays

```
rows: (IRow | string[])[]
```

IRow (excerpt):

```
interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
}
interface IRowCell {
  title?: string | React.ReactNode;
  props?: any;
  formatters?: IFormatter[];
}
```

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
        ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
        {
          cells: [
            {
              title: <div>one - 2</div>,
              props: { title: 'hover title', colSpan: 3 }
            },
            'four - 2',
            'five - 2'
          ]
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
          ]
        }
      ]
    };
    this.rowClickHandler = (event, row) => {
      console.log('handle row click', row);
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

### Custom row wrapper

```js
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

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
    this.customRowWrapper = ({ trRef, className, rowProps, row: { isExpanded, isHeightAuto }, ...props }) => {
      const isOddRow = (rowProps.rowIndex + 1) % 2;
      const customStyle = {
        borderLeft: '3px solid var(--pf-global--primary-color--100)'
      };
      return (
        <tr
          {...props}
          ref={trRef}
          className={css(
            className,
            isOddRow ? 'odd-row-class' : 'even-row-class',
            'custom-static-class',
            isExpanded !== undefined && styles.tableExpandableRow,
            isExpanded && styles.modifiers.expanded,
            isHeightAuto && styles.modifiers.heightAuto
          )}
          hidden={isExpanded !== undefined && !isExpanded}
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

### Sortable & wrapping headers

Note: If you want to add a tooltip/popover to a sortable header, in the `transforms` array the `info` transform has to precede the `sortable` transform.

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
      sortBy: {}
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

### Selectable

To enable row selection, set the `onSelect` callback prop on the Table.
To control whether a row is selected or not, the Table looks for `selected: true | falsy` on the row definition.
To disable selection for a row, set `disableSelection: true` on the row definition.

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable
} from '@patternfly/react-table';
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
        oneRow.selected = isSelected;
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

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  RowSelectVariant,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable
} from '@patternfly/react-table';

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
    this.toggleSelect = this.toggleSelect.bind(this);
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

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
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

### Actions and first cell in body rows as th

To use actions you can either specify an array of actions and pass that into the `Table`'s `actions` prop, or for more control you can use the `actionResolver` callback prop to add actions conditionally.

```js
import React from 'react';
import { Table, TableHeader, TableBody, headerCol } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class ActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propToUse: 'actions',
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
      }
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

  areActionsDisabled(rowData, { rowIndex }) {
    return rowIndex === 3;
  }

  handleItemClick(isSelected, event) {
    const action = event.currentTarget.id;
    this.setState({
      propToUse: action
    });
  }

  render() {
    const { columns, rows, propToUse } = this.state;
    return (
      <React.Fragment>
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
        <Table
          aria-label="Actions table"
          cells={columns}
          rows={rows}
          actions={propToUse === 'actions' ? this.actions() : null}
          actionResolver={propToUse === 'actionResolver' ? this.actionResolver : null}
          areActionsDisabled={this.areActionsDisabled}
          dropdownPosition="left"
          dropdownDirection="bottom"
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

```js
import React from 'react';
import { Table, TableHeader, TableBody, compoundExpand } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/master/packages/react-table/src/components/Table/examples/DemoSortableTable.js
import DemoSortableTable from './demo/DemoSortableTable';

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
import {
  Table,
  TableHeader,
  TableBody,
  TableText,
  wrappable,
  truncate,
  nowrap,
  breakWord,
  cellWidth,
  fitContent
} from '@patternfly/react-table';

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
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStatePrimary,
  Bullseye,
  Title,
  EmptyStateIcon
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

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
                <EmptyStateBody>
                  No results match the filter criteria. Remove all filters or clear all filters to show results.
                </EmptyStateBody>
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

```js isBeta
import React from 'react';
import { TextInput, SelectOption } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  getErrorTextByValidator,
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
When you also pass a sort callback through the `onSort` prop, favorites sorting is also enabled. If you want to exclude favorites from sorting, set `canSortFavorites={false}` on the Table.

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable
} from '@patternfly/react-table';
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

### Tree Table
To enable a tree table:
1. Pass the `isTreeTable` prop to the `Table` component
2. Pass the following props to each row:
    - `isExpanded` - Flag indicating the node is expanded and its children are visible
    - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
    - `level` - number representing how many levels deep this node is nested
    - `posinset` - number representing where in the order this node sits amongst its siblings 
    - `setsize` - number representing the number of children this node has
    - `isChecked` - (optional) if this row uses checkboxes, flag indicating the checkbox checked
3. Use the `treeRow` cellTransform in the first column of the table. `treeRow` expects one or two callbacks as params.
    - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
    - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.

```js
import React from 'react';
import { Table, TableHeader, TableBody, headerCol, treeRow } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

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
                  workspaces: 'Workplace three',
                }
              ]
            },
            {
              repositories: 'Repositories four',
              branches: 'Branch four',
              pullRequests: 'Pull request four',
              workspaces: 'Workplace four',
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five',
            }
          ]
        },
        {
          repositories: 'Repositories six',
          branches: 'Branch six',
          pullRequests: 'Pull request six',
          workspaces: 'Workplace six',
          children: [
            {
              repositories: 'Repositories seven',
              branches: 'Branch seven',
              pullRequests: 'Pull request seven',
              workspaces: 'Workplace seven'
            }
          ]
        },
        {
          repositories: 'Repositories eight',
          branches: 'Branch eight',
          pullRequests: 'Pull request eight',
          workspaces: 'Workplace eight'
        }
      ],
      expandedRows: ['Repositories one', 'Repositories six'],
      checkedRows: []
    };
    
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isChecked = this.state.checkedRows.includes(x.repositories);
        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded: isExpanded,
              isHidden,
              level: level,
              posinset: posinset,
              setsize: x.children ? x.children.length : 0,
              isChecked: isChecked
            }
          },
          ...(x.children && x.children.length) ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : [],
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ]
      } 
      return [];
    };
    
    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        }
      });
    };
    
    this.onCheckChange = (event, checked, rowIndex, title) => {
      this.setState(prevState => {
        const { checkedRows } = prevState;
        const checkedIndex = checkedRows.indexOf(title);
        const newCheckedRows = checkedIndex === -1 ? [...checkedRows, title] : checkedRows.filter(o => o !== title);
        return {
          checkedRows: newCheckedRows
        }
      });
    }
  }

  render() {
    return (
      <Table
        isTreeTable
        aria-label="Tree Table"
        cells={[
          { title: 'Repositories', cellTransforms: [headerCol(), treeRow(this.onCollapse, this.onCheckChange)] }, 
          'Branches', 
          { title: 'Pull requests' }, 
          'Workspaces']}
        rows={this.buildRows(this.state.data, 1, 1)}        
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## TableComposable examples

### Composable: Basic

A basic example using the composable table components. The `TableComposable` component differs from the regular `Table` component, in that it allows you to compose the table by nesting the relevant `Thead`, `Tbody`, `Tr`, `Th` and `Td` components within it. For a less declarative and more implicit approach, use the `Table` component instead.

Some general notes:

- Provide `dataLabel` prop to the `Td` components so that in mobile view the cell has a label to provide context.
- If you want a table caption, simply place a `<Caption>My caption</Caption>` as the first child within a `TableComposable`.
- You can set the `TableComposable` variant to `compact`

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, Caption } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableBasic = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  const [choice, setChoice] = React.useState('default');
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setChoice(id);
  };
  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Default"
          buttonId="default"
          isSelected={choice === 'default'}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          text="Compact"
          buttonId="compact"
          isSelected={choice === 'compact'}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          text="Compact borderless"
          buttonId="compactBorderless"
          isSelected={choice === 'compactBorderless'}
          onChange={handleItemClick}
        />
      </ToggleGroup>
      <TableComposable
        aria-label="Simple table"
        variant={choice !== 'default' ? 'compact' : null}
        borders={choice !== 'compactBorderless'}
      >
        <Caption>Simple table using composable components</Caption>
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
```

### Composable: Row click handler, custom row wrapper, header tooltips & popovers

This example demonstrates customizing rows, adding tooltip and popover information to header items, and some other misc. props.

- If you add the `noWrap` prop to `Thead`, it won't wrap it if there is no space
- You can add the `textCenter` prop to `Th` or `Td` to center the contents
- You can pass `onClick`, `className`, `style` and more to `Tr`

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableMisc = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    [{ title: 'one - 2', colSpan: 3 }, null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', { title: 'five - 3 (not centered)', textCenter: false }]
  ];
  const onRowClick = (event, rowIndex, row) => {
    console.log(`handle row click ${rowIndex}`, row);
  };
  return (
    <TableComposable aria-label="Misc table">
      <Thead noWrap>
        <Tr>
          <Th
            info={{
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            }}
          >
            {columns[0]}
          </Th>
          <Th>{columns[1]}</Th>
          <Th
            info={{
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
            }}
          >
            {columns[2]}
          </Th>
          <Th>{columns[3]}</Th>
          <Th textCenter>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            borderLeft: '3px solid var(--pf-global--primary-color--100)'
          };
          return (
            <Tr
              key={rowIndex}
              onClick={event => onRowClick(event, rowIndex, row)}
              className={isOddRow ? 'odd-row-class' : 'even-row-class'}
              style={isOddRow ? customStyle : {}}
            >
              {row.map((cell, cellIndex) => {
                if (!cell) {
                  return null;
                }
                let cellObject;
                if (typeof cell !== 'object') {
                  cellObject = {
                    title: cell
                  };
                } else {
                  cellObject = cell;
                }
                const { title, ...rest } = cellObject;
                return (
                  <Td
                    key={`${rowIndex}_${cellIndex}`}
                    dataLabel={columns[cellIndex]}
                    textCenter={cellIndex === row.length - 1}
                    {...rest}
                  >
                    {title}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Sortable & wrapping headers

This example demonstrates making columns sortable, and wrapping header text.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSortable = () => {
  const columns = [
    'This is a really long table header that goes on for a long time 1.',
    'This is a really long table header that goes on for a long time 2.',
    'This is a really long table header that goes on for a long time 3.',
    'This is a really long table header that goes on for a long time 4.',
    'This is a really long table header that goes on for a long time 5.'
  ];
  const [rows, setRows] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (typeof a[index] === 'number') {
        // numeric sort
        if (direction === 'asc') {
          return a[index] - b[index];
        }
        return b[index] - a[index];
      } else {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
      }
    });
    setRows(updatedRows);
  };
  return (
    <TableComposable aria-label="Sortable Table">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => {
            // In this example, wrap all but the first column just to demonstrate
            const modifier = columnIndex !== 0 ? 'wrap' : null;
            // In this example, make the 1st and 3rd columns sortable
            const sortParams =
              columnIndex === 0 || columnIndex === 2
                ? {
                    sort: {
                      sortBy: {
                        index: activeSortIndex,
                        direction: activeSortDirection
                      },
                      onSort,
                      columnIndex
                    }
                  }
                : {};
            const infoParams =
              columnIndex === 2
                ? {
                    info: {
                      tooltip: 'More information'
                    }
                  }
                : {};
            return (
              <Th key={columnIndex} modifier={modifier} {...sortParams} {...infoParams}>
                {column}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Selectable

This example demonstrates row selection. The selection column is just another column, but with selection specific props added. We add it as the first header cell and also as the first body cell for each row.
Be sure to also add `rowIndex` to `Td`.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSelectable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ];
  const [allRowsSelected, setAllRowsSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(rows.map(row => false));
  const onSelect = (event, isSelected, rowId) => {
    setSelected(selected.map((sel, index) => (index === rowId ? isSelected : sel)));
    if (!isSelected && allRowsSelected) {
      setAllRowsSelected(false);
    } else if (isSelected && !allRowsSelected) {
      let allSelected = true;
      for (let i = 0; i < selected.length; i++) {
        if (i !== rowId) {
          if (!selected[i]) {
            allSelected = false;
          }
        }
      }
      if (allSelected) {
        setAllRowsSelected(true);
      }
    }
  };
  const onSelectAll = (event, isSelected) => {
    setAllRowsSelected(isSelected);
    setSelected(selected.map(sel => isSelected));
  };
  return (
    <TableComposable aria-label="Selectable Table">
      <Thead>
        <Tr>
          <Th
            select={{
              onSelect: onSelectAll,
              isSelected: allRowsSelected
            }}
          />
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              key={`${rowIndex}_0`}
              select={{
                rowIndex,
                onSelect,
                isSelected: selected[rowIndex],
                disable: rowIndex === 1
              }}
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <Td key={`${rowIndex}_${shiftedIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Selectable radio input

Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has radio button props. Just as with selectable, be sure to also add `rowIndex` to `Td`.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSelectableRadio = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ];
  const [selected, setSelected] = React.useState(-1);
  const onSelect = (event, isSelected, rowId) => {
    setSelected(rowId);
  };
  return (
    <TableComposable aria-label="Radio selectable table">
      <Thead>
        <Tr>
          <Th />
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              key={`${rowIndex}_0`}
              select={{
                rowIndex,
                onSelect,
                isSelected: selected === rowIndex,
                disable: rowIndex === 1,
                variant: 'radio'
              }}
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <Td key={`${rowIndex}_${shiftedIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Actions

This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableActions = () => {
  const defaultActions = [
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
    }
  ];
  const lastRowActions = [
    {
      title: 'Some action',
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Some action, on row ${rowId}`)
    },
    {
      title: <div>Another action</div>,
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Another action, on row ${rowId}`)
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Third action, on row ${rowId}`)
    }
  ];
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ];
  return (
    <TableComposable aria-label="Actions table">
      <Thead>
        <Tr>
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
            <Td
              key={`${rowIndex}_5`}
              actions={{
                items: rowIndex === 1 ? null : rowIndex === 4 ? lastRowActions : defaultActions,
                disable: rowIndex === 3
              }}
            />
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Expandable

This example demonstrates having expandable rows.

- Each parent/child row pair is enclosed in a `Tbody` component.
- You can make the table more compact by setting the `TableComposable` variant to `compact`.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

ComposableTableExpandable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rowPairs = [
    { parent: ['one', 'two', 'a', 'four', 'five'], child: null },
    {
      parent: ['parent 1', 'two', 'k', 'four', 'five'],
      child: ['single cell']
    },
    {
      parent: ['parent 2', 'two', 'b', 'four', 'five'],
      child: ['single cell - fullWidth'],
      fullWidth: true
    },
    {
      parent: ['parent 3', '2', 'b', 'four', 'five'],
      child: ['single cell - noPadding'],
      noPadding: true
    },
    {
      parent: ['parent 4', '2', 'b', 'four', 'five'],
      child: ['single cell - fullWidth & noPadding'],
      fullWidth: true,
      noPadding: true
    },
    {
      parent: ['parent 5', '2', 'b', 'four', 'five'],
      child: ["spans 'Repositories' and 'Branches'", "spans 'Pull requests' and 'Workspaces', and 'Last commit'"]
    },
    {
      parent: ['parent 6', '2', 'b', 'four', 'five'],
      child: [
        "fullWidth, spans the collapsible column and 'Repositories'",
        "fullWidth, spans 'Branches' and 'Pull requests'",
        "fullWidth, spans 'Workspaces' and 'Last commit'"
      ],
      fullWidth: true
    }
  ];
  const numColumns = columns.length;
  // Init all to true
  const [expanded, setExpanded] = React.useState(
    Object.fromEntries(Object.entries(rowPairs).map(([k, v]) => [k, Boolean(v.child)]))
  );
  const [compact, setCompact] = React.useState(true);
  const toggleCompact = checked => {
    setCompact(checked);
  };
  const handleExpansionToggle = (event, pairIndex) => {
    setExpanded({
      ...expanded,
      [pairIndex]: !expanded[pairIndex]
    });
  };
  let rowIndex = -1;
  return (
    <React.Fragment>
      <Checkbox
        label="Compact"
        isChecked={compact}
        onChange={toggleCompact}
        aria-label="toggle compact variation"
        id="toggle-compact"
        name="toggle-compact"
      />
      <TableComposable aria-label="Expandable Table" variant={compact ? 'compact' : null}>
        <Thead>
          <Tr>
            <Th />
            <Th>{columns[0]}</Th>
            <Th>{columns[1]}</Th>
            <Th>{columns[2]}</Th>
            <Th>{columns[3]}</Th>
            <Th>{columns[4]}</Th>
          </Tr>
        </Thead>
        {rowPairs.map((pair, pairIndex) => {
          rowIndex += 1;
          const parentRow = (
            <Tr key={rowIndex}>
              <Td
                key={`${rowIndex}_0`}
                expand={
                  pair.child
                    ? {
                        rowIndex: pairIndex,
                        isExpanded: expanded[pairIndex],
                        onToggle: handleExpansionToggle
                      }
                    : null
                }
              />
              {pair.parent.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          );
          if (pair.child) {
            rowIndex += 1;
          }
          const childRow = pair.child ? (
            <Tr key={rowIndex} isExpanded={expanded[pairIndex] === true}>
              {!rowPairs[pairIndex].fullWidth && <Td key={`${rowIndex}_0`} />}
              {rowPairs[pairIndex].child.map((cell, cellIndex) => {
                const numChildCells = rowPairs[pairIndex].child.length;
                const shift = rowPairs[pairIndex].fullWidth ? 1 : 0;
                const shiftedCellIndex = cellIndex + shift;
                // some examples of how you could customize colSpan based on your needs
                const getColSpan = () => {
                  // we have 6 columns (1 expandable column + 5 regular columns)
                  // for the rowPairs where we've specificed `fullWidth`, add +1 to account for the expandable column
                  let colSpan = 1;
                  if (numChildCells === 1) {
                    // single child cell: take up full width
                    colSpan = numColumns + shift;
                  } else if (numChildCells === 2) {
                    // 2 children
                    // child 1: 2 colspan
                    // child 2: 3 or 4 colspan depending on fullWidth
                    colSpan = cellIndex === 0 ? 2 : 3 + shift;
                  } else if (numChildCells === 3) {
                    // 3 children
                    // child 1: 2 colspam
                    // child 2: 2 colspan
                    // child 3: 1 or 2 colspan depending on fullWidth
                    colSpan = cellIndex === 2 ? 1 + shift : 2;
                  }
                  return colSpan;
                };
                return (
                  <Td
                    key={`${rowIndex}_${shiftedCellIndex}`}
                    dataLabel={columns[cellIndex]}
                    noPadding={rowPairs[pairIndex].noPadding}
                    colSpan={getColSpan()}
                  >
                    <ExpandableRowContent>{cell.title || cell}</ExpandableRowContent>
                  </Td>
                );
              })}
            </Tr>
          ) : null;
          return (
            <Tbody key={pairIndex} isExpanded={expanded[pairIndex] === true}>
              {parentRow}
              {childRow}
            </Tbody>
          );
        })}
      </TableComposable>
    </React.Fragment>
  );
};
```

### Composable: Compound expandable

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/master/packages/react-table/src/components/Table/examples/DemoSortableTable.js
import DemoSortableTable from './demo/DemoSortableTable';

ComposableCompoundExpandableTable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
  const rows = [
    ['siemur/test-space', 10, 4, 4, '20 minutes', 'Open in Github'],
    ['siemur/test-space', 3, 4, 2, '10 minutes', 'Open in Github']
  ];
  // index corresponds to row index, and value corresponds to column index of the expanded, null means no cell is expanded
  const [activeChild, setActiveChild] = React.useState([1, null]);
  // key = row_col of the parent it corresponds to
  const childData = {
    '0_1': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-1', 'three', 'four', 'five']}
          id="compound-expansion-table-0_1"
          key="0_1"
        />
      )
    },
    '0_2': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-2', 'three', 'four', 'five']}
          id="compound-expansion-table-0_2"
          key="0_2"
        />
      )
    },
    '0_3': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-3', 'three', 'four', 'five']}
          id="compound-expansion-table-0_3"
          key="0_3"
        />
      )
    },
    '1_1': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-1', 'three', 'four', 'five']}
          id="compound-expansion-table-1_1"
          key="1_1"
        />
      )
    },
    '1_2': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-2', 'three', 'four', 'five']}
          id="compound-expansion-table-1_2"
          key="1_2"
        />
      )
    },
    '1_3': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-3', 'three', 'four', 'five']}
          id="compound-expansion-table-1_3"
          key="1_3"
        />
      )
    }
  };
  const customRender = (cell, index) => {
    if (index === 0) {
      return <a href="#">{cell}</a>;
    } else if (index === 1) {
      return (
        <React.Fragment>
          <CodeBranchIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 2) {
      return (
        <React.Fragment>
          <CodeIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 3) {
      return (
        <React.Fragment>
          <CubeIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 5) {
      return <a href="#">{cell}</a>;
    }
    return cell;
  };
  const isCompoundExpanded = (rowIndex, cellIndex) => {
    // only columns 1 - 3 are compound expansion toggles in this example
    if (1 <= cellIndex && cellIndex <= 3) {
      return activeChild[rowIndex] === cellIndex;
    }
    return null;
  };
  return (
    <TableComposable aria-label="Compound expandable table">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      {rows.map((row, rowIndex) => {
        const isRowExpanded = activeChild[rowIndex] !== null;
        return (
          <Tbody key={rowIndex} isExpanded={isRowExpanded}>
            <React.Fragment>
              <Tr>
                {row.map((cell, cellIndex) => {
                  // for this example, only columns 1 - 3 are clickable
                  const compoundExpandParams =
                    1 <= cellIndex && cellIndex <= 3
                      ? {
                          compoundExpand: {
                            isExpanded: isCompoundExpanded(rowIndex, cellIndex),
                            onToggle: () => {
                              if (activeChild[rowIndex] === cellIndex) {
                                // closing the expansion on the current toggle
                                // set the corresponding item to null
                                const updatedActiveChild = activeChild.map((item, index) =>
                                  index === rowIndex ? null : item
                                );
                                setActiveChild(updatedActiveChild);
                              } else {
                                // expanding
                                // set the corresponding cell index
                                const updatedActiveChild = activeChild.map((item, index) =>
                                  index === rowIndex ? cellIndex : item
                                );
                                setActiveChild(updatedActiveChild);
                              }
                            }
                          }
                        }
                      : {};
                  return (
                    <Td
                      key={`${rowIndex}_${cellIndex}`}
                      dataLabel={columns[cellIndex]}
                      component={cellIndex === 0 ? 'th' : 'td'}
                      {...compoundExpandParams}
                    >
                      {customRender(cell, cellIndex)}
                    </Td>
                  );
                })}
              </Tr>
              {isRowExpanded && (
                <Tr key={`${rowIndex}-child`} isExpanded={isRowExpanded}>
                  <Td dataLabel={columns[0]} noPadding colSpan={6}>
                    <ExpandableRowContent>
                      {childData[`${rowIndex}_${activeChild[rowIndex]}`].component}
                    </ExpandableRowContent>
                  </Td>
                </Tr>
              )}
            </React.Fragment>
          </Tbody>
        );
      })}
    </TableComposable>
  );
};
```

### Composable: Cell width, breakpoint modifiers

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableCellWidth = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  return (
    <TableComposable aria-label="Cell widths">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th
              key={columnIndex}
              width={columnIndex === 2 ? 40 : 15}
              visibility={columnIndex === 2 ? ['hiddenOnMd', 'visibleOnLg'] : null}
            >
              {column}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td
                key={`${rowIndex}_${cellIndex}`}
                dataLabel={columns[cellIndex]}
                visibility={cellIndex === 2 ? ['hiddenOnMd', 'visibleOnLg'] : null}
              >
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Controlling text

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableControllingText = () => {
  const columns = [
    'Truncate (width 20%)',
    'Break word',
    'Wrapping table header text. This th text will wrap instead of truncate.',
    'Fit content',
    'No wrap'
  ];
  const rows = [
    [
      'This text will truncate instead of wrap.',
      <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>,
      <p>
        By default,
        <code>thead</code> cells will truncate and
        <code>tbody</code> cells will wrap. Use
        <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
      </p>,
      "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
      <a href="#">No wrap</a>
    ]
  ];
  return (
    <TableComposable aria-label="Controlling text">
      <Thead>
        <Tr>
          <Th width={20}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th modifier="wrap">{columns[2]}</Th>
          <Th modifier="fitContent">{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td dataLabel={columns[0]} modifier="truncate">
              {row[0]}
            </Td>
            <Td dataLabel={columns[1]} modifier="breakWord">
              {row[1]}
            </Td>
            <Td dataLabel={columns[2]}>{row[2]}</Td>
            <Td dataLabel={columns[3]}>{row[3]}</Td>
            <Td dataLabel={columns[4]} modifier="nowrap">
              {row[4]}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Modifiers with table text

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, TableText } from '@patternfly/react-table';

ComposableTableText = () => {
  const columns = ['Truncating text', 'Wrapping table header text. This th text will wrap instead of truncate.'];
  const rows = [
    [
      <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText>,
      <TableText wrapModifier="nowrap">
        <a href="#">This is a link that needs to be on one line and fully readable.</a>
      </TableText>
    ]
  ];
  return (
    <TableComposable aria-label="Table text">
      <Thead>
        <Tr>
          <Th width={30}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Favoritable

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableFavoritable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const [rows, setRows] = React.useState([
    { favorited: true, cells: ['one', 'two', 'three', 'four', 'five'] },
    { favorited: false, cells: ['one - 2', null, null, 'four - 2', 'five - 2'] },
    { favorited: false, cells: ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3'] }
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (a.favorited && !b.favorited) {
        return 1;
      } else if (!a.favorited && b.favorited) {
        return -1;
      }
      return 0;
    });
    setRows(direction === 'asc' ? updatedRows : updatedRows.reverse());
  };
  const sortParams = {
    sort: {
      isFavorites: true,
      sortBy: {
        index: activeSortIndex,
        direction: activeSortDirection
      },
      onSort,
      columnIndex: 0
    }
  };
  return (
    <TableComposable aria-label="Favoritable table" variant={'compact'}>
      <Thead>
        <Tr>
          <Th {...sortParams} />
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              favorites={{
                isFavorited: row.favorited,
                onFavorite: (event, isFavorited) =>
                  setRows(
                    rows.map((row, index) => {
                      if (index === rowIndex) {
                        row.favorited = isFavorited;
                      }
                      return row;
                    })
                  ),
                rowIndex
              }}
            />
            {row.cells.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Tree Table

To enable a tree table:
1. Pass the `isTreeTable` prop to the `TableComposable` component
2. Use a `TreeRowWrapper` rather than `Tr`
3. Pass the following `props` to each row (both the `TreeRowWrapper` and the `treeRow` in the first column):
    - `isExpanded` - Flag indicating the node is expanded and its children are visible
    - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
    - `level` - number representing how many levels deep this node is nested
    - `posinset` - number representing where in the order this node sits amongst its siblings 
    - `setsize` - number representing the number of children this node has
    - `isChecked` - (optional) if this row uses checkboxes, flag indicating the checkbox checked
4. The first `Td` in each row will pass the following to the `treeRow` prop:
    - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
    - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
    - `props` - (as defined above)
    - `rowIndex` - number representing the index of the row

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, Caption, TreeRowWrapper } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

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
                  workspaces: 'Workplace three',
                }
              ]
            },
            {
              repositories: 'Repositories four',
              branches: 'Branch four',
              pullRequests: 'Pull request four',
              workspaces: 'Workplace four',
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five',
            }
          ]
        },
        {
          repositories: 'Repositories six',
          branches: 'Branch six',
          pullRequests: 'Pull request six',
          workspaces: 'Workplace six',
          children: [
            {
              repositories: 'Repositories seven',
              branches: 'Branch seven',
              pullRequests: 'Pull request seven',
              workspaces: 'Workplace seven'
            }
          ]
        },
        {
          repositories: 'Repositories eight',
          branches: 'Branch eight',
          pullRequests: 'Pull request eight',
          workspaces: 'Workplace eight'
        }
      ],
      expandedRows: ['Repositories one', 'Repositories six'],
      checkedRows: []
    };
    
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isChecked = this.state.checkedRows.includes(x.repositories);
        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded: isExpanded,
              isHidden,
              level: level,
              posinset: posinset,
              setsize: x.children ? x.children.length : 0,
              isChecked: isChecked
            }
          },
          ...(x.children && x.children.length) ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : [],
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ]
      } 
      return [];
    };
    
    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        }
      });
    };
    
    this.onCheckChange = (event, checked, rowIndex, title) => {
      this.setState(prevState => {
        const { checkedRows } = prevState;
        const checkedIndex = checkedRows.indexOf(title);
        const newCheckedRows = checkedIndex === -1 ? [...checkedRows, title] : checkedRows.filter(o => o !== title);
        return {
          checkedRows: newCheckedRows
        }
      });
    }
  }

  render() {
  
    const columns = ['Repositories', 'Branches', 'Pull Requests', 'Workspaces'];
    return (
      <TableComposable isTreeTable aria-label="Tree Table">
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {this.buildRows(this.state.data, 1, 1).map((row, rowIndex) => (
            <TreeRowWrapper row={row} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => cellIndex === 0 ? (
                <Td key={cellIndex} treeRow={{
                  onCollapse: this.onCollapse, 
                  onCheckChange: this.onCheckChange,
                  props: row.props,
                  rowIndex: rowIndex
                }}>
                  {cell}
                </Td>
              ) : (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </TreeRowWrapper>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
```
