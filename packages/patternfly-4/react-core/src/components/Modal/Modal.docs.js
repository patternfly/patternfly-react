import { Modal } from '@patternfly/react-core';
import Simple from './examples/SimpleModal';
import Large from './examples/LargeModal';
import AriaLabel from './examples/AriaLabelModal';

export default {
  title: 'Modal',
  components: {
    Modal
  },
  examples: [
    { component: AriaLabel, title: 'Aria Label Modal' },
    { component: Simple, title: 'Simple Modal' },
    { component: Large, title: 'Large Modal' }
  ]
};
