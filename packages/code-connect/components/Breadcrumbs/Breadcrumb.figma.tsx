import figma from '@figma/code-connect';
import { Breadcrumb } from '@patternfly/react-core';

// Documentation for Breadcrumb can be found at https://www.patternfly.org/components/breadcrumb

figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=3362-283',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Breadcrumb>{props.children}</Breadcrumb>
  }
);
