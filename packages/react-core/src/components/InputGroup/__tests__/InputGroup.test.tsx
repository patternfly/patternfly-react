import React from 'react';

import { render, screen } from '@testing-library/react';

import { InputGroup } from '../InputGroup';
import { Button } from '../../Button';
import { TextInput } from '../../TextInput';

describe('InputGroup', () => {
  // Regression test for https://github.com/patternfly/patternfly-react/issues/9667
  test('wont add aria-describedby automatically to form-control', () => {
    render(
      <InputGroup>
        <TextInput aria-label="User password" />
        <Button variant="primary" id="show-password-toggler">
          Show
        </Button>
      </InputGroup>
    );

    const formControl = screen.getByLabelText("User password");
    expect(formControl).not.toHaveAttribute("aria-describedby");
  });
});
