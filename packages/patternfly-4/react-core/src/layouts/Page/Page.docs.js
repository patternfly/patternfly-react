import { Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import VerticalPage from './examples/VerticalPage';
import HorizontalPage from './examples/HorizontalPage';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Page',
  components: {
    Page,
    PageHeader,
    PageSidebar,
    PageSection
  },
  enumValues: {
    'Object.values(PageSectionVariants)': Object.values(PageSectionVariants)
  },
  examples: [
    { component: VerticalPage, title: 'Vertical Page Layout', getContainerProps },
    { component: HorizontalPage, title: 'Horizontal Page Layout', getContainerProps }
  ]
};
