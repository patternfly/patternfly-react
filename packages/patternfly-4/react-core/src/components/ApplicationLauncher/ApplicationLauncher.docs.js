import { ApplicationLauncher } from '@patternfly/react-core';
import SimpleApplicationLauncher from './examples/SimpleApplicationLauncher';
import TooltipApplicationLauncher from './examples/TooltipApplicationLauncher';

export default {
  title: 'Dropdown',
  components: {
    ApplicationLauncher,
    TooltipApplicationLauncher
  },
  examples: [
    { component: SimpleApplicationLauncher, title: 'Application Launcher' },
    { component: TooltipApplicationLauncher, title: 'Application Launcher with Tool Tip' }
  ]
};
