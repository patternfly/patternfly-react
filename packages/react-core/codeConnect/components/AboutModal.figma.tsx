import React from 'react';
import { AboutModal } from 'src/components/AboutModal/AboutModal';
import figma from '@figma/code-connect';

figma.connect(
  AboutModal,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=2879-13973&m=dev',
  {
    // reserve variables for mapping
    // use props for Figma design file properties
    props: {
      productName: figma.string('Product name'),
      // use `Content` ubiquitiously
      figmaText: figma.textContent('Content')
    },
    example: (props) => (
      <AboutModal
        backgroundImageSrc="/assets/background_image_src.jpg"
        brandImageAlt="image alt text"
        brandImageSrc="/assets/brand_image_src.jpg"
        productName={props.productName}
        trademark={'Sample footer trademark text'}
      >
        {props.figmaText}
      </AboutModal>
    )
  }
);
