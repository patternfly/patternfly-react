import React from 'react';
import { EmptyState, EmptyStateHeader, EmptyStateIcon, Spinner } from '@patternfly/react-core';

export const EmptyStateSpinner: React.FunctionComponent = () => (
  <EmptyState>
    <EmptyStateHeader titleText="Loading" headingLevel="h4" icon={<EmptyStateIcon icon={Spinner} />} />
  </EmptyState>
);
