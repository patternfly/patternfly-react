import figma from '@figma/code-connect';
import { Banner } from '@patternfly/react-core';

figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-937',
  {
    props: {
      text: figma.string('✏️ Center text'),
      status: figma.enum('Status', {
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Info: 'info',
        Custom: 'custom'
      })
    },
    example: (props) => (
      // Documentation for Banner can be found at https://www.patternfly.org/components/banner
      <Banner status={props.status}>{props.text}</Banner>
    )
  }
);
