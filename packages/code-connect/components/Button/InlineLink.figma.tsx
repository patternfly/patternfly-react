import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1291-2153&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // strings
      text: figma.string('Text'),

      // boolean
      hasIcon: figma.enum('Type', {
        'Inline link external': <ExternalLinkSquareAltIcon />,
        false: undefined
      }),

      // state
      isDisabled: figma.enum('State', { Disabled: true })
    },
    example: (props) => (
      <Button icon={props.hasIcon} isInline isDisabled={props.isDisabled} variant="link">
        {props.text}
      </Button>
    )
  }
);
