import figma from '@figma/code-connect';
import { Switch } from '@patternfly/react-core';

// Documentation for Switch can be found at https://www.patternfly.org/components/switch

figma.connect(
  Switch,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3431',
  {
    props: {
      // enum
      ariaLabel: figma.enum('Type', { Standalone: 'Standalone input' }),
      isChecked: figma.enum('State', { On: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      labelPosition: figma.enum('Label placement', { Reversed: 'start' }),
      toggleLabel: figma.enum('Type', { 'With Label': figma.string('✏️ Toggle label') })
    },
    example: (props) => (
      <Switch
        aria-label={props.ariaLabel}
        id="switch"
        isChecked={props.isChecked}
        isDisabled={props.isDisabled}
        labelPosition={props.labelPosition}
        label={props.toggleLabel}
        name="switch"
        onChange={() => {}}
      />
    )
  }
);
