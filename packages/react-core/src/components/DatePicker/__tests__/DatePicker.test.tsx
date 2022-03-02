import { render } from '@testing-library/react';
import { DatePicker } from '../DatePicker';
import React from 'react';

test('disabled date picker', () => {
  const view = render(<DatePicker value="2020-11-20" isDisabled aria-label="disabled date picker" />);
  expect(view.container).toMatchSnapshot();
});
