import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

/**
 * PatternFly BreadcrumbsItem integration for Figma Code Connect
 */

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3362-74&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // strings
      text: figma.string('Text'),

      // enums
      type: figma.enum('Type', {
        Home: 'home',
        'Breadcrumb item': 'breadcrumb-item'
      }),
      state: figma.enum('State', {
        Link: 'link',
        Hover: undefined,
        'No link': 'no-link'
      })
    },
    example: (props) => <BreadcrumbItem text={props.text} type={props.type} state={props.state} />
  }
);
