import React from 'react';
import { BackgroundImage } from './BackgroundImage';
import figma from '@figma/code-connect';

figma.connect(
  BackgroundImage,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2879-13973',
  {
    props: {},
    example: (props) => <BackgroundImage src="/assets/images/pf-background.svg">teste</BackgroundImage>
  }
);
