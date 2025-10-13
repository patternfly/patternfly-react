import figma from '@figma/code-connect';
import { Radio } from '@patternfly/react-core';

// Documentation for Radio can be found at https://www.patternfly.org/components/form

figma.connect(Radio, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=157-3354', {
  props: {
    ariaLabel: figma.enum('Type', {
      Standalone: figma.string('Toggle label')
    }),
    label: figma.enum('Type', {
      'With label': figma.string('Toggle label')
    }),
    labelPosition: figma.enum('Label placement', {
      End: 'end',
      Reversed: 'start'
    }),
    isDisabled: figma.enum('State', {
      Disabled: true
    }),
    description: figma.boolean('Description', {
      true: 'Description text',
      false: undefined
    }),
    check: figma.nestedProps('Checkbox Input', {
      isChecked: figma.enum('State', {
        Checked: true,
        'Checked disabled': true,
        Mixed: 'null',
        'Mixed disabled': 'null'
      })
    })
  },
  example: (props) => (
    <Radio
      aria-label={props.ariaLabel}
      description={props.description}
      id="radio"
      isDisabled={props.isDisabled}
      label={props.label}
      labelPosition={props.labelPosition}
      name="radio"
    />
  )
});
