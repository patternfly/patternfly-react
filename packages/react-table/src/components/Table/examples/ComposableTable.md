---
id: TableComposable
cssPrefix: pf-c-table
section: components
propComponents:
  [
    'Table',
    'TableHeader',
    'TableBody',
    'EditableSelectInputCell',
    'EditableTextCell',
    'RowErrors',
    'IHeaderRow',
    'IRowData',
    'IColumn',
    'IExtraRowData',
    'IExtraColumnData',
    'ISortBy',
    'IAction',
    'ISeparator',
    'ICell',
    'IRowCell',
    'IValidatorDef',
    'IRow',
  ]
ouia: true
---

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

import {
Table,
TableHeader,
TableBody,
TableText,
sortable,
SortByDirection,
headerCol,
TableVariant,
expandable,
compoundExpand,
cellWidth,
textCenter,
wrappable,
truncate,
nowrap,
breakWord,
fitContent,
classNames,
Visibility,
getErrorTextByValidator,
cancelCellEdits,
validateCellEdits,
applyCellEdits,
EditableTextCell,
EditableSelectInputCell,
BaseTable,
BaseTableCaption,
BaseTableHead,
BaseTableBody,
BaseTableHeaderRow,
BaseTableBodyRow,
BaseHeaderCell,
BaseBodyCell,
HeaderCellInfoWrapper,
ExpandableRowContent
} from '@patternfly/react-table';

import {
EmptyStateIcon,
ToggleGroup,
ToggleGroupItem
} from '@patternfly/react-core';

import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

import DemoSortableTable from './DemoSortableTable';

## Composable table examples

### Composable: Basic, Row click handler, Custom row wrapper

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';

ComposableTableBasic = () => {
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3 (not centered)']
  ]);
  // map additional configuration to the data
  // key: row_column
  const dataConfig = {
    '1_0': {
      title: text => <div>{text}</div>,
      props: { title: 'hover title', colSpan: 3 }
    },
    '2_4': {
      props: { textCenter: false }
    }
  };
  const onRowClick = (event, rowIndex, row) => {
    console.log(`handle row click ${rowIndex}`, row);
  };
  return (
    <BaseTable aria-label="Simple Table">
      <BaseTableHead noWrap>
        <BaseTableHeaderRow>
          <BaseHeaderCell columnIndex={0} dataLabel={columns[0]}>
            <HeaderCellInfoWrapper
              variant="tooltip"
              info="More information about repositories"
              className="repositories-info-tip"
              tooltipProps={{
                isContentLeftAligned: true
              }}
            >
              {columns[0]}
            </HeaderCellInfoWrapper>
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={1} dataLabel={columns[0]}>
            {columns[1]}
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={2} dataLabel={columns[2]}>
            <HeaderCellInfoWrapper
              variant="popover"
              info={
                <div>
                  More <strong>information</strong> on pull requests
                </div>
              }
              ariaLabel="More information on pull requests"
              popoverProps={{
                headerContent: 'Pull requests',
                footerContent: <a href="">Click here for even more info</a>
              }}
            >
              {columns[2]}
            </HeaderCellInfoWrapper>
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={3} dataLabel={columns[3]}>
            {columns[3]}
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={4} dataLabel={columns[4]} textCenter>
            {columns[4]}
          </BaseHeaderCell>
        </BaseTableHeaderRow>
      </BaseTableHead>
      <BaseTableBody>
        {data.map((row, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            borderLeft: '3px solid var(--pf-global--primary-color--100)'
          };
          return (
            <BaseTableBodyRow
              key={rowIndex}
              onClick={event => onRowClick(event, rowIndex, row)}
              className={isOddRow ? 'odd-row-class' : 'even-row-class'}
              style={isOddRow ? customStyle : {}}
            >
              {row.map((cell, cellIndex) => {
                if (!cell) {
                  return null;
                }
                const cellConfig = dataConfig[`${rowIndex}_${cellIndex}`];
                return (
                  <BaseBodyCell
                    key={`${rowIndex}_${cellIndex}`}
                    columnIndex={cellIndex}
                    dataLabel={columns[cellIndex]}
                    textCenter={cellIndex === row.length - 1}
                    {...((cellConfig && cellConfig.props) || {})}
                  >
                    {cellConfig && cellConfig.title ? cellConfig.title(cell) : cell}
                  </BaseBodyCell>
                );
              })}
            </BaseTableBodyRow>
          );
        })}
      </BaseTableBody>
    </BaseTable>
  );
};
```

### Composable: Sortable, Sortable with wrapping headers

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';

ComposableTableSortable = () => {
  const [columns, setColumns] = React.useState([
    'This is a really long table header that goes on for a long time 1.',
    'This is a really long table header that goes on for a long time 2.',
    'This is a really long table header that goes on for a long time 3.',
    'This is a really long table header that goes on for a long time 4.',
    'This is a really long table header that goes on for a long time 5.'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ]);
  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('none');
  const onSort = (event, index, direction, extraData) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);
    // sorts the row data
    const updatedData = data.sort((a, b) => {
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
    setData(updatedData);
  };
  return (
    <BaseTable aria-label="Sortable Table">
      <BaseTableHead>
        <BaseTableHeaderRow>
          <BaseHeaderCell
            columnIndex={0}
            modifier="wrap"
            activeSortIndex={activeSortIndex}
            activeSortDirection={activeSortDirection}
            onSort={onSort}
          >
            {columns[0]}
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={1} modifier="wrap">
            {columns[1]}
          </BaseHeaderCell>
          <BaseHeaderCell
            columnIndex={2}
            modifier="wrap"
            activeSortIndex={activeSortIndex}
            activeSortDirection={activeSortDirection}
            onSort={onSort}
          >
            {columns[2]}
          </BaseHeaderCell>
          <BaseHeaderCell columnIndex={3} modifier="wrap">
            {columns[3]}
          </BaseHeaderCell>
          <BaseHeaderCell
            columnIndex={4}
            modifier="wrap"
            activeSortIndex={activeSortIndex}
            activeSortDirection={activeSortDirection}
            onSort={onSort}
          >
            {columns[4]}
          </BaseHeaderCell>
        </BaseTableHeaderRow>
      </BaseTableHead>
      <BaseTableBody>
        {data.map((row, rowIndex) => (
          <BaseTableBodyRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <BaseBodyCell key={`${rowIndex}_${cellIndex}`} columnIndex={cellIndex} dataLabel={columns[cellIndex]}>
                {cell}
              </BaseBodyCell>
            ))}
          </BaseTableBodyRow>
        ))}
      </BaseTableBody>
    </BaseTable>
  );
};
```

### Composable: Selectable

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';

ComposableTableSelectable = () => {
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ]);
  const [allRowsSelected, setAllRowsSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(data.map(row => false));
  const onSelect = (event, isSelected, rowId, rowData, extraData) => {
    setSelected(selected.map((sel, index) => (index === rowId ? isSelected : sel)));
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
  const onSelectAll = (event, isSelected, rowId, rowData, extraData) => {
    setAllRowsSelected(isSelected);
    setSelected(selected.map(sel => isSelected));
  };
  return (
    <BaseTable aria-label="Selectable Table">
      <BaseTableHead>
        <BaseTableHeaderRow>
          <BaseHeaderCell columnIndex={0} onSelect={onSelectAll} allRowsSelected={allRowsSelected} />
          <BaseHeaderCell columnIndex={1}>{columns[0]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={2}>{columns[1]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={3}>{columns[2]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={4}>{columns[3]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={5}>{columns[4]}</BaseHeaderCell>
        </BaseTableHeaderRow>
      </BaseTableHead>
      <BaseTableBody>
        {data.map((row, rowIndex) => (
          <BaseTableBodyRow key={rowIndex}>
            <BaseBodyCell
              key={`${rowIndex}_0`}
              columnIndex={0}
              rowIndex={rowIndex}
              onSelect={onSelect}
              isSelected={selected[rowIndex]}
              disableSelection={rowIndex === 1}
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <BaseBodyCell
                  key={`${rowIndex}_${shiftedIndex}`}
                  columnIndex={shiftedIndex}
                  dataLabel={columns[cellIndex]}
                >
                  {cell}
                </BaseBodyCell>
              );
            })}
          </BaseTableBodyRow>
        ))}
      </BaseTableBody>
    </BaseTable>
  );
};
```

### Composable: Selectable radio input

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';

ComposableTableSelectableRadio = () => {
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ]);
  const [selected, setSelected] = React.useState(-1);
  const onSelect = (event, isSelected, rowId, rowData, extraData) => {
    setSelected(rowId);
  };
  return (
    <BaseTable aria-label="Selectable Table">
      <BaseTableHead>
        <BaseTableHeaderRow>
          <BaseHeaderCell columnIndex={0} />
          <BaseHeaderCell columnIndex={1}>{columns[0]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={2}>{columns[1]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={3}>{columns[2]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={4}>{columns[3]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={5}>{columns[4]}</BaseHeaderCell>
        </BaseTableHeaderRow>
      </BaseTableHead>
      <BaseTableBody>
        {data.map((row, rowIndex) => (
          <BaseTableBodyRow key={rowIndex}>
            <BaseBodyCell
              key={`${rowIndex}_0`}
              columnIndex={0}
              rowIndex={rowIndex}
              onSelect={onSelect}
              isSelected={selected === rowIndex}
              disableSelection={rowIndex === 1}
              selectVariant="radio"
            />
            {row.map((cell, cellIndex) => {
              const shiftedIndex = cellIndex + 1;
              return (
                <BaseBodyCell
                  key={`${rowIndex}_${shiftedIndex}`}
                  columnIndex={shiftedIndex}
                  dataLabel={columns[cellIndex]}
                >
                  {cell}
                </BaseBodyCell>
              );
            })}
          </BaseTableBodyRow>
        ))}
      </BaseTableBody>
    </BaseTable>
  );
};
```

### Composable: Actions

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';

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
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ]);
  return (
    <BaseTable aria-label="Actions Table">
      <BaseTableHead>
        <BaseTableHeaderRow>
          <BaseHeaderCell columnIndex={0}>{columns[0]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={1}>{columns[1]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={2}>{columns[2]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={3}>{columns[3]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={4}>{columns[4]}</BaseHeaderCell>
          <BaseHeaderCell columnIndex={5} />
        </BaseTableHeaderRow>
      </BaseTableHead>
      <BaseTableBody>
        {data.map((row, rowIndex) => (
          <BaseTableBodyRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <BaseBodyCell key={`${rowIndex}_${cellIndex}`} columnIndex={cellIndex} dataLabel={columns[cellIndex]}>
                {cell}
              </BaseBodyCell>
            ))}
            <BaseBodyCell
              key={`${rowIndex}_5`}
              columnIndex={5}
              rowIndex={rowIndex}
              actions={rowIndex === 1 ? null : rowIndex === 4 ? lastRowActions : defaultActions}
              actionsDisabled={rowIndex === 3}
            />
          </BaseTableBodyRow>
        ))}
      </BaseTableBody>
    </BaseTable>
  );
};
```

### Composable: Compact, Compact borderless

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper
} from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableCompact = () => {
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ]);
  const [variant, setVariant] = React.useState('compact');
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setVariant(id);
  };
  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem buttonId="compact" isSelected={variant === 'compact'} onChange={handleItemClick}>
          Compact
        </ToggleGroupItem>
        <ToggleGroupItem
          buttonId="compactBorderless"
          isSelected={variant === 'compactBorderless'}
          onChange={handleItemClick}
        >
          Compact & borderless
        </ToggleGroupItem>
      </ToggleGroup>
      <BaseTable aria-label="Compact Table" variant={variant}>
        <BaseTableHead>
          <BaseTableHeaderRow>
            <BaseHeaderCell columnIndex={0}>{columns[0]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={1}>{columns[1]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={2}>{columns[2]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={3}>{columns[3]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={4}>{columns[4]}</BaseHeaderCell>
          </BaseTableHeaderRow>
        </BaseTableHead>
        <BaseTableBody>
          {data.map((row, rowIndex) => (
            <BaseTableBodyRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <BaseBodyCell key={`${rowIndex}_${cellIndex}`} columnIndex={cellIndex} dataLabel={columns[cellIndex]}>
                  {cell}
                </BaseBodyCell>
              ))}
            </BaseTableBodyRow>
          ))}
        </BaseTableBody>
      </BaseTable>
    </React.Fragment>
  );
};
```

### Composable: Expandable

```js
import React from 'react';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableHeaderRow,
  BaseTableBodyRow,
  BaseHeaderCell,
  BaseBodyCell,
  HeaderCellInfoWrapper,
  ExpandableRowContent
} from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableExpandable = () => {
  const [columns, setColumns] = React.useState([
    'Repositories',
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ]);
  const [data, setData] = React.useState([
    ['one', 'two', 'a', 'four', 'five'],
    ['parent 1', 'two', 'k', 'four', 'five'],
    ['parent 2', 'two', 'b', 'four', 'five'],
    ['parent 3', '2', 'b', 'four', 'five'],
    ['parent 4', '2', 'b', 'four', 'five'],
    ['parent 5', '2', 'b', 'four', 'five'],
    ['parent 6', '2', 'b', 'four', 'five']
  ]);
  // key = row index it corresponds to
  const childData = {
    '1': { cells: ['single cell'] },
    '2': { cells: ['single cell - fullWidth'], fullWidth: true },
    '3': { cells: ['single cell - noPadding'], noPadding: true },
    '4': { cells: ['single cell - fullWidth & noPadding'], fullWidth: true, noPadding: true },
    '5': {
      cells: [
        {
          title: "spans 'Repositories' and 'Branches'",
          props: {
            colSpan: 2
          }
        },
        {
          title: "spans 'Pull requests' and 'Workspaces', and 'Last commit'",
          props: {
            colSpan: 3
          }
        }
      ]
    },
    '6': {
      cells: [
        {
          title: "fullWidth, spans the collapsible column and 'Repositories'",
          props: {
            colSpan: 2
          }
        },
        {
          title: "fullWidth, spans 'Branches' and 'Pull requests' and 'Workspaces'",
          props: {
            colSpan: 3
          }
        },
        "fullWidth, spans 'Last commit'"
      ],
      fullWidth: true
    }
  };
  const numColumns = data[0].length;
  // Init all to true
  const [expanded, setExpanded] = React.useState(
    Object.fromEntries(Object.entries(childData).map(([k, v]) => [k, true]))
  );
  const [variant, setVariant] = React.useState(null);
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setVariant(id === 'default' ? null : id);
  };
  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem buttonId="default" isSelected={variant === null} onChange={handleItemClick}>
          Default expandable
        </ToggleGroupItem>
        <ToggleGroupItem
          buttonId="compactExpandable"
          isSelected={variant === 'compactExpandable'}
          onChange={handleItemClick}
        >
          Compact expandable
        </ToggleGroupItem>
      </ToggleGroup>
      <BaseTable aria-label="Expandable Table" variant={variant}>
        <BaseTableHead>
          <BaseTableHeaderRow>
            <BaseHeaderCell columnIndex={0} />
            <BaseHeaderCell columnIndex={1}>{columns[0]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={2}>{columns[1]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={3}>{columns[2]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={4}>{columns[3]}</BaseHeaderCell>
            <BaseHeaderCell columnIndex={5}>{columns[4]}</BaseHeaderCell>
          </BaseTableHeaderRow>
        </BaseTableHead>
        {data.map((row, rowIndex) => (
          <BaseTableBody key={rowIndex} isExpanded={expanded[rowIndex] === true}>
            <React.Fragment>
              <BaseTableBodyRow>
                <BaseBodyCell
                  key={`${rowIndex}_0`}
                  rowIndex={rowIndex}
                  columnIndex={0}
                  isExpanded={childData[rowIndex] ? expanded[rowIndex] : null}
                />
                {row.map((cell, cellIndex) => (
                  <BaseBodyCell
                    key={`${rowIndex}_${cellIndex}`}
                    rowIndex={rowIndex}
                    columnIndex={cellIndex + 1}
                    dataLabel={columns[cellIndex]}
                  >
                    {cell}
                  </BaseBodyCell>
                ))}
              </BaseTableBodyRow>
              {childData[rowIndex] && (
                <BaseTableBodyRow key={`${rowIndex}-child`} isExpanded={expanded[rowIndex] === true}>
                  {!childData[rowIndex].fullWidth && <BaseBodyCell key={`${rowIndex}_0-child`} columnIndex={0} />}
                  {childData[rowIndex].cells.map((cell, cellIndex) => {
                    const shift = childData[rowIndex].fullWidth ? 1 : 0;
                    const shiftedCellIndex = cellIndex + shift;
                    return (
                      <BaseBodyCell
                        key={`${rowIndex}_${shiftedCellIndex}-child`}
                        rowIndex={rowIndex}
                        columnIndex={shiftedCellIndex}
                        dataLabel={columns[cellIndex]}
                        noPadding={childData[rowIndex].noPadding}
                        colSpan={
                          childData[rowIndex].cells.length === 1
                            ? numColumns + shift
                            : cell.props && cell.props.colSpan
                            ? cell.props.colSpan
                            : 1
                        }
                      >
                        <ExpandableRowContent>{cell.title || cell}</ExpandableRowContent>
                      </BaseBodyCell>
                    );
                  })}
                </BaseTableBodyRow>
              )}
            </React.Fragment>
          </BaseTableBody>
        ))}
      </BaseTable>
    </React.Fragment>
  );
};
```
