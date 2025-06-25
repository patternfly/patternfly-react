import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Inline Link
figma.connect(
  Button,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1291-2153',
  {
    props: {
      buttonText: figma.string('Text'),
      isClicked: figma.enum('State', { Visited: 'clicked' }),
      isDisabled: figma.enum('State', { Disabled: true })
    },
    example: (props) => (
      <Button
        component="span"
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        isInline={true}
        variant="link"
        onKeyDown={() => {}}
      >
        {props.buttonText}
      </Button>
    )
  }
);
