import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Documentation for Button can be found at https://www.patternfly.org/components/button
figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-778&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // string
      text: figma.string('Text'),

      // enum
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary'
      }),
      isInline: figma.enum('Type', { Inline: true })
    },
    example: (props) => (
      <Button size="lg" variant={props.variant}>
        {props.text}
      </Button>
    )
  }
);
