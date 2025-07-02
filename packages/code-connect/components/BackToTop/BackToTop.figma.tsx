import figma from '@figma/code-connect';
import { BackToTop } from '@patternfly/react-core';

// Documentation for BackToTop can be found at https://www.patternfly.org/components/back-to-top

figma.connect(
  BackToTop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1521-958',
  {
    props: {
      text: figma.string('Text')
    },
    example: (props) => <BackToTop isAlwaysVisible title={props.text} />
  }
);
