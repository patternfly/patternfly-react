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
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Modal,
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuItem,
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

export const TableColumnManagementWithDraggable: React.FunctionComponent = () => {
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

  const matchCheckboxNameToColumn = (name: string) => {
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
      default:
        return '';
    }
  };

  const filterData = (checked: boolean, name: string) => {
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
  const handleChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    const target = event.currentTarget;
    const name = target.name;

    const value = target.type === 'checkbox' ? checked : !!target.value;
    filterData(checked, matchCheckboxNameToColumn(target.name));
    switch (name) {
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
      <DataList aria-label="Table column management" id="table-column-management" isCompact>
        <DataListItem aria-labelledby="table-column-management-item1" id="data1">
          <DataListItemRow>
            <DataListControl>
              <DataListDragButton
                aria-label="Reorder"
                aria-labelledby="table-column-management-item1"
                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                aria-pressed="false"
              />
              <DataListCheck
                aria-labelledby="table-column-management-item1"
                checked={check1}
                name="check1"
                id="check1"
                onChange={handleChange}
                otherControls
              />
            </DataListControl>
            <DataListItemCells
              dataListCells={[
                <DataListCell id="table-column-management-item1" key="table-column-management-item1">
                  <label htmlFor="check1">Repositories</label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="table-column-management-item2" id="data2">
          <DataListItemRow>
            <DataListControl>
              <DataListDragButton
                aria-label="Reorder"
                aria-labelledby="table-column-management-item2"
                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                aria-pressed="false"
              />
              <DataListCheck
                aria-labelledby="table-column-management-item2"
                checked={check2}
                name="check2"
                id="check2"
                onChange={handleChange}
                otherControls
              />
            </DataListControl>
            <DataListItemCells
              dataListCells={[
                <DataListCell id="table-column-management-item2" key="table-column-management-item2">
                  <label htmlFor="check2">Branches</label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="table-column-management-item3" id="data3">
          <DataListItemRow>
            <DataListControl>
              <DataListDragButton
                aria-label="Reorder"
                aria-labelledby="table-column-management-item3"
                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                aria-pressed="false"
              />
              <DataListCheck
                aria-labelledby="table-column-management-item3"
                checked={check3}
                name="check3"
                id="check3"
                onChange={handleChange}
                otherControls
              />
            </DataListControl>
            <DataListItemCells
              dataListCells={[
                <DataListCell id="table-column-management-item3" key="table-column-management-item3">
                  <label htmlFor="check3">Pull requests</label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="table-column-management-item4" id="data4">
          <DataListItemRow>
            <DataListControl>
              <DataListDragButton
                aria-label="Reorder"
                aria-labelledby="table-column-management-item4"
                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                aria-pressed="false"
              />
              <DataListCheck
                aria-labelledby="table-column-management-item4"
                checked={check4}
                name="check4"
                id="check4"
                onChange={handleChange}
                otherControls
              />
            </DataListControl>
            <DataListItemCells
              dataListCells={[
                <DataListCell id="table-column-management-item4" key="table-column-management-item4">
                  <label htmlFor="check4">Workspaces</label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="table-column-management-item5" id="data5">
          <DataListItemRow>
            <DataListControl>
              <DataListDragButton
                aria-label="Reorder"
                aria-labelledby="table-column-management-item5"
                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                aria-pressed="false"
              />
              <DataListCheck
                aria-labelledby="table-column-management-item5"
                checked={check5}
                name="check5"
                id="check5"
                onChange={handleChange}
                otherControls
              />
            </DataListControl>
            <DataListItemCells
              dataListCells={[
                <DataListCell id="table-column-management-item5" key="table-column-management-item5">
                  <label htmlFor="check5">Last commit</label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
      </DataList>
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
        aria-label="Column Management with Draggable Table"
        cells={columns}
        rows={rows}
        actions={actions}
      >
        <TableHeader />
        <TableBody />
      </TableDeprecated>
      {renderModal()}
    </React.Fragment>
  );
};
