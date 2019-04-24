---
title: 'Table'
cssPrefix: 'pf-c-table'
---

Note: Table lives in its own package at [`@patternfly/react-table`](https://www.npmjs.com/package/@patternfly/react-table)!

import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth,
  textCenter,
} from '@patternfly/react-table';

## Simple table

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
  expandable,
  cellWidth,
  textCenter,
} from '@patternfly/react-table';

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
        ['one', 'two', 'three', 'four', 'five'],
        [
          {
            title: <div>one - 2</div>,
            props: { title: 'hover title', colSpan: 3 }
          },
          'four - 2',
          'five - 2'
        ],
        [
          'one - 3',
          'two - 3',
          'three - 3',
          'four - 3',
          {
            title: 'five - 3 (not centered)',
            props: { textCenter: false }
          }
        ]
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Sortable table

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
  expandable,
  cellWidth
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
      <Table caption="Sortable Table" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Selectable table

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
  expandable,
  cellWidth
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
      ]
    };
    this.onSelect = this.onSelect.bind(this);
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

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Selectable Table" onSelect={this.onSelect} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Simple actions table

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
  expandable,
  cellWidth
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
          title: <div>Another action</div>,
          onClick: (event, rowId, rowData, extra) => console.log('clicked on Another action, on row: ', rowId)
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
      <Table caption="Actions Table" actions={actions} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Actions table

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
  expandable,
  cellWidth
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
        caption="Actions Table"
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

## First cell as header table

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
  expandable,
  cellWidth
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
      <Table caption="First cell as Header" rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Compact table

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
  expandable,
  cellWidth
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
      <Table caption="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Compact table borderless rows

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
  expandable,
  cellWidth
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
      <Table
        caption="Compact Table with border"
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

## Compact expandable table

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
  expandable,
  cellWidth
} from '@patternfly/react-table';

class ContactExpandableTable extends React.Component {
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
        caption="Compact expandable table"
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

## Table with width modifiers

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
  expandable,
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
      <Table caption="Table with Width Modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Collapsible table

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
  expandable,
  cellWidth
} from '@patternfly/react-table';

class CollapsibleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Header cell',
          cellFormatters: [expandable],
          cellTransforms: [headerCol()]
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
      <Table caption="Collapsible table" onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```
