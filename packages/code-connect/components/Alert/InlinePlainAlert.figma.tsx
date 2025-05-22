import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2754&m=dev',
  {
    props: {
      // strings
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
      <Alert variant={props.variant} title={props.title} variantLabel={props.variant} isInline isPlain />
    )
  }
);
