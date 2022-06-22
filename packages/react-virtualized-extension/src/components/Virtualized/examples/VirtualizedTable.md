---
id: Virtual scroll table
section: extensions
---

Note: React Virtualized Extension lives in its own package at [`@patternfly/react-virtualized-extension`](https://www.npmjs.com/package/@patternfly/react-virtualized-extension)!
<br />
This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.
<br />
<br />

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import './VirtualGrid.example.css';

## Examples

### Basic

```js
import React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';

class VirtualizedExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: `basic-row-${i}`,
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.state = {
      columns: [
        {
          title: 'Repositories',
          props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Branches',
          props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Pull requests',
          props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md' }
        },
        {
          title: 'Workspaces',
          props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg' }
        },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl' } }
      ],
      rows
    };
    this._handleResize = debounce(this._handleResize.bind(this), 100);
  }

  componentDidMount() {
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
  }

  render() {
    const { columns, rows } = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({ index, isScrolling, key, style, parent }) => {
      const { rows, columns } = this.state;

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {rows[index].cells[0]}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {rows[index].cells[1]}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {rows[index].cells[2]}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {rows[index].cells[3]}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {rows[index].cells[4]}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" className="pf-c-scrollablegrid">
        <Table
          caption="Simple Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          aria-rowcount={rows.length}
        >
          <TableHeader />
        </Table>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualTableBody
              className="pf-c-table pf-c-virtualized pf-c-window-scroller"
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columnCount={1}
              rows={rows}
              rowCount={rows.length}
              rowRenderer={rowRenderer}
              width={width}
              role="grid"
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

### Using composable table components

```js
import React from 'react';
import { debounce } from '@patternfly/react-core';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import { TableComposable, Thead, Tr, Th, Td, Caption, TableGridBreakpoint } from '@patternfly/react-table';

ComposableTableVirtualized = () => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push([`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]);
  }
  const [selected, setSelected] = React.useState(rows.map(row => false));
  const columns = [
    'Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last Commit'
  ];

  const onSelect = (event, isSelected, rowId) => {
    setSelected(selected.map((sel, index) => (index === rowId ? isSelected : sel)));
  };

  const measurementCache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 44,
    keyMapper: rowIndex => rowIndex
  });

  const rowRenderer = ({ index: rowIndex, isScrolling, key, style, parent }) => (
  <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={rowIndex}>
    <Tr style={style}>
      <Td
        key={`${rowIndex}_0`}
        select={{
          rowIndex,
          onSelect: onSelect,
          isSelected: selected[rowIndex]
        }}
      />
      {columns.map((col, index) => (
        <Td key={`${rowIndex}-${index+1}`}>
          {rows[rowIndex][index]}
        </Td>
      ))}
    </Tr>
  </CellMeasurer>
 );

  return (
    <div aria-label="Scrollable Table" className="pf-c-scrollablegrid" >
      <TableComposable gridBreakPoint={TableGridBreakpoint.none} aria-rowcount={rows.length}>
        <Caption>Virtualized table with composable table components</Caption>
        <Thead>
          <Tr>
            <Th className="pf-c-table__check" />
            {columns.map((col, index) => (
              <Th key={++index}>
                {col}
              </Th>
            ))}
          </Tr>
        </Thead>
      </TableComposable>
      <AutoSizer disableHeight>
        {({ width }) => (
          <VirtualTableBody
            className="pf-c-table pf-c-virtualized pf-c-window-scroller"
            deferredMeasurementCache={measurementCache}
            rowHeight={measurementCache.rowHeight}
            height={400}
            overscanRowCount={2}
            columnCount={1}
            rows={rows}
            rowCount={rows.length}
            rowRenderer={rowRenderer}
            width={width}
            role="grid"
          />
        )}
      </AutoSizer>
    </div>
  );
};
```

### Sortable

```js
import React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, sortable, SortByDirection, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';

class SortableExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: `sortable-row-${i}`,
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.sortableVirtualBody = null;

    this.state = {
      columns: [
        {
          title: 'Repositories',
          transforms: [sortable],
          props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Branches',
          props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Pull requests',
          transforms: [sortable],
          props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md' }
        },
        {
          title: 'Workspaces',
          props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg' }
        },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl' } }
      ],
      rows,
      sortBy: {}
    };

    this.onSort = this.onSort.bind(this);
    this._handleResize = debounce(this._handleResize.bind(this), 100);
  }

  componentDidMount() {
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) =>
      a.cells[index] < b.cells[index] ? -1 : a.cells[index] > b.cells[index] ? 1 : 0
    );
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });

    this.sortableVirtualBody.forceUpdateVirtualGrid();
  }

  render() {
    const { sortBy, columns, rows } = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({ index, isScrolling, key, style, parent }) => {
      const { rows, columns } = this.state;

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {rows[index].cells[0]}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {rows[index].cells[1]}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {rows[index].cells[2]}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {rows[index].cells[3]}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {rows[index].cells[4]}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" className="pf-c-scrollablegrid">
        <Table
          caption="Sortable Virtualized Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          sortBy={sortBy}
          onSort={this.onSort}
          role="grid"
          aria-rowcount={rows.length}
        >
          <TableHeader />
        </Table>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualTableBody
              ref={ref => (this.sortableVirtualBody = ref)}
              className="pf-c-table pf-c-virtualized pf-c-window-scroller"
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columnCount={1}
              rows={rows}
              rowCount={rows.length}
              rowRenderer={rowRenderer}
              width={width}
              role="grid"
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

### Selectable

```js
import React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, headerCol, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';

class SelectableExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        selected: false,
        id: `selectable-row-${i}`,
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.selectableVirtualBody = null;

    this.state = {
      columns: [
        // headerCol transform adds checkbox column with pf-m-2-sm, pf-m-1-md+ column space
        {
          title: 'Repositories',
          cellTransforms: [headerCol()],
          props: { className: 'pf-m-5-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Pull requests',
          props: { className: 'pf-m-5-col-on-sm pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl' }
        },
        {
          title: 'Workspaces',
          props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg' }
        },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl' } }
      ],
      rows
    };

    this.onSelect = this.onSelect.bind(this);
    this._handleResize = debounce(this._handleResize.bind(this), 100);
  }

  componentDidMount() {
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
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
      rows[rowIndex] = { ...rows[rowIndex], selected: isSelected };
    }
    this.setState({
      rows
    });
    this.selectableVirtualBody.forceUpdateVirtualGrid();
  }

  render() {
    const { columns, rows } = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({ index, isScrolling, key, style, parent }) => {
      const { rows, columns } = this.state;

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr data-id={index} style={style} role="row">
            <td data-key="0" className="pf-c-table__check" role="gridcell">
              <input
                type="checkbox"
                aria-label={`Select row ${index}`}
                checked={rows[index].selected}
                onChange={e => {
                  this.onSelect(e, e.target.checked, 0, { id: rows[index].id });
                }}
              />
            </td>
            <td className={columns[0].props.className} role="gridcell">
              {rows[index].cells[0]}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {rows[index].cells[1]}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {rows[index].cells[2]}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {rows[index].cells[3]}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" className="pf-c-scrollablegrid">
        <Table
          caption="Selectable Virtualized Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          onSelect={this.onSelect}
          aria-rowcount={rows.length}
        >
          <TableHeader />
        </Table>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualTableBody
              ref={ref => (this.selectableVirtualBody = ref)}
              className="pf-c-table pf-c-virtualized pf-c-window-scroller"
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columnCount={1}
              rows={rows}
              rowCount={rows.length}
              rowRenderer={rowRenderer}
              width={width}
              role="grid"
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

### Actions

```js
import React from 'react';
import { debounce } from '@patternfly/react-core';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';

class ActionsExample extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        disableActions: i % 3 === 2,
        id: `actions-row-${i}`,
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.actionsVirtualBody = null;

    this.state = {
      columns: [
        { title: 'Name', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' } },
        {
          title: 'Namespace',
          props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl' }
        },
        {
          title: 'Labels',
          props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md' }
        },
        { title: 'Status', props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg' } },
        { title: 'Pod Selector', props: { className: 'pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-xl' } },
        { title: '', props: { className: 'pf-c-table__action' } }
      ],
      rows,
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

    this._handleResize = debounce(this._handleResize.bind(this), 100);
  }

  componentDidMount() {
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
  }

  render() {
    const { columns, rows } = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({ index, isScrolling, key, style, parent }) => {
      const { rows, columns, actions } = this.state;

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr data-id={index} style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {rows[index].cells[0]}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {rows[index].cells[1]}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {rows[index].cells[2]}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {rows[index].cells[3]}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {rows[index].cells[4]}
            </td>
            <td className={columns[5].props.className} role="gridcell">
              <ActionsColumn
                items={actions}
                rowData={rows[index]}
                extraData={{ rowIndex: index }}
                isDisabled={rows[index].disableActions}
              />
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" className="pf-c-scrollablegrid">
        <Table
          caption="Actions Virtualized Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          aria-rowcount={rows.length}
        >
          <TableHeader />
        </Table>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualTableBody
              ref={ref => (this.actionsVirtualBody = ref)}
              className="pf-c-table pf-c-virtualized pf-c-window-scroller"
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columnCount={1}
              rows={rows}
              rowCount={rows.length}
              rowRenderer={rowRenderer}
              width={width}
              role="grid"
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

### Filterable with WindowScroller

```js
import React from 'react';
import {
  Button,
  ButtonVariant,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownToggle,
  InputGroup,
  TextInput,
  Select,
  SelectOption,
  SelectVariant,
} from '@patternfly/react-core';
import { debounce } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { ActionsColumn, Table, TableHeader } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';

class FilterExample extends React.Component {
  constructor(props) {
    super(props);

    this.actionsVirtualBody = null;

    const rows = [];
    for (let i = 0; i < 100; i++) {
      const data = {};
      if (i % 2 === 0) {
        data.cells = [`US-Node ${i}`, i, i, 'Down', 'Brno'];
      } else if (i % 3 === 0) {
        data.cells = [`CN-Node ${i}`, i, i, 'Running', 'Westford'];
      } else {
        data.cells = [`US-Node ${i}`, i, i, 'Stopped', 'Raleigh'];
      }
      rows.push(data);
    }
    this.scrollableElement = React.createRef();

    this.state = {
      scrollableElement: null,

      filters: {
        location: [],
        name: [],
        status: []
      },
      currentCategory: 'Name',
      isFilterDropdownOpen: false,
      isCategoryDropdownOpen: false,
      nameInput: '',
      columns: [
        { title: 'Servers' },
        { title: 'Threads' },
        { title: 'Applications' },
        { title: 'Status' },
        { title: 'Location' }
      ],
      rows,
      inputValue: '',
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

    this._handleResize = debounce(this._handleResize.bind(this), 100);

    this.onDelete = (type = '', id = '') => {
      if (type) {
        this.setState(prevState => {
          prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter(s => s !== id);
          return {
            filters: prevState.filters
          };
        });
      } else {
        this.setState({
          filters: {
            location: [],
            name: [],
            status: []
          },
          inputValue: ''
        });
      }
    };

    this.onCategoryToggle = isOpen => {
      this.setState({
        isCategoryDropdownOpen: isOpen
      });
    };

    this.onCategorySelect = event => {
      this.setState({
        currentCategory: event.target.innerText,
        isCategoryDropdownOpen: !this.state.isCategoryDropdownOpen
      });
    };

    this.onFilterToggle = isOpen => {
      this.setState({
        isFilterDropdownOpen: isOpen
      });
    };

    this.onFilterSelect = event => {
      this.setState({
        isFilterDropdownOpen: !this.state.isFilterDropdownOpen
      });
    };

    this.onInputChange = newValue => {
      // this.setState({ inputValue: newValue });
      if (newValue === '') {
        this.onDelete();
        this.setState({
          inputValue: newValue
        });
      } else {
        this.setState(prevState => {
          return {
            filters: {
              ...prevState.filters,
              ['name']: [newValue]
            },
            inputValue: newValue
          };
        });
      }
    };

    this.onRowSelect = (event, isSelected, rowId) => {
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
    };

    this.onStatusSelect = (event, selection) => {
      const checked = event.target.checked;
      this.setState(prevState => {
        const prevSelections = prevState.filters['status'];
        return {
          filters: {
            ...prevState.filters,
            status: checked ? [...prevSelections, selection] : prevSelections.filter(value => value !== selection)
          }
        };
      });
    };

    this.onNameInput = event => {
      if (event.key && event.key !== 'Enter') {
        return;
      }

      const { inputValue } = this.state;
      this.setState(prevState => {
        const prevFilters = prevState.filters['name'];
        return {
          filters: {
            ...prevState.filters,
            ['name']: prevFilters.includes(inputValue) ? prevFilters : [...prevFilters, inputValue]
          },
          inputValue: ''
        };
      });
    };

    this.onLocationSelect = (event, selection) => {
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            ['location']: [selection]
          }
        };
      });
      this.onFilterSelect();
    };

    this._handleResize = debounce(this._handleResize.bind(this), 100);
    this._bindBodyRef = this._bindBodyRef.bind(this);
  }

  componentDidMount() {
    // re-render after resize
    window.addEventListener('resize', this._handleResize);

    setTimeout(() => {
      const scollableElement = document.getElementById('content-scrollable-1');
      this.setState({ scollableElement });
    });

    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this._cellMeasurementCache.clearAll();
    this._bodyRef.recomputeVirtualGridSize();
  }

  _bindBodyRef(ref) {
    this._bodyRef = ref;
  }

  buildCategoryDropdown() {
    const { isCategoryDropdownOpen, currentCategory } = this.state;

    return (
      <ToolbarItem>
        <Dropdown
          onSelect={this.onCategorySelect}
          position={DropdownPosition.left}
          toggle={
            <DropdownToggle onToggle={this.onCategoryToggle} style={{ width: '100%' }}>
              <FilterIcon /> {currentCategory}
            </DropdownToggle>
          }
          isOpen={isCategoryDropdownOpen}
          dropdownItems={[
            <DropdownItem key="cat1">Location</DropdownItem>,
            <DropdownItem key="cat2">Name</DropdownItem>,
            <DropdownItem key="cat3">Status</DropdownItem>
          ]}
          style={{ width: '100%' }}
        ></Dropdown>
      </ToolbarItem>
    );
  }

  buildFilterDropdown() {
    const { currentCategory, isFilterDropdownOpen, inputValue, filters } = this.state;

    const locationMenuItems = [
      <SelectOption key="raleigh" value="Raleigh" />,
      <SelectOption key="westford" value="Westford" />,
      <SelectOption key="boston" value="Boston" />,
      <SelectOption key="brno" value="Brno" />,
      <SelectOption key="bangalore" value="Bangalore" />
    ];

    const statusMenuItems = [
      <SelectOption key="statusRunning" value="Running" />,
      <SelectOption key="statusStopped" value="Stopped" />,
      <SelectOption key="statusDown" value="Down" />,
      <SelectOption key="statusDegraded" value="Degraded" />,
      <SelectOption key="statusMaint" value="Needs Maintainence" />
    ];

    return (
      <React.Fragment>
        <ToolbarFilter
          chips={filters.location}
          deleteChip={this.onDelete}
          categoryName="Location"
          showToolbarItem={currentCategory === 'Location'}
        >
          <Select
            aria-label="Location"
            onToggle={this.onFilterToggle}
            onSelect={this.onLocationSelect}
            selections={filters.location[0]}
            isOpen={isFilterDropdownOpen}
            placeholderText="Any"
          >
            {locationMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.name}
          deleteChip={this.onDelete}
          categoryName="Name"
          showToolbarItem={currentCategory === 'Name'}
        >
          <InputGroup>
            <TextInput
              name="nameInput"
              id="nameInput1"
              type="search"
              aria-label="name filter"
              onChange={this.onInputChange}
              value={inputValue}
              placeholder="Filter by name..."
              // onKeyDown={this.onNameInput}
            />
            <Button
              variant={ButtonVariant.control}
              aria-label="search button for search input"
              // onClick={this.onNameInput}
            >
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.status}
          deleteChip={this.onDelete}
          categoryName="Status"
          showToolbarItem={currentCategory === 'Status'}
        >
          <Select
            variant={SelectVariant.checkbox}
            aria-label="Status"
            onToggle={this.onFilterToggle}
            onSelect={this.onStatusSelect}
            selections={filters.status}
            isOpen={isFilterDropdownOpen}
            placeholderText="Filter by status"
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
      </React.Fragment>
    );
  }

  renderToolbar() {
    const { filters } = this.state;
    return (
      <Toolbar id="toolbar-with-chip-groups" clearAllFilters={this.onDelete} collapseListedFiltersBreakpoint="xl">
        <ToolbarContent>
          <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
            <ToolbarGroup variant="filter-group">
              {this.buildCategoryDropdown()}
              {this.buildFilterDropdown()}
            </ToolbarGroup>
          </ToolbarToggleGroup>
        </ToolbarContent>
      </Toolbar>
    );
  }

  render() {
    const { loading, rows, columns, actions, filters, scollableElement } = this.state;

    const filteredRows =
      filters.name.length > 0 || filters.location.length > 0 || filters.status.length > 0
        ? rows.filter(row => {
          return (
            (filters.name.length === 0 ||
              filters.name.some(name => row.cells[0].toLowerCase().includes(name.toLowerCase()))) &&
            (filters.location.length === 0 || filters.location.includes(row.cells[4])) &&
            (filters.status.length === 0 || filters.status.includes(row.cells[3]))
          );
        })
        : rows;
    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({ index, isScrolling, key, style, parent }) => {
      const { columns, actions } = this.state;

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr data-id={index} style={style} role="row">
            <td role="gridcell">{filteredRows[index].cells[0]}</td>
            <td role="gridcell">{filteredRows[index].cells[1]}</td>
            <td role="gridcell">{filteredRows[index].cells[2]}</td>
            <td role="gridcell">{filteredRows[index].cells[3]}</td>
            <td role="gridcell">{filteredRows[index].cells[4]}</td>
            <td role="gridcell">
              <ActionsColumn
                items={actions}
                rowData={rows[index]}
                extraData={{ rowIndex: index }}
                isDisabled={rows[index].disableActions}
              />
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <React.Fragment>
        {this.renderToolbar()}

        <div
          id="content-scrollable-1"
          aria-label="Scrollable Table"
          className="pf-c-scrollablegrid"
          style={{
            height: 500 /* important note: the scrollable container should have some sort of fixed height, or it should be wrapped in container that is smaller than ReactVirtualized__VirtualGrid container and has overflow visible if using the Window Scroller. See WindowScroller.example.css */,
            overflowX: 'auto',
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            position: 'relative'
          }}
        >
          <div style={{ padding: 15 }}>
            {!loading && filteredRows.length > 0 && (
              <div
                aria-label="Scrollable Table"
                className="pf-c-scrollablegrid"
              >
                <Table cells={columns} rows={filteredRows} actions={actions} aria-label="Filterable Table Demo"
                       aria-rowcount={rows.length}>
                  <TableHeader />
                </Table>
                <WindowScroller scrollElement={scollableElement}>
                  {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
                    <AutoSizer disableHeight>
                      {({ width }) => (
                        <div ref={registerChild}>
                          <VirtualTableBody
                            ref={ref => (this.actionsVirtualBody = ref)}
                            autoHeight
                            className="pf-c-table pf-c-virtualized pf-c-window-scroller"
                            deferredMeasurementCache={measurementCache}
                            rowHeight={measurementCache.rowHeight}
                            height={height || 0}
                            overscanRowCount={10}
                            columnCount={6}
                            rows={filteredRows}
                            rowCount={filteredRows.length}
                            rowRenderer={rowRenderer}
                            scrollTop={scrollTop}
                            width={width}
                            role="grid"
                          />
                        </div>
                      )}
                    </AutoSizer>
                  )}
                </WindowScroller>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
