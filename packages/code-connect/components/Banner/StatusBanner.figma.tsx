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
      }),
      screenReaderText: figma.enum('Status', {
        Success: 'Success banner screen reader text',
        Warning: 'Warning banner screen reader text',
        Danger: 'Danger banner screen reader text',
        Info: 'Info banner screen reader text',
        Custom: 'Custom banner screen reader text'
      })
    },
    example: (props) => (
      <Banner screenReaderText={props.screenReaderText} status={props.status}>
        {props.text}
      </Banner>
    )
  }
);
