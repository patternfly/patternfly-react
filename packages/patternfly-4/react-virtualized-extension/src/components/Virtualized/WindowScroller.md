---
title: 'Window Scroller'
section: 'Virtual Scroll'
---

import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import UUID from 'uuid/v1';
import virtualGridStyles from './VirtualGrid.example.css';
import windowScrollerStyles from './WindowScroller.example.css';

## Window Scroller Example

```js
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTable, WindowScroller } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';
import windowScrollerStyles from './WindowScroller.example.css';

class WindowScrollerExample extends React.Component {
  constructor(){
    const rows = [];
    for (let i = 0; i < 100000; i++) {
      const cells = [];
      const num = Math.floor(Math.random() * Math.floor(2)) + 1;
      for (let j = 0; j < 5; j++) {
        const cellValue = i.toString() + ' Arma virumque cano Troiae qui primus ab oris. '.repeat(num);
        cells.push(cellValue);
      }
      rows.push({
        id: UUID(),
        cells
      });
    }

    this.scrollableElement = React.createRef();

    this.state = {
      scrollToIndex: -1, //can be used to programmatically set current index
      scrollableElement: null,
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

  componentDidMount(){
    setTimeout(() => {
      const scollableElement = document.getElementById('content-scrollable-1');
      this.setState({ scollableElement });
    });

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
    const {scrollToIndex, columns, rows, scollableElement} = this.state;

    const measurementCache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44,
      keyMapper: rowIndex => rowIndex
    });

    const rowRenderer = ({index, isScrolling, isVisible, key, style, parent}) => {
      const {rows, columns} = this.state;
      const text = rows[index].cells[0];

      const className = clsx({
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
        id="content-scrollable-1"
        aria-label="Scrollable Table"
        role="grid"
        className="pf-c-scrollablegrid"
        aria-rowcount={rows.length}
        style={{
          height: 500, /* important note: the scrollable container should have some sort of fixed height, or it should be wrapped in container that is smaller than ReactVirtualized__VirtualGrid container and has overflow visible if using the Window Scroller. See WindowScroller.example.css */
          overflowX: 'auto',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          padding: 5,
          position: 'relative'
        }}
      >
        <Table
          caption="WindowScoller allows scrolling of a parent container or the window instead of tbody. It also can be used to dynamically size the table to the size of the scroll element."
          cells={columns}
          rows={rows}
          gridBreakPoint={TableGridBreakpoint.none}
          role="presentation"
        >
          <TableHeader />
        </Table>
        <WindowScroller scrollElement={scollableElement}>
          {({height, isScrolling, registerChild, onChildScroll, scrollTop}) => (
            <AutoSizer disableHeight>
              {({width}) => (
                <div ref={registerChild}>
                  <VirtualTableBody
                    autoHeight
                    className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
                    deferredMeasurementCache={measurementCache}
                    rowHeight={measurementCache.rowHeight}
                    height={height || 0}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    overscanRowCount={2}
                    columns={columns}
                    rows={rows}
                    rowCount={rows.length}
                    rowRenderer={rowRenderer}
                    scrollToIndex={scrollToIndex}
                    scrollTop={scrollTop}
                    width={width}
                  />
                </div>
              )}
            </AutoSizer>
          )}
      </WindowScroller>
    </div>
    );
  }
}

export default WindowScrollerExample;
```
