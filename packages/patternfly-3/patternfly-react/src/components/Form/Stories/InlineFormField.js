/* eslint react/prop-types: 0 */

import React from 'react';
import { Form } from '../index';

export const InlineFormField = ({ controlId, label, formControl, validationState, bsSize, showLabel, ...props }) => {
  const controlProps = { ...props };

  if (bsSize) controlProps.bsSize = bsSize;
  if (validationState) controlProps.validationState = validationState;

  const formGroupProps = { key: controlId, controlId, ...controlProps };

  return (
    <Form.FormGroup {...formGroupProps}>
      {showLabel && label && <Form.ControlLabel>{label}</Form.ControlLabel>} {formControl(controlProps)}
    </Form.FormGroup>
  );
};
