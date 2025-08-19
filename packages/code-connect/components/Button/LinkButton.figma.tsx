import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

// TODO: DESIGN: Define Icon left/right intent
// Ex: Are the icons different or just on different sides?
// The current configuration renders two icons separately
// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-745&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // string
      buttonText: figma.string('Text'),

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
      isClicked: figma.enum('State', { Clicked: true }),
      isDanger: figma.enum('Type', { Danger: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      size: figma.enum('Size', { Small: 'sm' }),

      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Button
        icon={props.hasIcon}
        isClicked={props.isClicked}
        isDanger={props.isDanger}
        isDisabled={props.isDisabled}
        iconPosition={props.iconPosition}
        size={props.size}
        variant="link"
      >
        {props.buttonText}
      </Button>
    )
  }
);
