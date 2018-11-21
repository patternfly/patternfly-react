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
  examples: [{ component: TitleSizes, title: 'Title Sizes' }]
};
