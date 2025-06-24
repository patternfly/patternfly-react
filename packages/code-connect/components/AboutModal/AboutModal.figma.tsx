import figma from '@figma/code-connect';
import { AboutModal, Button } from '@patternfly/react-core';

// Documentation for AboutModal can be found at https://www.patternfly.org/components/about-modal
figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&t=15CEJpGgVui7qP5Q-11',
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
    example: (props) => {
      <>
        <Button variant="primary" onClick={() => {}}>
          Show about modal
        </Button>
        <AboutModal
          backgroundImageSrc={props.backgroundImageSrc}
          brandImageSrc={props.brandImageSrc}
          brandImageAlt={props.brandImageAlt}
          isOpen={true || false}
          onClose={() => {}}
          productName={props.productName}
          trademark={props.trademark}
        >
          {props.children}
        </AboutModal>
      </>;
    }
  }
);
