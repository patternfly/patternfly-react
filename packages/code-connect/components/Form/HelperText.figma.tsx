import figma from '@figma/code-connect';
import { FormHelperText, HelperText, HelperTextItem } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';

// Documentation for HelperText can be found at https://www.patternfly.org/components/form

figma.connect(
  HelperText,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=151-1670',
  {
    props: {
      variant: figma.enum('Type', {
        Defaut: 'default',
        Indeterminate: 'indeterminate',
        Warning: 'warning',
        Success: 'success',
        Error: 'error'
      }),
      icon: figma.boolean('Icon', {
        true: figma.enum('Type', {
          Defaut: <MinusIcon />,
          Indeterminate: <MinusIcon />,
          Warning: <ExclamationIcon />,
          Success: <CheckCircleIcon />,
          Error: <ExclamationTriangleIcon />
        }),
        false: undefined
      }),
      helperText: figma.string('Helper text')
    },
    example: (props) => (
      <FormHelperText>
        <HelperText>
          <HelperTextItem variant={props.variant} icon={props.icon}>
            {props.helperText}
          </HelperTextItem>
        </HelperText>
      </FormHelperText>
    )
  }
);
