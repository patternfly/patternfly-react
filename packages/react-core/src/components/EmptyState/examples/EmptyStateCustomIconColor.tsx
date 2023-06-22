import React from 'react';
import { EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon } from '@patternfly/react-core';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import globalSuccessColor100 from '@patternfly/react-tokens/global_success_color_100/dist/esm/global_success_color_100';

export const EmptyStateCustomIconColor: React.FunctionComponent = () => (
  <EmptyState>
    <EmptyStateHeader
      titleText="Custom icon color"
      headingLevel="h4"
      icon={<EmptyStateIcon icon={CheckIcon} color={globalSuccessColor100.var} />}
    />
    <EmptyStateBody>
      This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to
      use but flexible enough to meet a variety of needs.
    </EmptyStateBody>
  </EmptyState>
);
