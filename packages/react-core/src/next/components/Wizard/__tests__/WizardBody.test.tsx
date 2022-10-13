import React from 'react';
import { render, screen } from '@testing-library/react';
import { WizardBody } from '../WizardBody';

test('renders children without additional props', () => {
  const { container } = render(<WizardBody>content</WizardBody>);

  expect(container).toHaveTextContent('content');
  expect(container).not.toHaveAttribute('aria-label');
  expect(container).not.toHaveAttribute('aria-labelledby');
});

test('has no padding className when hasNoBodyPadding is not specified', () => {
  render(<WizardBody>content</WizardBody>);
  expect(screen.getByText('content')).not.toHaveClass('pf-m-no-padding');
});

test('has padding className when hasNoPadding is specified', () => {
  render(<WizardBody hasNoPadding>content</WizardBody>);
  expect(screen.getByText('content')).toHaveClass('pf-m-no-padding');
});

test('has aria-label when one is specified', () => {
  render(<WizardBody aria-label="Body label">content</WizardBody>);
  expect(screen.getByLabelText('Body label')).toBeVisible();
});

test('has aria-labelledby when one is specified', () => {
  const { container } = render(<WizardBody aria-labelledby="some-id">content</WizardBody>);
  expect(container.firstElementChild).toHaveAttribute('aria-labelledby', 'some-id');
});

test('wrapper element is of type div when component is not specified', () => {
  const { container } = render(<WizardBody aria-label="Wizard body">content</WizardBody>);
  expect(container.firstElementChild?.tagName).toEqual('DIV');
});

test('renders with custom component', () => {
  const { container } = render(<WizardBody component="main">content</WizardBody>);
  expect(container.firstElementChild?.tagName).toEqual('MAIN');
});
