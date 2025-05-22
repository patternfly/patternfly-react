import figma from '@figma/code-connect';
import { DualListSelectorPane } from '@patternfly/react-core';

/**
 * PatternFly DualListSelectorHeader component integration for Figma Code Connect
 */

figma.connect(
  DualListSelectorPane,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172&m=dev',
  {
    props: {
      // string
      headerText: figma.string('Header text'),
      itemInformation: figma.string('Item information'),

      children: figma.children('*')
    },
    example: (props) => <DualListSelectorPane title={props.headerText}>{props.children}</DualListSelectorPane>
  }
);
