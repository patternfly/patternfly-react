---
title: 'Table'
cssPrefix: 'pf-c-table'
section: 'components'
typescript: true
propComponents: ['Table', 'TableHeader', 'TableBody']
---

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

import {
  Table,
  TableHeader,
  TableBody,
  TableText,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  compoundExpand,
  cellWidth,
  textCenter,
  wrappable,
  truncate,
  nowrap,
  breakWord,
  fitContent,
  classNames,
  Visibility,
  getErrorTextByValidator,
  cancelCellEdits,
  validateCellEdits,
  applyCellEdits,
  EditableTextCell
} from '@patternfly/react-table';

import {
    Checkbox,
    Button,
    EmptyState,
    EmptyStateBody,
    EmptyStatePrimary,
    Bullseye,
} from '@patternfly/react-core';

import {
  SearchIcon,
  CodeBranchIcon,
  CodeIcon,
  CubeIcon
} from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

import DemoSortableTable from './demo/DemoSortableTable';

## Examples

```js title=Basic

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
} from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
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
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Simple Table" cells={columns} rows={rows}>
        <TableHeader className={css(styles.modifiers.nowrap)}/>
        <TableBody />
      </Table>
    );
  }
}
```


```js title=Row-click-handler
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
} from '@patternfly/react-table';

class RowClickTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces'
      ],
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
    this.rowClickHandler = (event, row) => {
      console.log('handle row click', row);
    }
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Row Click Handler Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody onRowClick={this.rowClickHandler} />
      </Table>
    );
  }
}
```

```js title=Custom-row-wrapper
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody
} from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

class RowWrapperTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces'
      ],
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
    this.customRowWrapper = ({
      trRef,
      className,
      rowProps,
      row: { isExpanded, isHeightAuto },
      ...props
    }) => {
      const isOddRow = (rowProps.rowIndex + 1) % 2;
      const customStyle = {
        borderLeft: '3px solid var(--pf-global--primary-color--100)'
      }
      return (
        <tr
          {...props}
          ref={trRef}
          className={css(
            className,
            (isOddRow ? 'odd-row-class' : 'even-row-class'),
            'custom-static-class',
            isExpanded !== undefined && styles.tableExpandableRow,
            isExpanded && styles.modifiers.expanded,
            isHeightAuto && styles.modifiers.heightAuto
          )}
          hidden={isExpanded !== undefined && !isExpanded}
          style={isOddRow ? customStyle : {}}
        />
      );
    }
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with custom row wrapper that styles odd rows" cells={columns} rows={rows} rowWrapper={this.customRowWrapper}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Sortable
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection
} from '@patternfly/react-table';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        'Branches',
        { title: 'Pull requests', transforms: [sortable] },
        'Workspaces',
        'Last Commit'
      ],
      rows: [['one', 'two', 'a', 'four', 'five'], ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
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

```js title=Sortable-with-wrapping-headers
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  wrappable,
} from '@patternfly/react-table';

class SortableWrappingHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'This is a really long table header that goes on for a long time 1.',
          transforms: [sortable, wrappable]
        },
        {
          title: 'This is a really long table header that goes on for a long time 2.',
          transforms: [sortable, wrappable]
        },
        {
          title: 'This is a really long table header that goes on for a long time 3.',
          transforms: [sortable,wrappable]
        },
        {
          title: 'This is a really long table header that goes on for a long time 4.',
          transforms: [sortable, wrappable]
        },
        {
          title: 'This is a really long table header that goes on for a long time 5.',
          transforms: [sortable, wrappable]
        },
      ],
      rows: [['one', 'two', 'a', 'four', 'five'], ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
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
      <Table aria-label="Sortable with Wrapping Headers" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Selectable
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';
import {
    Checkbox
} from '@patternfly/react-core';

class SelectableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
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
          rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
```

```js title=Simple-actions
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol
} from '@patternfly/react-table';

class SimpleActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five'],
          disableActions: true
        }
      ],
      actions: [
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
      ]
    };
  }

  render() {
    const { columns, rows, actions } = this.state;
    return (
      <Table aria-label="Actions Table" actions={actions} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Actions
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol
} from '@patternfly/react-table';

class ActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five'],
          type: 'green'
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five'],
          type: 'blue'
        },
        {
          cells: ['5', '2', 'b', 'four', 'five']
        }
      ]
    };
  }

  actionResolver(rowData, { rowIndex }) {
    if (rowIndex === 1) {
      return null;
    }

    const thirdAction =
      rowData.type === 'blue'
        ? [
            {
              isSeparator: true
            },
            {
              title: 'Third action',
              onClick: (event, rowId, rowData, extra) =>
                console.log(`clicked on Third action, on row ${rowId} of type ${rowData.type}`)
            }
          ]
        : [];

    return [
      {
        title: 'Some action',
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

  render() {
    const { columns, rows } = this.state;
    return (
      <Table
        aria-label="Actions Table"
        cells={columns}
        rows={rows}
        actionResolver={this.actionResolver}
        areActionsDisabled={this.areActionsDisabled}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=First-cell-as-header
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol
} from '@patternfly/react-table';

class CellHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', cellTransforms: [headerCol('selectable')] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="First cell as Header" rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Compact
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

class CompactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell' },
        'Branches',
        { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } },
        '' // deliberately empty
      ],
      rows: [['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Compact-borderless-rows
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

class CompactTableBorderlessRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell' },
        'Branches',
        { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } },
        '' // deliberately empty
      ],
      rows: [['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        aria-label="Compact Table with borderless rows"
        variant={TableVariant.compact}
        borders={false}
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

```js title=Compact-expandable
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  expandable
} from '@patternfly/react-table';

class CompactExpandableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Header cell',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        '' // deliberately empty
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
          fullWidth: true,
          cells: ['child - 1']
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four']
        },
        {
          parent: 3,
          cells: ['child - 2']
        },
        {
          isOpen: false,
          cells: ['parent - 3', 'two', 'three', 'four']
        },
        {
          parent: 5,
          fullWidth: true,
          noPadding: true,
          cells: ['child - 3']
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
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

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        aria-label="Compact expandable table"
        variant={TableVariant.compact}
        onCollapse={this.onCollapse}
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=With-width-modifiers
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  cellWidth
} from '@patternfly/react-table';

class WidthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', transforms: [cellWidth(10)] },
        'Branches',
        { title: 'Pull requests', transforms: [cellWidth(30)] },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [cellWidth('max')]
        }
      ],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Table with Width Modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Breakpoint-modifiers
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  classNames,
  Visibility
} from '@patternfly/react-table';

class HiddenVisibleBreakpointTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Repositories',
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg, Visibility.visibleOn_2xl)]
        },
        'Branches',
        {
          title: 'Pull requests',
          columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg, Visibility.hiddenOn_2xl)]
        },
        'Workspaces',
        {
          title: 'Last Commit',
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnSm)]
        }
      ],
      rows: [
        ['Visible only on md breakpoint', '10', 'Hidden only on md breakpoint', '5', 'Hidden on xs breakpoint'],
        ['Repository 2', '10', '25', '5', '2 days ago'],
        ['Repository 3', '10', '25', '5', '2 days ago'],
        ['Repository 4', '10', '25', '5', '2 days ago']
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Table with hidden/visible breakpoint modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Collapsible
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  expandable
} from '@patternfly/react-table';

class CollapsibleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Header cell',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit'
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          isOpen: true,
          cells: ['parent - 1', 'two', 'three', 'four', 'five']
        },
        {
          parent: 1,
          fullWidth: true,
          cells: ['child - 1']
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four', 'five']
        },
        {
          parent: 3,
          cells: ['child - 2']
        },
        {
          isOpen: false,
          cells: ['parent - 3', 'two', 'three', 'four', 'five']
        },
        {
          parent: 5,
          fullWidth: true,
          noPadding: true,
          cells: ['child - 3']
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
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

  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Collapsible table" onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

```js title=Compound-expandable
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  compoundExpand
} from '@patternfly/react-table';

import {
  CodeBranchIcon,
  CodeIcon,
  CubeIcon
} from '@patternfly/react-icons';

// https://github.com/patternfly/patternfly-react/blob/master/packages/patternfly-4/react-table/src/components/Table/demo/DemoSortableTable.js
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
        ''
      ],
      rows: [
        {
          isOpen: true,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th'} },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 10
                </React.Fragment>
              ),
              props: { isOpen: true, ariaControls : 'compound-expansion-table-1' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compound-expansion-table-2' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compound-expansion-table-3' }
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
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-1', 'three', 'four','five']} id="compound-expansion-table-1" />,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            {
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-2', 'three', 'four','five']} id="compound-expansion-table-2" />,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            {
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-3', 'three', 'four','five']} id="compound-expansion-table-3" />,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          isOpen: false,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th'} },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 3
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compound-expansion-table-4' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compound-expansion-table-5' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 2
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compound-expansion-table-6' }
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
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-1', 'three', 'four','five']} id="compound-expansion-table-4" />,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 2,
          cells: [
            {
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-2', 'three', 'four','five']} id="compound-expansion-table-5"/>,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 3,
          cells: [
            {
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-3', 'three', 'four','five']} id="compound-expansion-table-6"/>,
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

```js title=Controlling-text
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
  fitContent,
} from '@patternfly/react-table';

class ControllingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'Truncate (width 20%)', transforms: [cellWidth(20)], cellTransforms: [truncate]},
        {title: 'Break word', cellTransforms: [breakWord]},
        {title: 'Wrapping table header text. This th text will wrap instead of truncate.', transforms: [wrappable]},
        {title: 'Fit content', transforms: [fitContent]},
        {title: '', cellTransforms: [nowrap]},
      ],
      rows: [
        [
          'This text will truncate instead of wrap.', 
          {title: <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>}, 
          {title: <p>By default,
            <code>thead</code> cells will truncate and
            <code>tbody</code> cells will wrap. Use
            <code>.pf-m-wrap</code> on a
            <code>th</code> to change its behavior.</p>
          }, 
          'This cell\'s content will adjust itself to the parent th width. This modifier only affects table layouts.', 
          {title: <a href="#">No wrap</a>}
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

```js title=Modifiers-with-table-text
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
  fitContent,
} from '@patternfly/react-table';

class ModifiersWithTableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'Truncating text', transforms: [cellWidth(30)]},
        {title: 'Wrapping table header text. This th text will wrap instead of truncate.'},
      ],
      rows: [
        [ 
          {title: <TableText wrapModifier='truncate'>This text will truncate instead of wrap.</TableText>}, 
          {title: <TableText wrapModifier='nowrap'><a href="#">This is a link that needs to be on one line and fully readable.</a></TableText>},
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

```js title=Empty-state
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { Button, EmptyState, EmptyStateBody, EmptyStatePrimary, Bullseye, Title } from '@patternfly/react-core';
import { EmptyStateIcon } from '@patternfly/react-icons';

EmptyStateTable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last Commit']
  const rows = []
  return (
    <React.Fragment>
    <Table caption="Empty State Table Example" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
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
    </React.Fragment>
  );
}
```

```js title=Editable-rows isBeta
import React from 'react';
import { TextInput } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  getErrorTextByValidator,
  cancelCellEdits,
  validateCellEdits,
  applyCellEdits,
  EditableTextCell
} from '@patternfly/react-table';

class EditableRowsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        'Text input col 1',
        'Disabled text input col 2',
        'Text input col 3',
        'Text input col 4'
      ],
      actions: [{
        title: 'Some action',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
      }],
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
                  inputAriaLabel="Row 1 cell 1 content" />
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
                  inputAriaLabel="Row 1 cell 2 content" />
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
                  inputAriaLabel="Row 1 cell 3 content" />
              ),
              props: {
                value: 'Row 1 cell 3 content',
                name: 'uniqueIdRow1Cell3'
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
                  inputAriaLabel="Row 1 cell 4 content" />
              ),
              props: {
                value: 'Row 1 cell 4 content',
                name: 'uniqueIdRow1Cell4'
              }
            },
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
                  inputAriaLabel="Row 2 cell 1 content" />
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
                  inputAriaLabel="Row 2 cell 2 content" />
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
                  inputAriaLabel="Row 2 cell 3 content" />
              ),
              props: {
                value: 'Row 2 cell 3 content',
                name: 'uniqueIdRow2Cell3'
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
                  inputAriaLabel="Row 2 cell 4 content" />
              ),
              props: {
                value: 'Row 2 cell 4 content',
                name: 'uniqueIdRow2Cell4'
              }
            },
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
                  inputAriaLabel="Row 3 cell 1 content" />
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
                  inputAriaLabel="Row 3 cell 2 content" />
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
                  inputAriaLabel="Row 3 cell 3 content" />
              ),
              props: {
                value: 'Row 3 cell 3 content',
                name: 'uniqueIdRow3Cell3'
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
                  inputAriaLabel="Row 3 cell 4 content" />
              ),
              props: {
                value: 'Row 3 cell 4 content',
                name: 'uniqueIdRow3Cell4'
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
        rows={rows}>
          <TableHeader />
          <TableBody />
      </Table>
    );
  }
}
```
