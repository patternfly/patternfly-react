import { Tabs, Tab } from '@patternfly/react-core';
import SimpleTabs from './examples/SimpleTabs';
import ScrollButtonsTabs from './examples/ScrollButtonsTabs';
import FilledTabs from './examples/FilledTabs';

export default {
  title: 'Tabs',
  live: false,
  components: {
    Tabs,
    Tab
  },
  examples: [
    { component: SimpleTabs, title: 'Primary tabs with sections' },
    { component: ScrollButtonsTabs, title: 'Scroll buttons' },
    { component: FilledTabs, title: 'Filled buttons' }
  ]
};
