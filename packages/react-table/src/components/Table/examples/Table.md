---
id: Table
cssPrefix: pf-c-table
section: components
propComponents: ['Table', 'TableHeader', 'TableBody', 'ISortBy']
ouia: true
---

# Legacy Table

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

PatternFly has two implementations of a React table.

The first is the newer `TableComposable` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an html table. Generally, updates and new feature requests are implemented in the `ComposableTable`.

The second is the original `Table` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it.

**For most common use cases, we recommend using `TableComposable`. Both implementations are supported and fully maintained.**

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

## Table Columns

Array items for columns provided to the `Table`'s `cells` prop, can be simple strings or objects.

```
cells: (ICell | string)[];
```

`ICell` (excerpt):

```
interface ICell {
  /* cell contents */
  title?: string | React.ReactNode;
  /** transformations applied to the header cell */
  transforms?: ITransform[];
  /** transformations applied to the cells within the column's body */
  cellTransforms?: ITransform[];
  /** transformations applied to the entire column */
  columnTransforms?: ITransform[];
  /** Additional header props, it contains the info prop as well which can be used to add tooltip/popover */
  header?: HeaderType;
  /** Additional props passed into the rendered column header element */
  props?: any;
  /** Text to display when data from this column is rendered in mobile view */
  dataLabel?: string;
}
```

If you wish to enable other built in features, use `transforms` to apply them to
column headers or `cellTransforms` to apply them to every cell in that column.

```
// simple
columns: ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit']
// with tooltip
columns: [
  {
    title: 'Repositories',
    transforms: [
      info({
        tooltip: 'More information about repositories'
      })
    ]
  }
]
// center header and body cells within the column
columns: [
  {
    title: 'Last commit',
    transforms: [textCenter],
    cellTransforms: [textCenter]
  }
]
```

Many of the subsequent examples demonstrate how to apply different transformations to enable `Table` features.

## Table Rows

Array items for rows provided to the `Table`'s `rows` prop, can be simple strings or objects.

```
rows: (IRow | string[])[]
```

`IRow` (excerpt):

```
interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
}
interface IRowCell {
  title?: string | React.ReactNode | RowCellContent;
  props?: any;
  formatters?: IFormatter[];
}
```

## Table examples

### Basic

```ts file="LegacyTableBasic.tsx"
```

### Custom row wrapper

Custom row wrappers are passed to the `Table` component via the `rowWrapper` prop.
Each `rowWrapper` should return a tr element.

```
rowWrapper?: (props: RowWrapperProps) => JSX.Element;
```

RowWrapperProps:

```
interface RowWrapperProps {
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: IRow;
  rowProps?: {
    rowIndex: number;
    rowKey: string;
  };
  children?: React.ReactNode;
  ouiaId?: number | string;
}
```

```ts file="LegacyTableMisc.tsx"
```

### Sortable & wrapping column headers

To implement sortable columns:

1. Import and apply the `sortable` transform to the desired column.
2. Pass a managed `sortBy` prop to the `Table` component.
   `` `sortBy` - Specifies the initial sorting pattern for the table - asc/desc and the index of the column to sort by ``
3. Pass an `onSort` callback to the `Table` component
   `` `onSort` - (event: React.MouseEvent, columnIndex: number, sortByDirection: SortByDirection, extraData: IExtraColumnData) => void; ``

Note: If you want to add a tooltip/popover to a sortable header, in the `transforms` array the `info` transform has to precede the `sortable` transform.

The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small. The example below showcases how sorting may have a custom control display that can be used for small screen sizes.

```ts file="LegacyTableSortable.tsx"
```

### Sortable - custom control

Sorting a table may also be controlled with a toolbar. This toolbar item may also be hidden at large screen sizes and only displayed when the screen size is small to support responsive tables.

```ts file="LegacyTableSortableCustom.tsx"
```

### Selectable with checkbox

To enable row selection, set the `onSelect` callback prop on the Table.

To control whether a row is selected or not, the Table looks for `selected: true | falsy` on the row definition.

To disable selection for a row, set `disableSelection: true` on the row definition.

To include a 'select all' checkbox in the header row, pass `true` to the`canSelectAll` prop on the Table.

Note: this example also demonstrates the use of the `headerCol` transformation being applied to the first
column via the `cellTransforms` in the column definition. `headerCol` transforms the column so that instead
of using `td` elements, the cells in that column use `th` elements.

**Note:** This example has a `shift + select` feature where holding shift while
checking checkboxes will check intermediate rows' checkboxes.

```ts file="LegacyTableSelectable.tsx"
```

### Selectable radio input

To enable row radio selection, set the `onSelect` callback prop on the Table, and set
`RowSelectVariant.radio` or `"radio"` as the `selectVariant` prop on the Table.

To disable selection for a row, set `disableSelection: true` on the row definition.

```ts file="LegacyTableSelectableRadio.tsx"
```

### Hoverable rows, selectable rows, and header cell tooltips/popovers

This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.

```ts file="LegacyTableHoverable.tsx"
```

### Actions and first cell in body rows as th

To use actions you can either specify an array of actions and pass that into the `Table`'s `actions` prop, or for more control you can use the `actionResolver` callback prop to add actions conditionally.

If actions menus are getting clipped by other items on the page, such as sticky columns or rows, the `Table` can be passed a `actionsMenuAppendTo` prop to adjust where the actions menu is appended.

```ts file="LegacyTableActions.tsx"
```

### Expandable

To make an exapandable row, define a child row with the `parent` field set to its parent's row index.
The parent row can have an `isOpen` field for managing the expanded state of the parent row.

Also, pass an `onCollapse` event handler via the prop on the Table

```ts file="LegacyTableExpandable.tsx"
```

### Compound expandable

To build a compound expandable table:

1. Pass the `compoundExpand` transformation via the `cellTransforms` field in the column definition for each column that will have an expanded section.
2. For each expandable parent row, the cells in the expandable columns should:
   1. have a managed `isOpen` prop passed to the cell definition
   2. have an `ariaControls` value which matches the `id` of it’s child row
3. For each expandable child row, the row definition needs:
   1. A `parent` field set to its parent’s row index
   2. A `compoundParent` field set to the cell index which will control the expanding/collapsing of this row
4. An `onExpand` event handler prop should be passed to the Table.

```ts file="LegacyTableCompoundExpandable.tsx"
```

### With width and breakpoint visibility modifiers

```ts file="LegacyTableCellWidth.tsx"
```

### Controlling text

```ts file="LegacyTableControllingText.tsx"
```

### Modifiers with table text

```ts file="LegacyTableTextModifiers.tsx"
```

### Empty state

```ts file="LegacyTableEmptyState.tsx"
```

### Editable rows

To make a table row editable:

1. Pass a callback to Table via the `onRowEdit` prop.
2. Define the title for the editable cells using the RowCellContent type function.
3. Have the function return an `EditableTextCell`.
4. Pass the `value` and `name` of the cell's input to the `EditableTextCell` via the cell's `props` field, which is
   defined as being of type `EditableTextCellProps`.

Example:

```
{
  title: (value, rowIndex, cellIndex, props) => (
    <EditableTextCell
      value={value}
      rowIndex={rowIndex}
      cellIndex={cellIndex}
      props={props}
      handleTextInputChange={this.handleTextInputChange}
      inputAriaLabel="Row 1 cell 1 content"
    />
  ),
  props: {
    value: 'Row 1 cell 1 content',
    name: 'uniqueIdRow1Cell1'
  }
},
```

```js
import React from 'react';
import { SelectOption } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  cancelCellEdits,
  validateCellEdits,
  applyCellEdits,
  EditableTextCell,
  EditableSelectInputCell
} from '@patternfly/react-table';

class EditableRowsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: ['Text input col 1', 'Disabled text input col 2', 'Text input col 3', 'Text input col 4'],
      actions: [
        {
          title: 'Some action',
          onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
        }
      ],
      rows: [
        {
          rowEditBtnAriaLabel: idx => `Edit row ${idx}`,
          rowSaveBtnAriaLabel: idx => `Save edits for row ${idx}`,
          rowCancelBtnAriaLabel: idx => `Cancel edits for row ${idx}`,
          rowEditValidationRules: [
            {
              name: 'required',
              validator: value => value.trim() !== '',
              errorText: 'This field is required'
            }
          ],
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 1 content"
                />
              ),
              props: {
                value: 'Row 1 cell 1 content',
                name: 'uniqueIdRow1Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 1 cell 2 content"
                />
              ),
              props: {
                value: 'Row 1 cell 2, disabled content',
                name: 'uniqueIdRow1Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 3 content"
                />
              ),
              props: {
                value: 'Row 1 cell 3 content',
                name: 'uniqueIdRow1Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => (
                    <SelectOption
                      key={index}
                      value={option.value}
                      id={'uniqueIdRow1Cell4Option' + index}
                      isPlaceholder={option.isPlaceholder}
                    />
                  ))}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Option 1'],
                name: 'uniqueIdRow1Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || ['Option 1'],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'single',
                  'aria-label': 'Row 1 cell 4 content'
                }
              }
            }
          ]
        },
        {
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 1 content"
                />
              ),
              props: {
                value: 'Row 2 cell 1 content',
                name: 'uniqueIdRow2Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 2 cell 2 content"
                />
              ),
              props: {
                value: 'Row 2 cell 2, disabled content',
                name: 'uniqueIdRow2Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 3 content"
                />
              ),
              props: {
                value: 'Row 2 cell 3 content',
                name: 'uniqueIdRow2Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => {
                    return (
                      <SelectOption
                        key={index}
                        value={option.value}
                        id={'uniqueIdRow2Cell4Option' + index}
                        isPlaceholder={option.isPlaceholder}
                      />
                    );
                  })}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Placeholder...'],
                name: 'uniqueIdRow2Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || [],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'typeaheadmulti',
                  'aria-label': 'Row 2 cell 4 content',
                  toggleId: 'editable-toggle'
                }
              }
            }
          ]
        },
        {
          rowEditValidationRules: [
            {
              name: 'required',
              validator: value => value.trim() !== '',
              errorText: 'This field is required'
            },
            {
              name: 'notFoo',
              validator: value => value.trim().toLowerCase() !== 'foo',
              errorText: 'Value cannot be "foo"'
            },
            {
              name: 'minLength',
              validator: value => value.trim().length >= 7,
              errorText: 'Value must be at least 7 characters'
            },
            {
              name: 'notXyz',
              validator: value => value.trim().toLowerCase() !== 'xyz',
              errorText: 'Value cannot be xyz'
            }
          ],
          cells: [
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 3 cell 1 content"
                />
              ),
              props: {
                value: 'Row 3 cell 1 content',
                name: 'uniqueIdRow3Cell1'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  isDisabled
                  inputAriaLabel="Row 3 cell 2 content"
                />
              ),
              props: {
                value: 'Row 3 cell 2, disabled content',
                name: 'uniqueIdRow3Cell2'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 3 cell 3 content"
                />
              ),
              props: {
                value: 'Row 3 cell 3 content',
                name: 'uniqueIdRow3Cell3'
              }
            },
            {
              title: (value, rowIndex, cellIndex, props) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={props}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  isOpen={props.isSelectOpen}
                  options={props.options.map((option, index) => (
                    <SelectOption
                      key={index}
                      value={option.value}
                      id={'uniqueIdRow3Cell4Option' + index}
                      isPlaceholder={option.isPlaceholder}
                    />
                  ))}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={props.selected}
                />
              ),
              props: {
                value: ['Option 3'],
                name: 'uniqueIdRow3Cell4',
                isSelectOpen: props.isSelectOpen || false,
                selected: props.selected || ['Option 3'],
                options: [
                  { value: 'Placeholder...', isPlaceholder: true },
                  { value: 'Option 1' },
                  { value: 'Option 2' },
                  { value: 'Option 3' },
                  { value: 'Option 4' },
                  { value: 'Option 5' }
                ],
                editableSelectProps: {
                  variant: 'checkbox',
                  'aria-label': 'Row 3 cell 4 content'
                }
              }
            }
          ]
        }
      ]
    };

    this.updateEditableRows = (evt, type, isEditable, rowIndex, validationErrors) => {
      let newRows = Array.from(this.state.rows);

      if (validationErrors && Object.keys(validationErrors).length) {
        newRows[rowIndex] = validateCellEdits(newRows[rowIndex], type, validationErrors);
        this.setState({ rows: newRows });
        return;
      }

      if (type === 'cancel') {
        newRows[rowIndex] = cancelCellEdits(newRows[rowIndex]);
        this.setState({ rows: newRows });
        return;
      }

      newRows[rowIndex] = applyCellEdits(newRows[rowIndex], type);

      this.setState({ rows: newRows });
    };

    this.handleTextInputChange = (newValue, evt, rowIndex, cellIndex) => {
      let newRows = Array.from(this.state.rows);
      newRows[rowIndex].cells[cellIndex].props.editableValue = newValue;
      this.setState({
        rows: newRows
      });
    };

    this.onSelect = (newValue, evt, rowIndex, cellIndex, isPlaceholder) => {
      const newRows = Array.from(this.state.rows);
      const newCellProps = newRows[rowIndex].cells[cellIndex].props;

      if (isPlaceholder) {
        newCellProps.editableValue = [];
        newCellProps.selected = [];
      } else {
        if (newCellProps.editableValue === undefined) {
          newCellProps.editableValue = [];
        }

        let newSelected = Array.from(newCellProps.selected);

        switch (newCellProps.editableSelectProps.variant) {
          case 'typeaheadmulti':
          case 'checkbox': {
            if (!newSelected.includes(newValue)) {
              newSelected.push(newValue);
            } else {
              newSelected = newSelected.filter(el => el !== newValue);
            }
            break;
          }
          default: {
            newSelected = newValue;
          }
        }

        newCellProps.editableValue = newSelected;
        newCellProps.selected = newSelected;
      }

      this.setState({
        rows: newRows
      });
    };

    this.clearSelection = (rowIndex, cellIndex) => {
      const newRows = Array.from(this.state.rows);
      const newCellProps = newRows[rowIndex].cells[cellIndex].props;
      newCellProps.editableValue = [];
      newCellProps.selected = [];
      this.setState({
        rows: newRows
      });
    };

    this.onToggle = (isOpen, rowIndex, cellIndex) => {
      let newRows = Array.from(this.state.rows);
      newRows[rowIndex].cells[cellIndex].props.isSelectOpen = isOpen;
      this.setState({
        rows: newRows
      });
    };
  }

  render() {
    const { columns, rows, actions } = this.state;

    return (
      <Table
        actions={actions}
        onRowEdit={this.updateEditableRows}
        aria-label="Editable Rows Table"
        variant={TableVariant.compact}
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

### Favoritable (implemented with sortable and selectable)

To enable favoriting of a row, set the `onFavorite` callback prop on the Table.

To control whether a row is favorited or not, the Table looks for `favorited: true | falsy` on the row definition.

When you also pass a sort callback through the `onSort` prop, favorites sorting is also enabled.

If you want to exclude favorites from sorting, set `canSortFavorites={false}` on the Table.

```ts file="LegacyTableFavoritable.tsx"
```

### Tree table

To enable a tree table:

1. Pass the `isTreeTable` prop to the `Table` component
2. Pass the following props to each row:
   - `isExpanded` - Flag indicating the node is expanded and its children are visible
   - `isDetailsExpanded` - (optional) Flag indicating the row's details are visible in responsive view
   - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
   - `aria-level` - number representing how many levels deep this node is nested
   - `aria-posinset` - number representing where in the order this node sits amongst its siblings
   - `aria-setsize` - number representing the number of children this node has
   - `isChecked` - (optional) boolean used if this row uses checkboxes, flag indicating the checkbox checked
   - `icon` - (optional) ReactNode icon to display before the row title
   - `toggleAriaLabel` - (optional) accessible label for the expand/collapse children rows toggle arrow
   - `checkAriaLabel` - (optional) accessible label for the checkbox
   - `showDetailsAriaLabel` - (optional) accessible label for the show row details button in the responsive view
3. Use the `treeRow` cellTransform in the first column of the table. `treeRow` expects one or two callbacks as params.
   - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
   - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
   - `onToggleRowDetails` - (optional) Callback when user shows/hides the row details in responsive view.

Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level,
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.

```ts file="LegacyTableTree.tsx"
```

### Striped

To apply striping to a basic table, add the `isStriped` property to `Table`.

```ts file="LegacyTableStriped.tsx"
```

### Striped expandable

To apply striping to an expandable table, add the `isStriped` and `isExpandable` properties to `Table`.

```ts file="LegacyTableStripedExpandable.tsx"
```

### Striped custom tr

To manually control striping, use a custom row wrapper that applies the `pf-m-striped` css class for each desired row.

```ts file="LegacyTableStripedCustomTr.tsx"
```
