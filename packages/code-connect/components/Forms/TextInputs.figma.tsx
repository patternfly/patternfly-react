import figma from '@figma/code-connect';
import { TextInput } from '@patternfly/react-core';

// Documentation for TextInput can be found at https://www.patternfly.org/components/text-input

figma.connect(
  TextInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=154-71',
  {
    props: {
      // string
      value: figma.string('✏️ Input text'),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      isReadOnly: figma.enum('State', { 'Read Only': true }),
      isReadOnlyPlain: figma.enum('State', { 'ReadOnly - Plain': 'plain' }),
      validated: figma.enum('State', {
        Success: 'success',
        Error: 'error',
        Warning: 'warning'
      })
    },

    example: (props) => (
      <TextInput
        aria-label="Text input example"
        isDisabled={props.isDisabled}
        placeholder={props.value}
        type="text"
        validated={props.validated}
        readOnly={props.isReadOnly}
        readOnlyVariant={props.isReadOnlyPlain}
      />
    )
  }
);
