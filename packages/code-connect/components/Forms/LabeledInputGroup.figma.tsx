import figma from '@figma/code-connect';
import { FormGroup } from '@patternfly/react-core';

// Documentation for FormGroup can be found at https://www.patternfly.org/components/labeled-input-group

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-3526',
  {
    props: {
      // boolean
      helperText: figma.boolean('Helper text'),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for FormGroup can be found at https://www.patternfly.org/components/labeled-input-group
      <FormGroup>{props.children}</FormGroup>
    )
  }
);
