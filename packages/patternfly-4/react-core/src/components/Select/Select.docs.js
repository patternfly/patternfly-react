import { Select, SelectOption, SelectOptionGroup } from '@patternfly/react-core';
import SelectInput from './examples/SelectInput';
import SelectInputDisabled from './examples/SelectInputDisabled';
import SelectInputGrouped from './examples/SelectInputGrouped';

export default {
  title: 'Select',
  components: {
    Select,
    SelectOption,
    SelectOptionGroup
  },
  examples: [SelectInput, SelectInputGrouped, SelectInputDisabled]
};
