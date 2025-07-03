import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

// TODO: DESIGN: ClipboardCopy is using InputGroup improperly. There's no InputGroup wrapper for InputGroupItems

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75835',
  {
    props: {
      // enum
      isExpanded: figma.enum('State', { Expanded: true }),
      isReadOnly: figma.enum('State', { 'Read only': true }),
      expansion: figma.enum('State', {
        Expanded: 'expansion',
        false: undefined
      }),

      inputText: figma.nestedProps('Input Group Items', {
        value: figma.string('✏️ Input text')
      })
    },
    example: (props) => (
      // Documentation for ClipboardCopy can be found at https://www.patternfly.org/components/clipboard-copy
      <ClipboardCopy
        onCopy={() => {}}
        clickTip="Copied"
        hoverTip="Copy"
        isExpanded={props.isExpanded}
        isReadOnly={props.isReadOnly}
        variant={props.expansion}
      >
        {props.inputText.value}
      </ClipboardCopy>
    )
  }
);
