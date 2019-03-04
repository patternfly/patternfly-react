import { Select, SelectOption, CheckboxSelectOption, CheckboxSelectGroup } from './index';
import SingleSelectInput from './examples/SingleSelectInput';
import CheckboxSelectInput from './examples/CheckboxSelectInput';

export default {
  title: 'Select',
  components: {
    Select,
    SelectOption,
    CheckboxSelectOption,
    CheckboxSelectGroup
  },
  variablesRoot: 'pf-c-select',
  examples: [
    { component: SingleSelectInput, title: 'Single Select Input' },
    { component: CheckboxSelectInput, title: 'Checkbox Select Input' }
  ]
};
