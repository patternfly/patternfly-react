import { Page, PageLayouts, PageSection, PageSectionVariants } from '@patternfly/react-core';
import VerticalPage from './examples/VerticalPage';
import HorizontalPage from './examples/HorizontalPage';

export default {
  title: 'Page',
  components: {
    Page,
    PageSection
  },
  enumValues: {
    'Object.values(PageLayouts)': Object.values(PageLayouts),
    'Object.values(PageSectionVariants)': Object.values(PageSectionVariants)
  },
  examples: [VerticalPage, HorizontalPage]
};
