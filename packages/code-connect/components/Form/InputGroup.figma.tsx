import figma from '@figma/code-connect';
import { InputGroup } from '@patternfly/react-core';

// Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group

figma.connect(
  InputGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=12700-4200',
  {
    props: {
      children: figma.children('Input Group Items')
    },
    example: (props) => <InputGroup>{props.children}</InputGroup>
  }
);
