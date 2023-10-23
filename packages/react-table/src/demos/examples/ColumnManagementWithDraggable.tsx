import React from 'react';
import {
  Button,
  DataList,
  DataListCheck,
  DataListControl,
  DataListDragButton,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListItemCells,
  DragDrop,
  Draggable,
  Droppable,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Modal,
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuItem,
  Pagination,
  PaginationVariant,
  Text,
  TextContent,
  TextVariants,
  MenuToggle
} from '@patternfly/react-core';
import { Table as TableDeprecated, TableHeader, TableBody } from '@patternfly/react-table/deprecated';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

interface RowType {
  cells: (
    | {
        title: React.JSX.Element;
        props: {
          column: string;
        };
      }
    | {
        title: string;
        props: {
          column: string;
        };
      }
  )[];
}

export const ColumnManagementAction: React.FunctionComponent = () => {
  const actions = [
    {
      title: <a href="#">Link</a>
    },
    {
      title: 'Action'
    },
    {
      isSeparator: true
    },
    {
      title: <a href="#">Separated link</a>
    }
  ];
  const defaultColumns: string[] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
  const defaultRows = [
    {
      cells: [
        {
          title: (
            <React.Fragment>
              <div>Node 1</div>
              <a href="#">siemur/test-space</a>
            </React.Fragment>
          ),
          props: { column: 'Repositories' }
        },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> 10
            </React.Fragment>
          ),
          props: { column: 'Branches' }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> 25
            </React.Fragment>
          ),
          props: { column: 'Pull requests' }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> 5
            </React.Fragment>
          ),
          props: { column: 'Workspaces' }
        },
        {
          title: '2 days ago',
          props: { column: 'Last commit' }
        },
        {
          title: (
            <React.Fragment>
              <a href="#">Action link</a>
            </React.Fragment>
          ),
          props: { column: '' }
        }
      ]
    },
    {
      cells: [
        {
          title: (
            <React.Fragment>
              <div>Node 2</div>
              <a href="#">siemur/test-space</a>
            </React.Fragment>
          ),
          props: { column: 'Repositories' }
        },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> 8
            </React.Fragment>
          ),
          props: { column: 'Branches' }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> 30
            </React.Fragment>
          ),
          props: { column: 'Pull requests' }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> 2
            </React.Fragment>
          ),
          props: { column: 'Workspaces' }
        },
        {
          title: '2 days ago',
          props: { column: 'Last commit' }
        },
        {
          title: (
            <React.Fragment>
              <a href="#">Action link</a>
            </React.Fragment>
          ),
          props: { column: '' }
        }
      ]
    },
    {
      cells: [
        {
          title: (
            <React.Fragment>
              <div>Node 3</div>
              <a href="#">siemur/test-space</a>
            </React.Fragment>
          ),
          props: { column: 'Repositories' }
        },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> 12
            </React.Fragment>
          ),
          props: { column: 'Branches' }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> 48
            </React.Fragment>
          ),
          props: { column: 'Pull requests' }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> 13
            </React.Fragment>
          ),
          props: { column: 'Workspaces' }
        },
        {
          title: '30 days ago',
          props: { column: 'Last commit' }
        },
        {
          title: (
            <React.Fragment>
              <a href="#">Action link</a>
            </React.Fragment>
          ),
          props: { column: '' }
        }
      ]
    },
    {
      cells: [
        {
          title: (
            <React.Fragment>
              <div>Node 4</div>
              <a href="#">siemur/test-space</a>
            </React.Fragment>
          ),
          props: { column: 'Repositories' }
        },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> 3
            </React.Fragment>
          ),
          props: { column: 'Branches' }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> 8
            </React.Fragment>
          ),
          props: { column: 'Pull requests' }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> 20
            </React.Fragment>
          ),
          props: { column: 'Workspaces' }
        },
        {
          title: '8 days ago',
          props: { column: 'Last commit' }
        },
        {
          title: (
            <React.Fragment>
              <a href="#">Action link</a>
            </React.Fragment>
          ),
          props: { column: '' }
        }
      ]
    },
    {
      cells: [
        {
          title: (
            <React.Fragment>
              <div>Node 5</div>
              <a href="#">siemur/test-space</a>
            </React.Fragment>
          ),
          props: { column: 'Repositories' }
        },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> 34
            </React.Fragment>
          ),
          props: { column: 'Branches' }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> 21
            </React.Fragment>
          ),
          props: { column: 'Pull requests' }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> 26
            </React.Fragment>
          ),
          props: { column: 'Workspaces' }
        },
        {
          title: '2 days ago',
          props: { column: 'Last commit' }
        },
        {
          title: (
            <React.Fragment>
              <a href="#">Action link</a>
            </React.Fragment>
          ),
          props: { column: '' }
        }
      ]
    }
  ];

  const [filters, setFilters] = React.useState<string[]>([]);
  const [filteredColumns, setFilteredColumns] = React.useState<string[]>([]);
  const [columns, setColumns] = React.useState<string[]>(defaultColumns);
  const [rows, setRows] = React.useState(defaultRows);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [check1, setCheck1] = React.useState(true);
  const [check2, setCheck2] = React.useState(true);
  const [check3, setCheck3] = React.useState(true);
  const [check4, setCheck4] = React.useState(true);
  const [check5, setCheck5] = React.useState(true);
  const [liveText, setLiveText] = React.useState('');
  const id = '';
  const canSelectAll = true;

  const reorder = (list: string[], startIndex: number, endIndex: number) => {
    const result = list;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const matchCheckboxNameToColumn = (name) => {
    switch (name) {
      case 'check1':
        return 'Repositories';
      case 'check2':
        return 'Branches';
      case 'check3':
        return 'Pull requests';
      case 'check4':
        return 'Workspaces';
      case 'check5':
        return 'Last commit';
    }
  };

  const filterData = (checked, name) => {
    if (checked) {
      const updatedFilters = filters.filter((item) => item !== name);
      const updatedFilteredColumns = defaultColumns.filter((column) => !updatedFilters.includes(column));
      setFilters(updatedFilters);
      setFilteredColumns(updatedFilteredColumns);
    } else {
      const updatedFilters = filters;
      updatedFilters.push(name);
      const updatedFilteredColumns = columns.filter((column) => !filters.includes(column));
      setFilters(updatedFilters);
      setFilteredColumns(updatedFilteredColumns);
    }
  };
  const unfilterAllData = () => {
    setFilters([]);
    setFilteredColumns(defaultColumns);
  };
  const handleChange = (event, checked) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    filterData(checked, matchCheckboxNameToColumn(target.name));
    switch (target.name) {
      case 'check1':
        setCheck1(value);
        break;
      case 'check2':
        setCheck2(value);
        break;
      case 'check3':
        setCheck3(value);
        break;
      case 'check4':
        setCheck4(value);
        break;
      case 'check5':
        setCheck5(value);
        break;
    }
  };
  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };
  const onSave = () => {
    // const orderedColumns: string[] = itemOrder.map((item) => matchDataListNameToColumn(item));
    // concat empty string at the end for actions column
    const filteredOrderedColumns: string[] = columns
      .filter((col) => filteredColumns.length === 0 || filteredColumns.indexOf(col as string) > -1)
      .concat(['']);
    const orderedRows: RowType[] = [];
    defaultRows.forEach((row) => {
      const updatedCells = row.cells
        .filter((cell) => filteredOrderedColumns.indexOf(cell.props.column) > -1)
        .sort((cellA, cellB) => {
          const indexA = filteredOrderedColumns.indexOf(cellA.props.column);
          const indexB = filteredOrderedColumns.indexOf(cellB.props.column);
          if (indexA < indexB) {
            return -1;
          }
          if (indexA > indexB) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      orderedRows.push({
        cells: updatedCells
      });
    });
    setColumns(filteredOrderedColumns as string[]);
    setRows(orderedRows);
    setIsModalOpen(!isModalOpen);
  };

  const selectAllColumns = () => {
    unfilterAllData();
    setCheck1(true);
    setCheck2(true);
    setCheck3(true);
    setCheck4(true);
    setCheck5(true);
  };

  const onSelect = (event, isSelected, rowId) => {
    let updatedRows;
    if (rowId === -1) {
      updatedRows = updatedRows.map((oneRow) => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      updatedRows = [...updatedRows];
      updatedRows[rowId] = { ...rows[rowId], selected: isSelected };
    }
    setRows(updatedRows);
  };

  const onDrag = (source) => {
    setLiveText(`Started dragging ${columns[source.index]}`);
    // Return true to allow drag
    return true;
  };

  const onDragMove = (source, dest) => {
    const newText = dest ? `Move ${columns[source.index]} to ${columns[dest.index]}` : 'Invalid drop zone';
    if (newText !== liveText) {
      setLiveText(newText);
    }
  };

  const onDrop = (source, dest) => {
    if (dest) {
      const newItems = reorder(columns, source.index, dest.index);
      setColumns(newItems);

      setLiveText('Dragging finished.');
      return true; // Signal that this is a valid drop and not to animate the item returning home.
    } else {
      setLiveText('Dragging cancelled. List unchanged.');
    }
  };

  const renderModal = () => (
    <Modal
      title="Manage columns"
      isOpen={isModalOpen}
      variant="small"
      description={
        <TextContent>
          <Text component={TextVariants.p}>Selected categories will be displayed in the table.</Text>
          <Button isInline onClick={selectAllColumns} variant="link">
            Select all
          </Button>
        </TextContent>
      }
      onClose={handleModalToggle}
      actions={[
        <Button key="save" variant="primary" onClick={onSave}>
          Save
        </Button>,
        <Button key="cancel" variant="secondary" onClick={handleModalToggle}>
          Cancel
        </Button>
      ]}
    >
      <DragDrop onDrag={onDrag} onDragMove={onDragMove} onDrop={onDrop}>
        <Droppable hasNoWrapper>
          <DataList aria-label="draggable data list example" isCompact>
            <Draggable key={id} hasNoWrapper>
              <DataListItem aria-labelledby="table-column-management-item1" id="data1" ref={React.createRef()}>
                <DataListItemRow>
                  <DataListControl>
                    <DataListDragButton
                      aria-label="Reorder"
                      aria-labelledby={`table-column-management-item1`}
                      aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                      aria-pressed="false"
                    />
                    <DataListCheck
                      aria-labelledby={`table-column-management-item1`}
                      checked={check1}
                      name="check1"
                      id="check1"
                      onChange={handleChange}
                      otherControls
                    />
                  </DataListControl>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key={id}>
                        <span id={`draggable-${id}`}>Repositories</span>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </Draggable>
            <Draggable>
              <DataListItem aria-labelledby="table-column-management-item2" id="data2" ref={React.createRef()}>
                <DataListItemRow>
                  <DataListControl>
                    <DataListDragButton
                      aria-label="Reorder"
                      aria-labelledby={`table-column-management-item2`}
                      aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                      aria-pressed="false"
                    />
                    <DataListCheck
                      aria-labelledby={`table-column-management-item2`}
                      checked={check2}
                      name="check2"
                      id="check2"
                      onChange={handleChange}
                      otherControls
                    />
                  </DataListControl>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key={id}>
                        <span id={`draggable-${id}`}>Branches</span>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </Draggable>
            <Draggable>
              <DataListItem aria-labelledby="table-column-management-item3" id="data3" ref={React.createRef()}>
                <DataListItemRow>
                  <DataListControl>
                    <DataListDragButton
                      aria-label="Reorder"
                      aria-labelledby={`table-column-management-item3`}
                      aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                      aria-pressed="false"
                    />
                    <DataListCheck
                      aria-labelledby={`table-column-management-item3`}
                      checked={check3}
                      name="check3"
                      id="check3"
                      onChange={handleChange}
                      otherControls
                    />
                  </DataListControl>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key={id}>
                        <span id={`draggable-${id}`}>Pull requests</span>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </Draggable>
            <Draggable>
              <DataListItem aria-labelledby="table-column-management-item4" id="data4" ref={React.createRef()}>
                <DataListItemRow>
                  <DataListControl>
                    <DataListDragButton
                      aria-label="Reorder"
                      aria-labelledby={`table-column-management-item4`}
                      aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                      aria-pressed="false"
                    />
                    <DataListCheck
                      aria-labelledby={`table-column-management-item4`}
                      checked={check4}
                      name="check4"
                      id="check4"
                      onChange={handleChange}
                      otherControls
                    />
                  </DataListControl>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key={id}>
                        <span id={`draggable-${id}`}>Workspaces</span>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </Draggable>
            <Draggable>
              <DataListItem aria-labelledby="table-column-management-item5" id="data5" ref={React.createRef()}>
                <DataListItemRow>
                  <DataListControl>
                    <DataListDragButton
                      aria-label="Reorder"
                      aria-labelledby={`table-column-management-item5`}
                      aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                      aria-pressed="false"
                    />
                    <DataListCheck
                      aria-labelledby={`table-column-management-item5`}
                      checked={check5}
                      name="check5"
                      id="check5"
                      onChange={handleChange}
                      otherControls
                    />
                  </DataListControl>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key={id}>
                        <span id={`draggable-${id}`}>Last commit</span>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </Draggable>
          </DataList>
        </Droppable>
        <div className="pf-v5-screen-reader" aria-live="assertive">
          {liveText}
        </div>
        <div className="pf-v5-screen-reader" id={`description-${id}`}>
          Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm
          the drag, or any other key to cancel the drag operation.
        </div>
      </DragDrop>
    </Modal>
  );

  const toolbarItems = (
    <React.Fragment>
      <span id="page-layout-table-draggable-column-management-action-toolbar-top-select-checkbox-label" hidden>
        Choose one
      </span>
      <ToolbarContent>
        <ToolbarItem variant="overflow-menu">
          <OverflowMenu breakpoint="md">
            <OverflowMenuItem isPersistent>
              <MenuToggle>
                <FilterIcon /> Name
              </MenuToggle>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <MenuToggle variant="plain" aria-label="Sort columns">
                <SortAmountDownIcon aria-hidden="true" />
              </MenuToggle>
            </OverflowMenuItem>
            <OverflowMenuGroup groupType="button" isPersistent>
              <OverflowMenuItem>
                <Button variant="primary">Action</Button>
              </OverflowMenuItem>
              <OverflowMenuItem>
                <Button variant="link" onClick={handleModalToggle}>
                  Manage columns
                </Button>
              </OverflowMenuItem>
            </OverflowMenuGroup>
          </OverflowMenu>
        </ToolbarItem>
        <ToolbarItem variant="pagination">
          <Pagination
            itemCount={37}
            widgetId="pagination-options-menu"
            page={1}
            variant={PaginationVariant.top}
            isCompact
            titles={{
              paginationAriaLabel: `Draggable column management top pagination`
            }}
          />
        </ToolbarItem>
      </ToolbarContent>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <TableDeprecated
        gridBreakPoint="grid-xl"
        header={
          <React.Fragment>
            <Toolbar id="page-layout-table-draggable-column-management-action-toolbar-top">{toolbarItems}</Toolbar>
          </React.Fragment>
        }
        aria-label="This is a table with checkboxes"
        onSelect={onSelect}
        cells={columns}
        rows={rows}
        actions={actions}
        canSelectAll={canSelectAll}
      >
        <TableHeader />
        <TableBody />
      </TableDeprecated>
      <Pagination
        isCompact
        id="page-layout-table-draggable-column-management-action-toolbar-bottom"
        itemCount={37}
        widgetId="pagination-options-menu-bottom"
        page={1}
        variant={PaginationVariant.bottom}
        titles={{
          paginationAriaLabel: `Draggable column management bottom pagination`
        }}
      />
      {renderModal()}
    </React.Fragment>
  );
};
