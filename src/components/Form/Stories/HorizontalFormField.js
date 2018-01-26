/* eslint react/prop-types: 0 */

import React from 'react';
import { Grid } from '../../Grid';
import { Form } from '../index';
import { FieldLevelHelp } from '../../FieldLevelHelp/index';

export const HorizontalFormField = ({
  controlId,
  label,
  help,
  formControl,
  validationState,
  bsSize,
  showHelp,
  useFieldLevelHelp,
  content,
  mode,
  close,
  ...props
}) => {
  const controlProps = { ...props };

  if (bsSize) controlProps.bsSize = bsSize;
  if (validationState) controlProps.validationState = validationState;
  if (mode) controlProps.mode = mode;
  if (content) controlProps.content = content;
  if (close) controlProps.close = close;

  const formGroupProps = { key: controlId, controlId, ...controlProps };

  if (useFieldLevelHelp) {
    return (
      <Form.FormGroup {...formGroupProps}>
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          <FieldLevelHelp
            mode={controlProps.mode}
            content={controlProps.content}
            close={controlProps.close}
          >
            {label}
          </FieldLevelHelp>
        </Grid.Col>
        <Grid.Col sm={9}>
          {formControl(controlProps)}
          {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
        </Grid.Col>
      </Form.FormGroup>
    );
  } else {
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
  }
};
