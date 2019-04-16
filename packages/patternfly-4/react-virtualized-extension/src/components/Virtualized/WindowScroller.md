---
title: 'Window Scroller'
section: 'Virtual Scroll'
---

import React from 'react';
import { Table, TableHeader } from '@patternfly/react-table';
import {
VirtualizedBody,
VirtualizedBodyWrapper,
VirtualizedRowWrapper,
WindowScroller
} from '@patternfly/react-virtualized-extension';
import UUID from 'uuid/v1';

## Window Scroller Example

```js
import React from 'react';
import { Table, TableHeader } from '@patternfly/react-table';
import {
  VirtualizedBody,
  VirtualizedBodyWrapper,
  VirtualizedRowWrapper,
  WindowScroller
} from '@patternfly/react-virtualized-extension';

class WindowScrollerExample extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.setContainer = element => {
      this.container = element;
    };
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
    const defaultHeight = 400;

    return (
      <div>
        <div
          id="content-scrollable-1"
          ref={this.setContainer}
          style={{
            height: 500,
            width: '100%',
            overflow: 'auto',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <WindowScroller scrollElement="#content-scrollable-1">
            {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
              <Table
                caption="WindowScoller allows scrolling of a parent container or the window instead of tbody. It also can be used to dynamically size the table to the size of the scroll element."
                cells={columns}
                rows={rows}
                bodyWrapper={VirtualizedBodyWrapper}
                rowWrapper={VirtualizedRowWrapper}
                aria-rowcount={rows.length}
              >
                <TableHeader />
                <VirtualizedBody height={height || defaultHeight} container={() => this.container} rowKey="id" />
              </Table>
            )}
          </WindowScroller>
        </div>
      </div>
    );
  }
}

export default WindowScrollerExample;
```
