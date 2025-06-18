import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698',
  {
    props: {
      // string
      description: figma.string('✏️ Title'),
      title: figma.string('✏️ Title'),

      // boolean
      isExpandable: figma.boolean('Expandable'),

      // enum
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      })
    },
    example: (props) => (
      // Documentation for Alert can be found at https://www.patternfly.org/components/alert
      <Alert isExpandable={props.isExpandable} isInline title={props.title} variant={props.variant}>
        {props.description}
      </Alert>
    )
  }
);
