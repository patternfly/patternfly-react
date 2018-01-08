/* eslint react/prop-types: 0 */

import React from 'react';
import { Col } from '../../Grid';
import { FormGroup, ControlLabel, HelpBlock } from '../index';

export const HorizontalFormField = ({
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
      <Col componentClass={ControlLabel} sm={3}>
        {label}
      </Col>
      <Col sm={9}>
        {formControl(controlProps)}
        {showHelp && help && <HelpBlock>{help}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};
