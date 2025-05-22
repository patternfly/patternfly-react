import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

/**
 * PatternFly DualListSelector component integration for Figma Code Connect
 */

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116327&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DualListSelectorListItem>{props.children}</DualListSelectorListItem>
  }
);
