import { Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import VerticalPage from './examples/VerticalPage';
import HorizontalPage from './examples/HorizontalPage';

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
  examples: [VerticalPage, HorizontalPage]
};
