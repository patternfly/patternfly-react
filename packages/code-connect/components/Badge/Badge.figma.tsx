import figma from '@figma/code-connect';
import { Badge } from '@patternfly/react-core';

/**
 * PatternFly Badge component integration for Figma Code Connect
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-1132&m=dev',
  {
    props: {
      // strings
      title: figma.string('Text'),

      // enums
      isRead: figma.enum('Type', {
        Read: true
      }),
      isDisabled: figma.enum('Type', {
        disabled: true
      })
    },
    example: (props) => <Badge title={props.title} isRead={props.isRead} isDisabled={props.isDisabled} />
  }
);
