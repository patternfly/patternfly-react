import React from 'react';
import { render } from '@testing-library/react';
import { TabButton } from '../TabButton';

test('should render tab button', () => {
  const view = render(<TabButton>Tab button</TabButton>);
  expect(view.container).toMatchSnapshot();
});
