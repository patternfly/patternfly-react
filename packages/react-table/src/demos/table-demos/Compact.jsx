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
import { TableComposable, Thead, Tr, Th, Tbody, Td, ActionsColumn } from '@patternfly/react-table';

import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const ComposableTable = () => {
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  const columns = ['Contributor', 'Position', 'Location', 'Last seen', 'Numbers', 'Icons'];
  const rows = [
    ['Sam Jones', 'CSS guru', 'Not too sure', 'May 9, 2018', '0556'],
    ['Amy Miller', 'Visual design', 'Raleigh', 'May 9, 2018', '9492'],
    ['Steve Wilson', 'Visual design lead', 'Westford', 'May 9, 2018', '9929'],
    ['Emma Jackson', 'Interaction design', 'Westford', 'May 9, 2018', '2217']
  ];

  const defaultActions = () => [
    {
      title: 'Settings',
      // eslint-disable-next-line no-console
      onClick: () => console.log(`clicked on Settings`)
    },
    {
      title: 'Help',
      // eslint-disable-next-line no-console
      onClick: () => console.log(`clicked on Help`)
    }
  ];
  const renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={36}
      page={1}
      perPage={10}
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

  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection isFilled>
          <Card>
            {tableToolbar}
            <TableComposable variant="compact" aria-label="Sortable Table">
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => (
                    <Th key={columnIndex}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    <>
                      <Td dataLabel={columns[0]}>{row[0]}</Td>
                      <Td dataLabel={columns[1]}>{row[1]}</Td>
                      <Td dataLabel={columns[2]}>{row[2]}</Td>
                      <Td dataLabel={columns[3]}>{row[3]}</Td>
                      <Td dataLabel={columns[4]}>{row[4]}</Td>
                      <Td dataLabel={columns[5]}>
                        <CheckIcon key="icon" />
                      </Td>
                      <Td dataLabel={'Action'}>
                        <a href="#">Action link</a>
                      </Td>
                      <Td isActionCell>
                        <ActionsColumn items={defaultActions()} />
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
