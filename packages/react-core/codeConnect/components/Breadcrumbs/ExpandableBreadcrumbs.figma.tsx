import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

/**
 * PatternFly BreadcrumbItem integration for Figma Code Connect
 */

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=19922-43760&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enums
      state: figma.enum('State', {
        Clicked: true
      })
    },
    example: (props) => <BreadcrumbItem isActive={props.state} isDropdown />
  }
);
