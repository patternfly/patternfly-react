import { Select, SelectOption, SelectOptionGroup } from '@patternfly/react-core';
import SelectInput from './examples/SelectInput';
import SelectInputDisabled from './examples/SelectInputDisabled';
import SelectInputGrouped from './examples/SelectInputGrouped';
import SelectInputInvalid from './examples/SelectInputInvalid';

export default {
  title: 'Select',
  components: {
    Select,
    SelectOption,
    SelectOptionGroup
  },
  examples: [
    { component: SelectInput, title: 'Select Input' },
    { component: SelectInputGrouped, title: 'Select Input with grouping' },
    { component: SelectInputInvalid, title: 'Select Input Invalid' },
    { component: SelectInputDisabled, title: 'Select Input Disabled' }
  ]
};
