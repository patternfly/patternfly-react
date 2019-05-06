---
title: 'Table'
section: 'Virtual Scroll'
---

import React from 'react';
import { Table, TableHeader } from '@patternfly/react-table';
import {
VirtualizedBody,
VirtualizedBodyWrapper,
VirtualizedRowWrapper
} from '@patternfly/react-virtualized-extension';

import UUID from 'uuid/v1';

## Simple Example

```js
import React from 'react';
import { Table, TableHeader } from '@patternfly/react-table';
import {
  VirtualizedBody,
  VirtualizedBodyWrapper,
  VirtualizedRowWrapper
} from '@patternfly/react-virtualized-extension';

import UUID from 'uuid/v1';

class VirtualizedExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }
    this.state = {
      columns: [
        { title: 'Repositories' },
        { title: 'Branches' },
        { title: 'Pull requests' },
        { title: 'Workspaces' },
        { title: 'Last Commit' }
      ],
      rows
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Simple Table"
        className="pf-c-virtualized"
        cells={columns}
        rows={rows}
        bodyWrapper={VirtualizedBodyWrapper}
        rowWrapper={VirtualizedRowWrapper}
        aria-rowcount={rows.length}
      >
        <TableHeader />
        <VirtualizedBody height={400} rowKey="id" />
      </Table>
    );
  }
}

export default VirtualizedExample;
```

## Sortable Example

```js
import React from 'react';
import { Table, TableHeader, sortable, SortByDirection } from '@patternfly/react-table';
import {
  VirtualizedBody,
  VirtualizedBodyWrapper,
  VirtualizedRowWrapper
} from '@patternfly/react-virtualized-extension';

import UUID from 'uuid/v1';

class SortableExample extends React.Component {
  constructor(props) {
    super(props);

    this.tableBody = React.createRef();

    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        { title: 'Branches' },
        { title: 'Pull requests', transforms: [sortable] },
        { title: 'Workspaces' },
        { title: 'Last Commit' }
      ],
      rows,
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) =>
      a.cells[index] < b.cells[index] ? -1 : a.cells[index] > b.cells[index] ? 1 : 0
    );
    this.tableBody.current.scrollTo(0);
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
      <Table
        caption="Sortable Virtualized Table"
        className="pf-c-virtualized"
        cells={columns}
        rows={rows}
        bodyWrapper={VirtualizedBodyWrapper}
        rowWrapper={VirtualizedRowWrapper}
        sortBy={sortBy}
        onSort={this.onSort}
        aria-rowcount={rows.length}
      >
        <TableHeader />
        <VirtualizedBody height={400} rowKey="id" tableBody={this.tableBody} />
      </Table>
    );
  }
}

export default SortableExample;
```

## Selectable Example

```js
import React from 'react';
import { Table, TableHeader, headerCol } from '@patternfly/react-table';
import {
  VirtualizedBody,
  VirtualizedBodyWrapper,
  VirtualizedRowWrapper
} from '@patternfly/react-virtualized-extension';

import UUID from 'uuid/v1';

class SelectableExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        { title: 'Branches' },
        { title: 'Pull requests' },
        { title: 'Workspaces' },
        { title: 'Last Commit' }
      ],
      rows
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event, isSelected, virtualRowIndex, rowData) {
    let rows;
    if (virtualRowIndex === -1) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      const rowIndex = rows.findIndex(r => r.id === rowData.id);
      rows[rowIndex].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        className="pf-c-virtualized"
        caption="Selectable Virtualized Table"
        onSelect={this.onSelect}
        cells={columns}
        rows={rows}
        bodyWrapper={VirtualizedBodyWrapper}
        rowWrapper={VirtualizedRowWrapper}
        aria-rowcount={rows.length}
      >
        <TableHeader />
        <VirtualizedBody height={400} rowKey="id" />
      </Table>
    );
  }
}

export default SelectableExample;
```

## Dynamic Height Example

```js
import React from 'react';
import { Table, TableHeader } from '@patternfly/react-table';
import {
  VirtualizedBody,
  VirtualizedBodyWrapper,
  VirtualizedRowWrapper
} from '@patternfly/react-virtualized-extension';

import UUID from 'uuid/v1';

class DynamicHeightExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      const cells = [];
      const num = Math.floor(Math.random() * Math.floor(9)) + 1;
      for (let j = 0; j < 5; j++) {
        const cellValue = i.toString() + ' Arma virumque cano Troiae qui primus ab oris. '.repeat(num);
        cells.push(cellValue);
      }
      rows.push({
        id: UUID(),
        cells
      });
    }
    this.state = {
      columns: [
        { title: 'Repositories' },
        { title: 'Branches' },
        { title: 'Pull requests' },
        { title: 'Workspaces' },
        { title: 'Last Commit' }
      ],
      rows
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Virtualized Extension will support dynamic row heights out of the box."
        className="pf-c-virtualized"
        cells={columns}
        rows={rows}
        bodyWrapper={VirtualizedBodyWrapper}
        rowWrapper={VirtualizedRowWrapper}
        aria-rowcount={rows.length}
      >
        <TableHeader />
        <VirtualizedBody height={400} rowKey="id" />
      </Table>
    );
  }
}

export default DynamicHeightExample;
```
