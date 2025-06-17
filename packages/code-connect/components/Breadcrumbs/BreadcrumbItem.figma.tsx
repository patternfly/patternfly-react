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
      to: figma.enum('State', {
        Link: '#',
        Hover: '#',
        'No link': undefined
      })
    },
    example: (props) => <BreadcrumbItem to={props.to}>{props.text}</BreadcrumbItem>
  }
);
