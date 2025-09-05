import figma from '@figma/code-connect';
import { FormFieldGroupExpandable } from '@patternfly/react-core';

// Documentation for FormFieldGroupExpandable can be found at https://www.patternfly.org/components/forms/field-group

figma.connect(
  FormFieldGroupExpandable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21566',
  {
    props: {
      children: figma.children(['Text inputs', 'HelperText'])
    },
    example: (props) => <FormFieldGroupExpandable>{props.children}</FormFieldGroupExpandable>
  }
);
