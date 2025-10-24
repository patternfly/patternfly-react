import figma from '@figma/code-connect';
import { Skeleton } from '@patternfly/react-core';

// Documentation for Skeleton can be found at https://www.patternfly.org/components/skeleton

figma.connect(
  Skeleton,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=790-288&',
  {
    props: {
      // enum
      shape: figma.enum('Type', {
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
    example: (props) => (
      <Skeleton fontSize={props.size} shape={props.shape} screenreaderText="Loading default content" />
    )
  }
);
