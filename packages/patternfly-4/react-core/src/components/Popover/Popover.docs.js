import { Popover, PopoverPosition } from '@patternfly/react-core';
import SimplePopover from './examples/SimplePopover';
import AdvancedPopover from './examples/AdvancedPopover';
import HeadlessPopover from './examples/HeadlessPopover';

export default {
  title: 'Popover',
  components: {
    Popover
  },
  enumValues: {
    'Object.keys(PopoverPosition).map(key => PopoverPosition[key])': Object.keys(PopoverPosition).map(
      key => PopoverPosition[key]
    )
  },
  variablesRoot: 'pf-c-popover',
  examples: [
    { component: SimplePopover, title: 'Simple Popover' },
    { component: AdvancedPopover, title: 'Programmatically Controlled Popover' },
    { component: HeadlessPopover, title: 'Headless Popover' }
  ]
};
