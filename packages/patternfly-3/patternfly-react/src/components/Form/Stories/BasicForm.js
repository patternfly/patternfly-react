/* eslint react/prop-types: 0 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Spinner } from '../../Spinner';
import { Button } from '../../Button';
import { Form } from '../index';

export const BasicFormFields = [
  {
    controlId: 'name',
    label: 'Name',
    help: 'Enter your name',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="text" {...props} />
  },
  {
    controlId: 'address',
    label: 'Address',
    help: 'Enter your address',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="address" {...props} />
  },
  {
    controlId: 'city',
    label: 'City',
    help: 'Enter your city',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="text" {...props} />
  },
  {
    controlId: 'email',
    label: 'Email',
    help: 'Enter a valid email address',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="email" {...props} />
  },
  {
    controlId: 'phone',
    label: 'Phone',
    useFieldLevelHelp: true,
    content:
      "Please specify Country code <br> <a target='_blank' href='https://countrycode.org/'>Click here for a list of Country codes</a>",
    close: 'true',
    help: 'Enter a valid phone number',
    formControl: ({ validationState, ...props }) => <Form.FormControl type="phone" {...props} />
  },
  {
    controlId: 'url',
    label: 'My meeting URL',
    help: 'Enter a valid URL',
    formControl: ({ validationState, disabled, ...props }) => {
      const controlProps = { disabled };
      return (
        <Form.InputGroup {...props}>
          <Form.FormControl type="url" {...controlProps} />
          <Form.InputGroup.Button>
            <Button onClick={action('CopyUrl')} {...controlProps}>
              Copy URL
            </Button>
          </Form.InputGroup.Button>
        </Form.InputGroup>
      );
    }
  }
];

export const BasicFormButtons = [
  {
    text: 'Save',
    bsStyle: 'primary',
    onClick: action('Save')
  },
  {
    text: 'Cancel',
    bsStyle: 'default',
    onClick: action('Cancel')
  }
];

export const BasicFormSpinner = [
  <Spinner key="spinner" size="xs" loading inline />,
  ' ',
  <span key="text">Do not refresh this page. This request may take a minute...</span>
];

export const getBasicFormKnobs = () => ({
  validationState: select('Validation State', [null, 'success', 'warning', 'error']),
  bsSize: select('Size', [null, 'small', 'large']),
  showHelp: boolean('Show Help', true),
  disabled: boolean('Disabled', false),
  content: text(
    'Field Level Help Content',
    "Please specify Country code <br> <a target='_blank' href='https://countrycode.org/'>Click here for a list of Country codes</a>"
  ),
  close: select('Close Popover', ['true', 'false'], 'true')
});
