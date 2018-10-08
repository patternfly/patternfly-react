import Controlled from './examples/ControlledCheckbox';
import Uncontrolled from './examples/UncontrolledCheckbox';
import Disabled from './examples/DisabledCheckbox';
import Custom from './examples/CustomLabelCheckbox';
import { Checkbox } from '@patternfly/react-core';

export default {
  title: 'Checkbox',
  components: {
    Checkbox
  },
  examples: [Controlled, Uncontrolled, Disabled, Custom]
};
