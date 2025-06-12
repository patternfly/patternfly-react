import figma from '@figma/code-connect';
import { Spinner } from '@patternfly/react-core';

figma.connect(
  Spinner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=790-332&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      size: figma.enum('Size', {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl'
      })
    },
    example: (props) => (
      // Documentation for Spinner can be found at https://www.patternfly.org/components/spinner
      <Spinner aria-label="Loading..." size={props.size} />
    )
  }
);
