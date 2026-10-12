import { EmptyState, Spinner } from '@rh-felt/react-core';

export const EmptyStateSpinner: React.FunctionComponent = () => (
  <EmptyState titleText="Loading" headingLevel="h4" icon={Spinner} />
);
