import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

// CTA Button
figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-778', {
  props: {
    buttonText: figma.string('Text'),
    icon: figma.enum('Type', { Inline: <ArrowRightIcon /> }),
    iconPosition: figma.enum('Type', { Inline: 'end' }),
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Link: 'link'
    })
  },
  example: (props) => (
    <Button icon={props.icon} iconPosition={props.iconPosition} variant={props.variant} size="lg">
      {props.buttonText}
    </Button>
  )
});
