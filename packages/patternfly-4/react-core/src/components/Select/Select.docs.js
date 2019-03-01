import { Select, SelectOption } from '@patternfly/react-core';
import SingleSelectInput from './examples/SingleSelectInput';

export default {
  title: 'Select',
  components: {
    Select,
    SelectOption
  },
  variablesRoot: 'pf-c-select',
  examples: [{ component: SingleSelectInput, title: 'Single Select Input' }]
};
