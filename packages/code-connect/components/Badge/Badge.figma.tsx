import figma from '@figma/code-connect';
import { Badge } from '@patternfly/react-core';

figma.connect(
  Badge,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-1132&m=dev',
  {
    props: {
      // strings
      text: figma.string('Text'),

      // enums
      isRead: figma.enum('Type', { Read: true }),
      isDisabled: figma.enum('Type', {
        disabled: true
      })
    },
    example: (props) => (
      // Documentation for Badge can be found at https://www.patternfly.org/components/badge
      <Badge isRead={props.isRead} isDisabled={props.isDisabled} screenReaderText="Badge">
        {props.text}
      </Badge>
    )
  }
);
