import React from 'react';

import {
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleCheckbox,
  PageSection,
  Pagination,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';

export const BulkSelectTableDemo = () => {
  const [isBulkSelectDropdownOpen, setIsBulkSelectDropdownOpen] = React.useState(false);
  const [bulkSelection, setBulkSelection] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleSetPage = (_evt, newPage, _perPage, startIdx, endIdx) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
  };
  const handlePerPageSelect = (_evt, newPerPage, newPage, startIdx, endIdx) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
    setPerPage(newPerPage);
  };

  const setRowSelected = (row, isSelecting = true) =>
    setSelectedRows((prevSelected) => {
      const otherSelectedRows = prevSelected.filter((r) => r !== row.name);
      return isSelecting ? [...otherSelectedRows, row.name] : otherSelectedRows;
    });
  const selectAllRows = (isSelecting = true) => setSelectedRows(isSelecting ? rows.map((r) => r.name) : []);
  const selectPageRows = (isSelecting = true) => setSelectedRows(isSelecting ? paginatedRows.map((r) => r.name) : []);
  const isRowSelected = (row) => selectedRows.includes(row.name);

  const buildPagination = (variant, isCompact) => (
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

  const buildBulkSelectDropdown = () => {
    const numSelected = selectedRows.length;
    const allSelected = numSelected === rows.length;
    const anySelected = numSelected > 0;
    const someChecked = anySelected ? null : false;
    const isChecked = allSelected ? true : someChecked;

    const items = (
      <>
        <DropdownItem value="none">Select none (0 items)</DropdownItem>
        <DropdownItem value="page">Select page ({perPage} items)</DropdownItem>
        <DropdownItem value="all">Select all ({rows.length} items)</DropdownItem>
      </>
    );
    return (
      <Dropdown
        role="menu"
        onSelect={(_ev, value) => {
          if (value === 'all') {
            selectAllRows(bulkSelection !== 'all');
          } else if (value === 'page') {
            selectPageRows(bulkSelection !== 'page');
          } else {
            setSelectedRows([]);
          }
          setBulkSelection(value);
        }}
        isOpen={isBulkSelectDropdownOpen}
        onOpenChange={(isOpen) => setIsBulkSelectDropdownOpen(isOpen)}
        toggle={(toggleRef) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={isBulkSelectDropdownOpen}
            onClick={() => setIsBulkSelectDropdownOpen(!isBulkSelectDropdownOpen)}
            aria-label="Select cards"
            splitButtonOptions={{
              items: [
                <MenuToggleCheckbox
                  id="split-dropdown-checkbox"
                  key="split-dropdown-checkbox"
                  aria-label={anySelected ? 'Deselect all cards' : 'Select all cards'}
                  isChecked={isChecked}
                  onClick={() => {
                    anySelected ? setSelectedRows([]) : selectAllRows(bulkSelection !== 'all');
                  }}
                >
                  {numSelected !== 0 && `${numSelected} selected`}
                </MenuToggleCheckbox>
              ]
            }}
          ></MenuToggle>
        )}
      >
        <DropdownList>{items}</DropdownList>
      </Dropdown>
    );
  };

  const toolbar = (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup>
          <ToolbarItem variant="bulk-select">{buildBulkSelectDropdown()}</ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem variant="pagination">{buildPagination('top')}</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection isWidthLimited>
        {toolbar}
        <Table aria-label="Selectable table">
          <Thead>
            <Tr>
              <Th />
              <Th key={0}>{columns[0]}</Th>
              <Th key={1}>{columns[1]}</Th>
              <Th key={2}>{columns[2]}</Th>
              <Th key={3}>{columns[3]}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedRows.map((row, rowIndex) => (
              <Tr key={row.name}>
                <Td
                  select={{
                    rowIndex,
                    onSelect: (_event, isSelecting) => setRowSelected(row, isSelecting),
                    isSelected: isRowSelected(row)
                  }}
                />
                <Td dataLabel={columns[0]}>{row.name}</Td>
                <Td dataLabel={columns[1]}>{row.threads}</Td>
                <Td dataLabel={columns[2]}>{row.applications}</Td>
                <Td dataLabel={columns[3]}>{row.workspaces}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {buildPagination('bottom')}
      </PageSection>
    </DashboardWrapper>
  );
};
