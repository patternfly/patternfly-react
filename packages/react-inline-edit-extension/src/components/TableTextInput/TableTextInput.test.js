import React from 'react';
import { render } from '@testing-library/react';
import { TableTextInput } from './TableTextInput';

const props = {
  defaultValue: 'test',
  autoFocus: true,
  onBlur: jest.fn()
};

test('simple table text input', () => {
  const view = render(<TableTextInput aria-label="simple text input" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('focused table text input', () => {
  const view = render(<TableTextInput {...props} aria-label="focused text input" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});
