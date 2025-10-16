import figma from '@figma/code-connect';
import { ToggleGroupItem } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

// Documentation for Spinner can be found at https://www.patternfly.org/components/spinner

figma.connect(
  ToggleGroupItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2089-5606&m=dev',
  {
    props: {
      // boolean
      icon: figma.boolean('Has icon', {
        true: <BellIcon />,
        false: undefined
      }),
      text: figma.boolean('Has text', {
        true: figma.string('Text'),
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      isSelected: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <ToggleGroupItem
        buttonId="toggle-group-single"
        icon={props.icon}
        isDisabled={props.isDisabled}
        isSelected={props.isSelected}
        text={props.text}
        onChange={() => {}}
      />
    )
  }
);
