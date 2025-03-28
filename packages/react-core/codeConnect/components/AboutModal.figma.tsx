import { AboutModal } from '@patternfly/react-core/dist/js/components/AboutModal';
import figma from '@figma/code-connect';

figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2879-13973&m=dev',
  {
    // reserve variables for mapping
    // use props for Figma design file properties
    props: {
      productName: figma.string('Product name'),

      // use `Content` ubiquitiously
      children: figma.children('*')
    },
    example: (props) => (
      <AboutModal
        backgroundImageSrc="/assets/background_image_src.jpg"
        brandImageAlt="image alt text"
        brandImageSrc="/assets/brand_image_src.jpg"
        productName={props.productName}
        trademark={'Sample footer trademark text'}
      >
        {props.children}
      </AboutModal>
    )
  }
);
