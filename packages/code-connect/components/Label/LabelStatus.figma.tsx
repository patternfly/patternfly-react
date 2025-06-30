import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

// Documentation for Label can be found at https://www.patternfly.org/components/label

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-488',
  {
    props: {
      // string
      text: figma.string('Text'),
      isCompact: figma.enum('Size', { Compact: true }),

      // enum
      variant: figma.enum('Type', { Outlined: 'outline' }),
      status: figma.enum('Status', {
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Info: 'info',
        Custom: 'custom'
      })
    },
    example: (props) => (
      <Label isCompact={props.isCompact} status={props.status} variant={props.variant}>
        {props.text}
      </Label>
    )
  }
);
