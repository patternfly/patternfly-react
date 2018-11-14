import { Grid, GridItem } from '@patternfly/react-core';
import GridPlayground from './examples/GridPlayground';
import Simple from './examples/SimpleGrid';
import WithGutters from './examples/GridWithGutters';
import Overrides from './examples/GridOverrides';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Grid',
  description: '',
  components: {
    Grid,
    GridItem
  },
  enumValues: {
    gridSpans: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  examples: [
    { component: Simple, title: 'Simple Grid', getContainerProps },
    { component: WithGutters, title: 'Grid with gutters', getContainerProps },
    { component: Overrides, title: 'Grid With Overrides', getContainerProps },
    { component: GridPlayground, title: 'Grid Playground', live: false }
  ]
};
