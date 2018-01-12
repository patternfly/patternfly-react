/* eslint react/prop-types: 0 */

import React from 'react';
import { Form } from '../index';

export const VerticalFormField = ({
  controlId,
  label,
  help,
  formControl,
  validationState,
  bsSize,
  showHelp,
  ...props
}) => {
  const controlProps = { ...props };

  if (bsSize) controlProps.bsSize = bsSize;
  if (validationState) controlProps.validationState = validationState;

  const formGroupProps = { key: controlId, controlId, ...controlProps };

  return (
    <Form.FormGroup {...formGroupProps}>
      {label && <Form.ControlLabel>{label}</Form.ControlLabel>}
      {formControl(controlProps)}
      {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
    </Form.FormGroup>
  );
};
