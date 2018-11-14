import SimpleToolbarDemo from './examples/SimpleToolbarDemo';
import ComplexToolbarDemo from './examples/ComplexToolbarDemo';
import flexStyles from '@patternfly/patternfly-next/utilities/Flex/flex.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';

export default {
  title: 'Toolbar Demo',
  examples: [
    { component: SimpleToolbarDemo, title: 'Toolbar Simple Example', liveScope: { flexStyles, spacingStyles } },
    { component: ComplexToolbarDemo, title: 'Toolbar Complex Example', liveScope: { flexStyles, spacingStyles } }
  ]
};
