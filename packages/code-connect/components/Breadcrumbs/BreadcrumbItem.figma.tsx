import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

// Documentation for BreadcrumbItem can be found at https://www.patternfly.org/components/breadcrumb

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3362-74',
  {
    props: {
      // string
      text: figma.string('Text'),

      // enum
      isActive: figma.enum('State', {
        'No link': true
      }),
      to: figma.enum('State', {
        Link: '#',
        Hover: '#'
      })
    },
    example: (props) => (
      <BreadcrumbItem to={props.to} isActive={props.isActive}>
        {props.text}
      </BreadcrumbItem>
    )
  }
);
