import { Switch } from '@patternfly/react-core';
import SimpleSwitch from './examples/SimpleSwitch';
import NoLabelSwitch from './examples/NoLabelSwitch';
import DisabledSwitch from './examples/DisabledSwitch';
import UncontrolledSwitch from './examples/UncontrolledSwitch';

export default {
  title: 'Switch',
  components: {
    Switch
  },
  examples: [
    { component: SimpleSwitch, title: 'Simple Switch' },
    { component: NoLabelSwitch, title: 'Switch with no labels' },
    { component: DisabledSwitch, title: 'Disabled Switch' },
    { component: UncontrolledSwitch, title: 'Uncontrolled Switch' }
  ]
};
