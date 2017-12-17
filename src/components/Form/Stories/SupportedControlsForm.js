/* eslint react/prop-types: 0 */

import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { FormControl, Checkbox, Radio } from '../index';

export const SupportedControlsFormFields = [
  {
    controlId: 'text',
    label: 'Text',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <FormControl type="text" {...props} />
    )
  },
  {
    controlId: 'email',
    label: 'Email',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <FormControl type="email" {...props} />
    )
  },
  {
    controlId: 'password',
    label: 'Password',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <FormControl type="password" {...props} />
    )
  },
  {
    controlId: 'file',
    label: 'File',
    help: 'Help text',
    formControl: ({ validationState, bsSize, ...props }) => (
      <FormControl type="file" {...props} />
    )
  },
  {
    controlId: 'checkbox',
    label: 'Checkbox',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <Checkbox {...props}>Checkbox</Checkbox>
    )
  },
  {
    controlId: 'radio',
    label: 'Radio',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <Radio {...props}>Radio</Radio>
    )
  },
  {
    controlId: 'checkboxGroup',
    label: 'Checkbox Group',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <div>
        <Checkbox {...props} inline>
          1
        </Checkbox>
        <Checkbox {...props} inline>
          2
        </Checkbox>
        <Checkbox {...props} inline>
          3
        </Checkbox>
      </div>
    )
  },
  {
    controlId: 'radioGroup',
    label: 'Radio Group',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <div>
        <Radio {...props} name="radioGroup" inline>
          1
        </Radio>
        <Radio {...props} name="radioGroup" inline>
          2
        </Radio>
        <Radio {...props} name="radioGroup" inline>
          3
        </Radio>
      </div>
    )
  },
  {
    controlId: 'textarea',
    label: 'Textarea',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <FormControl componentClass="textarea" {...props} />
    )
  },
  {
    controlId: 'static',
    label: 'Static',
    help: 'Help text',
    formControl: ({ validationState, ...props }) => (
      <FormControl.Static {...props}>email@example.com</FormControl.Static>
    )
  }
];

export const getSupportedControlsFormKnobs = () => ({
  validationState: select('Validation State', [
    null,
    'success',
    'warning',
    'error'
  ]),
  bsSize: select('Size', [null, 'small', 'large']),
  showHelp: boolean('Show Help', true),
  disabled: boolean('Disabled', false)
});
