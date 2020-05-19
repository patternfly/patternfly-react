---
title: 'Virtual scroll window scroller'
section: 'extensions'
---

Note: React Virtualized Extension lives in its own package at [`@patternfly/react-virtualized-extension`](https://www.npmjs.com/package/@patternfly/react-virtualized-extension)!
<br />
This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.
<br />
<br />

import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';
import windowScrollerStyles from './WindowScroller.example.css';

## Examples
```js title=Window-scroller
import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import { Table, TableHeader, TableGridBreakpoint } from '@patternfly/react-table';
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import { AutoSizer, VirtualTableBody, WindowScroller } from '@patternfly/react-virtualized-extension';
import virtualGridStyles from './VirtualGrid.example.css';
import windowScrollerStyles from './WindowScroller.example.css';

class WindowScrollerExample extends React.Component {
  constructor(props){
    super(props);
    const rows = [];
    for (let i = 0; i < 100000; i++) {
      const cells = [];
      const num = Math.floor(Math.random() * Math.floor(2)) + 1;
      for (let j = 0; j < 5; j++) {
        const cellValue = i.toString() + ' Arma virumque cano Troiae qui primus ab oris. '.repeat(num);
        cells.push(cellValue);
      }
      rows.push({
        id: `window-scroller-row-${i}`,
        cells
      });

      this._cellMeasurementCache = new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 44,
        keyMapper: rowIndex => rowIndex
      });
    }

    this.scrollableElement = React.createRef();

    this.state = {
      scrollToIndex: -1, // can be used to programmatically set current index
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

    this._handleResize = debounce(this._handleResize.bind(this), 100);
    this._bindBodyRef = this._bindBodyRef.bind(this);
  }

  componentDidMount(){
    // re-render after resize
    window.addEventListener('resize', this._handleResize);

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
    this._cellMeasurementCache.clearAll();
    this._bodyRef.recomputeVirtualGridSize();
  }

  _bindBodyRef(ref) {
    this._bodyRef = ref;
  }

  render() {
    const {scrollToIndex, columns, rows, scollableElement} = this.state;

    const rowRenderer = ({index, isScrolling, key, style, parent}) => {
      const {rows, columns} = this.state;
      const text = rows[index].cells[0];

      return <CellMeasurer
        cache={this._cellMeasurementCache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        <tr style={style} role="row">
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
          position: 'relative'
        }}
      >
        <div style={{ padding: 15}}> {/* WindowScroller scrollbar gutter spacing */}
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
                      ref={this._bindBodyRef}
                      autoHeight
                      className={'pf-c-table pf-c-virtualized pf-c-window-scroller'}
                      deferredMeasurementCache={this._cellMeasurementCache}
                      rowHeight={this._cellMeasurementCache.rowHeight}
                      height={height || 0}
                      isScrolling={isScrolling}
                      isScrollingOptOut={true}
                      onScroll={onChildScroll}
                      overscanRowCount={2}
                      columnCount={1}
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
    </div>
    );
  }
}

export default WindowScrollerExample;
```
