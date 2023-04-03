import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateFooter,
  EmptyStateActions,
  EmptyStateIcon
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export const EmptyStateNoMatchFound: React.FunctionComponent = () => (
  <EmptyState>
    <EmptyStateHeader titleText="No results found" headingLevel="h4" icon={<EmptyStateIcon icon={SearchIcon} />} />
    <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
    <EmptyStateFooter>
      <EmptyStateActions>
        <Button variant="link">Clear all filters</Button>
      </EmptyStateActions>
    </EmptyStateFooter>
  </EmptyState>
);
