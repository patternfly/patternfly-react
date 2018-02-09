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
  close,
  ...props
}) => {
  const controlProps = { ...props };

  if (bsSize) controlProps.bsSize = bsSize;
  if (validationState) controlProps.validationState = validationState;

  const formGroupProps = { key: controlId, controlId, ...controlProps };

  if (useFieldLevelHelp) {
    const htmlContent = (
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    );
    return (
      <Form.FormGroup {...formGroupProps}>
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          {label}
          <FieldLevelHelp content={htmlContent} close={close} />
        </Grid.Col>
        <Grid.Col sm={9}>
          {formControl(controlProps)}
          {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
        </Grid.Col>
      </Form.FormGroup>
    );
  }
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
