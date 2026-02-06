import figma from '@figma/code-connect';
import { Switch } from '@patternfly/react-core';

// Documentation for Switch can be found at https://www.patternfly.org/components/switch

figma.connect(
  Switch,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-2878',
  {
    props: {
      // boolean
      hasCheckIcon: figma.boolean('Show check'),

      // enum
      isChecked: figma.enum('State', {
        On: true,
        'Disabled On': true
      }),
      isDisabled: figma.enum('State', {
        'Disabled On': true,
        'Disabled Off': true
      })
    },
    example: (props) => (
      <Switch
        id="switch"
        aria-label="Switch input"
        hasCheckIcon={props.hasCheckIcon}
        isDisabled={props.isDisabled}
        isChecked={props.isChecked}
        onChange={() => {}}
      />
    )
  }
);
