import { Split, SplitItem, GutterSize } from '@patternfly/react-core';
import Simple from './examples/SimpleSplit';
import WithGutter from './examples/SplitWithGutter';

export default {
  title: 'Split',
  components: {
    Split,
    SplitItem
  },
  enumValues: {
    'Object.keys(GutterSize)': Object.keys(GutterSize)
  },
  examples: [Simple, WithGutter]
};
