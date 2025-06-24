import figma from '@figma/code-connect';
import { JumpLinksItem } from '@patternfly/react-core';

// Documentation for JumpLinks can be found at https://www.patternfly.org/components/jump-links

figma.connect(
  JumpLinksItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5286-5330',
  {
    props: {
      // string
      tabText: figma.string('Tab Text'),

      // enum
      isActive: figma.enum('State', { Selected: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <JumpLinksItem href="#" isActive={props.isActive}>
        {props.tabText}
        {props.children}
      </JumpLinksItem>
    )
  }
);
