import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2754',
  {
    props: {
      // strings
      title: figma.string('✏️ Title'),
      description: figma.string('✏️ Title'),

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
      // Documentation for Alert can be found at https://www.patternfly.org/components/alert
      <Alert variant={props.variant} title={props.title} variantLabel={props.variant} isInline isPlain>
        {props.description}
      </Alert>
    )
  }
);
