import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

// Documentation for DualListSelectorListItemTree can be found at https://www.patternfly.org/components/dual-list-selector

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116342',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DualListSelectorListItem>{props.children}</DualListSelectorListItem>
  }
);
