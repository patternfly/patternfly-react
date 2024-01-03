import React from 'react';
import { EmptyState, Spinner } from '@patternfly/react-core';

export const EmptyStateSpinner: React.FunctionComponent = () => (
  <EmptyState titleText="Loading" headingLevel="h4" icon={Spinner} />
);
