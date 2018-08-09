/* eslint react/prop-types: 0 */

import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Button, DropdownButton } from '../../Button';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { Form } from '../index';

export const InputGroupsFormFields = [
  {
    controlId: 'control-1',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.InputGroup.Addon>@</Form.InputGroup.Addon>
        <Form.FormControl type="text" disabled={disabled} />
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-2',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.FormControl type="text" disabled={disabled} />
        <Form.InputGroup.Addon>.00</Form.InputGroup.Addon>
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-3',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.InputGroup.Addon>$</Form.InputGroup.Addon>
        <Form.FormControl type="text" disabled={disabled} />
        <Form.InputGroup.Addon>.00</Form.InputGroup.Addon>
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-4',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.FormControl type="text" disabled={disabled} />
        <Form.InputGroup.Addon>
          <Icon name="music" />
        </Form.InputGroup.Addon>
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-5',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.InputGroup.Button>
          <Button disabled={disabled}>Before</Button>
        </Form.InputGroup.Button>
        <Form.FormControl type="text" disabled={disabled} />
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-6',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.FormControl type="text" disabled={disabled} />
        <DropdownButton
          componentClass={Form.InputGroup.Button}
          id="input-dropdown-addon"
          title="Action"
          disabled={disabled}
        >
          <MenuItem key="1">Item</MenuItem>
        </DropdownButton>
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-7',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.InputGroup.Addon>
          <input type="radio" disabled={disabled} />
        </Form.InputGroup.Addon>
        <Form.FormControl type="text" disabled={disabled} />
      </Form.InputGroup>
    )
  },
  {
    controlId: 'control-8',
    formControl: ({ validationState = 'default', disabled = false, ...props }) => (
      <Form.InputGroup {...props}>
        <Form.InputGroup.Addon>
          <input type="checkbox" disabled={disabled} />
        </Form.InputGroup.Addon>
        <Form.FormControl type="text" disabled={disabled} />
      </Form.InputGroup>
    )
  }
];

export const getInputGroupsFormKnobs = () => ({
  validationState: select('Validation State', [null, 'success', 'warning', 'error']),
  bsSize: select('Size', [null, 'small', 'large']),
  disabled: boolean('Disabled', false)
});
