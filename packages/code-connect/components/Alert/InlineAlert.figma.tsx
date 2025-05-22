import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev',
  {
    props: {
      // booleans
      description: figma.boolean('Description', {
        true: figma.string('✏️ Description'),
        false: undefined
      }),
      hasActions: figma.boolean('Actions'),
      isDismissable: figma.boolean('Dismissable'),
      isExpandable: figma.boolean('Expandable'),

      // strings
      title: figma.string('✏️ Title'),

      // enums
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      })
    },
    example: (props) => (
      <Alert
        actionClose={props.isDismissable}
        actionLinks={props.hasActions}
        isExpandable={props.isExpandable}
        isInline
        title={props.title}
        variant={props.variant}
      >
        {props.description}
      </Alert>
    )
  }
);
