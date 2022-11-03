import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Wizard, WizardFooterProps, WizardStep, WizardNavProps } from '../';

test('renders step when child is of type WizardStep', () => {
  render(
    <Wizard>
      <WizardStep id="test-step" name="Test step">
        Step content
      </WizardStep>
    </Wizard>
  );

  expect(screen.getByRole('button', { name: 'Test step' })).toBeVisible();
  expect(screen.getByText('Step content')).toBeVisible();
});

test('renders step when child has required props; name, id, children', () => {
  const CustomStep = props => <div {...props} />;

  render(
    <Wizard>
      <CustomStep id="test-step" name="Test step">
        Custom step content
      </CustomStep>
    </Wizard>
  );

  expect(screen.getByRole('button', { name: 'Test step' })).toBeVisible();
  expect(screen.getByText('Custom step content')).toBeVisible();
});

test('renders a header when specified', () => {
  render(
    <Wizard header="Some header">
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByText('Some header')).toBeVisible();
});

test('renders default footer without specifying the footer prop', () => {
  render(
    <Wizard>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByRole('button', { name: 'Next' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Back' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
});

test('renders default footer with custom props', () => {
  const footer: Partial<WizardFooterProps> = {
    nextButtonText: <>Proceed with caution</>,
    backButtonText: 'Turn back!',
    cancelButtonText: 'Leave now!'
  };

  render(
    <Wizard footer={footer}>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByRole('button', { name: 'Proceed with caution' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Turn back!' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Leave now!' })).toBeVisible();
});

test('renders custom footer', () => {
  render(
    <Wizard footer={<>Some footer</>}>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByText('Some footer')).toBeVisible();
});

test('renders default nav without specifying the nav prop', () => {
  render(
    <Wizard>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByRole('navigation')).toBeVisible();
  expect(screen.getByRole('button', { name: 'Test step' })).toBeVisible();
});

test('renders default nav with custom props', () => {
  const nav: Partial<WizardNavProps> = {
    'aria-label': 'Some nav label',
    'aria-labelledby': 'wizard-id'
  };

  render(
    <Wizard id="wizard-id" nav={nav} isStepVisitRequired>
      <WizardStep id="step-1" name="Test step 1" steps={[<WizardStep id="nested-step" name="Nested step" />]} />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  const navElement = screen.getByLabelText('Some nav label');

  expect(navElement).toBeVisible();
  expect(navElement).toHaveAttribute('aria-labelledby', 'wizard-id');
  expect(screen.getByRole('button', { name: 'Test step 1, visited' }).parentElement).toHaveClass('pf-m-expandable');
  expect(screen.getByRole('button', { name: 'Test step 2' })).toHaveAttribute('disabled');
});

test('renders custom nav', () => {
  const customNav = () => <nav>Some custom nav</nav>;

  render(
    <Wizard nav={customNav}>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByRole('navigation')).toBeVisible();
});

test('starts with the first step as the current one by default', () => {
  render(
    <Wizard>
      <WizardStep id="step-1" name="Test step 1">
        Step 1 content
      </WizardStep>
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  expect(screen.getByText('Step 1 content')).toBeVisible();
  expect(screen.getByRole('button', { name: 'Test step 1' })).toHaveClass('pf-m-current');
});

test(`can start at a step that isn't the first by specifying 'startIndex'`, () => {
  render(
    <Wizard startIndex={2}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2">
        Step 2 content
      </WizardStep>
    </Wizard>
  );

  expect(screen.getByText('Step 2 content')).toBeVisible();
  expect(screen.getByRole('button', { name: 'Test step 2' })).toHaveClass('pf-m-current');
});

test(`can use custom classNames and spread other props into the wizard's div`, () => {
  render(
    <Wizard className="some-class" data-testid="wizard-id">
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  expect(screen.getByTestId('wizard-id')).toHaveClass('some-class');
});

test(`can customize the wizard's height and width`, () => {
  render(
    <Wizard height={500} width={500} data-testid="wizard-id">
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  const wizard = screen.getByTestId('wizard-id');

  expect(wizard).toHaveStyle('height: 500px');
  expect(wizard).toHaveStyle('width: 500px');
});

test('calls onNavByIndex on nav item click', async () => {
  const user = userEvent.setup();
  const onNavByIndex = jest.fn();

  render(
    <Wizard onNavByIndex={onNavByIndex}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Test step 2' }));
  expect(onNavByIndex).toHaveBeenCalled();
});

test('calls onNext and not onSave on next button click when not on the last step', async () => {
  const user = userEvent.setup();
  const onNext = jest.fn();
  const onSave = jest.fn();

  render(
    <Wizard onNext={onNext} onSave={onSave}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Next' }));

  expect(onNext).toHaveBeenCalled();
  expect(onSave).not.toHaveBeenCalled();
});

test('calls onBack on back button click', async () => {
  const user = userEvent.setup();
  const onBack = jest.fn();

  render(
    <Wizard onBack={onBack}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Test step 2' }));
  await user.click(screen.getByRole('button', { name: 'Back' }));

  expect(onBack).toHaveBeenCalled();
});

test('calls onSave and not onClose on next button click when on the last step', async () => {
  const user = userEvent.setup();
  const onSave = jest.fn();
  const onClose = jest.fn();

  render(
    <Wizard onSave={onSave} onClose={onClose}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Test step 2' }));
  await user.click(screen.getByRole('button', { name: 'Next' }));

  expect(onSave).toHaveBeenCalled();
  expect(onClose).not.toHaveBeenCalled();
});

test('calls onClose when onSave is not specified on next button click when on the last step', async () => {
  const user = userEvent.setup();
  const onClose = jest.fn();

  render(
    <Wizard onClose={onClose}>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Test step 2' }));
  await user.click(screen.getByRole('button', { name: 'Next' }));

  expect(onClose).toHaveBeenCalled();
});

test('calls onClose on cancel link click', async () => {
  const user = userEvent.setup();
  const onClose = jest.fn();

  render(
    <Wizard onClose={onClose}>
      <WizardStep id="test-step" name="Test step" />
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Cancel' }));
  expect(onClose).toHaveBeenCalled();
});

test('unmounts inactive steps by default', async () => {
  const user = userEvent.setup();

  render(
    <Wizard>
      <WizardStep id="step-1" name="Test step 1">
        Step 1 content
      </WizardStep>
      <WizardStep id="step-2" name="Test step 2">
        Step 2 content
      </WizardStep>
    </Wizard>
  );

  await user.click(screen.getByRole('button', { name: 'Test step 2' }));

  expect(screen.queryByText('Step 1 content')).toBeNull();
  expect(screen.getByText('Step 2 content')).toBeVisible();
});
