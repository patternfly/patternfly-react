import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import {
  Bullseye,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  Button,
  EmptyStateHeader,
  EmptyStateFooter,
  EmptyStateActions
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

// This example has been simplified to focus on the empty state. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

export const TableEmptyState: React.FunctionComponent = () => (
  <Table aria-label="Empty state table">
    <Thead>
      <Tr>
        <Th>Repositories</Th>
        <Th>Branches</Th>
        <Th>Pull requests</Th>
        <Th>Workspaces</Th>
        <Th>Last commit</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td colSpan={8}>
          <Bullseye>
            <EmptyState variant={EmptyStateVariant.sm}>
              <EmptyStateHeader
                icon={<EmptyStateIcon icon={SearchIcon} />}
                titleText="No results found"
                headingLevel="h2"
              />
              <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>
              <EmptyStateFooter>
                <EmptyStateActions>
                  <Button variant="link">Clear all filters</Button>
                </EmptyStateActions>
              </EmptyStateFooter>
            </EmptyState>
          </Bullseye>
        </Td>
      </Tr>
    </Tbody>
  </Table>
);
