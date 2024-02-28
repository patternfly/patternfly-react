import React from 'react';
import {
  Button,
  Card,
  MenuToggle,
  MenuToggleElement,
  Pagination,
  PageSection,
  Select,
  SelectOption,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Label,
  PaginationVariant
} from '@patternfly/react-core';
import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { rows, columns } from '@patternfly/react-table/dist/esm/demos/sampleData';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';

export const TableCompact: React.FunctionComponent = () => {
  const [isSelectOpen, setIsSelectOpen] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));

  const handleSetPage = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number,
    startIdx: number,
    endIdx: number
  ) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
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

  const renderPagination = (variant: string, isCompact: boolean) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      variant={variant as PaginationVariant}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const tableToolbar = (
    <Toolbar usePageInsets id="compact-toolbar">
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
            onOpenChange={(isOpen: boolean) => setIsSelectOpen(isOpen)}
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

  const renderLabel = (labelText: string) => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs Maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
      default:
        return <></>;
    }
  };

  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled>
          <Card>
            {tableToolbar}
            <Table variant="compact" aria-label="Compact Table">
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
            </Table>
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
