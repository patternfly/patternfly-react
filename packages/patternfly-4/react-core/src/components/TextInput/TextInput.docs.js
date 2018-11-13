import { TextInput } from '@patternfly/react-core';
import Simple from './examples/SimpleTextInput';
import Disabled from './examples/DisabledTextInput';
import ReadOnly from './examples/ReadOnlyTextInput';
import Invalid from './examples/InvalidTextInput';
import Focus from './examples/FocusTextInput';

export default {
  title: 'TextInput',
  components: {
    TextInput
  },
  variablesRoot: 'pf-c-form-control',
  examples: [
    { component: Simple, title: 'Simple TextInput' },
    { component: Disabled, title: 'Disabled TextInput' },
    { component: ReadOnly, title: 'ReadOnly TextInput' },
    { component: Invalid, title: 'Invalid TextInput' },
    { component: Focus, title: 'Focus TextInput' }
  ]
};
