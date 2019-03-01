import { TextArea } from '@patternfly/react-core';
import Simple from './examples/SimpleTextArea';
import Invalid from './examples/InvalidTextArea';

export default {
  title: 'TextArea',
  components: {
    TextArea
  },
  variablesRoot: 'pf-c-form-control',
  examples: [{ component: Simple, title: 'Simple TextArea' }, { component: Invalid, title: 'Invalid TextArea' }]
};
