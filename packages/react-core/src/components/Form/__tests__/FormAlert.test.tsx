import { render } from '@testing-library/react';
import { FormAlert } from '../FormAlert';
import React from 'react';

describe('Form Alert component', () => {
  test('should render form group required variant', () => {
    const view = render(
      <FormAlert></FormAlert>
    );
    expect(view.container).toMatchSnapshot();
  });
});
