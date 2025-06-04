import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

/**
 * PatternFly Alert integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/alert
 */

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2784&m=dev',
  {
    props: {
      // strings
      overflowMessage: figma.string('✏️ Title'),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Alert can be found at https://www.patternfly.org/components/alert
      <AlertGroup overflowMessage={props.overflowMessage}>{props.children}</AlertGroup>
    )
  }
);
