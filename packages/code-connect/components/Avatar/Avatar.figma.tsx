import figma from '@figma/code-connect';
import { Avatar } from '@patternfly/react-core';

// Documentation for Avatar can be found at https://www.patternfly.org/components/avatar

figma.connect(
  Avatar,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=1561-4342',
  {
    props: {
      // boolean
      isBordered: figma.boolean('Bordered'),

      // enum
      size: figma.enum('Size', {
        small: 'sm',
        med: 'md',
        lg: 'lg',
        XL: 'xl'
      })
    },
    example: (props) => (
      <Avatar alt="Avatar" src="/assets/images/avatar.svg" isBordered={props.isBordered} size={props.size} />
    )
  }
);
