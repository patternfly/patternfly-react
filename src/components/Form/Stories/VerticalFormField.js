/* eslint react/prop-types: 0 */

import React from 'react';
import { Form } from '../index';
import { FieldLevelHelp } from '../../FieldLevelHelp/index';

export const VerticalFormField = ({
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
        {label && <Form.ControlLabel>{label}</Form.ControlLabel>}
        <Form.ControlLabel>
          <FieldLevelHelp content={htmlContent} close={close} />
        </Form.ControlLabel>
        {formControl(controlProps)}
        {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
      </Form.FormGroup>
    );
  }
  return (
    <Form.FormGroup {...formGroupProps}>
      {label && <Form.ControlLabel>{label}</Form.ControlLabel>}
      {formControl(controlProps)}
      {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
    </Form.FormGroup>
  );
};
