import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

// TODO: FIGMA: Define Icon left/right intent
// Ex: Are the icons different or just on different sides?
// The current configuration renders two icons separately

// TODO: FIGMA: Add count options to the button
// TODO: FIGMA: Add isRead options to the button
// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678',
  {
    props: {
      // string
      buttonText: figma.string('Button text'),

      // boolean
      hasIcon: figma.boolean('Icon left', {
        true: <PlusCircleIcon />,
        false: undefined
      }),
      iconPosition: figma.boolean('Icon right', {
        true: 'end',
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      size: figma.enum('Size', { Small: 'sm' }),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Warning: 'warning'
      }),

      // Count options - handle logic at props level
      countOptions: figma.boolean('Show Count', {
        true: {
          count: 0,
          isRead: false
        },
        false: undefined
      })
    },
    example: (props) => (
      <Button
        iconPosition={props.iconPosition}
        isDisabled={props.isDisabled}
        size={props.size}
        variant={props.variant}
        countOptions={props.countOptions}
        icon={props.hasIcon}
      >
        {props.buttonText}
      </Button>
    )
  }
);
