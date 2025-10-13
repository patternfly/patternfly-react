import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

// Documentation for CheckboxInput can be found at https://www.patternfly.org/components/form/checkbox

figma.connect(
  Checkbox,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=157-3078',
  {
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
      })
    },
    example: (props) => (
      <Checkbox
        aria-label={props.ariaLabel}
        description={props.description}
        id="checkbox"
        isDisabled={props.isDisabled}
        label={props.label}
        labelPosition={props.labelPosition}
        name="checkbox"
      />
    )
  }
);
