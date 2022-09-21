import React from 'react';
import {
  Button,
  DataList,
  DataListCheck,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListItemCells,
  Label,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Modal,
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuItem,
  OptionsMenu,
  OptionsMenuToggle,
  Pagination,
  PaginationVariant,
  Text,
  TextContent,
  Select,
  SelectVariant
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import { rows, columns } from '../../examples/Data.jsx';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper.js';
import { toCamel } from '@patternfly/react-table/src/components/Table/utils/utils.js';
import { update } from 'lodash';

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
    this.defaultColumns = columns;
    this.defaultRows = rows;
    this.state = {
      filters: [],
      filteredColumns: [],
      filteredRows: [],
      managedColumns: this.defaultColumns,
      managedRows: this.defaultRows,
      canSelectAll: true,
      isModalOpen: false,
      check1: true,
      check2: true,
      check3: true,
      check4: true,
      check5: true,
      check6: true,
      check7: true,
      check8: true,
      page: 1,
      perPage: 10,
      paginatedRows: this.defaultRows.slice(1, 10)
    };
    // this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.matchCheckboxNameToColumn = name => {
      switch (name) {
        case 'check1':
          return 'Servers';
        case 'check2':
          return 'Threads';
        case 'check3':
          return 'Applications';
        case 'check4':
          return 'Workspaces';
        case 'check5':
          return 'Status';
        case 'check6':
          return 'Location';
        case 'check7':
          return 'Last Modified';
        case 'check8':
          return 'URL';
      }
    };
    this.matchSelectedColumnNameToAttr = name => {
      switch (name) {
        case 'Servers':
          return 'name';
        case 'Threads':
          return 'threads';
        case 'Applications':
          return 'applications';
        case 'Workspaces':
          return 'workspaces';
        case 'Status':
          return 'status';
        case 'Location':
          return 'location';
        case 'Last Modified':
          return 'lastModified';
        case 'URL':
          return 'url';
      }
    };

    // function removePropFromObject(obj, prop) {
    //    return obj.map(({ [prop]: _, ...keep }) => keep)
    // }

    (this.removePropFromObject = (object, keys) =>
      keys.reduce((obj, prop) => {
        const { [prop]: _, ...keep } = obj;
        return keep;
      }, object)),
      (this.filterData = (checked, name) => {
        const selectedColumn = this.matchSelectedColumnNameToAttr(name);
        console.log(this.defaultColumns);
        const { managedRows, managedColumns, filters } = this.state;
        const filteredRows = [];
        if (checked) {
          const updatedFilters = filters.filter(item => item !== selectedColumn);
          const filteredColumns = this.defaultColumns.filter(
            column => !updatedFilters.includes(this.matchSelectedColumnNameToAttr(column))
          );

          this.defaultRows.forEach(item => filteredRows.push(this.removePropFromObject(item, updatedFilters)));

          console.log('filteredRows', filteredRows);
          console.log('uf', updatedFilters);

          this.setState({
            filters: updatedFilters,
            filteredColumns: filteredColumns,
            filteredRows: filteredRows
          });
        } else {
          let updatedFilters = filters;
          updatedFilters.push(selectedColumn);
          console.log(' uf', updatedFilters);

          const filteredColumns = managedColumns.filter(
            column => !filters.includes(this.matchSelectedColumnNameToAttr(column))
          );

          //    const filteredRows = this.removePropFromObject(managedRows, selectedColumn);
          managedRows.forEach(item => filteredRows.push(this.removePropFromObject(item, updatedFilters)));

          console.log('FC', filteredColumns);
          console.log('FR', filteredRows);
          // console.log("remove prop from obj", removePropFromObject(managedRows, selectedColumn))

          this.setState({
            filters: updatedFilters,
            filteredColumns: filteredColumns,
            filteredRows: filteredRows
          });
        }
      });
    this.unfilterAllData = () => {
      this.setState({
        filters: [],
        filteredColumns: this.defaultColumns,
        filteredRows: this.defaultRows
      });
    };
    this.handleChange = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      console.log('target', target);
      this.filterData(checked, this.matchCheckboxNameToColumn(target.name));
      this.setState({
        [target.name]: value
      });
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
    this.onSave = () => {
      this.setState(({ filteredColumns, filteredRows, isModalOpen }) => ({
        managedColumns: filteredColumns,
        managedRows: filteredRows,
        paginatedRows: filteredRows,
        isModalOpen: !isModalOpen
      }));
    };

    this.handleSetPage = (_evt, newPage, perPage, startIdx, endIdx) => {
      this.setState({
        paginatedRows: rows.slice(startIdx, endIdx),
        page: newPage
      });
    };
    this.handlePerPageSelect = (_evt, newPerPage, newPage, startIdx, endIdx) => {
      this.setState({
        paginatedRows: rows.slice(startIdx, endIdx),
        page: newPage,
        perPage: newPerPage
      });
    };

    this.selectAllColumns = () => {
      this.unfilterAllData();
      this.setState({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
        check5: true,
        check6: true,
        check7: true,
        check8: true
      });
    };
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={this.state.page}
      perPage={this.state.perPage}
      onSetPage={this.handleSetPage}
      onPerPageSelect={this.handlePerPageSelect}
      variant={variant}
      titles={{
        paginationTitle: `${variant} pagination`
      }}
    />
  );

  renderModal() {
    const { isModalOpen, managedColumns } = this.state;
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
        <DataList aria-label="Table column management" id="table-column-management" isCompact>
          <DataListItem aria-labelledby="table-column-management-item1">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item1"
                checked={this.state.check1}
                name="check1"
                id="check1"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item1" key="table-column-management-item1">
                    <label htmlFor="check1">{columns[0]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item2">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item2"
                checked={this.state.check2}
                name="check2"
                id="check2"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item2" key="table-column-management-item2">
                    <label htmlFor="check2">{columns[1]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item3">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item3"
                checked={this.state.check3}
                name="check3"
                id="check3"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item3" key="table-column-management-item3">
                    <label htmlFor="check3">{columns[2]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item4">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item4"
                checked={this.state.check4}
                name="check4"
                id="check4"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item4" key="table-column-management-item4">
                    <label htmlFor="check4">{columns[3]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item4">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item4"
                checked={this.state.check5}
                name="check5"
                id="check5"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item4" key="table-column-management-item4">
                    <label htmlFor="check5">{columns[4]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item5">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item5"
                checked={this.state.check6}
                name="check6"
                id="check6"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item5" key="table-column-management-item5">
                    <label htmlFor="check6">{columns[5]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item6">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item6"
                checked={this.state.check7}
                name="check7"
                id="check7"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item6" key="table-column-management-item5">
                    <label htmlFor="check7">{columns[6]}</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item5">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item5"
                checked={this.state.check8}
                name="check8"
                id="check8"
                onChange={this.handleChange}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item7" key="table-column-management-item7">
                    <label htmlFor="check8">{columns[7]}</label>
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
    const { canSelectAll, managedColumns, managedRows, paginatedRows } = this.state;

    console.log(
      'test',
      managedRows.map((row, rowIndex) => Object.entries(row).map(([k, v]) => console.log('k', k, 'v', v)))
    );

    const renderLabel = labelText => {
      switch (labelText) {
        case 'Running':
          return <Label color="green">{labelText}</Label>;
        case 'Stopped':
          return <Label color="orange">{labelText}</Label>;
        case 'Needs Maintenance':
          return <Label color="blue">{labelText}</Label>;
        case 'Down':
          return <Label color="red">{labelText}</Label>;
      }
    };

    const toolbarItems = (
      <React.Fragment>
        <Toolbar id="page-layout-table-column-management-action-toolbar-top">
          <span id="page-layout-table-column-management-action-toolbar-top-select-checkbox-label" hidden>
            Choose one
          </span>
          <ToolbarContent>
            <ToolbarItem variant="overflow-menu">
              <OverflowMenu breakpoint="md">
                <OverflowMenuItem isPersistent>
                  <Select
                    id="page-layout-table-column-management-action-toolbar-top-select-checkbox-toggle"
                    variant={SelectVariant.single}
                    aria-label="Select Input"
                    aria-labelledby="page-layout-table-column-management-action-toolbar-top-select-checkbox-label page-layout-table-column-management-action-toolbar-top-select-checkbox-toggle"
                    placeholderText={
                      <>
                        <FilterIcon /> Name
                      </>
                    }
                  />
                </OverflowMenuItem>
                <OverflowMenuItem>
                  <OptionsMenu
                    id="page-layout-table-column-management-action-toolbar-top-options-menu-toggle"
                    isPlain
                    menuItems={[]}
                    toggle={
                      <OptionsMenuToggle
                        toggleTemplate={<SortAmountDownIcon aria-hidden="true" />}
                        aria-label="Sort by"
                        hideCaret
                      />
                    }
                  />
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
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <DashboardWrapper>
          <PageSection isFilled>
            <Card>
              {toolbarItems}
              <TableComposable variant="compact" aria-label="Compact Table">
                <Thead>
                  <Tr>
                    {managedColumns.map((col, idx) => (
                      <Th key={idx}>{col}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {managedRows.map((row, rowIndex) => (
                    <Tr key={rowIndex}>
                      <>
                        {Object.entries(row).map(([key, value]) =>
                          key === 'status' ? (
                            <Td dataLabel={key}>{renderLabel(value)}</Td>
                          ) : key === 'url' ? (
                            <Td dataLabel={key} modifier="truncate">
                              <TableText>
                                <a href="#">{row.url}</a>
                              </TableText>
                            </Td>
                          ) : (
                            <Td dataLabel={key}>{value}</Td>
                          )
                        )}
                      </>
                    </Tr>
                  ))}
                </Tbody>
              </TableComposable>
              {this.renderModal()}
            </Card>
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
