import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WizardFooter, WizardFooterProps } from '../WizardFooter';

const defaultProps: WizardFooterProps = {
  currentStep: { name: 'Step name', id: 'some-id' },
  onNext: jest.fn(),
  onBack: jest.fn(),
  onClose: jest.fn()
};

test('has button names of "Next", "Back", and "Cancel" by default', () => {
  render(<WizardFooter {...defaultProps} />);

  expect(screen.getByRole('button', { name: 'Next' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Back' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
});

test('calls onNext when the next button is clicked', async () => {
  const onNext = jest.fn();
  const user = userEvent.setup();

  render(<WizardFooter {...defaultProps} onNext={onNext} />);

  await user.click(screen.getByRole('button', { name: 'Next' }));
  expect(onNext).toHaveBeenCalled();
});

test('calls onBack when the back button is clicked', async () => {
  const onBack = jest.fn();
  const user = userEvent.setup();

  render(<WizardFooter {...defaultProps} onBack={onBack} />);

  await user.click(screen.getByRole('button', { name: 'Back' }));
  expect(onBack).toHaveBeenCalled();
});

test('calls onClose when the close button is clicked', async () => {
  const onClose = jest.fn();
  const user = userEvent.setup();

  render(<WizardFooter {...defaultProps} onClose={onClose} />);

  await user.click(screen.getByRole('button', { name: 'Cancel' }));
  expect(onClose).toHaveBeenCalled();
});

test('can have custom button names', () => {
  render(
    <WizardFooter
      {...defaultProps}
      nextButtonText={<>Go!</>}
      backButtonText="Turn around!"
      cancelButtonText={<span>Get out!</span>}
    />
  );

  expect(screen.getByRole('button', { name: 'Go!' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Turn around!' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Get out!' })).toBeVisible();
});

test('has disabled back button when isBackDisabled is enabled', () => {
  render(<WizardFooter {...defaultProps} isBackDisabled />);
  expect(screen.getByRole('button', { name: 'Back' })).toHaveAttribute('disabled');
});

test('uses currentStep footer properties when specified', () => {
  render(
    <WizardFooter {...defaultProps} currentStep={{ ...defaultProps.currentStep, footer: { isBackHidden: true } }} />
  );
  expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();
});

test(`currentStep footer properties take precendence over WizardFooter's`, () => {
  render(
    <WizardFooter
      {...defaultProps}
      nextButtonText="Footer next"
      currentStep={{ ...defaultProps.currentStep, footer: { nextButtonText: 'Active step next' } }}
    />
  );
  expect(screen.queryByRole('button', { name: 'Footer next' })).toBeNull();
  expect(screen.getByRole('button', { name: 'Active step next' })).toBeVisible();
});
