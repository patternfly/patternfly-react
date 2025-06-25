import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

// Documentation for Checkbox can be found at https://www.patternfly.org/components/forms/checkbox

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3078',
  {
    props: {
      // nested props
      isChecked: figma.nestedProps('Checkbox Input', {
        checked: figma.enum('State', {
          Checked: true,
          'Checked Disabled': true
        }),
        mixed: figma.enum('State', {
          Mixed: 'null',
          'Mixed disabled': 'null'
        })
      }),

      // boolean
      description: figma.boolean('Description', {
        true: figma.string('✏️ Description'),
        false: undefined
      }),

      // enum
      ariaLabel: figma.enum('Type', { Standalone: 'Standalone input' }),
      isDisabled: figma.enum('State', {
        'Unchecked Disabled': true,
        'Checked Disabled': true,
        'Mixed disabled': true
      }),
      labelPlacement: figma.enum('Label placement', { Reversed: 'start' }),
      toggleLabel: figma.enum('Type', { 'With Label': figma.string('✏️ Toggle label') })
    },
    example: (props) => (
      <Checkbox
        aria-label={props.ariaLabel}
        description={props.description}
        id="check"
        isChecked={props.isChecked.checked}
        isDisabled={props.isDisabled}
        labelPosition={props.labelPlacement}
        label={props.toggleLabel}
        name="check"
        onChange={() => {}}
      />
    )
  }
);
