import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Block Button
figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-800', {
  props: {
    buttonText: figma.string('Text'),
    isClicked: figma.enum('State', { Clicked: true }),
    isDisabled: figma.enum('State', { Disabled: true }),
    iconPosition: figma.boolean('Icon at end', { true: 'end', false: undefined })
  },
  example: (props) => (
    <Button isClicked={props.isClicked} isDisabled={props.isDisabled} iconPosition={props.iconPosition} isBlock>
      {props.buttonText}
    </Button>
  )
});
