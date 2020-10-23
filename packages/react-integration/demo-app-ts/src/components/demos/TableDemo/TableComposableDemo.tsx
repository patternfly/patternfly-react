import * as React from 'react';
import {
  TableComposable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Caption,
  TableText,
  HeaderCellInfoWrapper,
  ExpandableRowContent,
  OnSelect,
  IActions
} from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem, Stack, StackItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

export const TableComposableDemo = () => {
  const ComposableTableBasic = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['one', 'two', 'three', 'four', 'five'],
      ['one - 2', null, null, 'four - 2', 'five - 2'],
      ['one - 3', 'two - 3', 'three - 3', 'four - 3', 'five - 3']
    ];
    return (
      <TableComposable aria-label="Simple table using composable components">
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
    );
  };

  const ComposableTableMisc = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows: any[] = [
      ['one', 'two', 'three', 'four', 'five'],
      [{ title: 'one - 2', colSpan: 3 }, null, null, 'four - 2', 'five - 2'],
      ['one - 3', 'two - 3', 'three - 3', 'four - 3', { title: 'five - 3 (not centered)', textCenter: false }]
    ];
    const onRowClick = (event: React.MouseEvent, rowIndex: number, row: any[]) => {
      // eslint-disable-next-line no-console
      console.log(`handle row click ${rowIndex}`, row);
    };
    return (
      <TableComposable aria-label="Misc table">
        <Thead noWrap>
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
                onClick={event => onRowClick(event, rowIndex, row)}
                className={isOddRow ? 'odd-row-class' : 'even-row-class'}
                style={isOddRow ? customStyle : {}}
              >
                {row.map((cell: any, cellIndex: number) => {
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
        </Tbody>
      </TableComposable>
    );
  };

  const ComposableTableSortable = () => {
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
    const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | 'none'>('none');
    const onSort = (event: React.MouseEvent, index: number, direction: 'asc' | 'desc' | 'none') => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
      // sorts the rows
      const updatedRows = rows.sort((a, b) => {
        // string sort
        if (direction === 'asc') {
          return a[index].localeCompare(b[index]);
        }
        return b[index].localeCompare(a[index]);
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

  const ComposableTableSelectable = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['one', 'two', 'a', 'four', 'five'],
      ['a', 'two', 'k', 'four', 'five'],
      ['p', 'two', 'b', 'four', 'five']
    ];
    const [allRowsSelected, setAllRowsSelected] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selected, setSelected] = React.useState(rows.map(row => false));
    const onSelect: OnSelect = (event, isSelected, rowId) => {
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
    const onSelectAll: OnSelect = (event, isSelected) => {
      setAllRowsSelected(isSelected);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelected(selected.map(sel => isSelected));
    };
    return (
      <TableComposable aria-label="Selectable Table">
        <Thead>
          <Tr>
            <Th columnIndex={0} onSelect={onSelectAll} isSelected={allRowsSelected} />
            <Th columnIndex={1}>{columns[0]}</Th>
            <Th columnIndex={2}>{columns[1]}</Th>
            <Th columnIndex={3}>{columns[2]}</Th>
            <Th columnIndex={4}>{columns[3]}</Th>
            <Th columnIndex={5}>{columns[4]}</Th>
          </Tr>
        </Thead>
        <Tbody>
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
        </Tbody>
      </TableComposable>
    );
  };

  const ComposableTableSelectableRadio = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['one', 'two', 'a', 'four', 'five'],
      ['a', 'two', 'k', 'four', 'five'],
      ['p', 'two', 'b', 'four', 'five']
    ];
    const [selected, setSelected] = React.useState(-1);
    const onSelect: OnSelect = (event, isSelected, rowId) => {
      setSelected(rowId);
    };
    return (
      <TableComposable aria-label="Radio selectable table">
        <Thead>
          <Tr>
            <Th columnIndex={0} />
            <Th columnIndex={1}>{columns[0]}</Th>
            <Th columnIndex={2}>{columns[1]}</Th>
            <Th columnIndex={3}>{columns[2]}</Th>
            <Th columnIndex={4}>{columns[3]}</Th>
            <Th columnIndex={5}>{columns[4]}</Th>
          </Tr>
        </Thead>
        <Tbody>
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
        </Tbody>
      </TableComposable>
    );
  };

  const ComposableTableActions = () => {
    const defaultActions: IActions = [
      {
        title: 'Some action',
        // eslint-disable-next-line
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
        // eslint-disable-next-line
        onClick: (event, rowId, rowData, extra) => console.log('clicked on Third action, on row: ', rowId)
      }
    ];
    const lastRowActions: IActions = [
      {
        title: 'Some action',
        // eslint-disable-next-line
        onClick: (event, rowId, rowData, extra) => console.log(`clicked on Some action, on row ${rowId}`)
      },
      {
        title: <div>Another action</div>,
        // eslint-disable-next-line
        onClick: (event, rowId, rowData, extra) => console.log(`clicked on Another action, on row ${rowId}`)
      },
      {
        isSeparator: true
      },
      {
        title: 'Third action',
        // eslint-disable-next-line
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
      <TableComposable aria-label="Actions table">
        <Thead>
          <Tr>
            <Th columnIndex={0}>{columns[0]}</Th>
            <Th columnIndex={1}>{columns[1]}</Th>
            <Th columnIndex={2}>{columns[2]}</Th>
            <Th columnIndex={3}>{columns[3]}</Th>
            <Th columnIndex={4}>{columns[4]}</Th>
            <Th columnIndex={5} />
          </Tr>
        </Thead>
        <Tbody>
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
        </Tbody>
      </TableComposable>
    );
  };

  const ComposableTableCompact = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['one', 'two', 'a', 'four', 'five'],
      ['a', 'two', 'k', 'four', 'five'],
      ['p', 'two', 'b', 'four', 'five'],
      ['4', '2', 'b', 'four', 'five'],
      ['5', '2', 'b', 'four', 'five']
    ];
    const [variant, setVariant] = React.useState<'compact' | 'compactBorderless'>('compact');
    const handleItemClick = (isSelected: boolean, event: React.MouseEvent) => {
      const id = event.currentTarget.id as 'compact' | 'compactBorderless';
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
        <TableComposable aria-label="Compact Table" variant={variant}>
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

  const ComposableTableExpandable = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rowPairs: any[] = [
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
      Object.fromEntries(Object.entries(rowPairs).map(([k]) => [k, true]))
    );
    const [variant, setVariant] = React.useState(null);
    const handleItemClick = (isSelected: boolean, event: React.MouseEvent) => {
      const id = event.currentTarget.id;
      setVariant(id === 'default' ? null : id);
    };
    const handleExpansionToggle = (rowIndex: number) => {
      setExpanded({
        ...expanded,
        [rowIndex]: !expanded[rowIndex]
      });
    };
    let rowIndex = -1;
    return (
      <React.Fragment>
        <ToggleGroup aria-label="Default with single selectable">
          <ToggleGroupItem
            text="Default expandable"
            buttonId="default"
            isSelected={variant === null}
            onChange={handleItemClick}
          />
          <ToggleGroupItem
            text="Compact expandable"
            buttonId="compactExpandable"
            isSelected={variant === 'compactExpandable'}
            onChange={handleItemClick}
          />
        </ToggleGroup>
        <TableComposable aria-label="Expandable Table" variant={variant}>
          <Thead>
            <Tr>
              <Th columnIndex={0} />
              <Th columnIndex={1}>{columns[0]}</Th>
              <Th columnIndex={2}>{columns[1]}</Th>
              <Th columnIndex={3}>{columns[2]}</Th>
              <Th columnIndex={4}>{columns[3]}</Th>
              <Th columnIndex={5}>{columns[4]}</Th>
            </Tr>
          </Thead>
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
                {pair.parent.map((cell: any, cellIndex: number) => (
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
                {rowPairs[pairIndex].child.map((cell: any, cellIndex: number) => {
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

  const ComposableCompoundExpandableTable = () => {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
    const rows = [
      ['siemur/test-space', 10, 4, 4, '20 minutes', 'Open in Github'],
      ['siemur/test-space', 3, 4, 2, '10 minutes', 'Open in Github']
    ];
    // index corresponds to row index, and value corresponds to column index of the expanded, null means no cell is expanded
    const [activeChild, setActiveChild] = React.useState([1, null]);
    const DemoSortableTable = ({ firstColumnRows, id }: { firstColumnRows: string[]; id: string }) => {
      const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last Commit'];
      const rows = [firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']];

      return (
        <TableComposable aria-label="Demo child table" id={id}>
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
      );
    };
    // key = row_col of the parent it corresponds to
    const childData: {
      [key: string]: any;
    } = {
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
    const customRender = (cell: any, index: number) => {
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
    const isCompoundExpanded = (rowIndex: number, cellIndex: number) => {
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
              <Th key={columnIndex} columnIndex={columnIndex}>
                {column}
              </Th>
            ))}
          </Tr>
        </Thead>
        {rows.map((row, rowIndex) => {
          const isRowExpanded = activeChild[rowIndex] !== null;
          const childIndex: string = `${rowIndex}_${activeChild[rowIndex]}`;
          return (
            <Tbody key={rowIndex} isExpanded={isRowExpanded}>
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
                      }}
                    >
                      {customRender(cell, cellIndex)}
                    </Td>
                  ))}
                </Tr>
                {isRowExpanded && (
                  <Tr key={`${rowIndex}-child`} isExpanded={isRowExpanded}>
                    <Td rowIndex={rowIndex} dataLabel={columns[0]} noPadding colSpan={6}>
                      <ExpandableRowContent>{childData[childIndex].component}</ExpandableRowContent>
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

  const ComposableTableCellWidth = () => {
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

  const ComposableControllingText = () => {
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
        <a key="a" href="#">
          http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        </a>,
        <p key="b">
          By default,
          <code>thead</code> cells will truncate and
          <code>tbody</code> cells will wrap. Use
          <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
        </p>,
        "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
        <a key="c" href="#">
          No wrap
        </a>
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

  const ComposableTableText = () => {
    const columns = ['Truncating text', 'Wrapping table header text. This th text will wrap instead of truncate.'];
    const rows = [
      [
        <TableText key="tt 1" wrapModifier="truncate">
          This text will truncate instead of wrap.
        </TableText>,
        <TableText key="tt 2" wrapModifier="nowrap">
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

  return (
    <Stack hasGutter>
      <StackItem>
        <ComposableTableBasic />
      </StackItem>
      <StackItem>
        <ComposableTableMisc />
      </StackItem>
      <StackItem>
        <ComposableTableSortable />
      </StackItem>
      <StackItem>
        <ComposableTableSelectable />
      </StackItem>
      <StackItem>
        <ComposableTableSelectableRadio />
      </StackItem>
      <StackItem>
        <ComposableTableActions />
      </StackItem>
      <StackItem>
        <ComposableTableCompact />
      </StackItem>
      <StackItem>
        <ComposableTableExpandable />
      </StackItem>
      <StackItem>
        <ComposableCompoundExpandableTable />
      </StackItem>
      <StackItem>
        <ComposableTableCellWidth />
      </StackItem>
      <StackItem>
        <ComposableControllingText />
      </StackItem>
      <StackItem>
        <ComposableTableText />
      </StackItem>
    </Stack>
  );
};
