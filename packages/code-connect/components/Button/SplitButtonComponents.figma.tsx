import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3102-7154&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enum
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      leftOrRight: figma.enum('Left or Right', {
        Left: 'left',
        Right: 'right'
      }),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary'
      }),

      // string
      text: figma.string('Text')
    },
    example: (props) => (
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} variant={props.variant}>
        {props.text}
      </Button>
    )
  }
);
