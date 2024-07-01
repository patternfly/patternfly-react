import React from 'react';

import { render, screen } from '@testing-library/react';
import { WizardHeader } from '../WizardHeader';
import userEvent from '@testing-library/user-event';

// close button related tests
test(`Renders close button by default`, () => {
  render(<WizardHeader data-testid="header-component" />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test(`Close button is hidden when isCloseHidden is passed`, () => {
  render(<WizardHeader isCloseHidden />);
  expect(screen.queryByRole('button')).toBeNull();
});

test(`Close button renders passed aria label`, () => {
  render(<WizardHeader closeButtonAriaLabel="test aria label" />);
  expect(screen.getByRole('button', { name: 'test aria label' })).toBeInTheDocument();
});

test(`Callback function fires when onClose passed`, async () => {
  const onClose = jest.fn();
  const user = userEvent.setup();
  render(<WizardHeader onClose={onClose} />);
  await user.click(screen.getByRole('button'));
  expect(onClose).toHaveBeenCalled();
});

// description related tests
test(`Renders a description when passed description`, () => {
  render(<WizardHeader description="test description" />);
  expect(screen.getByText('test description')).toBeVisible();
});

test(`Renders the id passed via descriptionId`, () => {
  render(<WizardHeader description="test description" descriptionId="test-id" />);
  expect(screen.queryByText('test description')).toHaveAttribute('id', 'test-id');
});

// other prop tests
test(`Renders title when prop is passed`, () => {
  render(<WizardHeader title="Test" />);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with additional classes when className is passed`, () => {
  render(<WizardHeader className="custom-class" data-testid="header-component" />);
  expect(screen.getByTestId('header-component')).toHaveClass('custom-class');
});
