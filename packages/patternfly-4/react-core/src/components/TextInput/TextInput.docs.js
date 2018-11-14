import { TextInput } from '@patternfly/react-core';
import Simple from './examples/SimpleTextInput';
import Disabled from './examples/DisabledTextInput';
import ReadOnly from './examples/ReadOnlyTextInput';
import Invalid from './examples/InvalidTextInput';
import Alt from './examples/AltTextInput';

export default {
  title: 'TextInput',
  components: {
    TextInput
  },
  examples: [
    { component: Simple, title: 'Simple TextInput' },
    { component: Disabled, title: 'Disabled TextInput' },
    { component: ReadOnly, title: 'ReadOnly TextInput' },
    { component: Invalid, title: 'Invalid TextInput' },
    { component: Alt, title: 'Alternative TextInput' }
  ]
};
