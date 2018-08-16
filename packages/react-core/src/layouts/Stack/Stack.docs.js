import { Stack, StackItem, GutterSize } from '@patternfly/react-core';
import Simple from './examples/SimpleStack';
import StackWithGutter from './examples/StackWithGutter';

export default {
  title: 'Stack',
  components: {
    Stack,
    StackItem
  },
  enumValues: {
    'Object.keys(GutterSize)': Object.keys(GutterSize)
  },
  examples: [Simple, StackWithGutter]
};
