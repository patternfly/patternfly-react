import React from 'react';

import { render, screen } from '@testing-library/react';

import { WizardStep } from '../WizardStep';
import * as useWizardFooter from '../hooks/useWizardFooter';
import * as WizardContext from '../WizardContext';
import { WizardStepProps } from '..';

const testStep: WizardStepProps = {
  id: 'test-step',
  name: 'Test step',
  footer: <>Step footer</>
};
const wizardContext: WizardContext.WizardContextProps = {
  steps: [testStep],
  currentStep: testStep,
  currentStepIndex: 1,
  footer: <>Wizard footer</>,
  onNext: jest.fn(),
  onBack: jest.fn(),
  onClose: jest.fn(),
  goToStepById: jest.fn(),
  goToStepByName: jest.fn(),
  goToStepByIndex: jest.fn(),
  setFooter: jest.fn(),
  getStep: jest.fn(),
  setStep: jest.fn(),
  toggleStep: jest.fn()
};
const useWizardContextSpy = jest.spyOn(WizardContext, 'useWizardContext');
const useWizardFooterSpy = jest.spyOn(useWizardFooter, 'useWizardFooter');

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

test('calls useWizardFooter', () => {
  useWizardContextSpy.mockReturnValueOnce(wizardContext);

  render(<WizardStep {...testStep}>content</WizardStep>);
  expect(useWizardFooterSpy).toHaveBeenCalledWith(testStep.footer, 'test-step');
});

test('updates "isDisabled" in context when the value changes', () => {
  const setStep = jest.fn();
  useWizardContextSpy.mockReturnValueOnce({ ...wizardContext, setStep });

  render(<WizardStep {...testStep} isDisabled />);

  expect(setStep).toHaveBeenCalledWith({ id: testStep.id, isDisabled: true, isVisited: true });
});

test('updates "navItem" in context when the value changes', () => {
  const setStep = jest.fn();
  const testNavItem = <>Some nav item</>;
  useWizardContextSpy.mockReturnValueOnce({ ...wizardContext, setStep });

  render(<WizardStep {...testStep} navItem={testNavItem} />);

  expect(setStep).toHaveBeenCalledWith({ id: testStep.id, navItem: testNavItem, isVisited: true });
});

test('updates "status" in context when the value changes', () => {
  const setStep = jest.fn();
  useWizardContextSpy.mockReturnValueOnce({ ...wizardContext, setStep });

  render(<WizardStep {...testStep} status="error" />);

  expect(setStep).toHaveBeenCalledWith({ id: testStep.id, status: 'error', isVisited: true });
});

test('calls "toggleStep" when isHidden value changes and the previous value was not undefined', () => {
  const toggleStep = jest.fn();
  useWizardContextSpy.mockReturnValueOnce({ ...wizardContext, toggleStep });

  render(<WizardStep {...testStep} isHidden />);

  expect(toggleStep).toHaveBeenCalledWith(testStep.id, true);
});

test('does not call "toggleStep" when isHidden value changes and was previously undefined', () => {
  const toggleStep = jest.fn();
  useWizardContextSpy.mockReturnValueOnce({
    ...wizardContext,
    toggleStep
  });

  render(<WizardStep {...testStep} isHidden={undefined} />);

  expect(toggleStep).not.toHaveBeenCalled();
});

test('does not update "isVisited" value in context when the step was previously visited', () => {
  const setStep = jest.fn();
  const visitedTestStep = { ...testStep, isVisited: true };
  useWizardContextSpy.mockReturnValueOnce({
    ...wizardContext,
    currentStep: visitedTestStep,
    steps: [visitedTestStep],
    setStep
  });

  render(<WizardStep {...visitedTestStep} />);

  expect(setStep).not.toHaveBeenCalled();
});
