import figma from '@figma/code-connect';
import { FormGroup } from '@patternfly/react-core';

// Documentation for FormGroup can be found at https://www.patternfly.org/components/text-input

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-788',
  {
    props: {
      // nested props
      label: figma.nestedProps('Input Label', { text: figma.string('✏️ Label text') }),

      // children
      children: figma.children('Text inputs')
    },

    example: (props) => (
      <FormGroup label={props.label.text} type="text" aria-label="Text input example">
        {props.children}
      </FormGroup>
    )
  }
);
