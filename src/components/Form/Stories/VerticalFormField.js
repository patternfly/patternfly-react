/* eslint react/prop-types: 0 */

import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from '../index';

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
    <FormGroup {...formGroupProps}>
      {label && <ControlLabel>{label}</ControlLabel>}
      {formControl(controlProps)}
      {showHelp && help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};
