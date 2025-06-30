import figma from '@figma/code-connect';
import { InputGroup } from '@patternfly/react-core';

// TODO: DESIGN: InputGroupItems is not using TextInput, it's using text layers
// For this component to work properly, components should be nested within the InputGroupItem component
// TODO: DESIGN: Remove or populate `Text` and `Button` variants with actual components
// Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group

figma.connect(
  InputGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12700-4200',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <InputGroup>{props.children}</InputGroup>
  }
);
