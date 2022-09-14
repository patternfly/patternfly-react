import React from 'react';
import { render, screen } from '@testing-library/react';
import { WizardStep } from '../WizardStep';

test('renders without children', () => {
  const { container } = render(<WizardStep id="test-step" name="Test step" />);
  expect(container).toBeVisible();
});

test('renders with children', () => {
  render(
    <WizardStep id="test-step" name="Test step">
      content
    </WizardStep>
  );

  expect(screen.getByText('content')).toBeVisible();
});

test('excludes WizardBody when body is set to null', () => {
  render(<WizardStep id="test-step" name="Test step" body={null} />);
  expect(screen.queryByRole('main')).toBeNull();
});

test('uses body props for WizardBody when passed', () => {
  render(
    <WizardStep id="test-step" name="Test step" body={{ 'aria-label': 'Some label' }}>
      content
    </WizardStep>
  );

  expect(screen.getByLabelText('Some label')).toBeVisible();
});
