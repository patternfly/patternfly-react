import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2784&m=dev',
  {
    props: {
      // string
      title: figma.string('✏️ Title'),

      children: figma.children('*')
    },
    example: (props) => <Alert title={props.title}>{props.children}</Alert>
  }
);
