import React from 'react';
import { Avatar } from 'src/components/Avatar';
import figma from '@figma/code-connect/react';

figma.connect(
  Avatar,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=1561-4342&m=dev',
  {
    // reserve variables for mapping
    // use props for Figma design file properties
    props: {
      className: figma.className([
        // automate size class application
        figma.enum('Size', {
          XL: 'pf-m-xl',
          lg: 'pf-m-lg',
          med: 'pf-m-md',
          small: 'pf-m-sm'
        }),

        // automate bordered class application
        figma.boolean('Bordered', { true: 'pf-m-bordered', false: '' })
      ])
    },
    example: (props) => <Avatar className={props.className} />
  }
);
