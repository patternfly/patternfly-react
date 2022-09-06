import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WizardFooter } from '../WizardFooter';

describe('WizardFooter', () => {
  const defaultProps = {
    activeStep: { name: 'Step name', id: 'some-id' },
    onNext: jest.fn(),
    onBack: jest.fn(),
    onClose: jest.fn()
  };

  it('has button names of "Next", "Back", and "Cancel" by default', () => {
    render(<WizardFooter {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'Next' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Back' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  it('calls onNext when the next button is clicked', async () => {
    const onNext = jest.fn();
    const user = userEvent.setup();

    render(<WizardFooter {...defaultProps} onNext={onNext} />);

    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(onNext).toHaveBeenCalled();
  });

  it('calls onBack when the back button is clicked', async () => {
    const onBack = jest.fn();
    const user = userEvent.setup();

    render(<WizardFooter {...defaultProps} onBack={onBack} />);

    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onClose when the close button is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(<WizardFooter {...defaultProps} onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onClose).toHaveBeenCalled();
  });

  it('can have custom button names', () => {
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

  it('has disabled back button when disableBackButton is enabled', () => {
    render(<WizardFooter {...defaultProps} disableBackButton />);
    expect(screen.getByRole('button', { name: 'Back' })).toHaveAttribute('disabled');
  });

  it('has no back button when activeStep has hideBackButton enabled', () => {
    render(<WizardFooter {...defaultProps} activeStep={{ ...defaultProps.activeStep, hideBackButton: true }} />);
    expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();
  });

  it('has no cancel button when activeStep has hideCancelButton enabled', () => {
    render(<WizardFooter {...defaultProps} activeStep={{ ...defaultProps.activeStep, hideCancelButton: true }} />);
    expect(screen.queryByRole('button', { name: 'Cancel' })).toBeNull();
  });

  it(`uses activeStep's nextButtonText when specified instead of nextButtonText of WizardFooter`, () => {
    render(
      <WizardFooter
        {...defaultProps}
        nextButtonText="Footer next"
        activeStep={{ ...defaultProps.activeStep, nextButtonText: 'Active step next' }}
      />
    );
    expect(screen.queryByRole('button', { name: 'Footer next' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Active step next' })).toBeVisible();
  });
});
