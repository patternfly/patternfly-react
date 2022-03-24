import React from 'react';
import { render } from '@testing-library/react';
import { Backdrop } from '../Backdrop';

test('Backdrop Test', () => {
  const view = render(<Backdrop>Backdrop</Backdrop>);
  expect(view.container).toMatchSnapshot();
});
