import { Select, SelectOption, CheckboxSelectOption, CheckboxSelectGroup } from '@patternfly/react-core';
import SingleSelectInput from './examples/SingleSelectInput';
import CheckboxSelectInput from './examples/CheckboxSelectInput';
import GroupedCheckboxSelectInput from './examples/GroupedCheckboxSelectInput';

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
    { component: CheckboxSelectInput, title: 'Checkbox Select Input' },
    { component: GroupedCheckboxSelectInput, title: 'Grouped Checkbox Select Input' }
  ]
};
