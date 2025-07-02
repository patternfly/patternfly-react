import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-736&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enum
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true }),

      // variant
      hasNoPadding: figma.enum('Type', { 'No padding': true })
    },
    example: (props) => (
      <Button
        aria-label="Icon button"
        hasNoPadding={props.hasNoPadding}
        icon={<TimesIcon />}
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        variant="plain"
      />
    )
  }
);
