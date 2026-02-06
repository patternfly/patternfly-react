import figma from '@figma/code-connect';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

// Documentation for HelperText can be found at https://www.patternfly.org/components/helper-text

figma.connect(
  HelperText,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=151-1670&t=lyan2LLnXsDppzjo-11',
  {
    props: {
      // string
      helperText: figma.string('✏️ Helper text'),

      // enum
      variant: figma.enum('Type', {
        Default: undefined,
        Indeterminate: 'indeterminate',
        Success: 'success',
        Warning: 'warning',
        Error: 'error'
      })
    },
    example: (props) => (
      <HelperText>
        <HelperTextItem variant={props.variant}>{props.helperText}</HelperTextItem>
      </HelperText>
    )
  }
);
