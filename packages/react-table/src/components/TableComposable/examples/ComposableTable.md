---
id: Table
cssPrefix: pf-c-table
section: components
propComponents:
  [
    'TableComposable',
    'Thead',
    'Tbody',
    'Tr',
    'Th',
    'Td',
    'Caption',
    'TableText',
    'TdActionsType',
    'TdSelectType',
    'ThSelectType',
    'TdTreeRowType',
    'IActions',
    'TdCompoundExpandType',
    'TdFavoritesType',
    'TdDraggableType',
    'ThInfoType',
    'TdExpandType',
    'EditableSelectInputCell',
    'EditableTextCell',
    'EditableSelectInputProps',
    'EditableTextCellProps',
    'ThSortType',
    'ISortBy',
    'InnerScrollContainer',
    'OuterScrollContainer',
  ]
ouia: true
---

# Table Composable

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

PatternFly has two implementations of a React table.

The first is the newer `TableComposable` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an HTML table. Generally, updates and new feature requests are implemented in the `TableComposable`.

The second is the original `Table` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it. Its documentation can be found <a href="/components/table/react-legacy">here</a>.

**For most common use cases, we recommend using `TableComposable`. Both implementations are supported and fully maintained.**

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

## TableComposable examples

The `TableComposable` component differs from the regular `Table` component, in that it allows you to compose the table by nesting the relevant `Thead`, `Tbody`, `Tr`, `Th` and `Td` components within it. For a less declarative and more implicit approach, use the `Table` component instead.

Some general notes:

- Provide `dataLabel` prop to the `Td` components so that in mobile view the cell has a label to provide context.
- If you want a table caption, simply place a `<Caption>My caption</Caption>` as the first child within a `TableComposable`.
- You can set the `TableComposable` variant to `compact`

### Composable: Basic

```ts file="ComposableTableBasic.tsx"
```

### Composable: Custom row wrapper, header tooltips & popovers

- If you add the `noWrap` prop to `Thead`, it won't wrap it if there is no space
- You can add the `textCenter` prop to `Th` or `Td` to center the contents
- You can pass `className`, `style` and more to `Tr`

To add a header tooltip or popover to `Th`, pass a `ThInfoType` object via the `info` prop.

```ts file="ComposableTableMisc.tsx"
```

### Composable: Sortable & wrapping headers

To make a column sortable, pass a `ThSortType` object via the `sort` prop on a column's `Th`.

`ThSortType` includes an `OnSort` event handler which has the following signature:

```
type OnSort = (
  event: React.MouseEvent,
  columnIndex: number,
  sortByDirection: SortByDirection,
  extraData: IExtraColumnData
) => void;

```

The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small. To see a full page demo of a responsive sortable table, utilizing a toolbar item to control sorting for small screens, view the `Sortable - responsive` demo in the `React demos` tab.

```ts file="ComposableTableSortable.tsx"
```

### Composable: Sortable - custom control

Sorting a table may also be controlled manually with a toolbar control. To see a full page demo of a responsive table, view the `Sortable - responsive` demo in the `React demos` tab.

```ts file="ComposableTableSortableCustom.tsx"
```

### Composable: Selectable with checkbox

To make a row selectable, the table needs a selection column.
The selection column is just another column, but with selection specific props added.
We add it as the first header cell and also as the first body cell for each row.

To make a column sortable, pass a `ThSelectType` object via the `select` prop on a column's `Th`.

To make a row sortable, pass a `TdSelectType` object via the `select` prop on each rows's first `Td`.

Both the `TdSelectType` and the `ThSelectType` expect an `OnSelect` event handler with the following signature:

`OnSelect:`

```
type OnSelect = (
  event: React.FormEvent<HTMLInputElement>,
  isSelected: boolean,
  rowIndex: number,
  rowData: IRowData,
  extraData: IExtraData
) => void;
```

**Note:** This example has a `shift + select` feature where holding shift while
checking checkboxes will check intermediate rows' checkboxes.

```ts file="ComposableTableSelectable.tsx"
```

### Composable: Selectable radio input

Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has radio button props.

```ts file="ComposableTableSelectableRadio.tsx"
```

### Composable: Row click handler, hoverable & selected rows

This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.

```ts file="ComposableTableHoverable.tsx"
```

### Composable: Actions

This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.

To make a cell an action cell, pass a `TdActionsType` object via the `actions` prop on a rows's last `Td`.

```ts file="ComposableTableActions.tsx"
```

### Composable: Expandable

To make a parent/child row pair expandable:

1. Make the first cell in every row an expandable cell by passing `TdExpandType` object to the `expand` prop on the `Td`
2. Wrap the content of each child row cell in `ExpandableRowContent`.
3. Enclose each parent/child row pair in a `Tbody` component with an `isExpanded` prop.

The `TdExpandType` expects an `OnCollapse` event handler that has the following signature:

```
type OnCollapse = (
  event: React.MouseEvent,
  rowIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => void;
```

```ts file="ComposableTableExpandable.tsx"
```

### Composable: Compound expandable

To make a parent/child row pair compound expandable:

1. Pass a `TdCompoundExpandType` object to the `compoundExpand` prop on any `Td` that has an expandable child row
2. Wrap the content of each child row cell in `ExpandableRowContent`.
3. Each child `Tr` has an `isExpanded` prop.

The `TdCompoundExpandType` expects an `OnExpand` event handler with the following signature

```
export type OnExpand = (
  event: React.MouseEvent,
  rowIndex: number,
  colIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => void;
```

```ts file="ComposableTableCompoundExpandable.tsx"
```

### Composable: Cell width, breakpoint modifiers

```ts file="ComposableTableCellWidth.tsx"
```

### Composable: Controlling text

```ts file="ComposableTableControllingText.tsx"
```

#### TODO: distinguish between the use cases for modifier on Td vs on TableText?

### Composable: Modifiers with table text

```ts file="ComposableTableTextModifiers.tsx"
```

### Composable: Empty state

```ts file="ComposableTableEmptyState.tsx"
```

### Composable: Favoritable (implemented with sortable)

To make a row favoritable, the table needs a favoritable column.
Pass a `TdFavoritesType` object via the `favorites` prop on each rows's first `Td` in the favoritable column.

The `TdFavoritesType` expects an `OnFavorite` event handler with the following signature:

```
type OnFavorite = (
  event: React.MouseEvent,
  isFavorited: boolean,
  rowIndex: number,
  rowData: IRowData,
  extraData: IExtraData
) => void;
```

To make a favoritable column sortable, pass a `ThSortType` object to the favoritable column's `Th` with `isFavorites` set to true.

```ts file="ComposableTableFavoritable.tsx"
```

### Composable: Tree table

To enable a tree table:

1. Pass the `isTreeTable` prop to the `TableComposable` component
2. Use a `TreeRowWrapper` rather than `Tr`
3. Pass the following `props` to each row (both the `TreeRowWrapper` and the `treeRow` in the first column):
   - `isExpanded` - Flag indicating the node is expanded and its children are visible
   - `isDetailsExpanded` - (optional) Flag indicating the row's details are visible in responsive view
   - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
   - `aria-level` - number representing how many levels deep this node is nested
   - `aria-posinset` - number representing where in the order this node sits amongst its siblings
   - `aria-setsize` - number representing the number of children this node has
   - `isChecked` - (optional) if this row uses checkboxes, flag indicating the checkbox checked
   - `icon` - (optional) ReactNode icon to display before the row title
   - `toggleAriaLabel` - (optional) accessible label for the expand/collapse children rows toggle arrow
   - `checkAriaLabel` - (optional) accessible label for the checkbox
   - `showDetailsAriaLabel` - (optional) accessible label for the show row details button in the responsive view
4. The first `Td` in each row will pass the following to the `treeRow` prop:

   - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
   - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
   - `onToggleRowDetails` - (optional) Callback when user shows/hides the row details in responsive view.
   - `props` - (as defined above)
   - `rowIndex` - number representing the index of the row

Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level,
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.

```ts isBeta file="ComposableTableTree.tsx"
```

### Composable: Draggable row table

To make a row draggable:

1. The table needs a draggable column.
2. Each draggable `Tr` needs to be passed `draggable`, `onDrop`, `onDragEnd`, and `onDragStart` props.
3. The `Tbody` needs `onDragOver`, `onDrop`, and `onDragLeave` props.
4. While the user is dragging a row, the `` class needs to be applied to `TableComposable`.
5. The draggable `Td` in each row needs a `TdDraggableType` object passed to its `draggable` prop.

```ts isBeta file="ComposableTableDraggable.tsx"
```

### Composable: Sticky column

To make a column sticky, wrap `TableComposable` with `InnerScrollContainer` and add the following properties to the `Th` that should be sticky: `isStickyColumn` and `hasRightBorder`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `Th` should also have the `modifier="nowrap"` property. To set the minimum width of the sticky column, use the `stickyMinWidth` property.

```js
import React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Caption,
  TableText,
  InnerScrollContainer
} from '@patternfly/react-table';
import { Flex, FlexItem } from '@patternfly/react-core';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

ComposableTableStickyColumn = () => {
  const columns = ['Fact', 'State', 'Header 3', 'Header 4', 'Header 5', 'Header 6', 'Header 7', 'Header 8', 'Header 9'];
  const [rows, setRows] = React.useState([
    [
      'Fact 1',
      'State 1',
      'Test cell 1-3',
      'Test cell 1-4',
      'Test cell 1-5',
      'Test cell 1-6',
      'Test cell 1-7',
      'Test cell 1-8',
      'Test cell 1-9'
    ],
    [
      'Fact 2',
      'State 2',
      'Test cell 2-3',
      'Test cell 2-4',
      'Test cell 2-5',
      'Test cell 2-6',
      'Test cell 2-7',
      'Test cell 2-8',
      'Test cell 2-9'
    ],
    [
      'Fact 3',
      'State 3',
      'Test cell 3-3',
      'Test cell 3-4',
      'Test cell 3-5',
      'Test cell 3-6',
      'Test cell 3-7',
      'Test cell 3-8',
      'Test cell 3-9'
    ],
    [
      'Fact 4',
      'State 4',
      'Test cell 4-3',
      'Test cell 4-4',
      'Test cell 4-5',
      'Test cell 4-6',
      'Test cell 4-7',
      'Test cell 4-8',
      'Test cell 4-9'
    ],
    [
      'Fact 5',
      'State 5',
      'Test cell 5-3',
      'Test cell 5-4',
      'Test cell 5-5',
      'Test cell 5-6',
      'Test cell 5-7',
      'Test cell 5-8',
      'Test cell 5-9'
    ],
    [
      'Fact 6',
      'State 6',
      'Test cell 6-3',
      'Test cell 6-4',
      'Test cell 6-5',
      'Test cell 6-6',
      'Test cell 6-7',
      'Test cell 6-8',
      'Test cell 6-9'
    ],
    [
      'Fact 7',
      'State 7',
      'Test cell 7-3',
      'Test cell 7-4',
      'Test cell 7-5',
      'Test cell 7-6',
      'Test cell 7-7',
      'Test cell 7-8',
      'Test cell 7-9'
    ],
    [
      'Fact 8',
      'State 8',
      'Test cell 8-3',
      'Test cell 8-4',
      'Test cell 8-5',
      'Test cell 8-6',
      'Test cell 8-7',
      'Test cell 8-8',
      'Test cell 8-9'
    ],
    [
      'Fact 9',
      'State 9',
      'Test cell 9-3',
      'Test cell 9-4',
      'Test cell 9-5',
      'Test cell 9-6',
      'Test cell 9-7',
      'Test cell 9-8',
      'Test cell 9-9'
    ]
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (typeof a[index] === 'number') {
        // numeric sort
        if (direction === 'asc') {
          return a[index] - b[index];
        }
        return b[index] - a[index];
      } else {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
      }
    });
    setRows(updatedRows);
  };
  return (
    <React.Fragment>
      <InnerScrollContainer>
        <TableComposable aria-label="Sticky column table" gridBreakPoint="">
          <Thead>
            <Tr>
              {columns.map((column, columnIndex) => {
                const sortParams =
                  columnIndex === 0 || columnIndex === 1
                    ? {
                        sort: {
                          sortBy: {
                            index: activeSortIndex,
                            direction: activeSortDirection
                          },
                          onSort,
                          columnIndex
                        }
                      }
                    : {};

                if (columnIndex === 0) {
                  return (
                    <Th key={columnIndex} isStickyColumn hasRightBorder modifier="truncate" {...sortParams}>
                      {column}
                    </Th>
                  );
                } else if (columnIndex === 1) {
                  return (
                    <Th key={columnIndex} modifier="truncate" {...sortParams}>
                      {column}
                    </Th>
                  );
                } else {
                  return (
                    <Th key={columnIndex} modifier="truncate">
                      {column}
                    </Th>
                  );
                }
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 0) {
                    return (
                      <Th key={cellIndex} isStickyColumn hasRightBorder modifier="truncate">
                        {cell}
                      </Th>
                    );
                  } else {
                    return (
                      <Td key={`${rowIndex}_${cellIndex}`} modifier="nowrap" dataLabel={columns[cellIndex]}>
                        {cell}
                      </Td>
                    );
                  }
                })}
              </Tr>
            ))}
          </Tbody>
        </TableComposable>
      </InnerScrollContainer>
    </React.Fragment>
  );
};
```

### Composable: Multiple sticky columns

To make multiple columns sticky, wrap `TableComposable` with `InnerScrollContainer` and add `isStickyColumn` to all columns that should be sticky. The rightmost column should also have the `hasRightBorder` property, and each sticky column after the first must define a `stickyLeftOffset` property that equals the combined width of the previous sticky columns - set by `stickyMinWidth`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `Th` should also have the `modifier="nowrap"` property.

```js
import React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Caption,
  TableText,
  InnerScrollContainer
} from '@patternfly/react-table';
import { Flex, FlexItem } from '@patternfly/react-core';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

ComposableTableMultipleStickyColumn = () => {
  const columns = ['Fact', 'State', 'Header 3', 'Header 4', 'Header 5', 'Header 6', 'Header 7', 'Header 8', 'Header 9'];
  const [rows, setRows] = React.useState([
    [
      'Fact 1',
      'State 1',
      'Test cell 1-3',
      'Test cell 1-4',
      'Test cell 1-5',
      'Test cell 1-6',
      'Test cell 1-7',
      'Test cell 1-8',
      'Test cell 1-9'
    ],
    [
      'Fact 2',
      'State 2',
      'Test cell 2-3',
      'Test cell 2-4',
      'Test cell 2-5',
      'Test cell 2-6',
      'Test cell 2-7',
      'Test cell 2-8',
      'Test cell 2-9'
    ],
    [
      'Fact 3',
      'State 3',
      'Test cell 3-3',
      'Test cell 3-4',
      'Test cell 3-5',
      'Test cell 3-6',
      'Test cell 3-7',
      'Test cell 3-8',
      'Test cell 3-9'
    ],
    [
      'Fact 4',
      'State 4',
      'Test cell 4-3',
      'Test cell 4-4',
      'Test cell 4-5',
      'Test cell 4-6',
      'Test cell 4-7',
      'Test cell 4-8',
      'Test cell 4-9'
    ],
    [
      'Fact 5',
      'State 5',
      'Test cell 5-3',
      'Test cell 5-4',
      'Test cell 5-5',
      'Test cell 5-6',
      'Test cell 5-7',
      'Test cell 5-8',
      'Test cell 5-9'
    ],
    [
      'Fact 6',
      'State 6',
      'Test cell 6-3',
      'Test cell 6-4',
      'Test cell 6-5',
      'Test cell 6-6',
      'Test cell 6-7',
      'Test cell 6-8',
      'Test cell 6-9'
    ],
    [
      'Fact 7',
      'State 7',
      'Test cell 7-3',
      'Test cell 7-4',
      'Test cell 7-5',
      'Test cell 7-6',
      'Test cell 7-7',
      'Test cell 7-8',
      'Test cell 7-9'
    ],
    [
      'Fact 8',
      'State 8',
      'Test cell 8-3',
      'Test cell 8-4',
      'Test cell 8-5',
      'Test cell 8-6',
      'Test cell 8-7',
      'Test cell 8-8',
      'Test cell 8-9'
    ],
    [
      'Fact 9',
      'State 9',
      'Test cell 9-3',
      'Test cell 9-4',
      'Test cell 9-5',
      'Test cell 9-6',
      'Test cell 9-7',
      'Test cell 9-8',
      'Test cell 9-9'
    ]
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (typeof a[index] === 'number') {
        // numeric sort
        if (direction === 'asc') {
          return a[index] - b[index];
        }
        return b[index] - a[index];
      } else {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
      }
    });
    setRows(updatedRows);
  };
  return (
    <React.Fragment>
      <InnerScrollContainer>
        <TableComposable aria-label="Sticky column table" gridBreakPoint="">
          <Thead>
            <Tr>
              {columns.map((column, columnIndex) => {
                const sortParams =
                  columnIndex === 0 || columnIndex === 1
                    ? {
                        sort: {
                          sortBy: {
                            index: activeSortIndex,
                            direction: activeSortDirection
                          },
                          onSort,
                          columnIndex
                        }
                      }
                    : {};

                if (columnIndex === 0) {
                  return (
                    <Th key={columnIndex} isStickyColumn modifier="truncate" {...sortParams}>
                      {column}
                    </Th>
                  );
                } else if (columnIndex === 1) {
                  return (
                    <Th
                      key={columnIndex}
                      isStickyColumn
                      stickyMinWidth="120px"
                      stickyLeftOffset="120px"
                      hasRightBorder
                      modifier="truncate"
                      {...sortParams}
                    >
                      {column}
                    </Th>
                  );
                } else {
                  return (
                    <Th key={columnIndex} modifier="truncate">
                      {column}
                    </Th>
                  );
                }
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 0) {
                    return (
                      <Th key={cellIndex} isStickyColumn modifier="truncate">
                        {cell}
                      </Th>
                    );
                  } else if (cellIndex === 1) {
                    return (
                      <Th
                        key={cellIndex}
                        isStickyColumn
                        stickyMinWidth="120px"
                        stickyLeftOffset="120px"
                        modifier="truncate"
                        hasRightBorder
                      >
                        <BlueprintIcon />
                        {` ${cell}`}
                      </Th>
                    );
                  } else {
                    return (
                      <Td key={`${rowIndex}_${cellIndex}`} modifier="nowrap" dataLabel={columns[cellIndex]}>
                        {cell}
                      </Td>
                    );
                  }
                })}
              </Tr>
            ))}
          </Tbody>
        </TableComposable>
      </InnerScrollContainer>
    </React.Fragment>
  );
};
```

### Composable: Sticky columns and header

To maintain proper sticky behavior across sticky columns and header, `TableComposable` must be wrapped with `OuterScrollContainer` and `InnerScrollContainer` as shown in the example below.

```js
import React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Caption,
  TableText,
  InnerScrollContainer,
  OuterScrollContainer
} from '@patternfly/react-table';
import { Flex, FlexItem } from '@patternfly/react-core';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

ComposableTableStickyColumnAndHeader = () => {
  const columns = ['Fact', 'State', 'Header 3', 'Header 4', 'Header 5', 'Header 6', 'Header 7', 'Header 8', 'Header 9'];
  const [rows, setRows] = React.useState([
    [
      'Fact 1',
      'State 1',
      'Test cell 1-3',
      'Test cell 1-4',
      'Test cell 1-5',
      'Test cell 1-6',
      'Test cell 1-7',
      'Test cell 1-8',
      'Test cell 1-9'
    ],
    [
      'Fact 2',
      'State 2',
      'Test cell 2-3',
      'Test cell 2-4',
      'Test cell 2-5',
      'Test cell 2-6',
      'Test cell 2-7',
      'Test cell 2-8',
      'Test cell 2-9'
    ],
    [
      'Fact 3',
      'State 3',
      'Test cell 3-3',
      'Test cell 3-4',
      'Test cell 3-5',
      'Test cell 3-6',
      'Test cell 3-7',
      'Test cell 3-8',
      'Test cell 3-9'
    ],
    [
      'Fact 4',
      'State 4',
      'Test cell 4-3',
      'Test cell 4-4',
      'Test cell 4-5',
      'Test cell 4-6',
      'Test cell 4-7',
      'Test cell 4-8',
      'Test cell 4-9'
    ],
    [
      'Fact 5',
      'State 5',
      'Test cell 5-3',
      'Test cell 5-4',
      'Test cell 5-5',
      'Test cell 5-6',
      'Test cell 5-7',
      'Test cell 5-8',
      'Test cell 5-9'
    ],
    [
      'Fact 6',
      'State 6',
      'Test cell 6-3',
      'Test cell 6-4',
      'Test cell 6-5',
      'Test cell 6-6',
      'Test cell 6-7',
      'Test cell 6-8',
      'Test cell 6-9'
    ],
    [
      'Fact 7',
      'State 7',
      'Test cell 7-3',
      'Test cell 7-4',
      'Test cell 7-5',
      'Test cell 7-6',
      'Test cell 7-7',
      'Test cell 7-8',
      'Test cell 7-9'
    ],
    [
      'Fact 8',
      'State 8',
      'Test cell 8-3',
      'Test cell 8-4',
      'Test cell 8-5',
      'Test cell 8-6',
      'Test cell 8-7',
      'Test cell 8-8',
      'Test cell 8-9'
    ],
    [
      'Fact 9',
      'State 9',
      'Test cell 9-3',
      'Test cell 9-4',
      'Test cell 9-5',
      'Test cell 9-6',
      'Test cell 9-7',
      'Test cell 9-8',
      'Test cell 9-9'
    ]
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (typeof a[index] === 'number') {
        // numeric sort
        if (direction === 'asc') {
          return a[index] - b[index];
        }
        return b[index] - a[index];
      } else {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
      }
    });
    setRows(updatedRows);
  };
  return (
    <React.Fragment>
      <div style={{ height: '600px' }}>
        <OuterScrollContainer>
          <InnerScrollContainer>
            <TableComposable aria-label="Sticky column table" gridBreakPoint="" isStickyHeader>
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => {
                    const sortParams =
                      columnIndex === 0 || columnIndex === 1
                        ? {
                            sort: {
                              sortBy: {
                                index: activeSortIndex,
                                direction: activeSortDirection
                              },
                              onSort,
                              columnIndex
                            }
                          }
                        : {};

                    if (columnIndex === 0) {
                      return (
                        <Th key={columnIndex} isStickyColumn modifier="truncate" {...sortParams}>
                          {column}
                        </Th>
                      );
                    } else if (columnIndex === 1) {
                      return (
                        <Th
                          key={columnIndex}
                          isStickyColumn
                          stickyMinWidth="120px"
                          stickyLeftOffset="120px"
                          hasRightBorder
                          modifier="truncate"
                          {...sortParams}
                        >
                          {column}
                        </Th>
                      );
                    } else {
                      return (
                        <Th key={columnIndex} modifier="truncate">
                          {column}
                        </Th>
                      );
                    }
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    {row.map((cell, cellIndex) => {
                      if (cellIndex === 0) {
                        return (
                          <Th key={cellIndex} isStickyColumn modifier="truncate">
                            {cell}
                          </Th>
                        );
                      } else if (cellIndex === 1) {
                        return (
                          <Th
                            key={cellIndex}
                            isStickyColumn
                            stickyMinWidth="120px"
                            stickyLeftOffset="120px"
                            modifier="truncate"
                            hasRightBorder
                          >
                            <BlueprintIcon />
                            {` ${cell}`}
                          </Th>
                        );
                      } else {
                        return (
                          <Td key={`${rowIndex}_${cellIndex}`} modifier="nowrap" dataLabel={columns[cellIndex]}>
                            {cell}
                          </Td>
                        );
                      }
                    })}
                  </Tr>
                ))}
              </Tbody>
            </TableComposable>
          </InnerScrollContainer>
        </OuterScrollContainer>
      </div>
    </React.Fragment>
  );
};
```

### Composable: Nested column headers

To make a nested column header:

1. Wrap `TableComposable` with `InnerScrollContainer`.
2. Pass `nestedHeaderColumnSpans` to `TableComposable`. `nestedHeaderColumnSpans` is an array of numbers representing the column spans of the top level columns to `TableComposable`, where each number is equal to the number of sub columns for a column, or `1` if a column contains no sub columns.
3. Pass `hasNestedHeader` to `Thead`.
4. Pass two `Tr` as children of `Thead`.

The first `Tr` represents the top level of columns, and each must pass either `rowSpan` if the column does not contain sub columns or `colSpan` if the column contains sub columns. The value of `rowSpan` is equal to the number of rows the nested header will span, typically `2`, and the value of `colSpan` is equal to the number of sub columns in a column. Each `Th` except the last should also pass `hasRightBorder`.

The second `Tr` represents the second level of sub columns. The `Th` in this row each should pass `isSubHeader`, and the last sub column of a column should also pass `hasRightBorder`.

```js
import React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Caption,
  TableText,
  InnerScrollContainer,
  OuterScrollContainer
} from '@patternfly/react-table';
import { Flex, FlexItem, Stack, StackItem } from '@patternfly/react-core';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

ComposableTableStickyColumnAndHeader = () => {
  const columnData = [
    {
      name: 'Pods',
      subColumns: [
        { name: 'Source', index: 0, sort: true },
        { name: 'Destination', index: 1, sort: true },
        { name: 'Date & Time', index: 2, sort: true }
      ]
    },
    {
      name: 'Ports',
      subColumns: [
        { name: 'Source', index: 3, sort: true },
        { name: 'Desination', index: 4, sort: true }
      ]
    },
    { name: 'Protocol', index: 5, sort: true },
    { name: 'Flow rate', index: 6, sort: true },
    { name: 'Traffic', index: 7, sort: true },
    { name: 'Packets', index: 8, sort: true }
  ];
  const colSpans = columnData.map(column => {
    return column.subColumns ? column.subColumns.length : 1;
  });
  const [rows, setRows] = React.useState([
    [
      'api-pod-source-name',
      'api-pod-destination-name',
      <div>
        <span>June 22, 2021</span>
        <span className="pf-u-color-200">3:58:24 PM</span>
      </div>,
      <Stack>
        <StackItem>
          <span>443</span>
        </StackItem>
        <StackItem>
          <span className="pf-u-color-200">(HTTPS)</span>
        </StackItem>
      </Stack>,
      <Stack>
        <StackItem>
          <span>24</span>
        </StackItem>
        <StackItem>
          <span className="pf-u-color-200">(smtp)</span>
        </StackItem>
      </Stack>,
      'TCP',
      '1.9 Kbps',
      '2.1 KB',
      '3'
    ]
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the rows
    const updatedRows = rows.sort((a, b) => {
      if (typeof a[index] === 'number') {
        // numeric sort
        if (direction === 'asc') {
          return a[index] - b[index];
        }
        return b[index] - a[index];
      } else {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
      }
    });
    setRows(updatedRows);
  };

  return (
    <React.Fragment>
      <InnerScrollContainer>
        <TableComposable aria-label="Sticky column table" gridBreakPoint="" nestedHeaderColumnSpans={colSpans}>
          <Thead hasNestedHeader>
            <Tr>
              {columnData.map((column, columnIndex) => {
                const sortParams = column.sort
                  ? {
                      sort: {
                        sortBy: {
                          index: activeSortIndex,
                          direction: activeSortDirection
                        },
                        onSort,
                        columnIndex: column.index
                      }
                    }
                  : {};
                const colParams = column.subColumns ? { colSpan: column.subColumns.length } : { rowSpan: 2 };
                return (
                  <Th
                    key={`${columnIndex}-${column.name}`}
                    {...(columnIndex !== 0 && columnIndex !== 1 && { modifier: 'fitContent' })}
                    {...(columnIndex !== columnData.length - 1 && { hasRightBorder: true })}
                    {...colParams}
                    {...sortParams}
                  >
                    {column.name}
                  </Th>
                );
              })}
            </Tr>
            <Tr>
              {columnData.map((column, columnIndex) => {
                if (column.subColumns) {
                  return column.subColumns.map((subColumn, subColumnIndex) => {
                    const sortParams = subColumn.sort
                      ? {
                          sort: {
                            sortBy: {
                              index: activeSortIndex,
                              direction: activeSortDirection
                            },
                            onSort,
                            columnIndex: subColumn.index
                          }
                        }
                      : {};

                    return (
                      <Th
                        key={`${subColumnIndex}-${subColumn.name}`}
                        isSubheader
                        {...(columnIndex !== 0 && { modifier: 'fitContent' })}
                        {...(columnIndex === 0 &&
                          subColumnIndex !== 0 &&
                          subColumnIndex !== 1 && { modifier: 'fitContent' })}
                        {...(subColumnIndex === column.subColumns.length - 1 && { hasRightBorder: true })}
                        {...sortParams}
                      >
                        {subColumn.name}
                      </Th>
                    );
                  });
                }
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  return (
                    <Td key={`${rowIndex}_${cellIndex}`} dataLabel={''}>
                      {cell}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </TableComposable>
      </InnerScrollContainer>
    </React.Fragment>
  );
};
```

### Composable: Nested column headers and expandable rows

```js
import React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ExpandableRowContent,
  InnerScrollContainer
} from '@patternfly/react-table';
import { Button } from '@patternfly/react-core';

ComposableTableNestedExpandable = () => {
  const columns = [
    {
      name: 'Team',
      index: 0
    },
    {
      name: 'Members',
      subColumns: [
        { name: 'Design Lead', index: 1 },
        { name: 'Interaction Designer', index: 2 },
        { name: 'Visual Designer', index: 3 }
      ]
    },
    { name: 'Contact', index: 4 }
  ];
  const rowPairs = [
    {
      parent: [
        'Developer program',
        'Person 1',
        'Person 2',
        'Person 3',
        <Button variant="link" isInline>
          Message us!
        </Button>
      ],
      child: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      fullWidth: true
    },
    {
      parent: [
        'Developer program',
        'Person A',
        'Person B',
        'Person C',
        <Button variant="link" isInline>
          Message us!
        </Button>
      ],
      child: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      fullWidth: true
    },
    {
      parent: [
        'Developer program',
        'Person X',
        'Person Y',
        'Person Z',
        <Button variant="link" isInline>
          Message us!
        </Button>
      ],
      child: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      fullWidth: true
    }
  ];
  const numColumns = 5;
  const colSpans = columns.map(column => {
    return column.subColumns ? column.subColumns.length : 1;
  });
  // Init all to false
  const [expanded, setExpanded] = React.useState(
    Object.fromEntries(Object.entries(rowPairs).map(([k, v]) => [k, !Boolean(v.child)]))
  );
  const handleExpansionToggle = (event, pairIndex) => {
    setExpanded({
      ...expanded,
      [pairIndex]: !expanded[pairIndex]
    });
  };
  let rowIndex = -1;
  return (
    <InnerScrollContainer>
      <TableComposable aria-label="Expandable Table" nestedHeaderColumnSpans={colSpans}>
        <Thead hasNestedHeader>
          <Tr>
            <Th rowSpan={2} />
            <Th rowSpan={2} hasRightBorder>
              {columns[0].name}
            </Th>
            <Th colSpan={3} hasRightBorder>
              {columns[1].name}
            </Th>
            <Th rowSpan={2}>{columns[2].name}</Th>
          </Tr>
          <Tr resetOffset>
            <Th isSubheader>{columns[1].subColumns[0].name}</Th>
            <Th isSubheader>{columns[1].subColumns[1].name}</Th>
            <Th isSubheader hasRightBorder>
              {columns[1].subColumns[2].name}
            </Th>
          </Tr>
        </Thead>
        {rowPairs.map((pair, pairIndex) => {
          rowIndex += 1;
          const parentRow = (
            <Tr key={rowIndex}>
              <Td
                key={`${rowIndex}_0`}
                expand={
                  pair.child
                    ? {
                        rowIndex: pairIndex,
                        isExpanded: expanded[pairIndex],
                        onToggle: handleExpansionToggle
                      }
                    : null
                }
              />
              {pair.parent.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          );
          if (pair.child) {
            rowIndex += 1;
          }
          const childRow = pair.child ? (
            <Tr key={rowIndex} isExpanded={expanded[pairIndex] === true}>
              {!rowPairs[pairIndex].fullWidth && <Td key={`${rowIndex}_0`} />}
              {rowPairs[pairIndex].child.map((cell, cellIndex) => {
                const numChildCells = rowPairs[pairIndex].child.length;
                const shift = rowPairs[pairIndex].fullWidth ? 1 : 0;
                const shiftedCellIndex = cellIndex + shift;
                // some examples of how you could customize colSpan based on your needs
                const getColSpan = () => {
                  // we have 6 columns (1 expandable column + 5 regular columns)
                  // for the rowPairs where we've specificed `fullWidth`, add +1 to account for the expandable column
                  let colSpan = 1;
                  if (numChildCells === 1) {
                    // single child cell: take up full width
                    colSpan = numColumns + shift;
                  } else if (numChildCells === 2) {
                    // 2 children
                    // child 1: 2 colspan
                    // child 2: 3 or 4 colspan depending on fullWidth
                    colSpan = cellIndex === 0 ? 2 : 3 + shift;
                  } else if (numChildCells === 3) {
                    // 3 children
                    // child 1: 2 colspam
                    // child 2: 2 colspan
                    // child 3: 1 or 2 colspan depending on fullWidth
                    colSpan = cellIndex === 2 ? 1 + shift : 2;
                  }
                  return colSpan;
                };
                return (
                  <Td
                    key={`${rowIndex}_${shiftedCellIndex}`}
                    dataLabel={columns[cellIndex]}
                    noPadding={rowPairs[pairIndex].noPadding}
                    colSpan={getColSpan()}
                  >
                    <ExpandableRowContent>{cell.title || cell}</ExpandableRowContent>
                  </Td>
                );
              })}
            </Tr>
          ) : null;
          return (
            <Tbody key={pairIndex} isExpanded={expanded[pairIndex] === true}>
              {parentRow}
              {childRow}
            </Tbody>
          );
        })}
      </TableComposable>
    </InnerScrollContainer>
  );
};
```
