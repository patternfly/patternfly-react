import figma from '@figma/code-connect';
import { ActionList } from '@patternfly/react-core';

/**
 * PatternFly ActionList integration for Figma Code Connect
 */

figma.connect(
  ActionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6780-15839&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <ActionList>{props.children}</ActionList>
  }
);
