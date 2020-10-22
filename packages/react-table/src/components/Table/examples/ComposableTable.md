---
id: TableComposable
cssPrefix: pf-c-table
section: components
propComponents: ['BaseTable', 'THead', 'TBody', 'Tr', 'Th', 'Td', 'Caption']
ouia: true
beta: true
---

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

import DemoSortableTable from './DemoSortableTable';

## Examples

### Basic

A basic example using the Base\* table components. Some general notes:

- Provide `dataLabel` prop to the `Td` components so that in mobile view the cell has a label to provide context.
- If you want a table caption, simply place a `<Caption>My caption</Caption>` as the first child within a `BaseTable`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td, Caption } from '@patternfly/react-table';

ComposableTableBasic = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  return (
    <BaseTable aria-label="Simple table using composable components">
      <Caption>Simple table using composable components</Caption>
      <THead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Row click handler, custom row wrapper, header tooltips & popovers

This example demonstrates customizing rows, adding tooltip and popover information to header items, and some other misc. props.

- You can wrap the header cell contents in a `HeaderCellInfoWrapper` component to give it a tooltip or popover
- If you add the `noWrap` prop to `THead`, it won't wrap it if there is no space
- You can add the `textCenter` prop to `Th` or `Td` to center the contents
- You can pass `onClick`, `className`, `style` and more to `Tr`

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td, HeaderCellInfoWrapper } from '@patternfly/react-table';

ComposableTableMisc = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    [{ title: 'one - 2', colSpan: 3 }, null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', { title: 'five - 3 (not centered)', textCenter: false }]
  ];
  const onRowClick = (event, rowIndex, row) => {
    console.log(`handle row click ${rowIndex}`, row);
  };
  return (
    <BaseTable aria-label="Misc table">
      <THead noWrap>
        <Tr>
          <Th>
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
          </Th>
          <Th>{columns[1]}</Th>
          <Th>
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
          </Th>
          <Th>{columns[3]}</Th>
          <Th textCenter>{columns[4]}</Th>
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            borderLeft: '3px solid var(--pf-global--primary-color--100)'
          };
          return (
            <Tr
              key={rowIndex}
              onClick={event => onRowClick(event, rowIndex, row)}
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
                    columnIndex={cellIndex}
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
      </TBody>
    </BaseTable>
  );
};
```

### Sortable, sortable with wrapping headers

This example demonstrates making columns sortable, and wrapping header text. For sorting it is also important to pass the `columnIndex` to the `Th`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

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
    <BaseTable aria-label="Sortable Table">
      <THead>
        <Tr>
          {columns.map((column, columnIndex) => {
            // In this example, wrap all but the first column just to demonstrate
            const modifier = columnIndex !== 0 ? 'wrap' : null;
            // In this example, make the 1st and 3rd columns sortable
            const sortParams =
              columnIndex === 0 || columnIndex === 2
                ? {
                    activeSortIndex,
                    activeSortDirection,
                    onSort,
                    columnIndex
                  }
                : {};
            return (
              <Th key={columnIndex} modifier={modifier} {...sortParams}>
                {column}
              </Th>
            );
          })}
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Selectable

This example demonstrates row selection. The selection column is just another column, but with selection specific props added. We add it as the first header cell and also as the first body cell for each row.
Be sure to also add `columnIndex` to `Th` and `columnIndex` as well as `rowIndex` to `Td`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableSelectable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five']
  ];
  const [allRowsSelected, setAllRowsSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(rows.map(row => false));
  const onSelect = (event, isSelected, rowId) => {
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
  const onSelectAll = (event, isSelected) => {
    setAllRowsSelected(isSelected);
    setSelected(selected.map(sel => isSelected));
  };
  return (
    <BaseTable aria-label="Selectable Table">
      <THead>
        <Tr>
          <Th columnIndex={0} onSelect={onSelectAll} isSelected={allRowsSelected} />
          <Th columnIndex={1}>{columns[0]}</Th>
          <Th columnIndex={2}>{columns[1]}</Th>
          <Th columnIndex={3}>{columns[2]}</Th>
          <Th columnIndex={4}>{columns[3]}</Th>
          <Th columnIndex={5}>{columns[4]}</Th>
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
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
                <Td key={`${rowIndex}_${shiftedIndex}`} columnIndex={shiftedIndex} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Selectable radio input

Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has radio button props. Just as with selectable, be sure to also add `columnIndex` to `Th` and `columnIndex` as well as `rowIndex` to `Td`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

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
    <BaseTable aria-label="Radio selectable table">
      <THead>
        <Tr>
          <Th columnIndex={0} />
          <Th columnIndex={1}>{columns[0]}</Th>
          <Th columnIndex={2}>{columns[1]}</Th>
          <Th columnIndex={3}>{columns[2]}</Th>
          <Th columnIndex={4}>{columns[3]}</Th>
          <Th columnIndex={5}>{columns[4]}</Th>
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
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
                <Td key={`${rowIndex}_${shiftedIndex}`} columnIndex={shiftedIndex} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Actions

This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

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
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ];
  return (
    <BaseTable aria-label="Actions table">
      <THead>
        <Tr>
          <Th columnIndex={0}>{columns[0]}</Th>
          <Th columnIndex={1}>{columns[1]}</Th>
          <Th columnIndex={2}>{columns[2]}</Th>
          <Th columnIndex={3}>{columns[3]}</Th>
          <Th columnIndex={4}>{columns[4]}</Th>
          <Th columnIndex={5} />
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} columnIndex={cellIndex} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
            <Td
              key={`${rowIndex}_5`}
              columnIndex={5}
              rowIndex={rowIndex}
              actions={rowIndex === 1 ? null : rowIndex === 4 ? lastRowActions : defaultActions}
              actionsDisabled={rowIndex === 3}
            />
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Compact, compact borderless

You can set the `BaseTable` variant to `compact` or `compactBorderless`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

ComposableTableCompact = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'a', 'four', 'five'],
    ['a', 'two', 'k', 'four', 'five'],
    ['p', 'two', 'b', 'four', 'five'],
    ['4', '2', 'b', 'four', 'five'],
    ['5', '2', 'b', 'four', 'five']
  ];
  const [variant, setVariant] = React.useState('compact');
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setVariant(id);
  };
  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Compact"
          buttonId="compact"
          isSelected={variant === 'compact'}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          text="Compact borderless"
          buttonId="compactBorderless"
          isSelected={variant === 'compactBorderless'}
          onChange={handleItemClick}
        />
      </ToggleGroup>
      <BaseTable aria-label="Compact Table" variant={variant}>
        <THead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </BaseTable>
    </React.Fragment>
  );
};
```

### Expandable

This example demonstrates having expandable rows.

- Each parent/child row pair is enclosed in a `TBody` component.
- You can make the table more compact by setting the `BaseTable` variant to `compactExpandable`.

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

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
      child: [
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
    {
      parent: ['parent 6', '2', 'b', 'four', 'five'],
      child: [
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
  ];
  const numColumns = columns.length;
  // Init all to true
  const [expanded, setExpanded] = React.useState(
    Object.fromEntries(Object.entries(rowPairs).map(([k, v]) => [k, true]))
  );
  const [variant, setVariant] = React.useState(null);
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setVariant(id === 'default' ? null : id);
  };
  const handleExpansionToggle = rowIndex => {
    setExpanded({
      ...expanded,
      [rowIndex]: !expanded[rowIndex]
    });
  };
  let rowIndex = -1;
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
        <THead>
          <Tr>
            <Th columnIndex={0} />
            <Th columnIndex={1}>{columns[0]}</Th>
            <Th columnIndex={2}>{columns[1]}</Th>
            <Th columnIndex={3}>{columns[2]}</Th>
            <Th columnIndex={4}>{columns[3]}</Th>
            <Th columnIndex={5}>{columns[4]}</Th>
          </Tr>
        </THead>
        {rowPairs.map((pair, pairIndex) => {
          rowIndex += 1;
          const parentRow = (
            <Tr key={rowIndex}>
              <Td
                key={`${rowIndex}_0`}
                rowIndex={rowIndex}
                columnIndex={0}
                isExpanded={pair.child ? expanded[pairIndex] : null}
                onClick={() => handleExpansionToggle(pairIndex)}
              />
              {pair.parent.map((cell, cellIndex) => (
                <Td
                  key={`${rowIndex}_${cellIndex}`}
                  rowIndex={rowIndex}
                  columnIndex={cellIndex + 1}
                  dataLabel={columns[cellIndex]}
                >
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
              {!rowPairs[pairIndex].fullWidth && <Td key={`${rowIndex}_0`} columnIndex={0} />}
              {rowPairs[pairIndex].child.map((cell, cellIndex) => {
                const shift = rowPairs[pairIndex].fullWidth ? 1 : 0;
                const shiftedCellIndex = cellIndex + shift;
                return (
                  <Td
                    key={`${rowIndex}_${shiftedCellIndex}`}
                    rowIndex={rowIndex}
                    columnIndex={shiftedCellIndex}
                    dataLabel={columns[cellIndex]}
                    noPadding={rowPairs[pairIndex].noPadding}
                    colSpan={
                      rowPairs[pairIndex].child.length === 1
                        ? numColumns + shift
                        : cell.props && cell.props.colSpan
                        ? cell.props.colSpan
                        : 1
                    }
                  >
                    <ExpandableRowContent>{cell.title || cell}</ExpandableRowContent>
                  </Td>
                );
              })}
            </Tr>
          ) : null;
          return (
            <TBody key={pairIndex} isExpanded={expanded[pairIndex] === true}>
              <React.Fragment>
                {parentRow}
                {childRow}
              </React.Fragment>
            </TBody>
          );
        })}
      </BaseTable>
    </React.Fragment>
  );
};
```

### Compound expandable

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/master/packages/react-table/src/components/Table/demo/DemoSortableTable.js
import DemoSortableTable from './demo/DemoSortableTable';

ComposableCompoundExpandableTable = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
  const rows = [
    ['siemur/test-space', 10, 4, 4, '20 minutes', 'Open in Github'],
    ['siemur/test-space', 3, 4, 2, '10 minutes', 'Open in Github']
  ];
  const [activeChild, setActiveChild] = React.useState('0_1');
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
      return activeChild === `${rowIndex}_${cellIndex}`;
    }
    return null;
  };
  return (
    <React.Fragment>
      <BaseTable aria-label="Compound expandable table">
        <THead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex} columnIndex={columnIndex}>
                {column}
              </Th>
            ))}
          </Tr>
        </THead>
        {rows.map((row, rowIndex) => {
          const isRowExpanded = activeChild && activeChild.split('_')[0] === `${rowIndex}`;
          return (
            <TBody key={rowIndex} isExpanded={isRowExpanded}>
              <React.Fragment>
                <Tr>
                  {row.map((cell, cellIndex) => (
                    <Td
                      key={`${rowIndex}_${cellIndex}`}
                      rowIndex={rowIndex}
                      columnIndex={cellIndex}
                      dataLabel={columns[cellIndex]}
                      component={cellIndex === 0 ? 'th' : 'td'}
                      isCompoundExpanded={isCompoundExpanded(rowIndex, cellIndex)}
                      onClick={() => {
                        // only columns 1 - 3 are clickable
                        if (1 <= cellIndex && cellIndex <= 3) {
                          const current = `${rowIndex}_${cellIndex}`;
                          if (activeChild === current) {
                            // closing the expansion on the current toggle
                            setActiveChild(null);
                          } else {
                            // expanding
                            setActiveChild(current);
                          }
                        }
                      }}
                    >
                      {customRender(cell, cellIndex)}
                    </Td>
                  ))}
                </Tr>
                {isRowExpanded && (
                  <Tr key={`${rowIndex}-child`} isExpanded={isRowExpanded}>
                    <Td rowIndex={rowIndex} dataLabel={columns[0]} noPadding colSpan="6">
                      <ExpandableRowContent>{childData[activeChild].component}</ExpandableRowContent>
                    </Td>
                  </Tr>
                )}
              </React.Fragment>
            </TBody>
          );
        })}
      </BaseTable>
    </React.Fragment>
  );
};
```

### Cell width, breakpoint modifiers

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

ComposableTableCellWidth = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    ['one', 'two', 'three', 'four', 'five'],
    ['one - 2', null, null, 'four - 2', 'five - 2'],
    ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
  ];
  return (
    <BaseTable aria-label="Cell widths">
      <THead>
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
      </THead>
      <TBody>
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
      </TBody>
    </BaseTable>
  );
};
```

### Controlling text

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td } from '@patternfly/react-table';

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
    <BaseTable aria-label="Controlling text">
      <THead>
        <Tr>
          <Th width={20}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th modifier="wrap">{columns[2]}</Th>
          <Th modifier="fitContent">{columns[3]}</Th>
          <Th>{columns[4]}</Th>
        </Tr>
      </THead>
      <TBody>
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
      </TBody>
    </BaseTable>
  );
};
```

### Modifiers with table text

```js isBeta
import React from 'react';
import { BaseTable, THead, TBody, Tr, Th, Td, TableText } from '@patternfly/react-table';

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
    <BaseTable aria-label="Table text">
      <THead>
        <Tr>
          <Th width={30}>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};
```

### Empty state

```js isBeta
import React from 'react';
import {
  BaseTable,
  THead,
  TBody,
  Tr,
  Th,
  Td,
  Caption,
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStatePrimary,
  Bullseye,
  Title,
  EmptyStateIcon
} from '@patternfly/react-table';

ComposableEmptyState = () => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  return (
    <React.Fragment>
      <BaseTable aria-label="Empty state">
        <Caption>Empty State Table Example</Caption>
        <THead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex} columnIndex={columnIndex}>
                {column}
              </Th>
            ))}
          </Tr>
        </THead>
      </BaseTable>
      <EmptyState variant={EmptyStateVariant.small}>
        <EmptyStateIcon icon={SearchIcon} />
        <Title headingLevel="h2" size="lg">
          No results found
        </Title>
        <EmptyStateBody>
          No results match the filter criteria. Remove all filters or clear all filters to show results.
        </EmptyStateBody>
        <Button variant="link">Clear all filters</Button>
      </EmptyState>
    </React.Fragment>
  );
};
```
