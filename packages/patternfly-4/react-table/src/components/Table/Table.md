---
title: 'Table'
cssPrefix: 'pf-c-table'
section: 'components'
typescript: true
propComponents: ['Table', 'TableHeader', 'TableBody']
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
  compoundExpand,
  cellWidth,
  textCenter,
  wrappable,
  classNames,
  Visibility
} from '@patternfly/react-table';

import {
  CodeBranchIcon,
  CodeIcon,
  CubeIcon
} from '@patternfly/react-icons';

import DemoSortableTable from './demo/DemoSortableTable';

## Simple table

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
} from '@patternfly/react-table';

function SimpleTable() {
  const cells = [
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last Commit'
  ];
  const rows = [
    ['Foo', 2, 0, 6, 1533635470],
    ['Bar', 1, 11, 2, 1564566670],
    ['Baz', 6, 4, 99, 1565167870],    
  ];

  return (
    <Table caption="Simple Table" cells={cells} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}
```

## Cell/row options

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  cellWidth,
  textCenter,
} from '@patternfly/react-table';

function SimpleCustomTable() {
  const cells = [
    // Equivalent to just passing the string
    { title: 'Repositories' }, 
    'Branches',
    { title: 'Pull requests' },
    'Workspaces',
    // Will run the `transform` functions on the header, and the 
    // `cellTransforms` on the cells. Transformers are used to inject
    // extra props to the the cell component. In this case we use the
    // builtin `textCenter` transformer to instruct the cell to apply
    // the required stylings to center the cell content.
    {
      title: 'Last Commit',
      transforms: [textCenter],
      cellTransforms: [textCenter]
    }
  ];
  const rows = [
    ['Foo', 2, 0, 6, 1533635470],
    [
      // Cell content can also be defined as a JSX element.
      // Extra props can be passed to the cell (the `td` element).
      {
        title: <div>Bar 👾</div>,
        props: { title: 'hover title', colSpan: 3 }
      },
      2,
      {
        title: <div>1564566670</div>
      }
    ],
    [
      'Baz', 
      6, 
      4, 
      99,
      // In this example, we disable the default cellTransform for this specific cell, setting the `textCenter` prop to `false`.
      {
        title: '1565167870 (not centered)',
        props: { textCenter: false }
      }
    ]
  ];

  return (
    <Table caption="Cell/rows options" cells={cells} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}
```

## Cell formatters

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter
} from '@patternfly/react-table';
import {
  CheckIcon,
  TimesIcon
} from '@patternfly/react-icons';

function CellFormatters() {
  const rows = [
    ['Foo', 1533635470, 1],
    ['Bar', 1564566670, 0],
    ['Baz', 1565167870, 1],    
  ];

  // A component that displays a CI build status.
  // *Heads-up* - this component definition should *not* stay inside
  // the main component function in a real world application; it's
  // done this way in this example as a work-around against the 
  // limitation of one component per example of the documentation
  // system in use.
  const CIStatusIcon = ({ passing }) => {
    const styles = {
      color: passing 
        ? 'var(--pf-global--success-color--200)' 
        : 'var(--pf-global--danger-color--100)'
    };
    const icon = passing ? <CheckIcon /> : <TimesIcon />;
    const text = passing ? 'Passing' : 'Failing';
    return (
      <div style={styles}>
        {icon} {text}
      </div>
    );
  };

  // Last commit comes as a unix timestamp (in seconds). We specify
  // a formatter that convert it to something readable by humans.
  const lastCommitTimestampToLocalHuman = (value, extraProps) => {
    return new Date(value * 1000).toLocaleString();
  }

  // CI Status comes as a boolean value. We specify a formatter that
  // passes the value to the `CIStatusIcon` we wrote.
  const statusToIcon = (value, extraProps) => {
    return <CIStatusIcon passing={value} />;
  }

  const cells = [
    'Repositories',
    {
      title: 'Last Commit',
      cellFormatters: [lastCommitTimestampToLocalHuman]
    },
    {
      title: 'CI Status',
      cellFormatters: [statusToIcon],
      // We apply some transforms to both the header and the cell, to make
      // it centered. 
      transforms: [textCenter],
      cellTransforms: [textCenter]
    }
  ];

  return (
    <Table caption="Cell formatters" cells={cells} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
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
  SortHelpers,
  useSortableRows
} from '@patternfly/react-table';

function SortableTable () {
  const rows = [
    ['Foo', 2, 0, 6, 1533635470],
    ['Bar', 1, 11, 2, { title: <div>⏰ 1564566670</div>, value: 1564566670 }],
    ['Baz', 6, 4, 99, 1565167870],
    ['Qux', undefined, 4, undefined, 1565167870],
  ];
  
  const sortLastCommit = (a, b, aObj, bObj) => {
    a = aObj.value || a;
    b = bObj.value || b;
    return SortHelpers.numbers(a, b); 
  }; 

  const cells = [
    { title: 'Repositories', transforms: [sortable(SortHelpers.strings)] },
    { title: 'Branches', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Pull requests', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Workspaces', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Last Commit', transforms: [sortable(sortLastCommit)] }
  ];

  const [sortedRows, onSort, sortBy] = useSortableRows(rows);

  return (
    <Table caption="Sortable Table" sortBy={sortBy} onSort={onSort} cells={cells} rows={sortedRows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}
```

## Selectable table

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol,
  sortable,
  useSelectableRows
} from '@patternfly/react-table';

function SelectableTable () {
  const rows = [
    ['Foo', 2, 0, 6, 1533635470],
    ['Bar', 1, 11, 2, 1564566670],
    ['Baz', 6, 4, 99, 1565167870],
  ];
  
  const cells = [
    { title: 'Repositories', cellTransforms: [headerCol()] },
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last Commit',
  ];
  
  const [selectedRows, onSelect] = useSelectableRows(rows);

  return (
    <Table caption="Selectable Table" onSelect={onSelect} cells={cells} rows={selectedRows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}
```

## Sortable and selectable table

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol,
  useSelectableRows
} from '@patternfly/react-table';

function SortableAndSelectableTable () {
  const rows = [
    ['Foo', 2, 0, 6, 1533635470],
    ['Bar', 1, 11, 2, 1564566670],
    ['Baz', 6, 4, 99, 1565167870],
  ];
  
  const cells = [
    { title: 'Repositories', transforms: [sortable(SortHelpers.strings)], cellTransforms: [headerCol()] },
    { title: 'Branches', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Pull requests', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Workspaces', transforms: [sortable(SortHelpers.numbers)] },
    { title: 'Last Commit', transforms: [sortable(SortHelpers.numbers)] }
  ];
  
  const [sortedRows, onSort, sortBy] = useSortableRows(rows, cells);

  // we need to specify the getRowKey callback to use unique ids to identify the
  // selected rows. We use the repository name in this example.  
  const [sortedAndSelectedRows, onSelect] = useSelectableRows(sortedRows,  {
    getRowKey: (rowData, rowIndex) => rowData[0]
  });

  return (
    <Table caption="Sortable And Selectable Table" onSort={onSort} sortBy={sortBy} onSelect={onSelect} cells={cells} rows={sortedAndSelectedRows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
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
        caption="Compact Table with borderless rows"
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

## Table with hidden/visible breakpoint modifiers

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
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg, Visibility.visibleOn2Xl)]
        },
        'Branches',
        {
          title: 'Pull requests',
          columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg, Visibility.hiddenOn2Xl)]
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
      <Table caption="Table with hidden/visible breakpoint modifiers" cells={columns} rows={rows}>
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
      <Table caption="Collapsible table" onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Compound Expandable table

```js
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
              props: { isOpen: true, ariaControls : 'compoound-expansion-table-1' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compoound-expansion-table-2' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compoound-expansion-table-3' }
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
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-1', 'three', 'four','five']} id="compoound-expansion-table-1" />,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            { 
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-2', 'three', 'four','five']} id="compoound-expansion-table-2" />, 
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            { 
              title: <DemoSortableTable firstColumnRows={['parent-0', 'compound-3', 'three', 'four','five']} id="compoound-expansion-table-3" />, 
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
              props: { isOpen: false, ariaControls : 'compoound-expansion-table-4' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compoound-expansion-table-5' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 2
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls : 'compoound-expansion-table-6' }
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
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-1', 'three', 'four','five']} id="compoound-expansion-table-4" />, 
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 2,
          cells: [
            { 
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-2', 'three', 'four','five']} id="compoound-expansion-table-5"/>, 
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 3,
          cells: [
            { 
              title: <DemoSortableTable firstColumnRows={['parent-4', 'compound-3', 'three', 'four','five']} id="compoound-expansion-table-6"/>, 
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
      //set all other expanded cells false in this row if we are expanding
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
      <Table caption="Compound expandable table" onExpand={this.onExpand} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```

## Table with headers that wrap

```js
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  wrappable
} from '@patternfly/react-table';

class WrappableHeadersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'This is a really long table header that goes on for a long time 1.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 2.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 3.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 4.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 5.', transforms: [wrappable]},
      ],
      rows: [
        ['Repository 1', '10', '25', '5', '2 days ago'],
        ['Repository 2', '10', '25', '5', '2 days ago'],
        ['Repository 3', '10', '25', '5', '2 days ago'],
        ['Repository 4', '10', '25', '5', '2 days ago'],
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Wrappable headers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
```
