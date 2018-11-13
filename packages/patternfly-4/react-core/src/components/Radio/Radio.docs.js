import Controlled from './examples/ControlledRadio';
import Uncontrolled from './examples/UncontrolledRadio';
import Disabled from './examples/DisabledRadio';
import Custom from './examples/CustomLabelRadio';
import { Radio } from '@patternfly/react-core';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Radio',
  components: {
    Radio
  },
  examples: [
    { component: Controlled, title: 'Controlled Radio' },
    { component: Uncontrolled, title: 'Uncontrolled Radio' },
    { component: Disabled, title: 'Disabled Radio' },
    { component: Custom, title: 'Custom label Radio', getContainerProps }
  ]
};
