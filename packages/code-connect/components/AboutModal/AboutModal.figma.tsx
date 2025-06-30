import figma from '@figma/code-connect';
import { AboutModal, Button } from '@patternfly/react-core';

/**
 * PatternFly AboutModal integration for Figma Code Connect
 * @see https://www.patternfly.org/components/about-modal
 */

figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&t=15CEJpGgVui7qP5Q-11',
  {
    props: {
      productName: figma.string('Product name', 'Product name'),
      children: figma.children('*')
    },
    example: ({ productName, children }) => {
      /* eslint-disable */
      const [isOpen, setIsOpen] = React.useState(false);
      /* eslint-enable */

      return (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Show about modal
          </Button>
          <AboutModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            productName={productName}
            trademark="Copyright © 2024"
            brandImageSrc="/assets/images/brand.svg"
            brandImageAlt="Brand Image Alt Text"
            backgroundImageSrc="/assets/images/background.png"
          >
            {children}
          </AboutModal>
        </>
      );
    }
  }
);
