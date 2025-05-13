import figma from '@figma/code-connect';
import { AboutModal } from '@patternfly/react-core';

/**
 * PatternFly About Modal component integration for Figma Code Connect
 */

figma.connect(
  AboutModal,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=5047-695',
  {
    props: {
      // static
      backgroundImageSrc: '/assets/images/background.png',
      brandImageAlt: 'Brand Image Alt Text',
      brandImageSrc: 'Brand Image Source',
      trademark: 'Copyright © 2024',

      // string
      productName: figma.string('Product name'),

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
