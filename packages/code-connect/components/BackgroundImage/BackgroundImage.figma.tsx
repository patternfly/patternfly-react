import figma from '@figma/code-connect';
import { BackgroundImage } from '@patternfly/react-core';

figma.connect(
  BackgroundImage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2722-13543',
  {
    props: {},
    example: () => (
      // Documentation for BackgroundImage can be found at https://www.patternfly.org/components/background-image
      <BackgroundImage src="/assets/images/pf-background.svg" />
    )
  }
);
