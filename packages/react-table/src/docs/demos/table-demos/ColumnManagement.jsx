import * as React from 'react';
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
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import { rows, columns } from '../../examples/Data.jsx';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper.js';
import { capitalize } from '@patternfly/react-table/src/components/Table/utils/utils';

export const ColumnManagementAction = () => {
  const defaultColumns = columns;
  const defaultRows = rows;

  const [filters, setFilters] = React.useState([]);
  const [filteredColumns, setFilteredColumns] = React.useState([]);
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [managedColumns, setManagedColumns] = React.useState(defaultColumns);
  const [managedRows, setManagedRows] = React.useState(defaultRows);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [checkedState, setCheckedState] = React.useState(Array(columns.length).fill(true));
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows);

  const matchCheckboxNameToColumn = name => {
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
  const matchSelectedColumnNameToAttr = name => {
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

  // Pagination logic
  const handleSetPage = (_evt, newPage) => {
    setPage(newPage);
  };

  const handlePerPageSelect = (_evt, newPerPage) => {
    setPerPage(newPerPage);
  };

  const renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      variant={variant}
      titles={{
        paginationTitle: `${variant} pagination`
      }}
    />
  );

  React.useEffect(() => {
    setPaginatedRows(managedRows.slice((page - 1) * perPage, page * perPage - 1));
  }, [managedRows, page, perPage]);

  // Removes attribute from each node object in Data.jsx
  const removePropFromObject = (object, keys) =>
    keys.reduce((obj, prop) => {
      const { [prop]: _, ...keep } = obj;
      return keep;
    }, object);

  // Filters columns out of table that are not selected in the column management modal
  const filterData = (checked, name) => {
    const selectedColumn = matchSelectedColumnNameToAttr(name);

    const filteredRows = [];
    if (checked) {
      const updatedFilters = filters.filter(item => item !== selectedColumn);

      // Only show the names of columns that were selected in the modal
      const filteredColumns = defaultColumns.filter(
        column => !updatedFilters.includes(matchSelectedColumnNameToAttr(column))
      );

      // Remove the attributes (i.e. "columns") that were not selected
      defaultRows.forEach(item => filteredRows.push(removePropFromObject(item, updatedFilters)));

      setFilters(updatedFilters);
      setFilteredColumns(filteredColumns);
      setFilteredRows(filteredRows);
    } else {
      let updatedFilters = filters;
      updatedFilters.push(selectedColumn);

      // Only show the names of columns that were selected in the modal
      const filteredColumns = managedColumns.filter(column => !filters.includes(matchSelectedColumnNameToAttr(column)));

      // Remove the attributes (i.e. "columns") that were not selected
      managedRows.forEach(item => filteredRows.push(removePropFromObject(item, updatedFilters)));

      setFilters(updatedFilters);
      setFilteredColumns(filteredColumns);
      setFilteredRows(filteredRows);
    }
  };
  const unfilterAllData = () => {
    setFilters([]);
    setFilteredColumns(defaultColumns);
    setFilteredRows(defaultRows);
  };

  const handleChange = (checked, event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // Remove any columns from the table that aren't checked
    filterData(checked, matchCheckboxNameToColumn(target.name));
    const checkedIndex = columns.findIndex(element => element === matchCheckboxNameToColumn(target.name));

    const updatedCheckedState = [...checkedState];
    updatedCheckedState[checkedIndex] = value;
    setCheckedState(updatedCheckedState);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSave = () => {
    setManagedColumns(filteredColumns);
    setManagedRows(filteredRows);
    setPaginatedRows(filteredRows);
    setIsModalOpen(!isModalOpen);
  };

  const selectAllColumns = () => {
    unfilterAllData();
    setCheckedState(Array(columns.length).fill(true));
  };

  const renderModal = () => {
    return (
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
          <DataListItem aria-labelledby="table-column-management-item1">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item1"
                checked={checkedState[0]}
                name="check1"
                id="check1"
                onChange={handleChange}
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
                checked={checkedState[1]}
                name="check2"
                id="check2"
                onChange={handleChange}
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
                checked={checkedState[2]}
                name="check3"
                id="check3"
                onChange={handleChange}
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
                checked={checkedState[3]}
                name="check4"
                id="check4"
                onChange={handleChange}
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
                checked={checkedState[4]}
                name="check5"
                id="check5"
                onChange={handleChange}
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
                checked={checkedState[5]}
                name="check6"
                id="check6"
                onChange={handleChange}
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
                checked={checkedState[6]}
                name="check7"
                id="check7"
                onChange={handleChange}
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
                checked={checkedState[7]}
                name="check8"
                id="check8"
                onChange={handleChange}
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
  };

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
              <OverflowMenuItem>
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
                <OverflowMenuItem breakpoint="md" isPersistent>
                  <Button variant="link" onClick={handleModalToggle}>
                    Manage columns
                  </Button>
                </OverflowMenuItem>
              </OverflowMenuGroup>
            </OverflowMenu>
          </ToolbarItem>
          <ToolbarItem variant="pagination">{renderPagination(PaginationVariant.top)}</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled>
          <Card>
            {toolbarItems}
            <TableComposable variant="compact" aria-label="Column Management Table">
              <Thead>
                <Tr>
                  {managedColumns.map((column, columnIndex) => (
                    <Th key={columnIndex}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedRows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    <>
                      {Object.entries(row).map(([key, value]) =>
                        key === 'status' ? (
                          <Td width={15} dataLabel="Status">
                            {renderLabel(value)}
                          </Td>
                        ) : key === 'url' ? (
                          <Td width={10} dataLabel="URL" modifier="truncate">
                            <TableText>
                              <a href="#">{row.url}</a>
                            </TableText>
                          </Td>
                        ) : (
                          <Td
                            width={key === 'name' ? 15 : 10}
                            dataLabel={
                              key === 'lastModified' ? 'Last modified' : capitalize(key)
                            }
                          >
                            {value}
                          </Td>
                        )
                      )}
                    </>
                  </Tr>
                ))}
              </Tbody>
            </TableComposable>
            {renderPagination(PaginationVariant.bottom)}
            {renderModal()}
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
