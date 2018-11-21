import { Nav, NavGroup, NavList, NavItem, NavExpandable, NavVariants } from '@patternfly/react-core';
import SimpleList from './examples/NavSimpleList';
import GroupedList from './examples/NavGroupedList';
import ExpandableList from './examples/NavExpandableList';
import ExpandableTitlesList from './examples/NavExpandableTitlesList';
import MixedList from './examples/NavMixedList';
import DefaultList from './examples/NavDefaultList';
import HorizontalList from './examples/NavHorizontalList';
import TertiaryList from './examples/NavTertiaryList';

export default {
  title: 'Nav',
  components: {
    Nav,
    NavGroup,
    NavList,
    NavExpandable,
    NavItem
  },
  enumValues: {
    'Object.values(NavVariants)': Object.values(NavVariants)
  },
  examples: [
    { component: SimpleList, title: 'Simple Nav' },
    { component: GroupedList, title: 'Grouped Nav' },
    { component: DefaultList, title: 'Default Nav' },
    { component: ExpandableList, title: 'Expandable Nav' },
    { component: ExpandableTitlesList, title: 'Expandable Nav (w/subnav titles)' },
    { component: MixedList, title: 'Nav Mixed' },
    { component: HorizontalList, title: 'Horizontal List' },
    { component: TertiaryList, title: 'Tertiary List' }
  ]
};
