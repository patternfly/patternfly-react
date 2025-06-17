import figma from '@figma/code-connect';
import { AboutModal } from '@patternfly/react-core';

figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&t=15CEJpGgVui7qP5Q-11',
  {
    props: {
      // static
      brandImageAlt: 'Brand Image Alt Text',
      brandImageSrc: 'Brand Image Source',
      backgroundImageSrc: '/assets/images/background.png',
      trademark: 'Copyright © 2024',

      // string
      productName: figma.string('Product name'),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for AboutModal can be found at https://www.patternfly.org/components/about-modal
      <AboutModal
        productName={props.productName}
        trademark={props.trademark}
        brandImageSrc={props.brandImageSrc}
        brandImageAlt={props.brandImageAlt}
        backgroundImageSrc={props.backgroundImageSrc}
      >
        {props.children}
      </AboutModal>
    )
  }
);
