import figma from '@figma/code-connect';
import { Banner } from '@patternfly/react-core';

// Documentation for Banner can be found at https://www.patternfly.org/components/banner

figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-937',
  {
    props: {
      // string
      text: figma.string('✏️ Center text'),

      // enum
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
