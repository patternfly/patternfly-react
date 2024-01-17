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

export const EmptyStateExtraSmall: React.FunctionComponent = () => (
  <EmptyState variant={EmptyStateVariant.xs} titleText="Empty state" headingLevel="h4" icon={CubesIcon}>
    <EmptyStateBody>This represents an the empty state pattern in PatternFly. The icon is optional.</EmptyStateBody>
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
