import { Fragment, useEffect, useState } from 'react';

import {
  Button,
  Content,
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
  MenuToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuItem,
  PageSection,
  Pagination,
  PaginationVariant
} from '@patternfly/react-core';
import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';
import { capitalize } from '@patternfly/react-table/src/components/Table/utils/utils';
import { rows, columns, SampleDataRow } from '@patternfly/react-table/dist/esm/demos/sampleData';

export const TableColumnManagement: React.FunctionComponent = () => {
  const defaultColumns = columns;
  const defaultRows = rows;

  const [filters, setFilters] = useState<string[]>([]);
  const [filteredColumns, setFilteredColumns] = useState<string[]>([]);
  const [filteredRows, setFilteredRows] = useState<SampleDataRow[]>([]);
  const [managedColumns, setManagedColumns] = useState<string[]>(defaultColumns);
  const [managedRows, setManagedRows] = useState<SampleDataRow[]>(defaultRows);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedState, setCheckedState] = useState<boolean[]>(Array(columns.length).fill(true));
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [paginatedRows, setPaginatedRows] = useState<any[]>(rows);

  const matchCheckboxNameToColumn = (name: string): string => {
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
      default:
        return '';
    }
  };

  const matchSelectedColumnNameToAttr = (name: string): string => {
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
      default:
        return '';
    }
  };

  // Pagination logic
  const handleSetPage = (
    _evt: MouseEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handlePerPageSelect = (
    _evt: MouseEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    newPerPage: number
  ) => {
    setPerPage(newPerPage);
  };

  const renderPagination = (variant: 'top' | 'bottom' | PaginationVariant, isCompact: boolean) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      variant={variant}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  useEffect(() => {
    setPaginatedRows(managedRows.slice((page - 1) * perPage, page * perPage - 1));
  }, [managedRows, page, perPage]);

  // Removes attribute from each node object in Data.jsx
  const removePropFromObject = (object: any, keys: string[]): any =>
    keys.reduce((obj, prop) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [prop]: _, ...keep } = obj;
      return keep;
    }, object);

  // Filters columns out of table that are not selected in the column management modal
  const filterData = (checked: boolean, name: string) => {
    const selectedColumn = matchSelectedColumnNameToAttr(name);

    const filteredRows: SampleDataRow[] = [];
    if (checked) {
      const updatedFilters = filters.filter((item) => item !== selectedColumn);

      // Only show the names of columns that were selected in the modal
      const filteredColumns = defaultColumns.filter(
        (column) => !updatedFilters.includes(matchSelectedColumnNameToAttr(column))
      );

      // Remove the attributes (i.e. "columns") that were not selected
      defaultRows.forEach((item) => filteredRows.push(removePropFromObject(item, updatedFilters)));

      setFilters(updatedFilters);
      setFilteredColumns(filteredColumns);
      setFilteredRows(filteredRows);
    } else {
      const updatedFilters = filters;
      updatedFilters.push(selectedColumn);

      // Only show the names of columns that were selected in the modal
      const filteredColumns = managedColumns.filter(
        (column) => !filters.includes(matchSelectedColumnNameToAttr(column))
      );

      // Remove the attributes (i.e. "columns") that were not selected
      managedRows.forEach((item) => filteredRows.push(removePropFromObject(item, updatedFilters)));

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // Remove any columns from the table that aren't checked
    filterData(checked, matchCheckboxNameToColumn(target.name));
    const checkedIndex: number = columns.findIndex((element) => element === matchCheckboxNameToColumn(target.name));

    const updatedCheckedState: boolean[] = [...checkedState];
    updatedCheckedState[checkedIndex] = value as boolean;
    setCheckedState(updatedCheckedState);
  };

  const handleModalToggle = (_event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => {
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

  const renderModal = () => (
    <Modal
      isOpen={isModalOpen}
      variant="small"
      onClose={handleModalToggle}
      aria-labelledby="basic-modal-title"
      aria-describedby="modal-box-body-basic"
    >
      <ModalHeader
        title="Manage columns"
        labelId="basic-modal-title"
        description={
          <Content>
            <p>Selected categories will be displayed in the table.</p>
            <Button isInline onClick={selectAllColumns} variant="secondary">
              Select all
            </Button>
          </Content>
        }
      />
      <ModalBody id="modal-box-body-basic">
        <DataList aria-label="Table column management" id="table-column-management" isCompact>
          <DataListItem aria-labelledby="table-column-management-item1">
            <DataListItemRow>
              <DataListCheck
                aria-labelledby="table-column-management-item1"
                isChecked={checkedState[0]}
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
                isChecked={checkedState[1]}
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
                isChecked={checkedState[2]}
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
                isChecked={checkedState[3]}
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
                isChecked={checkedState[4]}
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
                isChecked={checkedState[5]}
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
                isChecked={checkedState[6]}
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
                isChecked={checkedState[7]}
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
      </ModalBody>
      <ModalFooter>
        <Button key="save" variant="primary" onClick={onSave}>
          Save
        </Button>
        <Button key="cancel" variant="link" onClick={handleModalToggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  const renderLabel = (labelText: string): React.JSX.Element => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
      default:
        return <></>;
    }
  };

  const toolbarItems = (
    <Fragment>
      <Toolbar id="page-layout-table-column-management-action-toolbar-top">
        <span id="page-layout-table-column-management-action-toolbar-top-select-checkbox-label" hidden>
          Choose one
        </span>
        <ToolbarContent>
          <ToolbarItem>
            <OverflowMenu breakpoint="md">
              <OverflowMenuItem>
                <MenuToggle icon={<FilterIcon />}>Name</MenuToggle>
              </OverflowMenuItem>
              <OverflowMenuItem>
                <MenuToggle variant="plain" aria-label="Sort columns" icon={<SortAmountDownIcon />} />
              </OverflowMenuItem>
              <OverflowMenuGroup groupType="button" isPersistent>
                <OverflowMenuItem>
                  <Button variant="primary">Action</Button>
                </OverflowMenuItem>
                <OverflowMenuItem isPersistent>
                  <Button variant="link" onClick={handleModalToggle}>
                    Manage columns
                  </Button>
                </OverflowMenuItem>
              </OverflowMenuGroup>
            </OverflowMenu>
          </ToolbarItem>
          <ToolbarItem variant="pagination">{renderPagination('top', false)}</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </Fragment>
  );

  return (
    <Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled aria-label="Column management table data">
          {toolbarItems}
          <Table variant="compact" aria-label="Column Management Table">
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
                    {Object.entries(row).map(([key, value], idx) =>
                      // eslint-disable-next-line no-nested-ternary
                      key === 'status' ? (
                        <Td width={15} dataLabel="Status" key={`${idx}-${value}`}>
                          {renderLabel(value as string)}
                        </Td>
                      ) : key === 'url' ? (
                        <Td width={10} dataLabel="URL" modifier="truncate" key={`${idx}-${value}`}>
                          <TableText>
                            <a href="#">{row.url}</a>
                          </TableText>
                        </Td>
                      ) : (
                        <Td
                          width={key === 'name' ? 15 : 10}
                          dataLabel={key === 'lastModified' ? 'Last modified' : capitalize(key)}
                          key={`${idx}-${value}`}
                        >
                          {value as string}
                        </Td>
                      )
                    )}
                  </>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {renderPagination('bottom', false)}
          {renderModal()}
        </PageSection>
      </DashboardWrapper>
    </Fragment>
  );
};
