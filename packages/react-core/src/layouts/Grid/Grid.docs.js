import { Grid, GridItem } from '@patternfly/react-core';
import GridPlaygroud from './examples/GridPlaygroud';
import Simple from './examples/SimpleGrid';
import WithGutters from './examples/GridWithGutters';
import Overrides from './examples/GridOverrides';

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
  examples: [Simple, WithGutters, Overrides, GridPlaygroud]
};
