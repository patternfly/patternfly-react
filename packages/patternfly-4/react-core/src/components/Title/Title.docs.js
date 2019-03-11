import { Title, TitleSize } from '@patternfly/react-core';
import TitleSizes from './examples/TitleSizes';

export default {
  title: 'Title',
  components: {
    Title
  },
  enumValues: {
    'Object.values(TitleSize)': Object.values(TitleSize)
  },
  variablesRoot: 'pf-c-title',
  examples: [{ component: TitleSizes, title: 'Title Sizes' }]
};
