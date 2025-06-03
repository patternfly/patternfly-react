import figma from '@figma/code-connect';
import { BackgroundImage } from '@patternfly/react-core';

/**
 * PatternFly AccordionToggle integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/background-image
 */

figma.connect(
  BackgroundImage,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=5047-695',
  {
    props: {},
    example: () => <BackgroundImage src="/assets/images/pf-background.svg" />
  }
);
