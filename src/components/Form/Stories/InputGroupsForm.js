/* eslint react/prop-types: 0 */

import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Button, DropdownButton } from '../../Button';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { FormControl, InputGroup } from '../index';

export const InputGroupsFormFields = [
  {
    controlId: 'control-1',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" disabled={disabled} />
      </InputGroup>
    )
  },
  {
    controlId: 'control-2',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <FormControl type="text" disabled={disabled} />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    )
  },
  {
    controlId: 'control-3',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl type="text" disabled={disabled} />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    )
  },
  {
    controlId: 'control-4',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <FormControl type="text" disabled={disabled} />
        <InputGroup.Addon>
          <Icon name="music" />
        </InputGroup.Addon>
      </InputGroup>
    )
  },
  {
    controlId: 'control-5',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <InputGroup.Button>
          <Button disabled={disabled}>Before</Button>
        </InputGroup.Button>
        <FormControl type="text" disabled={disabled} />
      </InputGroup>
    )
  },
  {
    controlId: 'control-6',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <FormControl type="text" disabled={disabled} />
        <DropdownButton
          componentClass={InputGroup.Button}
          id="input-dropdown-addon"
          title="Action"
          disabled={disabled}
        >
          <MenuItem key="1">Item</MenuItem>
        </DropdownButton>
      </InputGroup>
    )
  },
  {
    controlId: 'control-7',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <InputGroup.Addon>
          <input type="radio" disabled={disabled} />
        </InputGroup.Addon>
        <FormControl type="text" disabled={disabled} />
      </InputGroup>
    )
  },
  {
    controlId: 'control-8',
    formControl: ({
      validationState = 'default',
      disabled = false,
      ...props
    }) => (
      <InputGroup {...props}>
        <InputGroup.Addon>
          <input type="checkbox" disabled={disabled} />
        </InputGroup.Addon>
        <FormControl type="text" disabled={disabled} />
      </InputGroup>
    )
  }
];

export const getInputGroupsFormKnobs = () => ({
  validationState: select('Validation State', [
    null,
    'success',
    'warning',
    'error'
  ]),
  bsSize: select('Size', [null, 'small', 'large']),
  disabled: boolean('Disabled', false)
});
