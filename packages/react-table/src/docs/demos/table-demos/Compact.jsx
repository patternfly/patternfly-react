import React from 'react';
import {
  Button,
  Card,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Pagination,
  Select,
  SelectVariant,
  SelectOption,
  PageSection
} from '@patternfly/react-core';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { rows, columns } from '../../examples/Data.jsx';

export const CompactTable = () => {
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
        paginationTitle: `${variant} pagination`
      }}
    />
  );

  const tableToolbar = (
    <Toolbar usePageInsets id="compact-toolbar">
      <ToolbarContent>
        <ToolbarItem>
          <Select
            id="select-example"
            variant={SelectVariant.single}
            aria-label="Select Input"
            placeholderText={
              <>
                <FilterIcon /> Status
              </>
            }
            isOpen={isSelectOpen}
            onToggle={() => setIsSelectOpen(!isSelectOpen)}
            onSelect={() => setIsSelectOpen(!isSelectOpen)}
          >
            {[
              <SelectOption key={0} value="Debug" />,
              <SelectOption key={1} value="Info" />,
              <SelectOption key={2} value="Warn" />,
              <SelectOption key={3} value="Error" />
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
  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled>
          <Card>
            {tableToolbar}
            <TableComposable variant="compact" aria-label="Compact Table">
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
                {paginatedRows.map((row, rowIndex) => (
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
            </TableComposable>
            {renderPagination('bottom', false)}
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
