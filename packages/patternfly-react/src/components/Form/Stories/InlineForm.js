/* eslint react/prop-types: 0 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';
import { Form } from '../index';

export const InlineFormFields = [
  {
    controlId: 'email',
    label: 'Email',
    placeholder: 'Email',
    formControl: props => <Form.FormControl type="email" {...props} />
  },
  {
    controlId: 'password',
    label: 'Password',
    placeholder: 'Password',
    formControl: props => <Form.FormControl type="password" {...props} />
  }
];

export const InlineFormButtons = [
  {
    text: 'Log In',
    bsStyle: 'primary',
    onClick: action('Login')
  }
];

export const getInlineFormKnobs = () => ({
  bsSize: select('Size', [null, 'small', 'large']),
  disabled: boolean('Disabled', false),
  showLabel: boolean('Show Labels', false)
});
