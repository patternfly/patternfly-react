import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3362-74',
  {
    props: {
      // string
      text: figma.string('Text'),

      // enum
      // TODO: add isActive
      // isActive: figma.enum('State', { 'No link': true }),
      to: figma.enum('State', {
        Link: '#',
        Hover: '#',
        'No link': undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for BreadcrumbItem can be found at https://www.patternfly.org/components/breadcrumb
      <BreadcrumbItem to={props.to}>
        {props.text}
        {props.children}
      </BreadcrumbItem>
    )
  }
);
