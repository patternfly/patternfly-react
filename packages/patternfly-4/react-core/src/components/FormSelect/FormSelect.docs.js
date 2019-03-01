import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';
import FormSelectInput from './examples/FormSelectInput';
import FormSelectInputDisabled from './examples/FormSelectInputDisabled';
import FormSelectInputGrouped from './examples/FormSelectInputGrouped';
import FormSelectInputInvalid from './examples/FormSelectInputInvalid';

export default {
  title: 'FormSelect',
  components: {
    FormSelect,
    FormSelectOption,
    FormSelectOptionGroup
  },
  variablesRoot: 'pf-c-form-control',
  examples: [
    { component: FormSelectInput, title: 'FormSelect Input' },
    { component: FormSelectInputGrouped, title: 'FormSelect Input with grouping' },
    { component: FormSelectInputInvalid, title: 'FormSelect Input Invalid' },
    { component: FormSelectInputDisabled, title: 'FormSelect Input Disabled' }
  ]
};
