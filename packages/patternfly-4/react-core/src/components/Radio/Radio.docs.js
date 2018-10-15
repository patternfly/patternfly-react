import Controlled from './examples/ControlledRadio';
import Uncontrolled from './examples/UncontrolledRadio';
import Disabled from './examples/DisabledRadio';
import Custom from './examples/CustomLabelRadio';
import { Radio } from '@patternfly/react-core';

export default {
  title: 'Radio',
  components: {
    Radio
  },
  examples: [Controlled, Uncontrolled, Disabled, Custom]
};
