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
        {label && (
          <Form.ControlLabel>
            <FieldLevelHelp
              mode={controlProps.mode}
              content={controlProps.content}
              close={controlProps.close}
            >
              {label}
            </FieldLevelHelp>
          </Form.ControlLabel>
        )}
        {formControl(controlProps)}
        {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
      </Form.FormGroup>
    );
  } else {
    return (
      <Form.FormGroup {...formGroupProps}>
        {label && <Form.ControlLabel>{label}</Form.ControlLabel>}
        {formControl(controlProps)}
        {showHelp && help && <Form.HelpBlock>{help}</Form.HelpBlock>}
      </Form.FormGroup>
    );
  }
};
