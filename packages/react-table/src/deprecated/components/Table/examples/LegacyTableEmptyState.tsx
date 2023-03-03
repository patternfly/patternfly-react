import React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';
import {
  Bullseye,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  Button
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

// This example has been simplified to focus on the empty state. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

export const LegacyTableEmptyState: React.FunctionComponent = () => {
  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows: TableProps['rows'] = [
    {
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={SearchIcon} />
                <Title headingLevel="h2" size="lg">
                  No results found
                </Title>
                <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>
                <Button variant="link">Clear all filters</Button>
              </EmptyState>
            </Bullseye>
          )
        }
      ]
    }
  ];

  return (
    <Table aria-label="Table text with modifiers" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
