import React from 'react';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateIcon
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

export const EmptyStateCustomIconColor: React.FunctionComponent = () => (
  <EmptyState>
    <EmptyStateHeader
      titleText="Custom icon color"
      headingLevel="h4"
      icon={<EmptyStateIcon icon={CubesIcon} color="#3e8635" />}
    />
    <EmptyStateBody>
      This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to
      use but flexible enough to meet a variety of needs.
    </EmptyStateBody>
  </EmptyState>
);
