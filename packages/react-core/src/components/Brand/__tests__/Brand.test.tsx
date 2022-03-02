import * as React from 'react';
import { render } from '@testing-library/react';
import { Brand } from '../Brand';

test('simple brand', () => {
  const view = render(<Brand alt="brand" />);
  expect(view.container).toMatchSnapshot();
});
