import { Bullseye } from '@patternfly/react-core';
import Simple from './examples/SimpleBullseye';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Bullseye',
  description: '',
  components: {
    Bullseye
  },
  examples: [{ component: Simple, title: 'Simple Bullseye Layout', getContainerProps }]
};
