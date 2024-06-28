import React from 'react';
import { render, screen } from '@testing-library/react';
import { WizardBody } from '../WizardBody';

test('renders children without additional props', () => {
  render(<WizardBody data-testid="test-id">content</WizardBody>);

  expect(screen.getByTestId('test-id')).toHaveTextContent('content');
  expect(screen.getByTestId('test-id')).not.toHaveAttribute('aria-label');
  expect(screen.getByTestId('test-id')).not.toHaveAttribute('aria-labelledby');
});

test(`Renders with additional classes when className is passed`, () => {
  render(
    <WizardBody className="custom-class" data-testid="test-id">
      Test
    </WizardBody>
  );
  expect(screen.getByTestId('test-id')).toHaveClass('custom-class');
});

test('has no padding className when hasNoPadding is not specified', () => {
  render(<WizardBody>content</WizardBody>);
  expect(screen.getByText('content')).not.toHaveClass('pf-m-no-padding');
});

test('has padding className when hasNoPadding is specified', () => {
  render(<WizardBody hasNoPadding>content</WizardBody>);
  expect(screen.getByText('content')).toHaveClass('pf-m-no-padding');
});

test('wrapper element is of type div when component is not specified', () => {
  render(
    <WizardBody data-testid="test-id" aria-label="Wizard body">
      content
    </WizardBody>
  );
  expect(screen.getByTestId('test-id').tagName).toEqual('DIV');
});

test('renders with custom component', () => {
  render(
    <WizardBody component="main" data-testid="test-id">
      content
    </WizardBody>
  );
  expect(screen.getByTestId('test-id').tagName).toEqual('MAIN');
});
