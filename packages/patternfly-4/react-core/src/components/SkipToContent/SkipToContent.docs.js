import { SkipToContent } from '@patternfly/react-core';
import Simple from './examples/SimpleSkipToContent';
import ForceShow from './examples/SkipToContentForceShow';

export default {
  title: 'SkipToContent',
  components: {
    SkipToContent
  },
  examples: [
    { component: Simple, title: 'Simple SkipToContent' },
    { component: ForceShow, title: 'Force SkipToContent to display (Recommended for Demo Purpose Only)' }
  ],
  fullPageOnly: true
};
