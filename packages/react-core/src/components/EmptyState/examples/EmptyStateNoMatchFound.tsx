import { Button, EmptyState, EmptyStateBody, EmptyStateFooter, EmptyStateActions } from '@patternfly/react-core';
import RhMicronsSearchIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-search-icon';

export const EmptyStateNoMatchFound: React.FunctionComponent = () => (
  <EmptyState titleText="No results found" headingLevel="h4" icon={RhMicronsSearchIcon}>
    <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
    <EmptyStateFooter>
      <EmptyStateActions>
        <Button variant="link">Clear all filters</Button>
      </EmptyStateActions>
    </EmptyStateFooter>
  </EmptyState>
);
