---
title: 'Table'
section: 'Virtual Scroll'
---

import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint, headerCol, sortable, SortByDirection } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import UUID from 'uuid/v1';
import virtualGridStyles from './VirtualGrid.example.css';


## Simple Example

```js
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

class VirtualizedExample extends React.Component {
  constructor(){
   const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.state = {
      columns: [
        { title: 'Repositories', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Branches', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Pull requests', props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md'} },
        { title: 'Workspaces', props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg'} },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl'} }
      ],
      rows
    };
    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount(){
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
  }

  render() {
    const {columns, rows} = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({index, isScrolling, isVisible, key, style, parent}) => {
      const {rows, columns} = this.state;
      const text = rows[index].cells[0];

      const className = clsx('pf-l-grid', {
        isVisible: isVisible
      });

      // do not render non visible elements (this excludes overscan)
      if(!isVisible){
        return null;
      }
      return <CellMeasurer
        cache={measurementCache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        <tr style={style} className={className} role="row">
          <td className={columns[0].props.className} role="gridcell">{text}</td>
          <td className={columns[1].props.className} role="gridcell">{text}</td>
          <td className={columns[2].props.className} role="gridcell">{text}</td>
          <td className={columns[3].props.className} role="gridcell">{text}</td>
          <td className={columns[4].props.className} role="gridcell">{text}</td>
        </tr>
      </CellMeasurer>;
    }

    return (
      <div
        aria-label="Scrollable Table"
        role="grid"
        className="pf-c-scrollablegrid"
        aria-rowcount={rows.length}>
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
          {({width}) => (
            <VirtualTableBody
              className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columns={columns}
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

export default VirtualizedExample;
```

## Sortable Example

```js
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TableHeader, sortable, SortByDirection, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

class SortableExample extends React.Component {
  constructor(){
   const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.sortableVirtualBody = null;

    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable], props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Branches', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Pull requests', transforms: [sortable], props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md'} },
        { title: 'Workspaces', props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg'} },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl'} }
      ],
      rows,
      sortBy: {}
    };

    this.onSort = this.onSort.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount(){
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }
  
  componentWillUnmount(){
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
    const {sortBy, columns, rows} = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({index, isScrolling, isVisible, key, style, parent}) => {
      const {rows, columns} = this.state;
      const text = rows[index].cells[0];

      const className = clsx('pf-l-grid', {
        isVisible: isVisible
      });

      // do not render non visible elements (this excludes overscan)
      if(!isVisible){
        return null;
      }
      return <CellMeasurer
        cache={measurementCache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        <tr style={style} className={className} role="row">
          <td className={columns[0].props.className} role="gridcell">{text}</td>
          <td className={columns[1].props.className} role="gridcell">{text}</td>
          <td className={columns[2].props.className} role="gridcell">{text}</td>
          <td className={columns[3].props.className} role="gridcell">{text}</td>
          <td className={columns[4].props.className} role="gridcell">{text}</td>
        </tr>
      </CellMeasurer>;
    }

    return (
      <div
        aria-label="Scrollable Table"
        role="grid"
        className="pf-c-scrollablegrid"
        aria-rowcount={rows.length}>
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
          {({width}) => (
            <VirtualTableBody
              ref={ref => this.sortableVirtualBody = ref}
              className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columns={columns}
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

export default SortableExample;
```

## Selectable Example

```js
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TableHeader, headerCol, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

class SelectableExample extends React.Component {
  constructor(){
   const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        selected: false,
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.selectableVirtualBody = null;

    this.state = {
      columns: [
        //headerCol transform adds checkbox column with pf-m-2-sm, pf-m-1-md+ column space
        { title: 'Repositories', cellTransforms: [headerCol()], props: { className: 'pf-m-5-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Pull requests', props: { className: 'pf-m-5-col-on-sm pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl'} },
        { title: 'Workspaces', props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg'} },
        { title: 'Last Commit', props: { className: 'pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-xl'} }
      ],
      rows
    };

    this.onSelect = this.onSelect.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount(){
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }
  
  componentWillUnmount(){
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
    const {columns, rows} = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({index, isScrolling, isVisible, key, style, parent}) => {
      const {rows, columns} = this.state;
      const text = rows[index].cells[0];

      const className = clsx('pf-l-grid', {
        isVisible: isVisible
      });

      // do not render non visible elements (this excludes overscan)
      if(!isVisible){
        return null;
      }
      return <CellMeasurer
        cache={measurementCache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        <tr data-id={index} style={style} className={className} role="row">
          <td data-key="0" className="pf-c-table__check" role="gridcell">
            <input type="checkbox" checked={rows[index].selected} 
              onChange={(e) => 
                { this.onSelect(e, e.target.checked, 0, {id: rows[index].id})}}
              />
          </td>
          <td className={columns[0].props.className} role="gridcell">{text}</td>
          <td className={columns[1].props.className} role="gridcell">{text}</td>
          <td className={columns[2].props.className} role="gridcell">{text}</td>
          <td className={columns[3].props.className} role="gridcell">{text}</td>
        </tr>
      </CellMeasurer>;
    }

    return (
      <div
        aria-label="Scrollable Table"
        role="grid"
        className="pf-c-scrollablegrid"
        aria-rowcount={rows.length}>
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
          {({width}) => (
            <VirtualTableBody
              ref={ref => this.selectableVirtualBody = ref}
              className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columns={columns}
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

export default SelectableExample;
```

## Actions Example

```js
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ActionsColumn, Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer} from 'react-virtualized';
import { AutoSizer, VirtualTableBody } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';

class ActionsExample extends React.Component {
  constructor(){
   const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        disableActions: i % 3 === 2,
        id: UUID(),
        cells: [`one-${i}`, `two-${i}`, `three-${i}`, `four-${i}`, `five-${i}`]
      });
    }

    this.actionsVirtualBody = null;

    this.state = {
      columns: [
        { title: 'Name', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Namespace', props: { className: 'pf-m-6-col-on-sm pf-m-4-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl'} },
        { title: 'Labels', props: { className: 'pf-m-4-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl pf-m-hidden pf-m-visible-on-md'} },
        { title: 'Status', props: { className: 'pf-m-2-col-on-lg pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-lg'} },
        { title: 'Pod Selector', props: { className: 'pf-m-2-col-on-xl pf-m-hidden pf-m-visible-on-xl'} },
        { title: '', props: { className: 'pf-c-table__action'}},
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

    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount(){
    // re-render after resize
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.forceUpdate();
  }

  render() {
    const {columns, rows} = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({index, isScrolling, isVisible, key, style, parent}) => {
      const {rows, columns, actions} = this.state;
      const text = rows[index].cells[0];

      const className = clsx('pf-l-grid', {
        isVisible: isVisible
      });

      // do not render non visible elements (this excludes overscan)
      if(!isVisible){
        return null;
      }
      return <CellMeasurer
        cache={measurementCache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        <tr data-id={index} style={style} className={className} role="row">
          <td className={columns[0].props.className} role="gridcell">{text}</td>
          <td className={columns[1].props.className} role="gridcell">{text}</td>
          <td className={columns[2].props.className} role="gridcell">{text}</td>
          <td className={columns[3].props.className} role="gridcell">{text}</td>
          <td className={columns[4].props.className} role="gridcell">{text}</td>
          <td className={columns[5].props.className} role="gridcell">
            <ActionsColumn
              items={actions}
              rowData={rows[index]}
              extraData={{rowIndex: index}}
              isDisabled={rows[index].disableActions} />
          </td>
        </tr>
      </CellMeasurer>;
    }

    return (
      <div
        aria-label="Scrollable Table"
        role="grid"
        className="pf-c-scrollablegrid"
        aria-rowcount={rows.length}>
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
          {({width}) => (
            <VirtualTableBody
              ref={ref => this.actionsVirtualBody = ref}
              className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
              deferredMeasurementCache={measurementCache}
              rowHeight={measurementCache.rowHeight}
              height={400}
              overscanRowCount={2}
              columns={columns}
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

export default ActionsExample;
```