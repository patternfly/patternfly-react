import Simple from './examples/SimpleForm';
import Horizontal from './examples/HorizontalForm';
import Invalid from './examples/InvalidForm';
import { Form, FormGroup, ActionGroup } from '@patternfly/react-core';

export default {
  title: 'Form',
  components: {
    Form,
    FormGroup,
    ActionGroup
  },
  variablesRoot: 'pf-c-form',
  examples: [
    { component: Simple, title: 'Simple Form' },
    { component: Horizontal, title: 'Horizontal form' },
    { component: Invalid, title: 'Invalid form' }
  ]
};
