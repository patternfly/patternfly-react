/* eslint react/prop-types: 0 */

import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Form } from '../index';
import { FieldLevelHelp } from '../../FieldLevelHelp/index';

export const SupportedControlsFormFields = [
  {
    controlId: 'text',
    label: 'Text',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="text" {...props} />
  },
  {
    controlId: 'email',
    label: 'Email',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="email" {...props} />
  },
  {
    controlId: 'password',
    label: 'Password',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="password" {...props} />
  },
  {
    controlId: 'file',
    label: 'File',
    help: 'Help text',
    formControl: ({ validationState, bsSize, ...props }) => <Form.FormControl type="file" {...props} />
  },
  {
    controlId: 'checkbox',
    label: 'Checkbox',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.Checkbox {...props}>Checkbox</Form.Checkbox>
  },
  {
    controlId: 'radio',
    label: 'Radio',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.Radio {...props}>Radio</Form.Radio>
  },
  {
    controlId: 'checkboxGroup',
    label: 'Checkbox Group',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <div>
        <Form.Checkbox {...props} inline>
          1
        </Form.Checkbox>
        <Form.Checkbox {...props} inline>
          2
        </Form.Checkbox>
        <Form.Checkbox {...props} inline>
          3
        </Form.Checkbox>
      </div>
    )
  },
  {
    controlId: 'radioGroup',
    label: 'Radio Group',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <div>
        <Form.Radio {...props} name="radioGroup" inline>
          1
        </Form.Radio>
        <Form.Radio {...props} name="radioGroup" inline>
          2
        </Form.Radio>
        <Form.Radio {...props} name="radioGroup" inline>
          3
        </Form.Radio>
      </div>
    )
  },
  {
    controlId: 'FieldLevelHelp',
    label: 'Field Level Help',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <div>
        Phone
        <FieldLevelHelp {...props} content="More info here" inline />
      </div>
    )
  },
  {
    controlId: 'textarea',
    label: 'Textarea',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => <Form.FormControl componentClass="textarea" {...props} />
  },
  {
    controlId: 'static',
    label: 'Static',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <Form.FormControl.Static {...props}>email@example.com</Form.FormControl.Static>
    )
  }
];

export const getSupportedControlsFormKnobs = () => ({
  validationState: select('Validation State', [null, 'success', 'warning', 'error']),
  bsSize: select('Size', [null, 'small', 'large']),
  showHelp: boolean('Show Help', true),
  disabled: boolean('Disabled', false)
});
