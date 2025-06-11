import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-488',
  {
    props: {
      text: figma.string('Text'),
      status: figma.enum('State', {
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success',
        Info: 'info',
        Custom: 'custom'
      }),
      type: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outline'
      }),
      isCompact: figma.enum('Size', { Compact: true })
    },
    example: (props) => (
      // Documentation for Label can be found at https://www.patternfly.org/components/label
      <Label isCompact={props.isCompact} status={props.status} variant={props.type}>
        {props.text}
      </Label>
    )
  }
);
