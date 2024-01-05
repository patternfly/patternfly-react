import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeEditorControl } from '../CodeEditorControl';

test('Matches snapshot', () => {
  const { asFragment } = render(<CodeEditorControl icon={<div>icon</div>} onClick={jest.fn()} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders with custom class when className is passed', () => {
  render(<CodeEditorControl className="custom" icon={<div>icon</div>} onClick={jest.fn()} />);
  expect(screen.getByText('icon').parentElement).toHaveClass('custom');
});

test('Renders with accessible name when aria-label is passed', () => {
  render(<CodeEditorControl aria-label="aria-test" icon={<div>icon</div>} onClick={jest.fn()} />);
  expect(screen.getByLabelText('aria-test'));
});
