import PageLayoutDefaultNav from './examples/PageLayoutDefaultNav';
import PageLayoutExpandableNav from './examples/PageLayoutExpandableNav';
import PageLayoutGroupsNav from './examples/PageLayoutGroupsNav';
import PageLayoutHorizontalNav from './examples/PageLayoutHorizontalNav';
import PageLayoutSimpleNav from './examples/PageLayoutSimpleNav';
import PageLayoutManualNav from './examples/PageLayoutManualNav';

export default {
  title: 'Page Layout Demos',
  description: `<br />
    All but the last example set the isManagedSidebar prop on the &lt;Page&gt; component to have the sidebar 
    automatically close for smaller screen widths. You can also manually control this behavior by not adding the 
    isManagedSidebar prop and instead:<br />
    <ol>
      <li>Add an onNavToggle callback to &lt;PageHeader&gt;</li>
      <li>Pass in a boolean into the isNavOpen prop to &lt;PageSidebar&gt;</li>
    </ol>
    The last example demonstrates this.`,
  examples: [
    { component: PageLayoutDefaultNav, title: 'Using default navigation' },
    { component: PageLayoutExpandableNav, title: 'Using expandable navigation' },
    { component: PageLayoutGroupsNav, title: 'Using grouped navigation' },
    { component: PageLayoutHorizontalNav, title: 'Using horizontal navigation' },
    { component: PageLayoutSimpleNav, title: 'Using simple navigation' },
    { component: PageLayoutManualNav, title: 'Programmatically toggle the sidebar' }
  ],
  fullPageOnly: true
};
