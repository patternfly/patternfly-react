import figma from '@figma/code-connect';
import { BackToTop } from '@patternfly/react-core';

figma.connect(
  BackToTop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1521-958',
  {
    props: {
      // string
      text: figma.string('Text')
    },
    example: (props) => (
      // Documentation for BackToTop can be found at https://www.patternfly.org/components/back-to-top
      <BackToTop title={props.text} />
    )
  }
);
