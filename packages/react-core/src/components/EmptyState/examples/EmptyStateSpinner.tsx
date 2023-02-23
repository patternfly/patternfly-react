import React from 'react';
import { EmptyState, EmptyStateHeader, Spinner } from '@patternfly/react-core';

export const EmptyStateSpinner: React.FunctionComponent = () => (
  <EmptyState>
    <EmptyStateHeader titleText="Loading" icon={Spinner} />
  </EmptyState>
);
