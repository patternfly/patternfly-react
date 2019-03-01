import { EmptyState, EmptyStateBody, EmptyStateSecondaryActions } from '@patternfly/react-core';
import Simple from './examples/SimpleEmptyState';

export default {
  title: 'EmptyState',
  components: { EmptyState, EmptyStateBody, EmptyStateSecondaryActions },
  variablesRoot: 'pf-c-empty-state',
  examples: [
    {
      component: Simple,
      title: 'Simple'
    }
  ]
};
