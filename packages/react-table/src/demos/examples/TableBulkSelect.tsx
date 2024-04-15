import React from 'react';

import {
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleCheckbox,
  MenuToggleElement,
  PageSection,
  Pagination,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  PaginationVariant
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { rows, columns, SampleDataRow } from '@patternfly/react-table/dist/esm/demos/sampleData';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';

export const TableBulkSelect: React.FunctionComponent = () => {
  const [isBulkSelectDropdownOpen, setIsBulkSelectDropdownOpen] = React.useState(false);
  const [bulkSelection, setBulkSelection] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const handleSetPage = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number,
    startIdx: number,
    endIdx: number
  ) => {
    setPaginatedRows(rows?.slice(startIdx, endIdx));
    setPage(newPage);
  };

  const handlePerPageSelect = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number,
    startIdx: number,
    endIdx: number
  ) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
    setPerPage(newPerPage);
  };

  const setRowSelected = (row: SampleDataRow, isSelecting: boolean) =>
    setSelectedRows((prevSelected) => {
      const otherSelectedRows = prevSelected.filter((r) => r !== row.name);
      return isSelecting ? [...otherSelectedRows, row.name] : otherSelectedRows;
    });

  const selectAllRows = (isSelecting: boolean) => setSelectedRows(isSelecting ? rows.map((r) => r.name) : []);

  const selectPageRows = (isSelecting: boolean) => setSelectedRows(isSelecting ? paginatedRows.map((r) => r.name) : []);

  const isRowSelected = (row: any) => selectedRows.includes(row.name);

  const buildPagination = (variant: 'bottom' | 'top' | PaginationVariant, isCompact: boolean) => (
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
        onSelect={(_event: React.MouseEvent<Element, MouseEvent>, value: string) => {
          if (value === 'all') {
            selectAllRows(bulkSelection !== 'all');
          } else if (value === 'page') {
            selectPageRows(bulkSelection !== 'page');
          } else {
            setSelectedRows([]);
          }
          setBulkSelection(value as string);
        }}
        isOpen={isBulkSelectDropdownOpen}
        onOpenChange={(isOpen: boolean) => setIsBulkSelectDropdownOpen(isOpen)}
        toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
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
        <ToolbarItem variant="pagination">{buildPagination('top', false)}</ToolbarItem>
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
              <Th screenReaderText="Row select" />
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
                    onSelect: (_event: React.FormEvent<HTMLInputElement>, isSelecting: boolean) =>
                      setRowSelected(row, isSelecting),
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
        {buildPagination('bottom', true)}
      </PageSection>
    </DashboardWrapper>
  );
};
