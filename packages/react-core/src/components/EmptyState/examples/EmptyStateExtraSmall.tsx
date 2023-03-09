import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateBody,
  EmptyStateActions,
  EmptyStateHeader,
  EmptyStateFooter
} from '@patternfly/react-core';

export const EmptyStateExtraSmall: React.FunctionComponent = () => (
  <EmptyState variant={EmptyStateVariant.xs}>
    <EmptyStateHeader titleText="Empty state" headingLevel="h4" />
    <EmptyStateBody>
      This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to
      meet a variety of needs.
    </EmptyStateBody>
    <EmptyStateFooter>
      <EmptyStateActions>
        <Button variant="link">Multiple</Button>
        <Button variant="link">Action Buttons</Button>
        <Button variant="link">Can</Button>
        <Button variant="link">Go here</Button>
        <Button variant="link">In the secondary</Button>
        <Button variant="link">Action area</Button>
      </EmptyStateActions>
    </EmptyStateFooter>
  </EmptyState>
);
