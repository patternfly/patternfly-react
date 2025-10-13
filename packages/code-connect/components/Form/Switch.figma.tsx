import figma from '@figma/code-connect';
import { Switch } from '@patternfly/react-core';

// Documentation for Switch can be found at https://www.patternfly.org/components/form/switch

figma.connect(
  Switch,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/9HiAevBhEc2iYY9rxZtovA/PatternFly-6--Components?node-id=157-3431&m=dev',
  {
    props: {
      ariaLabel: figma.enum('Type', {
        'With label': 'Togglable option',
        'Without label': 'Togglable option for no visible label'
      }),
      hasCheckIcon: figma.nestedProps('Switches', {
        true: figma.boolean('Show check')
      }),
      isChecked: figma.enum('State', {
        On: true,
        Off: false
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),
      isReversed: figma.enum('Label placement', {
        Reversed: true
      }),
      label: figma.enum('Type', {
        'With label': 'Togglable option',
        'Without label': 'Togglable option for no visible label'
      })
    },
    example: (props) => (
      <Switch
        id="switch"
        aria-label={props.ariaLabel}
        hasCheckIcon={props.hasCheckIcon}
        isChecked={props.isChecked}
        isDisabled={props.isDisabled}
        isReversed={props.isReversed}
        label={props.label}
        onChange={() => {}}
      />
    )
  }
);
