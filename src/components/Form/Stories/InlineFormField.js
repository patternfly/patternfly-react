/* eslint react/prop-types: 0 */

import React from 'react';
import { FormGroup, ControlLabel } from '../index';

export const InlineFormField = ({
  controlId,
  label,
  formControl,
  validationState,
  bsSize,
  showLabel,
  ...props
}) => {
  const controlProps = { ...props };

  if (bsSize) controlProps.bsSize = bsSize;
  if (validationState) controlProps.validationState = validationState;

  const formGroupProps = { key: controlId, controlId, ...controlProps };

  return (
    <FormGroup {...formGroupProps}>
      {showLabel && label && <ControlLabel>{label}</ControlLabel>}{' '}
      {formControl(controlProps)}
    </FormGroup>
  );
};
