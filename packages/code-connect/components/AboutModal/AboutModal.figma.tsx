import figma from '@figma/code-connect';
import { AboutModal } from '@patternfly/react-core';

/**
 * PatternFly AccordionToggle integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/about-modal
 */

figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&t=15CEJpGgVui7qP5Q-11',
  {
    props: {
      // string
      productName: figma.string('Product name'),

      trademark: 'Copyright © 2024',
      brandImageSrc: 'Brand Image Source',
      brandImageAlt: 'Brand Image Alt Text',
      backgroundImageSrc: '/assets/images/background.png',

      // children
      children: figma.children('*')
    },
    example: (props) => (
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
