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
    'ActionsColumn',
    'IActions',
    'TdCompoundExpandType',
    'TdFavoritesType',
    'TdDraggableType',
    'ThInfoType',
    'TdExpandType',
    'ThExpandType',
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

The second is the original `Table` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it. The documentation for the older table implementation can be found under the [React legacy](/components/table/react-legacy) tab.

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

To make a cell an action cell, render an `ActionsColumn` component inside a row's last `Td` and pass an array of `IAction` objects via the `items` prop of `ActionsColumn`.

If actions menus are getting clipped by other items on the page, such as sticky columns or rows, the `ActionsColumn` can be passed a `menuAppendTo` prop to adjust where the actions menu is appended.

```ts file="ComposableTableActions.tsx"
```

### Composable: Actions Overflow

Useing an `OverflowMenu` in the actions column, allowing the actions to condense into a dropdown if necessary for space.

```ts file="ComposableTableActionsOverflow.tsx"
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

Note: Table column widths will respond automatically when toggling expanded rows. To retain column widths between expanded and collapsed states, column header and/or data cell widths must be set.

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

```ts file="ComposableTableTree.tsx"
```

### Composable: Draggable row table

To make a row draggable:

1. The table needs a draggable column.
2. Each draggable `Tr` needs to be passed `draggable`, `onDrop`, `onDragEnd`, and `onDragStart` props.
3. The `Tbody` needs `onDragOver`, `onDrop`, and `onDragLeave` props.
4. While the user is dragging a row, the `pf-m-drag-over` class needs to be applied to `TableComposable`.
5. The draggable `Td` in each row needs a `TdDraggableType` object passed to its `draggable` prop.

```ts isBeta file="ComposableTableDraggable.tsx"
```

## Sticky table modifiers

To make certain columns and the header sticky, the table must be wrapped in a combination of `OuterScrollContainer` and `InnerScrollContainer`. For sticky columns, only `InnerScrollContainer` is required. For sticky headers, and sticky headers with sticky columns, both containers are required to ensure the sticky behavior behaves correctly.

**Note:** Sticky table headers and columns have a higher `z-index` than the `z-index` used for menus (dropdown, select, etc). The intent is that the contents of a scrollable table will scroll under the sticky header/column, including any expanded menus. However, there may be use cases where a menu needs to appear on top of a sticky header/column, such as an expanded menu in a toolbar above a table with a sticky header.

There are a few ways this can be handled:

- Manipulate the `z-index` of the menu and/or table headers/columns manually.
- Use the `menuAppendTo` prop in non-composable react components with menus to append the menu to an element outside of the table (e.g., the table's parent element) so that the menu has a higher stacking context than - and can appear on top of - sticky headers/columns as well as appear outside of any scrollable content in the table.
- In the case where the menu is outside of the table (e.g., above the table in a toolbar, or below the table and the menu expands up), assign the entire table a lower `z-index` than the `z-index` of the menu. This creates a lower stacking context for the entire table compared to the menu, while preserving the stacking context of the elements inside of the table.

### Composable: Sticky column

To make a column sticky, wrap `TableComposable` with `InnerScrollContainer` and add the following properties to the `Th` or `Td` that should be sticky: `isStickyColumn` and `hasRightBorder`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `Th` or `Td` cells should also have the `modifier="nowrap"` property. To set the minimum width of the sticky column, use the `stickyMinWidth` property.

```ts file="ComposableTableStickyColumn.tsx"
```

### Composable: Multiple sticky columns

To make multiple columns sticky, wrap `TableComposable` with `InnerScrollContainer` and add `isStickyColumn` to all columns that should be sticky. The rightmost column should also have the `hasRightBorder` property, and each sticky column after the first must define a `stickyLeftOffset` property that equals the combined width of the previous sticky columns - set by `stickyMinWidth`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `Th` or `Td` cells should also have the `modifier="nowrap"` property.

```ts file="ComposableTableMultipleStickyColumns.tsx"
```

### Composable: Sticky columns and header

To maintain proper sticky behavior across sticky columns and header, `TableComposable` must be wrapped with `OuterScrollContainer` and `InnerScrollContainer`.

```ts file="ComposableTableStickyColumnsAndHeader.tsx"
```

## Nested column headers

To make a nested column header:

1. Wrap `TableComposable` with `InnerScrollContainer`.
2. Pass `nestedHeaderColumnSpans` to `TableComposable`. `nestedHeaderColumnSpans` is an array of numbers representing the column spans of the top level columns to `TableComposable`, where each number is equal to the number of sub columns for a column, or `1` if a column contains no sub columns.
3. Pass `hasNestedHeader` to `Thead`.
4. Pass two `Tr` as children of `Thead`.

The first `Tr` represents the top level of columns, and each must pass either `rowSpan` if the column does not contain sub columns or `colSpan` if the column contains sub columns. The value of `rowSpan` is equal to the number of rows the nested header will span, typically `2`, and the value of `colSpan` is equal to the number of sub columns in a column. Each `Th` except the last should also pass `hasRightBorder`.

The second `Tr` represents the second level of sub columns. The `Th` in this row each should pass `isSubHeader`, and the last sub column of a column should also pass `hasRightBorder`.

### Composable: Nested column headers

```ts file="ComposableTableNestedHeaders.tsx"
```

### Composable: Nested column headers and expandable rows

```ts file="ComposableTableNestedExpandable.tsx"
```

### Composable: Expandable with nested table

```ts file="ComposableTableNestedTableExpandable.tsx"
```

### Composable: Nested sticky header

```ts file="ComposableTableNestedStickyHeader.tsx"
```

## Striped

### Composable: Striped

To apply striping to a basic table, add the `isStriped` property to `TableComposable`.

```ts file="ComposableTableStriped.tsx"
```

### Composable: Striped expandable

To apply striping to an expandable table, add the `isStriped` and `isExpandable` properties to `TableComposable`.

```ts file="ComposableTableStripedExpandable.tsx"
```

### Composable: Striped multiple tobdy

When there are multiple `Tbody` components within a table, a more granular application of striping may be controlled by adding either the `isEvenStriped` or `isOddStriped` properties to `Tbody`. These properties will stripe even or odd rows within that `Tbody` respectively.

```ts file="ComposableTableStripedMultipleTbody.tsx"
```

### Composable: Striped tr

To manually control striping, add the `isStriped` property to each desired `Tr`. This replaces adding the `isStriped` property to `TableComposable`.

```ts file="ComposableTableStripedTr.tsx"
```
