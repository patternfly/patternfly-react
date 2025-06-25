import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-678', {
  props: {
    // string
    buttonText: figma.string('Text'),

    // boolean
    icon: figma.boolean('Icon at end', {
      true: <ArrowRightIcon />,
      false: undefined
    }),
    iconPosition: figma.boolean('Icon at end', {
      true: 'end',
      false: undefined
    }),
    countOptions: figma.boolean('Count', {
      true: {
        count: '00',
        isRead: false,
        className: 'custom-badge-unread'
      }
    }),

    // enum
    isAriaDisabled: figma.enum('State', { Disabled: true }),
    isClicked: figma.enum('State', { Clicked: true }),
    isDanger: figma.enum('Type', {
      Danger: true,
      'Secondary danger': true
    }),
    isDisabled: figma.enum('State', { Disabled: true }),
    isExpanded: figma.enum('State', { Expanded: true }),
    isLoading: figma.enum('State', { Progress: true }),
    isWarning: figma.enum('State', { Warning: true }),
    size: figma.enum('Size', { Small: 'sm' }),
    state: figma.enum('State', {
      Read: 'read',
      Unread: 'unread',
      Attention: 'attention'
    }),
    tabIndex: 0,
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
      isLoading={props.isLoading}
      isDanger={props.isDanger}
      size={props.size}
      variant={props.variant}
    >
      {props.buttonText}
    </Button>
  )
});
