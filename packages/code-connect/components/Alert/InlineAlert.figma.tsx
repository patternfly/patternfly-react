import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev',
  {
    props: {
      title: figma.string('✏️ Title'),
      isExpandable: figma.boolean('Expandable', {
        true: true,
        false: false
      }),
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      })
    },
    example: (props) => <Alert isExpandable={props.isExpandable} isInline title={props.title} variant={props.variant} />
  }
);
