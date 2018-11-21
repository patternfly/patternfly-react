import { List, ListItem } from '@patternfly/react-core';
import Simple from './examples/SimpleList';
import Inline from './examples/InlineList';
import Grid from './examples/GridList';

export default {
  title: 'List',
  components: {
    List,
    ListItem
  },
  examples: [
    { component: Simple, title: 'Simple List' },
    { component: Inline, title: 'Inline List' },
    { component: Grid, title: 'Grid List' }
  ]
};
