import figma from "@figma/code-connect"
import { AlertGroup } from '@patternfly/react-core';

/**
 * PatternFly AlertGroup component integration for Figma Code Connect
 */

figma.connect(
  AlertGroup,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2821&m=dev",
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <AlertGroup>{props.children}</AlertGroup>
  }
);
