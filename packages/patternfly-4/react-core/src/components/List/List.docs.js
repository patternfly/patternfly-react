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
  examples: [Simple, Inline, Grid]
};
