---
id: Table
section: components
---

import {
Checkbox,
Label,
PageSection,
ToolbarExpandIconWrapper,
ToolbarContent,
Toolbar,
ToolbarItem,
SearchInput,
Masthead,
MastheadToggle,
MastheadMain,
MastheadContent,
SkipToContent,
Breadcrumb,
BreadcrumbItem,
Page,
PageSectionVariants,
TextContent,
Text,
Divider } from '@patternfly/react-core';
import { Table as TableDeprecated, TableHeader, TableBody } from '@patternfly/react-table/deprecated';

import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import globalDangerColor200 from '@patternfly/react-tokens/dist/esm/global_danger_color_200';
import imgBrand from '@patternfly/react-core/src/components/assets/pfLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';

## Demos

### Bulk select

```js isFullscreen file="./table-demos/BulkSelect.jsx"

```

### Expand/collapse all

```js isFullscreen file="./table-demos/ExpandCollapseAll.jsx"

```

### Compact

```js isFullscreen file="./table-demos/Compact.jsx"

```

### Compound expansion

```js isFullscreen file="./table-demos/CompoundExpansion.jsx"

```

### Column management

```js isFullscreen file="./table-demos/ColumnManagement.jsx"

```

### Column management with draggable

```js
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
  Pagination,
  PaginationVariant,
  Text,
  TextContent,
  TextVariants,
  MenuToggle
} from '@patternfly/react-core';
import { Table as TableDeprecated, TableHeader, TableBody, TableText } from '@patternfly/react-table/deprecated';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

class ColumnManagementAction extends React.Component {
  constructor(props) {
    super(props);
    this.actions = [
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
    this.defaultColumns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
    this.defaultRows = [
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
    this.state = {
      filters: [],
      filteredColumns: [],
      columns: this.defaultColumns,
      rows: this.defaultRows,
      canSelectAll: true,
      isModalOpen: false,
      check1: true,
      check2: true,
      check3: true,
      check4: true,
      check5: true,
      liveText: '',
      id: '',
      itemOrder: ['data1', 'data2', 'data3', 'data4', 'data5']
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.matchCheckboxNameToColumn = (name) => {
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
    this.matchDataListNameToColumn = (name) => {
      switch (name) {
        case 'data1':
          return 'Repositories';
        case 'data2':
          return 'Branches';
        case 'data3':
          return 'Pull requests';
        case 'data4':
          return 'Workspaces';
        case 'data5':
          return 'Last commit';
      }
    };
    this.filterData = (checked, name) => {
      const { rows, columns, filters } = this.state;
      if (checked) {
        const updatedFilters = filters.filter((item) => item !== name);
        const filteredColumns = this.defaultColumns.filter((column) => !updatedFilters.includes(column));
        this.setState({
          filters: updatedFilters,
          filteredColumns: filteredColumns
        });
      } else {
        let updatedFilters = filters;
        updatedFilters.push(name);
        const filteredColumns = columns.filter((column) => !filters.includes(column));
        this.setState({
          filters: updatedFilters,
          filteredColumns: filteredColumns
        });
      }
    };
    this.unfilterAllData = () => {
      this.setState({
        filters: [],
        filteredColumns: this.defaultColumns
      });
    };
    this.handleChange = (event, checked) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.filterData(checked, this.matchCheckboxNameToColumn(target.name));
      this.setState({
        [target.name]: value
      });
    };
    this.handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
    this.onSave = () => {
      const orderedColumns = this.state.itemOrder.map((item) => this.matchDataListNameToColumn(item));
      // concat empty string at the end for actions column
      const filteredOrderedColumns = orderedColumns
        .filter((col) => this.state.filteredColumns.length === 0 || this.state.filteredColumns.indexOf(col) > -1)
        .concat(['']);
      const orderedRows = [];
      this.defaultRows.forEach((row) => {
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
      this.setState(({ isModalOpen }) => ({
        columns: filteredOrderedColumns,
        rows: orderedRows,
        isModalOpen: !isModalOpen
      }));
    };

    this.selectAllColumns = () => {
      this.unfilterAllData();
      this.setState({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
        check5: true
      });
    };

    this.onDragStart = (id) => {
      this.setState({
        id: id,
        liveText: `Dragging started for item id: ${id}.`
      });
    };

    this.onDragMove = (oldIndex, newIndex) => {
      const { id } = this.state;
      this.setState({
        liveText: `Dragging item ${id}.`
      });
    };

    this.onDragCancel = () => {
      this.setState({
        liveText: `Dragging cancelled. List is unchanged.`
      });
    };

    this.onDragFinish = (itemOrder) => {
      this.setState({
        liveText: `Dragging finished`,
        itemOrder
      });
    };
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map((oneRow) => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId] = { ...rows[rowId], selected: isSelected };
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  renderModal() {
    const { isModalOpen } = this.state;
    return (
      <Modal
        title="Manage columns"
        isOpen={isModalOpen}
        variant="small"
        description={
          <TextContent>
            <Text component={TextVariants.p}>Selected categories will be displayed in the table.</Text>
            <Button isInline onClick={this.selectAllColumns} variant="link">
              Select all
            </Button>
          </TextContent>
        }
        onClose={this.handleModalToggle}
        actions={[
          <Button key="save" variant="primary" onClick={this.onSave}>
            Save
          </Button>,
          <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <DataList
          aria-label="Table column management"
          id="table-column-management"
          isCompact
          onDragFinish={this.onDragFinish}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragCancel={this.onDragCancel}
          itemOrder={this.state.itemOrder}
        >
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
                  checked={this.state.check1}
                  name="check1"
                  id="check1"
                  onChange={this.handleChange}
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
                  checked={this.state.check2}
                  name="check2"
                  id="check2"
                  onChange={this.handleChange}
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
                  checked={this.state.check3}
                  name="check3"
                  id="check3"
                  onChange={this.handleChange}
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
                  checked={this.state.check4}
                  name="check4"
                  id="check4"
                  onChange={this.handleChange}
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
                  checked={this.state.check5}
                  name="check5"
                  id="check5"
                  onChange={this.handleChange}
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
  }

  render() {
    const { canSelectAll, columns, rows } = this.state;

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
                  <Button variant="link" onClick={this.handleModalToggle}>
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
          id="page-layout-table-draggable-column-management-action-table"
          onSelect={this.onSelect}
          cells={columns}
          rows={rows}
          actions={this.actions}
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
        {this.renderModal()}
      </React.Fragment>
    );
  }
}
```

### Filterable

```js isFullscreen
import React from 'react';
import {
  Badge,
  Button,
  Bullseye,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateHeader,
  EmptyStateFooter,
  Label,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  Title,
  Select,
  SelectOption,
  SearchInput
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';

class FilterTableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        location: [],
        name: [],
        status: []
      },
      currentCategory: 'Status',
      isFilterDropdownOpen: false,
      isCategoryDropdownOpen: false,
      nameInput: '',
      inputValue: '',
      rows: rows.slice(0, 10)
    };

    this.onDelete = (type = '', id = '') => {
      if (type) {
        this.setState((prevState) => {
          prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter((s) => s !== id);
          return {
            filters: prevState.filters
          };
        });
      } else {
        this.setState({
          filters: {
            location: [],
            name: [],
            status: []
          }
        });
      }
    };

    this.onCategoryToggle = () => {
      this.setState({
        isCategoryDropdownOpen: !this.state.isCategoryDropdownOpen
      });
    };

    this.onCategorySelect = (event) => {
      this.setState({
        currentCategory: event.target.innerText,
        isCategoryDropdownOpen: false
      });
    };

    this.onFilterToggle = () => {
      this.setState({
        isFilterDropdownOpen: !this.state.isFilterDropdownOpen
      });
    };

    this.onFilterSelect = (event) => {
      this.setState({
        isFilterDropdownOpen: !this.state.isFilterDropdownOpen
      });
    };

    this.onInputChange = (newValue) => {
      this.setState({ inputValue: newValue });
    };

    this.onStatusSelect = (event, selection) => {
      const checked = event.target.checked;
      this.setState((prevState) => {
        const prevSelections = prevState.filters['status'];
        return {
          filters: {
            ...prevState.filters,
            status: checked ? [...prevSelections, selection] : prevSelections.filter((value) => value !== selection)
          },
          isFilterDropdownOpen: false
        };
      });
    };

    this.onNameInput = (event) => {
      if (event.key && event.key !== 'Enter') {
        return;
      }

      const { inputValue } = this.state;
      this.setState((prevState) => {
        const prevFilters = prevState.filters['name'];
        return {
          filters: {
            ...prevState.filters,
            ['name']: prevFilters.includes(inputValue) ? prevFilters : [...prevFilters, inputValue]
          },
          inputValue: ''
        };
      });
    };

    this.onLocationSelect = (event, selection) => {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            ['location']: [selection]
          },
          isFilterDropdownOpen: false
        };
      });
      this.onFilterSelect();
    };
  }

  buildCategoryDropdown() {
    const { isCategoryDropdownOpen, currentCategory } = this.state;

    const categoryMenuItems = [
      <SelectOption key="cat1" value="Location">Location</SelectOption>,
      <SelectOption key="cat2" value="Name">Name</SelectOption>,
      <SelectOption key="cat3" value="Status">Status</SelectOption>
    ];

    return (
      <ToolbarItem>
        <Select
          onSelect={this.onCategorySelect}
          selected={currentCategory}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={this.onCategoryToggle}
              isExpanded={isCategoryDropdownOpen}
              icon={<FilterIcon />}
              style={
                {
                  width: '100%',
                  verticalAlign: 'text-bottom'
                } as React.CSSProperties
              }
            >
              {currentCategory}
            </MenuToggle>
          )}
          isOpen={isCategoryDropdownOpen}
        >
          {categoryMenuItems}
        </Select>
      </ToolbarItem>
    );
  }

  buildFilterDropdown() {
    const { currentCategory, isFilterDropdownOpen, inputValue, filters } = this.state;

    const locationMenuItems = [
      <SelectOption key="raleigh" value="Raleigh">Raleigh</SelectOption>,
      <SelectOption key="san francisco" value="San Francisco">San Francisco</SelectOption>,
      <SelectOption key="boston" value="Boston">Boston</SelectOption>,
      <SelectOption key="atlanta" value="Atlanta">Atlanta</SelectOption>,
    ];

    const statusMenuItems = [
      <SelectOption
        hasCheckbox
        key="statusRunning"
        value="Running"
        isSelected={filters.status.includes("Running")}
      >
        Running
      </SelectOption>,
      <SelectOption
        hasCheckbox
        key="statusStopped"
        value="Stopped"
        isSelected={filters.status.includes("Stopped")}
      >
        Stopped
      </SelectOption>,
      <SelectOption
        hasCheckbox
        key="statusDown"
        value="Down"
        isSelected={filters.status.includes("Down")}
      >
        Down
      </SelectOption>,
      <SelectOption
        hasCheckbox
        key="statusDegraded"
        value="Degraded"
        isSelected={filters.status.includes("Degraded")}
      >
        Degraded
      </SelectOption>,
      <SelectOption
        hasCheckbox
        key="statusMaint"
        value="Needs maintenance"
        isSelected={filters.status.includes("Needs maintenance")}
      >
        Needs maintenance
      </SelectOption>
    ];

    return (
      <React.Fragment>
        <ToolbarFilter
          chips={filters.location}
          deleteChip={this.onDelete}
          categoryName="Location"
          showToolbarItem={currentCategory === 'Location'}
        >
          <Select
            aria-label="Location"
            onSelect={this.onLocationSelect}
            selected={filters.location[0]}
            isOpen={isFilterDropdownOpen}
            minWidth="100px"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={this.onFilterToggle}
                isExpanded={isFilterDropdownOpen}
                style={
                  {
                    width: '100%',
                    verticalAlign: 'text-bottom'
                  } as React.CSSProperties
                }
              >
                {filters.location[0] || `Any`}
              </MenuToggle>
            )}
          >
            {locationMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.name}
          deleteChip={this.onDelete}
          categoryName="Name"
          showToolbarItem={currentCategory === 'Name'}
        >
          <SearchInput
            aria-label="name filter"
            placeholder="Filter by name..."
            onChange={(_event, value) => this.onInputChange(value)}
            value={inputValue}
            onClear={() => {
              this.onInputChange('');
            }}
            onSearch={this.onNameInput}
          />
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.status}
          deleteChip={this.onDelete}
          categoryName="Status"
          showToolbarItem={currentCategory === 'Status'}
        >
          <Select
            aria-label="Status"
            isOpen={isFilterDropdownOpen}
            minWidth="100px"
            onSelect={this.onStatusSelect}
            selected={filters.status}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={this.onFilterToggle}
                isExpanded={isFilterDropdownOpen}
                style={
                  {
                    width: '100%',
                    verticalAlign: 'text-bottom'
                  } as React.CSSProperties
                }
              >
                Filter by status
                {filters.status.length > 0 && <Badge isRead>{filters.status.length}</Badge>}
              </MenuToggle>
            )}
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
      </React.Fragment>
    );
  }

  renderToolbar() {
    return (
      <Toolbar id="toolbar-with-chip-groups" clearAllFilters={this.onDelete} collapseListedFiltersBreakpoint="xl">
        <ToolbarContent>
          <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
            <ToolbarGroup
              variant="filter-group"
              style={{
                lineHeight: '22px',
                alignItems: 'center'
              } as React.CSSProperties}
            >
              {this.buildCategoryDropdown()}
              {this.buildFilterDropdown()}
            </ToolbarGroup>
          </ToolbarToggleGroup>
        </ToolbarContent>
      </Toolbar>
    );
  }

  render() {
    const { loading, filters, rows } = this.state;

    const filteredRows =
      filters.name.length > 0 || filters.location.length > 0 || filters.status.length > 0
        ? rows.filter((row) => {
            return (
              (filters.name.length === 0 ||
                filters.name.some((name) => row.name.toLowerCase().includes(name.toLowerCase()))) &&
              (filters.location.length === 0 || filters.location.includes(row.location)) &&
              (filters.status.length === 0 || filters.status.includes(row.status))
            );
          })
        : rows;

    let tableRows = filteredRows;
    if (!loading && filteredRows.length === 0) {
      tableRows = [
        {
          heightAuto: true,
          cells: [
            {
              props: { colSpan: 8 },
              title: (
                <Bullseye>
                  <EmptyState>
                    <EmptyStateHeader
                      titleText="Clear all filters and try again."
                      headingLevel="h5"
                      icon={<EmptyStateIcon icon={SearchIcon} />}
                    />
                    <EmptyStateBody>
                      No results match this filter criteria. Remove all filters or clear all filters to show results.
                    </EmptyStateBody>
                    <EmptyStateFooter>
                      <EmptyStateActions>
                        <Button
                          variant="link"
                          onClick={() => {
                            this.onDelete(null);
                          }}
                        >
                          Clear all filters
                        </Button>
                      </EmptyStateActions>
                    </EmptyStateFooter>
                  </EmptyState>
                </Bullseye>
              )
            }
          ]
        }
      ];
    } else if (loading) {
      tableRows = [
        {
          heightAuto: true,
          cells: [
            {
              props: { colSpan: 8 },
              title: (
                <Title headingLevel="h2" size="3xl">
                  Please wait while loading data
                </Title>
              )
            }
          ]
        }
      ];
    }

  const renderLabel = labelText => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

    return (
      <React.Fragment>
        {this.renderToolbar()}
         <Table aria-label="Filterable Table Demo">
              <Thead>
                <Tr>
                  <Th key={0}>{columns[0]}</Th>
                  <Th key={1}>{columns[1]}</Th>
                  <Th key={2}>{columns[2]}</Th>
                  <Th key={3}>{columns[3]}</Th>
                  <Th key={4}>{columns[4]}</Th>
                  <Th key={5}>{columns[5]}</Th>
                  <Th key={6}>{columns[6]}</Th>
                  <Th key={7} width={10}>
                    {columns[7]}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredRows.slice(0, 10).map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    <>
                      <Td dataLabel={columns[0]}>{row.name}</Td>
                      <Td dataLabel={columns[1]}>{row.threads}</Td>
                      <Td dataLabel={columns[2]}>{row.applications}</Td>
                      <Td dataLabel={columns[3]}>{row.workspaces}</Td>
                      <Td dataLabel={columns[4]}>{renderLabel(row.status)}</Td>
                      <Td dataLabel={columns[5]}>{row.location}</Td>
                      <Td dataLabel={columns[6]}>{row.lastModified}</Td>
                      <Td dataLabel={columns[7]} modifier="truncate">
                        <TableText>
                          <a href="#">{row.url}</a>
                        </TableText>
                      </Td>
                    </>
                  </Tr>
                ))}
              </Tbody>
            </Table>
      </React.Fragment>
    );
  }
}
```

### Sortable - responsive

```js isFullscreen file="./table-demos/SortableResponsive.jsx"

```

### Automatic pagination

The below example illustrates the `isLastFullPageShown` prop, which makes the following changes when the user sets the number of items to display per page to an amount that exceeds the remaining amount of data:

- The component automatically changes the page back to the last full page of results, rather than defaulting to the final page of results.

To demonstrate this, navigate to the last page of data below using the `>>` navigation arrows, then use the dropdown selector to change the view to 5 per page.

- The default behavior would show the last page of results, which would only contain the last two rows (rows 11 - 12).
- The `isLastFullPageShown` prop navigates you back to the previous page which does contain a full page of 5 rows (rows 6 - 10).

```js isFullscreen
import React from 'react';
import { Pagination } from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    super(props);
    (this.columns = {
      firstColumn: 'First column',
      secondColumn: 'Second column',
      thirdColumn: 'Third column'
    }),
      (this.defaultRows = [
        { firstColumn: 'Row 1 column 1', secondColumn: 'Row 1 column 2', thirdColumn: 'Row 1 column 3' },
        { firstColumn: 'Row 2 column 1', secondColumn: 'Row 2 column 2', thirdColumn: 'Row 2 column 3' },
        { firstColumn: 'Row 3 column 1', secondColumn: 'Row 3 column 2', thirdColumn: 'Row 3 column 3' },
        { firstColumn: 'Row 4 column 1', secondColumn: 'Row 4 column 2', thirdColumn: 'Row 4 column 3' },
        { firstColumn: 'Row 5 column 1', secondColumn: 'Row 5 column 2', thirdColumn: 'Row 5 column 3' },
        { firstColumn: 'Row 6 column 1', secondColumn: 'Row 6 column 2', thirdColumn: 'Row 6 column 3' },
        { firstColumn: 'Row 7 column 1', secondColumn: 'Row 7 column 2', thirdColumn: 'Row 7 column 3' },
        { firstColumn: 'Row 8 column 1', secondColumn: 'Row 8 column 2', thirdColumn: 'Row 8 column 3' },
        { firstColumn: 'Row 9 column 1', secondColumn: 'Row 9 column 2', thirdColumn: 'Row 9 column 3' },
        { firstColumn: 'Row 10 column 1', secondColumn: 'Row 10 column 2', thirdColumn: 'Row 10 column 3' },
        { firstColumn: 'Row 11 column 1', secondColumn: 'Row 11 column 2', thirdColumn: 'Row 11 column 3' },
        { firstColumn: 'Row 12 column 1', secondColumn: 'Row 12 column 2', thirdColumn: 'Row 12 column 3' }
      ]);
    this.defaultPerPage = 10;
    this.state = {
      perPage: this.defaultPerPage,
      page: 1,
      rows: this.defaultRows.slice(0, this.defaultPerPage)
    };
    this.handleSetPage = this.handleSetPage.bind(this);
    this.handlePerPageSelect = this.handlePerPageSelect.bind(this);
  }

  handleSetPage(_evt, newPage, perPage, startIdx, endIdx) {
    this.setState({
      page: newPage,
      rows: this.defaultRows.slice(startIdx, endIdx)
    });
  }

  handlePerPageSelect(_evt, newPerPage, newPage, startIdx, endIdx) {
    this.setState({
      perPage: newPerPage,
      page: newPage,
      rows: this.defaultRows.slice(startIdx, endIdx)
    });
  }

  renderPagination(variant = 'top') {
    const { page, perPage } = this.state;
    return (
      <Pagination
        isCompact
        itemCount={this.defaultRows.length}
        page={page}
        perPage={perPage}
        isLastFullPageShown
        onSetPage={this.handleSetPage}
        onPerPageSelect={this.handlePerPageSelect}
        perPageOptions={[
          { title: '3', value: 3 },
          { title: '5', value: 5 },
          { title: '12', value: 12 },
          { title: '20', value: 20 }
        ]}
        titles={{
          paginationAriaLabel: `${variant} pagination`
        }}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPagination()}
        <Table aria-label="Automated Pagination Table Demo">
          <Thead>
            <Tr>
              <Th>{this.columns.firstColumn}</Th>
              <Th>{this.columns.secondColumn}</Th>
              <Th>{this.columns.thirdColumn}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <>
                  <Td dataLabel={this.columns.firstColumn}>{row.firstColumn}</Td>
                  <Td dataLabel={this.columns.secondColumn}>{row.secondColumn}</Td>
                  <Td dataLabel={this.columns.thirdColumn}>{row.thirdColumn}</Td>
                </>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </React.Fragment>
    );
  }
}
```

### Static bottom pagination on mobile

```js isFullscreen file="table-demos/StaticBottomPagination.jsx"

```

### Sticky header

```js isFullscreen file="./table-demos/StickyHeader.jsx"

```

### Sticky first column

```js isFullscreen file="./table-demos/StickyFirstColumn.jsx"

```

### Sticky columns and header with toolbar

A toolbar may be added above a sticky table either inside or outside the `OuterScrollContainer`.

```ts isFullscreen file="../../components/Table/examples/TableStickyColumnsAndHeader.tsx"

```

## Empty states

These examples demonstrate the use of an [Empty State component](/components/empty-state) inside of a [Table](/components/table). Empty states are useful in a table when a filter returns no results, while data is loading, or when any type of error or exception condition occurs.

### Empty

```js isFullscreen
import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import {
  Bullseye,
  Button,
  Card,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateFooter,
  EmptyStateActions,
  PageSection
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const TableEmptyState: React.FunctionComponent = () => (
  <DashboardWrapper hasPageTemplateTitle>
    <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
      <Card component="div">
        <Table aria-label="Empty state table">
          <Thead>
            <Tr>
              <Th>Repositories</Th>
              <Th>Branches</Th>
              <Th>Pull requests</Th>
              <Th>Workspaces</Th>
              <Th>Last commit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan={8}>
                <Bullseye>
                  <EmptyState variant={EmptyStateVariant.sm}>
                    <EmptyStateHeader
                      icon={<EmptyStateIcon icon={SearchIcon} />}
                      titleText="No results found"
                      headingLevel="h2"
                    />
                    <EmptyStateBody>
                      No results match this filter criteria. Clear all filters and try again.
                    </EmptyStateBody>
                    <EmptyStateFooter>
                      <EmptyStateActions>
                        <Button variant="link">Clear all filters</Button>
                      </EmptyStateActions>
                    </EmptyStateFooter>
                  </EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
```

### Loading

```js isFullscreen
import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import {
  Bullseye,
  Card,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateHeader,
  PageSection,
  Spinner
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const LoadingStateDemo: React.FunctionComponent = () => (
  <DashboardWrapper hasPageTemplateTitle>
    <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
      <Card component="div">
        <Table aria-label="Loading table demo">
          <Thead>
            <Tr>
              <Th>Repositories</Th>
              <Th>Branches</Th>
              <Th>Pull requests</Th>
              <Th>Workspaces</Th>
              <Th>Last commit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan={8}>
                <Bullseye>
                  <EmptyState>
                    <EmptyStateHeader titleText="Loading" headingLevel="h2" icon={<EmptyStateIcon icon={Spinner} />} />
                  </EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
```

### Error

```js isFullscreen
import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import {
  Bullseye,
  Card,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateHeader,
  PageSection
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import globalDangerColor200 from '@patternfly/react-tokens/dist/esm/global_danger_color_200';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const ErrorStateDemo: React.FunctionComponent = () => (
  <DashboardWrapper hasPageTemplateTitle>
    <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
      <Card component="div">
        <Table aria-label="Loading table demo">
          <Thead>
            <Tr>
              <Th>Repositories</Th>
              <Th>Branches</Th>
              <Th>Pull requests</Th>
              <Th>Workspaces</Th>
              <Th>Last commit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan={8}>
                <Bullseye>
                  <EmptyState variant={EmptyStateVariant.sm}>
                    <EmptyStateHeader
                      titleText="Unable to connect"
                      icon={<EmptyStateIcon icon={ExclamationCircleIcon} color={globalDangerColor200.value} />}
                      headingLevel="h2"
                    />
                    <EmptyStateBody>
                      There was an error retrieving data. Check your connection and reload the page.
                    </EmptyStateBody>
                  </EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
```
