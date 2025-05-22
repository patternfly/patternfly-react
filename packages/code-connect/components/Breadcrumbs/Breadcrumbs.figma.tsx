import figma from '@figma/code-connect';
import { Breadcrumb } from '@patternfly/react-core';

/**
 * PatternFly Breadcrumb integration for Figma Code Connect
 */

figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=3362-283&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Breadcrumb>{props.children}</Breadcrumb>
  }
);
