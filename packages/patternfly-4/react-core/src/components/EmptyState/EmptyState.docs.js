import { EmptyState, EmptyStateBody, EmptyStateSecondaryActions } from '@patternfly/react-core';
import Simple from './examples/SimpleEmptyState';
import IconSize from './examples/IconSize';

export default {
  title: 'EmptyState',
  components: { EmptyState, EmptyStateBody, EmptyStateSecondaryActions },
  examples: [
    {
      component: Simple,
      title: 'Simple'
    },
    {
      component: IconSize,
      title: 'Icon size'
    }
  ]
};
