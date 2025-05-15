import { Banner } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/** Status banner example */
figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-937&m=dev',
  {
    props: {
      text: figma.string('✏️ Center text'),
      // enums
      status: figma.enum('Status', {
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Info: 'info',
        Custom: 'custom'
      })
    },
    example: (props) => <Banner status={props.status}>{props.text}</Banner>
  }
);
