import figma from '@figma/code-connect';
import { AboutModal, Button, Content } from '@patternfly/react-core';

/**
 * PatternFly AboutModal integration for Figma Code Connect
 * @see https://www.patternfly.org/components/about-modal
 */

figma.connect(
  AboutModal,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2879-13973',
  {
    props: {
      productName: figma.string('Product name')
    },
    example: ({ productName }) => {
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
            <Content>
              <dl>
                <dt>CFME version</dt>
                <dd>5.5.3.4.20102789036450</dd>
                <dt>Cloudforms Version</dt>
                <dd>4.1</dd>
                <dt>Server name</dt>
                <dd>40DemoMaster</dd>
                <dt>User name</dt>
                <dd>Administrator</dd>
                <dt>User role</dt>
                <dd>EvmRole-super_administrator</dd>
                <dt>Browser version</dt>
                <dd>601.2</dd>
                <dt>Browser OS</dt>
                <dd>Mac</dd>
              </dl>
            </Content>
          </AboutModal>
        </>
      );
    }
  }
);
