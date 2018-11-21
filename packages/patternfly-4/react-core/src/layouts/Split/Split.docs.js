import { Split, SplitItem, GutterSize } from '@patternfly/react-core';
import Simple from './examples/SimpleSplit';
import WithGutter from './examples/SplitWithGutter';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Split',
  components: {
    Split,
    SplitItem
  },
  enumValues: {
    'Object.keys(GutterSize)': Object.keys(GutterSize)
  },
  examples: [
    { component: Simple, title: 'Simple Split Layout', getContainerProps },
    { component: WithGutter, title: 'Split Layout With Gutter', getContainerProps }
  ]
};
