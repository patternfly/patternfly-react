import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

// Documentation for Alert can be found at https://www.patternfly.org/components/alert

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2754',
  {
    props: {
      // strings
      description: figma.string('✏️ Title'),
      title: figma.string('✏️ Title'),

      // variants
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      <Alert isInline isPlain title={props.title} variant={props.variant} variantLabel={props.variant}>
        {props.description}
      </Alert>
    )
  }
);
