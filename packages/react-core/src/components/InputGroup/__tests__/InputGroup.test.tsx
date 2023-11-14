import React from 'react';

import { render, screen } from '@testing-library/react';

import { InputGroup } from '../InputGroup';
import { InputGroupItem } from '../InputGroupItem';
import { Button } from '../../Button';
import { TextInput } from '../../TextInput';

describe('InputGroup', () => {
  // Regression test for https://github.com/patternfly/patternfly-react/issues/9667
  test('wont add aria-describedby automatically to form-control', () => {
    render(
      <InputGroup>
        <InputGroupItem>
          <TextInput aria-label="User password" />
        </InputGroupItem>
        <InputGroupItem>
          <Button variant="control" id="show-password-toggler">
            Show
          </Button>
        </InputGroupItem>
      </InputGroup>
    );

    const formControl = screen.getByLabelText('User password');
    expect(formControl).not.toHaveAttribute('aria-describedby');
  });
});
