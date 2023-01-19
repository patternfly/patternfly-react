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
    <Wizard id="wizard-id" nav={nav} isVisitRequired>
      <WizardStep id="step-1" name="Test step 1" steps={[<WizardStep id="nested-step" name="Nested step" />]} />
      <WizardStep id="step-2" name="Test step 2" />
    </Wizard>
  );

  const navElement = screen.getByLabelText('Some nav label');

  expect(navElement).toBeVisible();
  expect(navElement).toHaveAttribute('aria-labelledby', 'wizard-id');
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
    <Wizard onStepChange={onNavByIndex}>
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
    <Wizard onStepChange={onNext} onSave={onSave}>
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
    <Wizard onStepChange={onBack}>
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

test('does not render inactive step content', async () => {
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

test('parent steps have collapsed sub-steps when isExpandable is true unless the step is active', async () => {
  const user = userEvent.setup();

  render(
    <Wizard>
      <WizardStep id="step-1" name="Test step 1" />
      <WizardStep
        id="step-2"
        name="Test step 2"
        isExpandable
        steps={[<WizardStep id="sub-step-1" name="Test sub step 1" />]}
      />
    </Wizard>
  );

  expect(screen.getByLabelText('Expand step icon')).toBeVisible();

  await user.click(screen.getByRole('button', { name: 'Next' }));

  expect(screen.getByLabelText('Collapse step icon')).toBeVisible();
});

test('parent step can be expandable by setting isExpandable to true', () => {
  render(
    <Wizard>
      <WizardStep
        id="step-1"
        name="Test step 1"
        isExpandable
        steps={[<WizardStep id="sub-step-1" name="Sub step 1" />]}
      />
    </Wizard>
  );

  expect(screen.queryByLabelText('step icon', { exact: false })).toBeVisible();
});

test('incrementally shows/hides steps based on the activeStep when isProgressive is enabled', async () => {
  const user = userEvent.setup();

  render(
    <Wizard isProgressive>
      <WizardStep id="step-1" name="Test step 1">
        Step 1 content
      </WizardStep>
      <WizardStep id="step-2" name="Test step 2">
        Step 2 content
      </WizardStep>
      <WizardStep id="step-3" name="Test step 3">
        Step 3 content
      </WizardStep>
    </Wizard>
  );

  const nextButton = screen.getByRole('button', {
    name: 'Next'
  });
  const backButton = screen.getByRole('button', {
    name: 'Back'
  });

  // Initially only the first nav item will be visible
  expect(
    screen.getByRole('button', {
      name: 'Test step 1'
    })
  ).toBeVisible();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 2'
    })
  ).toBeNull();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 3'
    })
  ).toBeNull();

  // Progressing to the next step will show steps 1 & 2
  await user.click(nextButton);
  expect(
    screen.getByRole('button', {
      name: 'Test step 1, visited'
    })
  ).toBeVisible();
  expect(
    screen.getByRole('button', {
      name: 'Test step 2'
    })
  ).toBeVisible();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 3'
    })
  ).toBeNull();

  // Progressing to the next step will show all steps
  await user.click(nextButton);
  expect(
    screen.getByRole('button', {
      name: 'Test step 1, visited'
    })
  ).toBeVisible();
  expect(
    screen.getByRole('button', {
      name: 'Test step 2, visited'
    })
  ).toBeVisible();
  expect(
    screen.getByRole('button', {
      name: 'Test step 3'
    })
  ).toBeVisible();

  // Going back a step will hide step 3
  await user.click(backButton);
  expect(
    screen.getByRole('button', {
      name: 'Test step 1, visited'
    })
  ).toBeVisible();
  expect(
    screen.getByRole('button', {
      name: 'Test step 2'
    })
  ).toBeVisible();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 3'
    })
  ).toBeNull();

  // Going back a step will hide step 2 & 3
  await user.click(backButton);
  expect(
    screen.getByRole('button', {
      name: 'Test step 1'
    })
  ).toBeVisible();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 2'
    })
  ).toBeNull();
  expect(
    screen.queryByRole('button', {
      name: 'Test step 3'
    })
  ).toBeNull();
});
