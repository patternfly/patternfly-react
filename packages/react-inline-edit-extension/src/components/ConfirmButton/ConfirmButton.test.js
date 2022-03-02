import React from 'react';
import { render } from '@testing-library/react';
import { ConfirmButton } from './index';

test('it renders properly', () => {
  const component = render(<ConfirmButton />);

  expect(component.container).toMatchSnapshot();
});
