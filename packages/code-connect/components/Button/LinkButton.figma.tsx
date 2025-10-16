import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Link Button
figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-745', {
  props: {
    countOptions: figma.enum('Type', {
      'Button with count': {
        count: '00',
        isRead: false
      }
    }),
    isClicked: figma.enum('State', { Clicked: true }),
    isDisabled: figma.enum('State', { Disabled: true }),
    isDanger: figma.enum('Type', { Danger: true }),
    icon: figma.boolean('Icon at start', {
      true: figma.children('IconWrapper'),
      false: undefined
    }),
    iconPosition: figma.boolean('Icon at end', {
      true: 'end',
      false: undefined
    }),
    isLoading: figma.enum('Type', { Progress: true }),
    size: figma.enum('Size', { Small: 'sm' }),
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Warning: 'warning',
      'Secondary danger': 'secondary',
      'Secondary progress': 'secondary'
    })
  },
  example: (props) => (
    <Button
      countOptions={props.countOptions}
      icon={props.icon}
      iconPosition={props.iconPosition}
      isClicked={props.isClicked}
      isDisabled={props.isDisabled}
      isDanger={props.isDanger}
      isLoading={props.isLoading}
      size={props.size}
      variant={props.variant}
    >
      Button
    </Button>
  )
});
