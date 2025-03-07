import React from 'react';
import { AboutModal } from 'src/components/AboutModal';
import figma from '@figma/code-connect';

figma.connect(
  AboutModal,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2879-13973',
  {
    props: {
      productName: figma.string('Product name')
    },
    example: (props) => <AboutModal />
  }
);
