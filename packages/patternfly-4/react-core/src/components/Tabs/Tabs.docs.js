import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import SimpleTabs from './examples/SimpleTabs';
import AccessibleTabs from './examples/AccessibleTabs';
import ScrollButtonsTabs from './examples/ScrollButtonsTabs';
import FilledTabs from './examples/FilledTabs';
import SecondaryTabs from './examples/SecondaryTabs';
import TabContentWithIds from './examples/TabContentWithIds';
import TabContentWithRefs from './examples/TabContentWithRefs';

export default {
  title: 'Tabs',
  live: false,
  components: {
    Tabs,
    Tab,
    TabContent
  },
  variablesRoot: 'pf-c-tabs',
  examples: [
    { component: SimpleTabs, title: 'Primary tabs with sections' },
    { component: AccessibleTabs, title: 'Accessible primary tabs with aria-label' },
    { component: ScrollButtonsTabs, title: 'Scroll buttons' },
    { component: SecondaryTabs, title: 'Secondary buttons' },
    { component: FilledTabs, title: 'Filled buttons' },
    { component: TabContentWithIds, title: 'Primary tabs with sections outside of the Tabs component (ids)' },
    { component: TabContentWithRefs, title: 'Primary tabs with sections outside of the Tabs component (refs)' },
  ]
};
