import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateBody,
  EmptyStateActions,
  EmptyStateFooter
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

export const EmptyStateExtraLarge: React.FunctionComponent = () => (
  <EmptyState variant={EmptyStateVariant.xl} titleText="Empty state" headingLevel="h4" icon={CubesIcon}>
    <EmptyStateBody>
      This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to
      meet a variety of needs.
    </EmptyStateBody>
    <EmptyStateFooter>
      <EmptyStateActions>
        <Button variant="primary">Primary action</Button>
      </EmptyStateActions>
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
