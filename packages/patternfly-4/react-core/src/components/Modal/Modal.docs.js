import { Modal } from '@patternfly/react-core';
import Simple from './examples/SimpleModal';
import Width from './examples/WidthModal';
import Large from './examples/LargeModal';
import Small from './examples/SmallModal';

export default {
  title: 'Modal',
  components: {
    Modal
  },
  examples: [
    { component: Simple, title: 'Simple Modal' },
    { component: Small, title: 'Small Modal' },
    { component: Large, title: 'Large Modal' },
    { component: Width, title: 'Width Modal' }
  ]
};
