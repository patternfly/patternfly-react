import figma from '@figma/code-connect';
import { AboutModal } from '@patternfly/react-core';

/**
 * PatternFly About Modal component integration for Figma Code Connect
 */

figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&t=15CEJpGgVui7qP5Q-11',
  {
    props: {
      // string
      productName: figma.string('Product name'),

      children: figma.children('*')
    },
    example: (props) => (
      <AboutModal
        productName={props.productName}
        trademark="Copyright © 2024"
        brandImageSrc="Brand Image Source"
        brandImageAlt="Brand Image Alt Text"
        backgroundImageSrc="/assets/images/background.png"
      >
        {props.children}
      </AboutModal>
    )
  }
);
