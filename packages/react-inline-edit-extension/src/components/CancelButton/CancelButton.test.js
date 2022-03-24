import React from 'react';
import { render } from '@testing-library/react';
import { CancelButton } from './index';

test('it renders properly', () => {
  const component = render(<CancelButton />);

  expect(component.container).toMatchSnapshot();
});
