import { TextArea } from '@patternfly/react-core';
import Simple from './examples/SimpleTextArea';
import Invalid from './examples/InvalidTextArea';

export default {
  title: 'TextArea',
  components: {
    TextArea
  },
  examples: [{ component: Simple, title: 'Simple TextArea' }, { component: Invalid, title: 'Invalid TextArea' }]
};
