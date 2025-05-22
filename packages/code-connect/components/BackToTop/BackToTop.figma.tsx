import { BackToTop } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  BackToTop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1521-958&m=dev',
  {
    props: {
      // strings
      text: figma.string('Text')
    },
    example: (props) => <BackToTop title={props.text} />
  }
);
