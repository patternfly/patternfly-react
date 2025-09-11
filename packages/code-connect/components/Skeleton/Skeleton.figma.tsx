import figma from '@figma/code-connect';
import { Skeleton } from '@patternfly/react-core';

// Documentation for Skeleton can be found at https://www.patternfly.org/components/skeleton

figma.connect(
  Skeleton,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=790-288',
  {
    props: {
      // enum
      type: figma.enum('Type', {
        Default: undefined,
        Rectangle: undefined,
        Square: 'square',
        Circle: 'circle'
      }),
      size: figma.enum('Size', {
        S: 'sm',
        M: 'md',
        L: 'lg',
        XL: 'xl',
        '2XL': '2xl',
        '3XL': '3xl',
        '4XL': '4xl'
      })
    },
    example: (props) => <Skeleton fontSize={props.size} type={props.type} screenreaderText="Loading default content" />
  }
);
