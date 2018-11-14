import { Level, LevelItem } from '@patternfly/react-core';
import Simple from './examples/SimpleLevel';
import WithGutters from './examples/LevelWithGutters';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Level',
  description: '',
  components: {
    Level,
    LevelItem
  },
  examples: [
    { component: Simple, title: 'Simple Level Layout', getContainerProps },
    { component: WithGutters, title: 'Level With Gutters', getContainerProps }
  ]
};
