import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
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

export const ComposableTableEmptyState: React.FunctionComponent = () => (
  <TableComposable aria-label="Empty state table">
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
            <EmptyState variant={EmptyStateVariant.small}>
              <EmptyStateIcon icon={SearchIcon} />
              <Title headingLevel="h2" size="lg">
                No results found
              </Title>
              <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>
              <Button variant="link">Clear all filters</Button>
            </EmptyState>
          </Bullseye>
        </Td>
      </Tr>
    </Tbody>
  </TableComposable>
);
