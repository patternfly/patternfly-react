import { DualListSelector } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  DualListSelector,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=29667-231683',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DualListSelector can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListSelector>{props.children}</DualListSelector>
    )
  }
);
