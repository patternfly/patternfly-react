import figma from '@figma/code-connect';
import { BackgroundImage } from '@patternfly/react-core';

// Documentation for BackgroundImage can be found at https://www.patternfly.org/components/background-image

figma.connect(
  BackgroundImage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2722-13543',
  {
    example: () => <BackgroundImage src="/assets/images/pf-background.svg" />
  }
);
