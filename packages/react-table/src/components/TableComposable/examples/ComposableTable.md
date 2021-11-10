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

The first is the newer `TableComposable` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an html table. Generally, updates and new feature requests are implemented in the `ComposableTable`.

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

import DemoSortableTable from './DemoSortableTable';

## TableComposable examples

The `TableComposable` component differs from the regular `Table` component, in that it allows you to compose the table by nesting the relevant `Thead`, `Tbody`, `Tr`, `Th` and `Td` components within it. For a less declarative and more implicit approach, use the `Table` component instead.

Some general notes:

- Provide `dataLabel` prop to the `Td` components so that in mobile view the cell has a label to provide context.
- If you want a table caption, simply place a `<Caption>My caption</Caption>` as the first child within a `TableComposable`.
- You can set the `TableComposable` variant to `compact`

### Composable: Basic

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, Caption } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableBasic = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  const [choice, setChoice] = React.useState('default');
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setChoice(id);
  };
  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Default"
          buttonId="default"
          isSelected={choice === 'default'}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          text="Compact"
          buttonId="compact"
          isSelected={choice === 'compact'}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          text="Compact borderless"
          buttonId="compactBorderless"
          isSelected={choice === 'compactBorderless'}
          onChange={handleItemClick}
        />
      </ToggleGroup>
      <TableComposable
        aria-label="Simple table"
        variant={choice !== 'default' ? 'compact' : null}
        borders={choice !== 'compactBorderless'}
      >
        <Caption>Simple table using composable components</Caption>
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
```

### Composable: Custom row wrapper, header tooltips & popovers

- If you add the `noWrap` prop to `Thead`, it won't wrap it if there is no space
- You can add the `textCenter` prop to `Th` or `Td` to center the contents
- You can pass `className`, `style` and more to `Tr`

To add a header tooltip or popover to `Th`, pass a `ThInfoType` object via the `info` prop.

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableMisc = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    [{ title: 'one - 2', colSpan: 3 }, null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', { title: 'five - 3 (not centered)', textCenter: false }]
  ];

  return (
    <TableComposable aria-label="Misc table">
      <Thead noWrap>
        <Tr>
          <Th
            info={{
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            }}
          >
            {columns[0]}
          </Th>
          <Th>{columns[1]}</Th>
          <Th
            info={{
              popover: (
                <div>
                  More <strong>information</strong> on pull requests
                </div>
              ),
              ariaLabel: 'More information on pull requests',
              popoverProps: {
                headerContent: 'Pull requests',
                footerContent: <a href="">Click here for even more info</a>
              }
            }}
          >
            {columns[2]}
          </Th>
          <Th>{columns[3]}</Th>
          <Th textCenter>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            borderLeft: '3px solid var(--pf-global--primary-color--100)'
          };
          return (
            <Tr
              key={rowIndex}
              className={isOddRow ? 'odd-row-class' : 'even-row-class'}
              style={isOddRow ? customStyle : {}}
            >
              {row.map((cell, cellIndex) => {
                if (!cell) {
                  return null;
                }
                let cellObject;
                if (typeof cell !== 'object') {
                  cellObject = {
                    title: cell
                  };
                } else {
                  cellObject = cell;
                }
                const { title, ...rest } = cellObject;
                return (
                  <Td
                    key={`${rowIndex}_${cellIndex}`}
                    dataLabel={columns[cellIndex]}
                    textCenter={cellIndex === row.length - 1}
                    {...rest}
                  >
                    {title}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </TableComposable>
  );
};
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

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSortable = () => {
  const columns = [
    'This is a really long table header that goes on for a long time 1.',
    'This is a really long table header that goes on for a long time 2.',
    'This is a really long table header that goes on for a long time 3.',
    'This is a really long table header that goes on for a long time 4.',
    'This is a really long table header that goes on for a long time 5.'
  ];
  const [rows, setRows] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
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
    <TableComposable aria-label="Sortable Table">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => {
            // In this example, wrap all but the first column just to demonstrate
            const modifier = columnIndex !== 0 ? 'wrap' : null;
            // In this example, make the 1st and 3rd columns sortable
            const sortParams =
              columnIndex === 0 || columnIndex === 2
                ? {
                    sort: {
                      sortBy: {
                        index: activeSortIndex,
                        direction: activeSortDirection,
                        defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'
                      },
                      onSort,
                      columnIndex
                    }
                  }
                : {};
            const infoParams =
              columnIndex === 2
                ? {
                    info: {
                      tooltip: 'More information'
                    }
                  }
                : {};
            return (
              <Th key={columnIndex} modifier={modifier} {...sortParams} {...infoParams}>
                {column}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Sortable - custom control

Sorting a table may also be controlled manually with a toolbar control. To see a full page demo of a responsive table, view the `Sortable - responsive` demo in the `React demos` tab.

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  OptionsMenu,
  OptionsMenuItemGroup,
  OptionsMenuItem,
  OptionsMenuSeparator,
  OptionsMenuToggle
} from '@patternfly/react-core';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

ComposableTableSortable = () => {
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
  const [rows, setRows] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  // sort dropdown expansion
  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);
  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    console.log('i; ', index, direction);
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
      <Toolbar id="toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <OptionsMenu
              id="options-menu-multiple-options-example"
              menuItems={[
                <OptionsMenuItemGroup key="first group" aria-label="Sort column">
                  {columns.map((column, columnIndex) => (
                    <OptionsMenuItem
                      key={column}
                      isSelected={activeSortIndex === columnIndex}
                      onSelect={evt =>
                        onSort(evt, columnIndex, activeSortDirection !== 'none' ? activeSortDirection : 'asc')
                      }
                    >
                      {column}
                    </OptionsMenuItem>
                  ))}
                </OptionsMenuItemGroup>,
                <OptionsMenuSeparator key="separator" />,
                <OptionsMenuItemGroup key="second group" aria-label="Sort direction">
                  <OptionsMenuItem
                    onSelect={evt => onSort(evt, activeSortIndex, 'asc')}
                    isSelected={activeSortDirection === 'asc'}
                    id="ascending"
                    key="ascending"
                  >
                    Ascending
                  </OptionsMenuItem>
                  <OptionsMenuItem
                    onSelect={evt => onSort(evt, activeSortIndex, 'desc')}
                    isSelected={activeSortDirection === 'desc'}
                    id="descending"
                    key="descending"
                  >
                    Descending
                  </OptionsMenuItem>
                </OptionsMenuItemGroup>
              ]}
              isOpen={isSortDropdownOpen}
              toggle={
                <OptionsMenuToggle
                  hideCaret
                  onToggle={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  toggleTemplate={<SortAmountDownIcon />}
                />
              }
              isPlain
              isGrouped
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <TableComposable aria-label="Sortable Table">
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => {
              const sortParams = {
                sort: {
                  sortBy: {
                    index: activeSortIndex,
                    direction: activeSortDirection
                  },
                  onSort,
                  columnIndex
                }
              };
              const infoParams =
                columnIndex === 2
                  ? {
                      info: {
                        tooltip: 'More information'
                      }
                    }
                  : {};
              return (
                <Th key={columnIndex} {...sortParams} {...infoParams}>
                  {column}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
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

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSelectable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ];
  const [allRowsSelected, setAllRowsSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(rows.map(row => false));
  const [recentSelection, setRecentSelection] = React.useState(null);
  const [shifting, setShifting] = React.useState(false);
  const onSelect = (event, isSelected, rowId) => {
    let newSelected = selected.map((sel, index) => (index === rowId ? isSelected : sel));

    // if the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected
    if (shifting && recentSelection !== null && isSelected) {
      const numberSelected = rowId - recentSelection;
      newSelected = newSelected.map((sel, index) => {
        // select all between recentSelection and current rowId;
        const intermediateIndexes =
          numberSelected > 0
            ? Array.from(new Array(numberSelected + 1), (x, i) => i + recentSelection)
            : Array.from(new Array(Math.abs(numberSelected) + 1), (x, i) => i + rowId);
        return intermediateIndexes.includes(index) ? true : sel;
      });
    }
    setSelected(newSelected);
    setRecentSelection(rowId);

    if (!isSelected && allRowsSelected) {
      setAllRowsSelected(false);
    } else if (isSelected && !allRowsSelected) {
      let allSelected = true;
      for (let i = 0; i < selected.length; i++) {
        if (i !== rowId) {
          if (!selected[i]) {
            allSelected = false;
          }
        }
      }
      if (allSelected) {
        setAllRowsSelected(true);
      }
    }
  };

  onKeyDown = e => {
    if (e.key === 'Shift') {
      setShifting(true);
    }
  };
  onKeyUp = e => {
    if (e.key === 'Shift') {
      setShifting(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const onSelectAll = (event, isSelected) => {
    setAllRowsSelected(isSelected);
    setSelected(selected.map(sel => isSelected));
  };

  return (
    <TableComposable aria-label="Selectable Table">
      <Thead>
        <Tr>
          <Th
            select={{
              onSelect: onSelectAll,
              isSelected: allRowsSelected
            }}
          />
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              key={`${rowIndex}_0`}
              select={{
                rowIndex,
                onSelect,
                isSelected: selected[rowIndex] && rowIndex !== 1,
                disable: rowIndex === 1
              }}
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <Td key={`${rowIndex}_${shiftedIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Selectable radio input

Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has radio button props.

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSelectableRadio = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ];
  const [selected, setSelected] = React.useState(-1);
  const onSelect = (event, isSelected, rowId) => {
    setSelected(rowId);
  };
  return (
    <TableComposable aria-label="Radio selectable table">
      <Thead>
        <Tr>
          <Th />
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              key={`${rowIndex}_0`}
              select={{
                rowIndex,
                onSelect,
                isSelected: selected === rowIndex,
                disable: rowIndex === 1,
                variant: 'radio'
              }}
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <Td key={`${rowIndex}_${shiftedIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Row click handler, hoverable & selected rows

This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableHoverable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const [rows, setRows] = React.useState([
    { cells: ['one', 'two', 'a', 'four', 'five'], isRowSelected: false },
    { cells: ['a', 'two', 'k', 'four', 'five'], isRowSelected: false },
    { cells: ['p', 'two', 'b', 'four', 'five'], isRowSelected: false }
  ]);
  const onRowClick = (event, rowIndex, row) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].isRowSelected = !rows[rowIndex].isRowSelected;
    setRows(updatedRows);
  };

  return (
    <TableComposable aria-label="Misc table">
      <Thead noWrap>
        <Tr>
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => {
          return (
            <Tr
              key={rowIndex}
              onRowClick={event => onRowClick(event, rowIndex, row.cells)}
              isHoverable
              isRowSelected={row.isRowSelected}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                    {cell}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Actions

This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.

To make a cell an action cell, pass a `TdActionsType` object via the `actions` prop on a rows's last `Td`.

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import { ButtonVariant, DropdownToggle, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableActions = () => {
  const defaultActions = [
    {
      title: 'Some action',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Third action, on row: ', rowId)
    },
    {
      title: 'Start',
      variant: ButtonVariant.secondary,
      onClick: (event, rowId, rowData, extra) => console.log('clicked on extra action, on row: ', rowId),
      isOutsideDropdown: true
    }
  ];
  const lastRowActions = [
    {
      title: 'Some action',
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Some action, on row ${rowId}`)
    },
    {
      title: <div>Another action</div>,
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Another action, on row ${rowId}`)
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (event, rowId, rowData, extra) => console.log(`clicked on Third action, on row ${rowId}`)
    }
  ];
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ];

  const [toggle, setToggle] = React.useState('defaultToggle');

  const customActionsToggle = props => (
    <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>
      Actions
    </DropdownToggle>
  );

  const toggleCustomToggle = (checked, event) => {
    setToggle(event.currentTarget.id);
  };

  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default uses kebab toggle">
        <ToggleGroupItem
          text="Default actions toggle"
          buttonId="defaultToggle"
          isSelected={toggle === 'defaultToggle'}
          onChange={toggleCustomToggle}
        />
        <ToggleGroupItem
          text="Custom actions toggle"
          buttonId="customToggle"
          isSelected={toggle === 'customToggle'}
          onChange={toggleCustomToggle}
        />
      </ToggleGroup>
      <TableComposable aria-label="Actions table">
        <Thead>
          <Tr>
            <Th>{columns[0]}</Th>
            <Th>{columns[1]}</Th>
            <Th>{columns[2]}</Th>
            <Th>{columns[3]}</Th>
            <Th>{columns[4]}</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
              <Td
                key={`${rowIndex}_5`}
                actions={{
                  items: rowIndex === 1 ? null : rowIndex === 4 ? lastRowActions : defaultActions,
                  disable: rowIndex === 3,
                  actionsToggle: toggle === 'customToggle' ? customActionsToggle : undefined
                }}
              />
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
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

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

ComposableTableExpandable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rowPairs = [
    { parent: ['one', 'two', 'a', 'four', 'five'], child: null },
    {
      parent: ['parent 1', 'two', 'k', 'four', 'five'],
      child: ['single cell']
    },
    {
      parent: ['parent 2', 'two', 'b', 'four', 'five'],
      child: ['single cell - fullWidth'],
      fullWidth: true
    },
    {
      parent: ['parent 3', '2', 'b', 'four', 'five'],
      child: ['single cell - noPadding'],
      noPadding: true
    },
    {
      parent: ['parent 4', '2', 'b', 'four', 'five'],
      child: ['single cell - fullWidth & noPadding'],
      fullWidth: true,
      noPadding: true
    },
    {
      parent: ['parent 5', '2', 'b', 'four', 'five'],
      child: ["spans 'Repositories' and 'Branches'", "spans 'Pull requests' and 'Workspaces', and 'Last commit'"]
    },
    {
      parent: ['parent 6', '2', 'b', 'four', 'five'],
      child: [
        "fullWidth, spans the collapsible column and 'Repositories'",
        "fullWidth, spans 'Branches' and 'Pull requests'",
        "fullWidth, spans 'Workspaces' and 'Last commit'"
      ],
      fullWidth: true
    }
  ];
  const numColumns = columns.length;
  // Init all to true
  const [expanded, setExpanded] = React.useState(
    Object.fromEntries(Object.entries(rowPairs).map(([k, v]) => [k, Boolean(v.child)]))
  );
  const [compact, setCompact] = React.useState(true);
  const toggleCompact = checked => {
    setCompact(checked);
  };
  const handleExpansionToggle = (event, pairIndex) => {
    setExpanded({
      ...expanded,
      [pairIndex]: !expanded[pairIndex]
    });
  };
  let rowIndex = -1;
  return (
    <React.Fragment>
      <Checkbox
        label="Compact"
        isChecked={compact}
        onChange={toggleCompact}
        aria-label="toggle compact variation"
        id="toggle-compact"
        name="toggle-compact"
      />
      <TableComposable aria-label="Expandable Table" variant={compact ? 'compact' : null}>
        <Thead>
          <Tr>
            <Th />
            <Th>{columns[0]}</Th>
            <Th>{columns[1]}</Th>
            <Th>{columns[2]}</Th>
            <Th>{columns[3]}</Th>
            <Th>{columns[4]}</Th>
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
    </React.Fragment>
  );
};
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

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/Table/composable-table-examples/DemoSortableTable.js
import DemoSortableTable from './DemoSortableTable';

ComposableCompoundExpandableTable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
  const rows = [
    ['siemur/test-space', 10, 4, 4, '20 minutes', 'Open in Github'],
    ['siemur/test-space', 3, 4, 2, '10 minutes', 'Open in Github']
  ];
  // index corresponds to row index, and value corresponds to column index of the expanded, null means no cell is expanded
  const [activeChild, setActiveChild] = React.useState([1, null]);
  // key = row_col of the parent it corresponds to
  const childData = {
    '0_1': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-1', 'three', 'four', 'five']}
          id="compound-expansion-table-0_1"
          key="0_1"
        />
      )
    },
    '0_2': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-2', 'three', 'four', 'five']}
          id="compound-expansion-table-0_2"
          key="0_2"
        />
      )
    },
    '0_3': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-0', 'compound-3', 'three', 'four', 'five']}
          id="compound-expansion-table-0_3"
          key="0_3"
        />
      )
    },
    '1_1': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-1', 'three', 'four', 'five']}
          id="compound-expansion-table-1_1"
          key="1_1"
        />
      )
    },
    '1_2': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-2', 'three', 'four', 'five']}
          id="compound-expansion-table-1_2"
          key="1_2"
        />
      )
    },
    '1_3': {
      component: (
        <DemoSortableTable
          firstColumnRows={['parent-1', 'compound-3', 'three', 'four', 'five']}
          id="compound-expansion-table-1_3"
          key="1_3"
        />
      )
    }
  };
  const customRender = (cell, index) => {
    if (index === 0) {
      return <a href="#">{cell}</a>;
    } else if (index === 1) {
      return (
        <React.Fragment>
          <CodeBranchIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 2) {
      return (
        <React.Fragment>
          <CodeIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 3) {
      return (
        <React.Fragment>
          <CubeIcon key="icon" /> {cell}
        </React.Fragment>
      );
    } else if (index === 5) {
      return <a href="#">{cell}</a>;
    }
    return cell;
  };
  const isCompoundExpanded = (rowIndex, cellIndex) => {
    // only columns 1 - 3 are compound expansion toggles in this example
    if (1 <= cellIndex && cellIndex <= 3) {
      return activeChild[rowIndex] === cellIndex;
    }
    return null;
  };
  return (
    <TableComposable aria-label="Compound expandable table">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      {rows.map((row, rowIndex) => {
        const isRowExpanded = activeChild[rowIndex] !== null;
        return (
          <Tbody key={rowIndex} isExpanded={isRowExpanded}>
            <React.Fragment>
              <Tr>
                {row.map((cell, cellIndex) => {
                  // for this example, only columns 1 - 3 are clickable
                  const compoundExpandParams =
                    1 <= cellIndex && cellIndex <= 3
                      ? {
                          compoundExpand: {
                            isExpanded: isCompoundExpanded(rowIndex, cellIndex),
                            onToggle: () => {
                              if (activeChild[rowIndex] === cellIndex) {
                                // closing the expansion on the current toggle
                                // set the corresponding item to null
                                const updatedActiveChild = activeChild.map((item, index) =>
                                  index === rowIndex ? null : item
                                );
                                setActiveChild(updatedActiveChild);
                              } else {
                                // expanding
                                // set the corresponding cell index
                                const updatedActiveChild = activeChild.map((item, index) =>
                                  index === rowIndex ? cellIndex : item
                                );
                                setActiveChild(updatedActiveChild);
                              }
                            }
                          }
                        }
                      : {};
                  return (
                    <Td
                      key={`${rowIndex}_${cellIndex}`}
                      dataLabel={columns[cellIndex]}
                      component={cellIndex === 0 ? 'th' : 'td'}
                      {...compoundExpandParams}
                    >
                      {customRender(cell, cellIndex)}
                    </Td>
                  );
                })}
              </Tr>
              {isRowExpanded && (
                <Tr key={`${rowIndex}-child`} isExpanded={isRowExpanded}>
                  <Td dataLabel={columns[0]} noPadding colSpan={6}>
                    <ExpandableRowContent>
                      {childData[`${rowIndex}_${activeChild[rowIndex]}`].component}
                    </ExpandableRowContent>
                  </Td>
                </Tr>
              )}
            </React.Fragment>
          </Tbody>
        );
      })}
    </TableComposable>
  );
};
```

### Composable: Cell width, breakpoint modifiers

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableCellWidth = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  return (
    <TableComposable aria-label="Cell widths">
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th
              key={columnIndex}
              width={columnIndex === 2 ? 40 : 15}
              visibility={columnIndex === 2 ? ['hiddenOnMd', 'visibleOnLg'] : null}
            >
              {column}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td
                key={`${rowIndex}_${cellIndex}`}
                dataLabel={columns[cellIndex]}
                visibility={cellIndex === 2 ? ['hiddenOnMd', 'visibleOnLg'] : null}
              >
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Controlling text

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableControllingText = () => {
  const columns = [
    'Truncate (width 20%)',
    'Break word',
    'Wrapping table header text. This th text will wrap instead of truncate.',
    'Fit content',
    'No wrap'
  ];
  const rows = [
    [
      'This text will truncate instead of wrap.',
      <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>,
      <p>
        By default,
        <code>thead</code> cells will truncate and
        <code>tbody</code> cells will wrap. Use
        <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
      </p>,
      "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
      <a href="#">No wrap</a>
    ]
  ];
  return (
    <TableComposable aria-label="Controlling text">
      <Thead>
        <Tr>
          <Th width={20}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th modifier="wrap">{columns[2]}</Th>
          <Th modifier="fitContent">{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td dataLabel={columns[0]} modifier="truncate">
              {row[0]}
            </Td>
            <Td dataLabel={columns[1]} modifier="breakWord">
              {row[1]}
            </Td>
            <Td dataLabel={columns[2]}>{row[2]}</Td>
            <Td dataLabel={columns[3]}>{row[3]}</Td>
            <Td dataLabel={columns[4]} modifier="nowrap">
              {row[4]}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
```

### Composable: Modifiers with table text

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, TableText } from '@patternfly/react-table';

ComposableTableText = () => {
  const columns = ['Truncating text', 'Wrapping table header text. This th text will wrap instead of truncate.'];
  const rows = [
    [
      <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText>,
      <TableText wrapModifier="nowrap">
        <a href="#">This is a link that needs to be on one line and fully readable.</a>
      </TableText>
    ]
  ];
  return (
    <TableComposable aria-label="Table text">
      <Thead>
        <Tr>
          <Th width={30}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
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

```js
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableFavoritable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const [rows, setRows] = React.useState([
    { favorited: true, cells: ['one', 'two', 'three', 'four', 'five'] },
    { favorited: false, cells: ['one - 2', null, null, 'four - 2', 'five - 2'] },
    { favorited: false, cells: ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3'] }
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
      if (a.favorited && !b.favorited) {
        return 1;
      } else if (!a.favorited && b.favorited) {
        return -1;
      }
      return 0;
    });
    setRows(direction === 'asc' ? updatedRows : updatedRows.reverse());
  };
  const sortParams = {
    sort: {
      isFavorites: true,
      sortBy: {
        index: activeSortIndex,
        direction: activeSortDirection
      },
      onSort,
      columnIndex: 0
    }
  };
  return (
    <TableComposable aria-label="Favoritable table" variant={'compact'}>
      <Thead>
        <Tr>
          <Th {...sortParams} />
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              favorites={{
                isFavorited: row.favorited,
                onFavorite: (event, isFavorited) =>
                  setRows(
                    rows.map((row, index) => {
                      if (index === rowIndex) {
                        row.favorited = isFavorited;
                      }
                      return row;
                    })
                  ),
                rowIndex
              }}
            />
            {row.cells.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
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

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, Caption, TreeRowWrapper } from '@patternfly/react-table';
import LeafIcon from '@patternfly/react-icons/dist/js/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          repositories: 'Repositories one',
          branches: 'Branch one',
          pullRequests: 'Pull request one',
          workspaces: 'Workplace one',
          children: [
            {
              repositories: 'Repositories two',
              branches: 'Branch two',
              pullRequests: 'Pull request two',
              workspaces: 'Workplace two',
              children: [
                {
                  repositories: 'Repositories three',
                  branches: 'Branch three',
                  pullRequests: 'Pull request three',
                  workspaces: 'Workplace three'
                },
                {
                  repositories: 'Repositories four',
                  branches: 'Branch four',
                  pullRequests: 'Pull request four',
                  workspaces: 'Workplace four'
                }
              ]
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five'
            },
            {
              repositories: 'Repositories six',
              branches: 'Branch six',
              pullRequests: 'Pull request six',
              workspaces: 'Workplace six'
            }
          ]
        },
        {
          repositories: 'Repositories seven',
          branches: 'Branch seven',
          pullRequests: 'Pull request seven',
          workspaces: 'Workplace seven',
          children: [
            {
              repositories: 'Repositories eight',
              branches: 'Branch eight',
              pullRequests: 'Pull request eight',
              workspaces: 'Workplace eight'
            }
          ]
        },
        {
          repositories: 'Repositories nine',
          branches: 'Branch nine',
          pullRequests: 'Pull request nine',
          workspaces: 'Workplace nine'
        }
      ],
      expandedRows: ['Repositories one', 'Repositories six'],
      expandedDetailsRows: [],
      checkedRows: []
    };

    /** 
      Recursive function which flattens the data into an array of flattened IRow objects 
      to be later iterated over and each passed to the `row` prop of the TreeRowWrapper
      params: 
        - rowData - array of data
        - level - number representing how deeply nested the current row is
        - posinset - position of the row relative to this row's siblings
        - isHidden - defaults to false, true if this row's parent is expanded
    */
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      // take the first datum from the array (if any)
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isDetailsExpanded = this.state.expandedDetailsRows.includes(x.repositories);
        const isChecked = this.mapChecked(x);
        let icon = <LeafIcon />;
        if (x.children) {
          icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
        }
        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded,
              isDetailsExpanded,
              isHidden,
              'aria-level': level,
              'aria-posinset': posinset,
              'aria-setsize': x.children ? x.children.length : 0,
              isChecked,
              icon
            }
          },
          ...(x.children && x.children.length ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : []),
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ];
      }
      return [];
    };

    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        };
      });
    };

    this.onToggleRowDetails = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedDetailsRows } = prevState;
        const openedIndex = expandedDetailsRows.indexOf(title);
        const newExpandedDetailsRows =
          openedIndex === -1 ? [...expandedDetailsRows, title] : expandedDetailsRows.filter(o => o !== title);
        return {
          expandedDetailsRows: newExpandedDetailsRows
        };
      });
    };

    this.onCheck = (event, checked, rowIndex, checkedTitle) => {
      this.setState(prevState => {
        let flattenedData = this.getFlattenedTitles(prevState.data, checkedTitle);
        const prevChecked = prevState.checkedRows;
        return {
          checkedRows: checked
            ? prevChecked.concat(flattenedData.filter(title => !prevChecked.includes(title)))
            : prevChecked.filter(title => !flattenedData.includes(title))
        };
      });
    };

    // // helper methods for determining the checkbox's checked state for each row  ///

    /** Recursive function which flattens the data into an array of row titles
     * whose checkboxes' checked states are being updated.
     * Titles are only added to the array if they are the root checked title node,
     * or if they are a descendent of the root checked title node */
    this.getFlattenedTitles = (data, checkedTitle, parentChecked) => {
      let flattenedData = [];
      data.forEach(item => {
        if (item.repositories === checkedTitle || parentChecked) {
          flattenedData.push(item.repositories);
        }
        if (item.children) {
          flattenedData = flattenedData.concat(
            this.getFlattenedTitles(item.children, checkedTitle, item.repositories === checkedTitle || parentChecked)
          );
        }
        return flattenedData;
      });
      return flattenedData;
    };

    this.areAllDescendantsChecked = row =>
      row.children
        ? row.children.every(child => this.areAllDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.areSomeDescendantsChecked = row =>
      row.children
        ? row.children.some(child => this.areSomeDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.mapChecked = row => {
      if (this.areAllDescendantsChecked(row)) {
        return true;
      }
      if (this.areSomeDescendantsChecked(row)) {
        return null;
      }
      return false;
    };
  }

  render() {
    const columns = ['Repositories', 'Branches', 'Pull Requests', 'Workspaces'];
    return (
      <TableComposable isTreeTable aria-label="Tree Table">
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {this.buildRows(this.state.data, 1, 1).map((row, rowIndex) => (
            <TreeRowWrapper row={row} key={rowIndex}>
              {row.cells.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <Td
                    key={`${rowIndex}_0`}
                    treeRow={{
                      onCollapse: this.onCollapse,
                      onCheckChange: this.onCheck,
                      onToggleRowDetails: this.onToggleRowDetails,
                      props: row.props,
                      rowIndex: rowIndex
                    }}
                  >
                    {cell}
                  </Td>
                ) : (
                  <Td key={`${rowIndex}_${cellIndex}`} data-label={columns[cellIndex]}>
                    {cell}
                  </Td>
                )
              )}
            </TreeRowWrapper>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
```

### Composable: Draggable row table

To make a row draggable:

1. The table needs a draggable column.
2. Each draggable `Tr` needs to be passed `draggable`, `onDrop`, `onDragEnd`, and `onDragStart` props.
3. The `Tbody` needs `onDragOver`, `onDrop`, and `onDragLeave` props.
4. While the user is dragging a row, the `` class needs to be applied to `TableComposable`.
5. The draggable `Td` in each row needs a `TdDraggableType` object passed to its `draggable` prop.

```js isBeta
import React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

class DraggableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItemId: null,
      draggingToItemIndex: null,
      dragging: false,
      itemOrder: ['row1', 'row2', 'row3'],
      tempItemOrder: []
    };
    this.bodyRef = React.createRef();

    this.getIndex = id => Array.from(this.bodyRef.current.children).findIndex(item => item.id === id);

    this.onDragStart = evt => {
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
      const draggedItemId = evt.currentTarget.id;

      evt.currentTarget.classList.add(styles.modifiers.ghostRow);
      evt.currentTarget.setAttribute('aria-pressed', 'true');
      this.setState({
        draggedItemId,
        dragging: true
      });
    };

    this.moveItem = (arr, i1, toIndex) => {
      const fromIndex = arr.indexOf(i1);
      if (fromIndex === toIndex) {
        return arr;
      }
      const temp = arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, temp[0]);

      return arr;
    };

    this.move = itemOrder => {
      const ulNode = this.bodyRef.current;
      const nodes = Array.from(ulNode.children);
      if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {
        return;
      }
      while (ulNode.firstChild) {
        ulNode.removeChild(ulNode.lastChild);
      }

      itemOrder.forEach(id => {
        ulNode.appendChild(nodes.find(n => n.id === id));
      });
    };

    this.onDragCancel = () => {
      // this.move(this.state.itemOrder);
      Array.from(this.bodyRef.current.children).forEach(el => {
        el.classList.remove(styles.modifiers.ghostRow);
        el.setAttribute('aria-pressed', 'false');
      });
      this.setState({
        draggedItemId: null,
        draggingToItemIndex: null,
        dragging: false
      });
    };

    this.onDragLeave = evt => {
      if (!this.isValidDrop(evt)) {
        this.move(this.state.itemOrder);
        this.setState({
          draggingToItemIndex: null
        });
      }
    };

    this.isValidDrop = evt => {
      const ulRect = this.bodyRef.current.getBoundingClientRect();
      return (
        evt.clientX > ulRect.x &&
        evt.clientX < ulRect.x + ulRect.width &&
        evt.clientY > ulRect.y &&
        evt.clientY < ulRect.y + ulRect.height
      );
    };

    this.onDrop = evt => {
      if (this.isValidDrop(evt)) {
        this.setState({
          itemOrder: this.state.tempItemOrder
        });
      } else {
        this.onDragCancel();
      }
    };

    this.onDragOver = evt => {
      evt.preventDefault();

      const curListItem = evt.target.closest('tr');
      if (!curListItem || !this.bodyRef.current.contains(curListItem) || curListItem.id === this.state.draggedItemId) {
        return null;
      } else {
        const dragId = curListItem.id;
        const draggingToItemIndex = Array.from(this.bodyRef.current.children).findIndex(item => item.id === dragId);
        if (draggingToItemIndex !== this.state.draggingToItemIndex) {
          const tempItemOrder = this.moveItem([...this.state.itemOrder], this.state.draggedItemId, draggingToItemIndex);
          this.move(tempItemOrder);

          this.setState({
            draggingToItemIndex,
            tempItemOrder
          });
        }
      }
    };

    this.onDragEnd = evt => {
      evt.target.classList.remove(styles.modifiers.ghostRow);
      evt.target.setAttribute('aria-pressed', 'false');
      this.setState({
        draggedItemId: null,
        draggingToItemIndex: null,
        dragging: false
      });
    };
  }

  render() {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      {
        id: 'row1',
        repository: 'one',
        branch: 'two',
        pullRequest: 'three',
        workspace: 'four',
        lastCommit: 'five'
      },
      {
        id: 'row2',
        repository: 'one -2',
        branch: null,
        pullRequest: null,
        workspace: 'four -2',
        lastCommit: 'five -2'
      },
      {
        id: 'row3',
        repository: 'one - 3',
        branch: 'two - 3',
        pullRequest: 'three - 3',
        workspace: 'four - 3',
        lastCommit: 'five - 3'
      }
    ];

    return (
      <TableComposable aria-label="Draggable table" className={this.state.dragging && styles.modifiers.dragOver}>
        <Thead>
          <Tr>
            <Th />
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody ref={this.bodyRef} onDragOver={this.onDragOver} onDrop={this.onDragOver} onDragLeave={this.onDragLeave}>
          {rows.map((row, rowIndex) => (
            <Tr
              key={rowIndex}
              id={row.id}
              draggable
              onDrop={this.onDrop}
              onDragEnd={this.onDragEnd}
              onDragStart={this.onDragStart}
            >
              <Td
                draggableRow={{
                  id: `draggable-row-${row.id}`
                }}
              />
              {Object.keys(row).map((key, keyIndex) => (
                <Td key={`${rowIndex}_${keyIndex}`} dataLabel={columns[keyIndex]}>
                  {row[key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
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
