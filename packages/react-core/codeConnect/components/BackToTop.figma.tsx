import React from 'react';
import { BackToTop } from 'src/components/BackToTop';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=1521-958&m=dev',
  {
    props: {
      title: figma.string('Text')
    },
    example: ({ title }) => <BackToTop title={title} />
  }
);
