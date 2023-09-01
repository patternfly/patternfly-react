import React from 'react';

import {
  Button,
  Card,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Pagination,
  PageSection,
  MenuToggle,
  MenuToggleElement,
  Label,
  Select,
  SelectOption
} from '@patternfly/react-core';
import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';

export const StaticBottomPagination = () => {
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));
  const handleSetPage = (_evt, newPage, perPage, startIdx, endIdx) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
  };
  handlePerPageSelect = (_evt, newPerPage, newPage, startIdx, endIdx) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
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
        paginationAriaLabel: `${variant} pagination`
      }}
      isStatic
    />
  );

  const renderLabel = (labelText) => {
    switch (labelText) {
      case 'Running':
        return (
          <span>
            <Label color="green">{labelText}</Label>
          </span>
        );
      case 'Stopped':
        return (
          <span>
            <Label color="orange">{labelText}</Label>
          </span>
        );
      case 'Needs Maintenance':
        return (
          <span>
            <Label color="blue">{labelText}</Label>
          </span>
        );
      case 'Down':
        return (
          <span>
            <Label color="red">{labelText}</Label>
          </span>
        );
    }
  };

  const tableToolbar = (
    <Toolbar usePageInsets id="pagination-toolbar">
      <ToolbarContent>
        <ToolbarItem>
          <Select
            id="select-example"
            aria-label="Select Input"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle ref={toggleRef} onClick={() => setIsSelectOpen(!isSelectOpen)} isExpanded={isSelectOpen}>
                <FilterIcon /> Status
              </MenuToggle>
            )}
            isOpen={isSelectOpen}
            onOpenChange={(isOpen) => setIsSelectOpen(isOpen)}
            onSelect={() => setIsSelectOpen(!isSelectOpen)}
          >
            {[
              <SelectOption key={0} value="Debug">
                Debug
              </SelectOption>,
              <SelectOption key={1} value="Info">
                Info
              </SelectOption>,
              <SelectOption key={2} value="Warn">
                Warn
              </SelectOption>,
              <SelectOption key={3} value="Error">
                Error
              </SelectOption>
            ]}
          </Select>
        </ToolbarItem>
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="primary">Action</Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem variant="pagination">{renderPagination('top', true)}</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled>
          <Card>
            {tableToolbar}
            <Table variant="compact" aria-label="Paginated Table">
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => (
                    <Th key={columnIndex}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedRows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
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
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {renderPagination('bottom', false)}
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
