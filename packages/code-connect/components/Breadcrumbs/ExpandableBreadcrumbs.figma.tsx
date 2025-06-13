import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=19922-43760',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for BreadcrumbItem can be found at https://www.patternfly.org/components/breadcrumb
      <BreadcrumbItem>{props.children}</BreadcrumbItem>
    )
  }
);
