import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75835&m=dev',
  {
    props: {
      // enum
      isActive: figma.enum('State', { Active: true }),
      isReadOnly: figma.enum('State', { 'Read only': true }),
      isExpanded: figma.enum('State', { Expanded: true }),
      expansion: figma.enum('State', {
        Expanded: 'expansion',
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for ClipboardCopy can be found at https://www.patternfly.org/components/clipboard-copy
      <ClipboardCopy
        isReadOnly={props.isReadOnly}
        variant={props.expansion}
        isExpanded={props.isExpanded}
        isActive={props.isActive}
      >
        {props.children}
      </ClipboardCopy>
    )
  }
);
