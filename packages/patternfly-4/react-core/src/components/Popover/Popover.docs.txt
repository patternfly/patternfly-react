import {
  PopoverPosition,
  PopoverDialog,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@patternfly/react-core';
import SimplePopover from './examples/SimplePopover';
import HeadlessPopover from './examples/HeadlessPopover';

export default {
  title: 'Popover',
  components: {
    PopoverDialog,
    PopoverArrow,
    PopoverContent,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody
  },
  enumValues: {
    'Object.values(PopoverPosition)': Object.values(PopoverPosition)
  },
  examples: [
    { component: SimplePopover, title: 'Closable Popover Position' },
    { component: HeadlessPopover, title: 'Headless Popover' }
  ]
};
