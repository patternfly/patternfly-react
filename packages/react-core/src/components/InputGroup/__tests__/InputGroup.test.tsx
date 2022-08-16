import React from 'react';

import { render, screen } from '@testing-library/react';

import { InputGroup } from '../InputGroup';
import { Button } from '../../Button';
import { TextInput } from '../../TextInput';

describe('InputGroup', () => {
  test('add aria-describedby to form-control if one of the non form-controls has id', () => {
    // In this test, TextInput is a form-control component and Button is not.
    // If Button has an id props, this should be used in aria-describedby.
    render(
      <InputGroup>
        <TextInput value="some data" aria-label="some text" />
        <Button variant="primary" id="button-id">
          hello
        </Button>
      </InputGroup>
    );
    expect(screen.getByLabelText('some text')).toHaveAttribute('aria-describedby', 'button-id');
  });

  test('wont add aria-describedby to form-control if describedby is empty string', () => {
    // In this test, TextInput is a form-control component and Button is not.
    // If Button has an id props, this should be used in aria-describedby, but this
    // example has an empty aria-describedby to prevent that from happening.
    render(
      <InputGroup>
        <TextInput value="some data" aria-describedby="" aria-label="some text" />
        <Button id="button-id">
          hello
        </Button>
      </InputGroup>
    );
    expect(screen.getByLabelText('some text')).not.toHaveAttribute('aria-describedby');
  });

  test('wont override aria-describedby in form-control if describedby has value', () => {
    // In this test, TextInput is a form-control component and Button is not.
    // If Button has an id props, this should be used in aria-describedby, but this
    // example has a predefined aria-describedby to prevent that from happening
    render(
      <InputGroup>
        <TextInput value="some data" aria-describedby="myself" aria-label="some text" />
        <Button id="button-id">
          hello
        </Button>
      </InputGroup>
    );
    expect(screen.getByLabelText('some text')).toHaveAttribute('aria-describedby', 'myself');
  });
});
