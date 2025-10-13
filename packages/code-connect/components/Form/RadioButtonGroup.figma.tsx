import figma from '@figma/code-connect';
import { FormGroup } from '@patternfly/react-core';

// Documentation for RadioButtonGroup can be found at https://www.patternfly.org/components/form

figma.connect(
  FormGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1577-4497&m=dev',
  {
    props: {
      label: figma.boolean('Label', {
        true: 'Input label',
        false: undefined
      }),
      children: figma.children('*')
    },
    example: (props) => <FormGroup label={props.label}>{props.children}</FormGroup>
  }
);
