import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WizardToggle } from '../WizardToggle';

describe('WizardToggle', () => {
  const steps = [
    { id: 'id-1', name: 'First step', component: <>First step content</> },
    { id: 'id-2', name: 'Second step', component: <>Second step content</> }
  ];
  const defaultProps = {
    steps,
    activeStep: steps[0],
    footer: <>Some footer</>,
    goToStepByIndex: jest.fn()
  };

  it('renders provided footer and active step content', () => {
    render(<WizardToggle {...defaultProps} />);

    expect(screen.getByText('Some footer')).toBeVisible();
    expect(screen.getByText('First step content')).toBeVisible();
  });

  it('calls goToStepByIndex with step index when nav item is clicked', async () => {
    const goToStepByIndex = jest.fn();
    const user = userEvent.setup();

    render(<WizardToggle {...defaultProps} goToStepByIndex={goToStepByIndex} />);

    await user.click(screen.getByRole('button', { name: 'Second step' }));
    expect(goToStepByIndex).toHaveBeenCalledWith(2);
  });

  it('renders with custom nav when nav is specified', () => {
    render(<WizardToggle {...defaultProps} nav={() => <div>Some custom nav</div>} />);
    expect(screen.getByText('Some custom nav')).toBeVisible();
  });

  it('applies aria-label to the expandable toggle button when specified', () => {
    render(<WizardToggle {...defaultProps} aria-label="Some label" />);
    expect(screen.getByRole('button', { name: 'Some label' })).toBeVisible();
  });

  it('has expanded properties when the toggle dropdown button is clicked', async () => {
    const user = userEvent.setup();

    render(<WizardToggle {...defaultProps} aria-label="Some label" />);

    const toggleButton = screen.getByRole('button', { name: 'Some label' });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).not.toHaveClass('pf-m-expanded');

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(toggleButton).toHaveClass('pf-m-expanded');
  });

  it('unsets expanded properties when using the Escape key', async () => {
    const user = userEvent.setup();

    render(<WizardToggle {...defaultProps} aria-label="Some label" />);

    const toggleButton = screen.getByRole('button', { name: 'Some label' });

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(toggleButton).toHaveClass('pf-m-expanded');

    await user.type(toggleButton, '{esc}');

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).not.toHaveClass('pf-m-expanded');
  });
});
