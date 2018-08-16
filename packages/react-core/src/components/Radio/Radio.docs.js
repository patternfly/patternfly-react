import { Checkbox } from '@patternfly/react-core';
import Controlled from './examples/ControlledRadio';
import Uncontrolled from './examples/UncontrolledRadio';
import Disabled from './examples/DisabledRadio';

export default {
  title: 'Radio',
  components: {
    Checkbox
  },
  examples: [Controlled, Uncontrolled, Disabled]
};
