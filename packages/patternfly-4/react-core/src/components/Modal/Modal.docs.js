import { Modal } from '@patternfly/react-core';
import Simple from './examples/SimpleModal';
import Large from './examples/LargeModal';

export default {
  title: 'Modal',
  components: {
    Modal
  },
  examples: [{ component: Simple, title: 'Simple Modal' }, { component: Large, title: 'Large Modal' }]
};
