---
id: Virtual scroll table
section: extensions
---

Note: React Virtualized Extension lives in its own package at [`@patternfly/react-virtualized-extension`](https://www.npmjs.com/package/@patternfly/react-virtualized-extension)!
<br />
This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.
<br />
<br />

import { debounce,
Button,
ButtonVariant,
Bullseye,
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
Title,
Select,
SelectOption,
SelectVariant,
EmptyState,
EmptyStateIcon,
EmptyStateBody,
EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint, headerCol, sortable, SortByDirection, TextInput } from '@patternfly/react-table';
import { SearchIcon, FilterIcon } from '@patternfly/react-icons';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

## Examples

```js title=Basic
import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

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
      const text = rows[index].cells[0];

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {text}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" role="grid" className="pf-c-scrollablegrid" aria-rowcount={rows.length}>
        <Table
          caption="Simple Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          role="presentation"
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
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

```js title=Sortable
import * as React from 'react';
import { debounce } from 'lodash';
import { Table, TableHeader, sortable, SortByDirection, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

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
      const text = rows[index].cells[0];

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {text}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" role="grid" className="pf-c-scrollablegrid" aria-rowcount={rows.length}>
        <Table
          caption="Sortable Virtualized Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          sortBy={sortBy}
          onSort={this.onSort}
          role="presentation"
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
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

```js title=Selectable
import * as React from 'react';
import { debounce } from 'lodash';
import { Table, TableHeader, headerCol, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

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
      rows[rowIndex].selected = isSelected;
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
      const text = rows[index].cells[0];

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr data-id={index} style={style} role="row">
            <td data-key="0" className="pf-c-table__check" role="gridcell">
              <input
                type="checkbox"
                checked={rows[index].selected}
                onChange={e => {
                  this.onSelect(e, e.target.checked, 0, { id: rows[index].id });
                }}
              />
            </td>
            <td className={columns[0].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {text}
            </td>
          </tr>
        </CellMeasurer>
      );
    };

    return (
      <div aria-label="Scrollable Table" role="grid" className="pf-c-scrollablegrid" aria-rowcount={rows.length}>
        <Table
          caption="Selectable Virtualized Table"
          cells={columns}
          rows={rows}
          aria-rowcount={rows.length}
          gridBreakPoint={TableGridBreakpoint.none}
          onSelect={this.onSelect}
          role="presentation"
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
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

```js title=Actions
import * as React from 'react';
import { debounce } from 'lodash';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

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
      const text = rows[index].cells[0];

      return (
        <CellMeasurer cache={measurementCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <tr data-id={index} style={style} role="row">
            <td className={columns[0].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[1].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[2].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[3].props.className} role="gridcell">
              {text}
            </td>
            <td className={columns[4].props.className} role="gridcell">
              {text}
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
      <div aria-label="Scrollable Table" role="grid" className="pf-c-scrollablegrid" aria-rowcount={rows.length}>
        <Table
          caption="Actions Virtualized Table"
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          role="presentation"
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
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
```

```js title=Filterable-with-WindowScroller
import * as React from 'react';
import {
  Button,
  ButtonVariant,
  Bullseye,
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
  Title,
  Select,
  SelectOption,
  SelectVariant,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { debounce } from 'lodash';
import { SearchIcon, FilterIcon } from '@patternfly/react-icons';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint, TextInput } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

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
          role="grid"
          className="pf-c-scrollablegrid"
          aria-rowcount={rows.length}
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
                role="grid"
                className="pf-c-scrollablegrid"
                aria-rowcount={rows.length}
              >
                <Table cells={columns} rows={filteredRows} actions={actions} aria-label="Filterable Table Demo">
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
