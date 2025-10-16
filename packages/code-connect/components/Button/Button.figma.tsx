import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-678', {
  props: {
    // string
    buttonText: figma.string('Text'),

    // boolean
    icon: figma.boolean('Icon at start', {
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
    isClicked: figma.enum('State', { Clicked: true }),
    id: figma.enum('Type', {
      Progress: 'loading-button',
      'Secondary progress': 'loading-button'
    }),
    isDanger: figma.enum('Type', {
      Danger: true,
      'Secondary danger': true
    }),
    isDisabled: figma.enum('State', { Disabled: true }),
    isExpanded: figma.enum('State', { Expanded: true }),
    isLoading: figma.enum('State', {
      Progress: {
        loadingProps: {
          spinnerAriaValueText: 'Spinner aria value text',
          spinnerAriaLabelledBy: 'Spinner aria labelled by',
          spinnerAriaLabel: 'Spinner aria label',
          isLoading: true
        },
        onClick: () => {}
      },
      'Secondary progress': {
        loadingProps: {
          spinnerAriaValueText: 'Spinner aria value text',
          spinnerAriaLabelledBy: 'Spinner aria labelled by',
          spinnerAriaLabel: 'Spinner aria label',
          isLoading: true
        },
        onClick: () => {}
      }
    }),
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
      iconPosition={props.icon}
      id={props.id}
      isClicked={props.isClicked}
      isDisabled={props.isDisabled}
      isDanger={props.isDanger}
      isLoading={props.isLoading}
      size={props.size}
      variant={props.variant}
    >
      {props.buttonText}
    </Button>
  )
});
