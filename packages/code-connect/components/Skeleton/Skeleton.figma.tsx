import figma from '@figma/code-connect';
import { Skeleton } from '@patternfly/react-core';

// Documentation for Skeleton can be found at https://www.patternfly.org/components/skeleton

figma.connect(
  Skeleton,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=790-288',
  {
    props: {
      size: figma.enum('Size', {
        S: 'sm',
        M: 'md',
        L: 'lg',
        XL: 'xl',
        '2XL': '2xl',
        '3XL': '3xl',
        '4XL': '4xl'
      }),
      type: figma.enum('Type', {
        Rectangle: 'square',
        Circle: 'circle'
      })
    },
    example: (props) => <Skeleton fontSize={props.size} shape={props.type} screenreaderText="Loading default content" />
  }
);
