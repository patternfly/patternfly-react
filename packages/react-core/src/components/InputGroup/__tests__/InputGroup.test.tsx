import React from 'react';

import { render, screen } from '@testing-library/react';

import { InputGroup } from '../InputGroup';
import { TextInput } from '../../TextInput';
import { Label } from '@patternfly/react-core';

describe('InputGroup', () => {
  test('add aria-describedby to form-control if one of the non form-controls has id', () => {
    // In this test, TextInput is a form-control component and Label is not.
    // If Label has an id props, this should be used in aria-describedby.
    render(
      <InputGroup>
        <TextInput value="some data" aria-label="some text" />
        <Label id="label-id">
          hello
        </Label>
      </InputGroup>
    );
    expect(screen.getByLabelText('some text')).toHaveAttribute('aria-describedby', 'label-id');
  });
});
