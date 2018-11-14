import PageLayoutDefaultNav from './examples/PageLayoutDefaultNav';
import PageLayoutExpandableNav from './examples/PageLayoutExpandableNav';
import PageLayoutGroupsNav from './examples/PageLayoutGroupsNav';
import PageLayoutHorizontalNav from './examples/PageLayoutHorizontalNav';
import PageLayoutSimpleNav from './examples/PageLayoutSimpleNav';
import PageLayoutVerticalNavCondensed from './examples/PageLayoutVerticalNavCondensed';
import PageLayoutHorizontalNavCondensed from './examples/PageLayoutHorizontalNavCondensed';

export default {
  title: 'Page Layout Demos',
  examples: [
    { component: PageLayoutDefaultNav, title: 'Using default navigation' },
    { component: PageLayoutExpandableNav, title: 'Using expandable navigation' },
    { component: PageLayoutGroupsNav, title: 'Using grouped navigation' },
    { component: PageLayoutHorizontalNav, title: 'Using horizontal navigation' },
    { component: PageLayoutSimpleNav, title: 'Using simple navigation' },
    { component: PageLayoutVerticalNavCondensed, title: 'Using vertical navigation with condensed header' },
    { component: PageLayoutHorizontalNavCondensed, title: 'Using horizontal navigation with condensed header' }
  ],
  fullPageOnly: true
};
