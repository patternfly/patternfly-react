import Simple from './examples/SimpleForm';
import Horizontal from './examples/HorizontalForm';
import Various from './examples/VariousLabelsForm';
import Alternative from './examples/AlternativeForm';
import Invalid from './examples/InvalidForm';
import { Form, FormGroup, ActionGroup } from '@patternfly/react-core';

export default {
  title: 'Form',
  components: {
    Form,
    FormGroup,
    ActionGroup
  },
  examples: [
    { component: Simple, title: 'Simple Form' },
    { component: Horizontal, title: 'Horizontal form' },
    { component: Alternative, title: 'Alternative Form' },
    { component: Invalid, title: 'Invalid form' },
    {
      component: Various,
      title: 'Various labels and helper text',
      description: 'Label and helperText can be a string, a function or a node.'
    }
  ]
};
