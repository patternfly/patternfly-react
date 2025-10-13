import figma from '@figma/code-connect';
import { NumberInput } from '@patternfly/react-core';

// Documentation for NumberInput can be found at https://www.patternfly.org/components/number-input

figma.connect(
  NumberInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=176-3706',
  {
    props: {
      value: '90',

      // boolean
      unitPosition: figma.boolean('Unit at end', {
        true: 'before',
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('Status', { Disabled: true }),
      unit: figma.enum('Type', { 'With unit': '%' }),
      validated: figma.enum('Status', {
        Warning: 'warning',
        Error: 'error',
        Success: 'success'
      })
    },
    example: (props) => (
      <NumberInput
        inputAriaLabel="number input"
        inputName="input"
        isDisabled={props.isDisabled}
        max={100}
        min={0}
        minusBtnAriaLabel="minus"
        onMinus={() => {}}
        onPlus={() => {}}
        onChange={() => {}}
        plusBtnAriaLabel="plus"
        unit={props.unit}
        unitPosition={props.unitPosition}
        validated={props.validated}
        value={props.value}
      />
    )
  }
);
