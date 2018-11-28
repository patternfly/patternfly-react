import PageLayoutDefaultNav from './examples/PageLayoutDefaultNav';
import PageLayoutExpandableNav from './examples/PageLayoutExpandableNav';
import PageLayoutGroupsNav from './examples/PageLayoutGroupsNav';
import PageLayoutHorizontalNav from './examples/PageLayoutHorizontalNav';
import PageLayoutSimpleNav from './examples/PageLayoutSimpleNav';

export default {
  title: 'Page Layout Demos',
  examples: [
    { component: PageLayoutDefaultNav, title: 'Using default navigation' },
    { component: PageLayoutExpandableNav, title: 'Using expandable navigation' },
    { component: PageLayoutGroupsNav, title: 'Using grouped navigation' },
    { component: PageLayoutHorizontalNav, title: 'Using horizontal navigation' },
    { component: PageLayoutSimpleNav, title: 'Using simple navigation' }
  ],
  fullPageOnly: true
};
