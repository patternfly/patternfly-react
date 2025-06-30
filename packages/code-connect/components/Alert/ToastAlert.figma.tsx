import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

// Documentation for Alert can be found at https://www.patternfly.org/components/alert

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2587',
  {
    props: {
      // string
      description: figma.string('✏️ Title'),
      title: figma.string('✏️ Title'),

      // boolean
      isExpandable: figma.boolean('Expandable'),

      // enum
      variant: figma.enum('Type', {
        Custom: 'custom',
        Danger: 'danger',
        Info: 'info',
        Success: 'success',
        Warning: 'warning'
      })
    },
    example: (props) => (
      <Alert
        isExpandable={props.isExpandable}
        title={props.title}
        variant={props.variant}
        hasAnimations
        isToast
        isLiveRegion
      >
        {props.description}
      </Alert>
    )
  }
);
