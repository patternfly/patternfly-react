import figma from '@figma/code-connect';
import { BackToTop } from '@patternfly/react-core';

/**
 * PatternFly BackToTop integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/back-to-top
 */

figma.connect(
  BackToTop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1521-958&m=dev',
  {
    props: {
      text: figma.string('Text')
    },
    example: (props) => <BackToTop title={props.text} />
  }
);
