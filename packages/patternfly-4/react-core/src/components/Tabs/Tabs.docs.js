import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import SimpleTabs from './examples/SimpleTabs';
import AccessibleTabs from './examples/AccessibleTabs';
import ScrollButtonsTabs from './examples/ScrollButtonsTabs';
import FilledTabs from './examples/FilledTabs';
import SecondaryTabs from './examples/SecondaryTabs';
import AccessibleSecondaryTabs from './examples/AccessibleSecondaryTabs';
import SeparateTabContent from './examples/SeparateTabContent';

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
    { component: AccessibleSecondaryTabs, title: 'Accessible secondary tabs with aria-label' },
    { component: FilledTabs, title: 'Filled buttons' },
    { component: SeparateTabContent, title: 'Primary tabs with sections outside of the Tabs component' },
  ]
};
