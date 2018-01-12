/* eslint react/prop-types: 0 */

import React from 'react';
import { Grid } from '../../Grid';
import { Form } from '../index';

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
    <Form.FormGroup {...formGroupProps}>
      <Grid.Col componentClass={Form.ControlLabel} sm={3}>
        {label}
      </Grid.Col>
      <Grid.Col sm={9}>
        {formControl(controlProps)}
        {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
      </Grid.Col>
    </Form.FormGroup>
  );
};
