import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

/**
 * PatternFly Alert integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/alert
 */

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2821&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <AlertGroup isToast isLiveRegion hasAnimations>
        {props.children}
      </AlertGroup>
    )
  }
);
