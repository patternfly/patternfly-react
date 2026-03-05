import figma from '@figma/code-connect';
import { Radio } from '@patternfly/react-core';

// Documentation for Radio can be found at https://www.patternfly.org/components/radio

figma.connect(
  Radio,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3354',
  {
    props: {
      // nested props
      isChecked: figma.nestedProps('Radio button', {
        checked: figma.enum('State', {
          Checked: true,
          'Checked Disabled': true
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
        'Checked Disabled': true,
        Disabled: true
      }),
      labelPlacement: figma.enum('Label placement', { Reversed: 'start' }),
      toggleLabel: figma.enum('Type', { 'With Label': figma.string('✏️ Toggle label') })
    },
    example: (props) => (
      <Radio
        aria-label={props.ariaLabel}
        description={props.description}
        id="radio"
        isChecked={props.isChecked.checked}
        isDisabled={props.isDisabled}
        labelPosition={props.labelPlacement}
        label={props.toggleLabel}
        name="radio"
        onChange={() => {}}
      />
    )
  }
);
