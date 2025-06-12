import figma from '@figma/code-connect';
import { Tab, TabTitleText, Timestamp } from '@patternfly/react-core';

figma.connect(
  Timestamp,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6161',
  {
    props: {
      // string
      tabText: figma.string('Tab Text'),

      // enum
      isDisabled: figma.enum('State', {
        Disabled: true
      })
    },
    example: (props) => (
      <Tab
        isDisabled={props.isDisabled}
        eventKey={0}
        title={<TabTitleText>{props.tabText}</TabTitleText>}
        aria-label="Default content"
      >
        {props.tabText}
      </Tab>
    )
  }
);
