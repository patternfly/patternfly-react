import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSection } from '@patternfly/react-core';
import SimpleToolbar from './examples/SimpleToolbar';
import SimpleToolbarSection from './examples/SimpleToolbarSection';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Toolbar',
  components: {
    Toolbar,
    ToolbarGroup,
    ToolbarItem,
    ToolbarSection
  },
  examples: [
    { component: SimpleToolbar, title: 'Simple Toolbar Layout', getContainerProps },
    { component: SimpleToolbarSection, title: 'Toolbar with sections', getContainerProps }
  ]
};
