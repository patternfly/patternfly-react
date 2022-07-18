import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import {
  DefaultWizardFooterProps,
  DefaultWizardNavProps,
  isCustomWizardFooter,
  isWizardParentStep,
  WizardNavStepFunction,
  CustomWizardNavFunction
} from './types';
import { buildSteps, normalizeNavStep } from './utils';
import { useWizardContext, WizardComposableContextProvider } from './WizardComposabeContext';
import { WizardComposableStepProps } from './WizardComposableStep';
import { WizardComposableFooter } from './WizardComposableFooter';
import { WizardComposableToggle } from './WizardComposableToggle';

export interface WizardComposableProps extends React.HTMLProps<HTMLDivElement> {
  /** Step, footer, or header child components */
  children: React.ReactElement<WizardComposableStepProps> | React.ReactElement<WizardComposableStepProps>[];
  /** Wizard header */
  header?: React.ReactNode;
  /** Wizard footer */
  footer?: DefaultWizardFooterProps | React.ReactElement;
  /** Default wizard nav props or a custom WizardNav (with callback) */
  nav?: DefaultWizardNavProps | CustomWizardNavFunction;
  /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
  startIndex?: number;
  /** Additional classes spread to the Wizard */
  className?: string;
  /** Custom width of the wizard */
  width?: number | string;
  /** Custom height of the wizard */
  height?: number | string;
  /** Callback function when a step in the nav is clicked */
  onNavByIndex?: WizardNavStepFunction;
  /** Callback function after Next button is clicked */
  onNext?: WizardNavStepFunction;
  /** Callback function after Back button is clicked */
  onBack?: WizardNavStepFunction;
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave?(): void;
  /** Callback function to close the wizard */
  onClose?(): void;
}

export const WizardComposable = (props: WizardComposableProps) => {
  const { startIndex = 1, children, footer, onNavByIndex, onNext, onBack, onSave, onClose, ...internalProps } = props;
  const [currentStepIndex, setCurrentStepIndex] = React.useState(startIndex);
  const steps = buildSteps(children);

  const goToStepByIndex = (index: number) => {
    const lastStepIndex = steps.length;

    if (index < 1) {
      index = 1;
    } else if (index > lastStepIndex) {
      index = lastStepIndex;
    }

    const currStep = steps[index - 1];
    const prevStep = steps[currentStepIndex - 1];
    setCurrentStepIndex(index);

    return onNavByIndex?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
  };

  const goToNextStep = () => {
    // Save when on the last step, otherwise close
    if (currentStepIndex >= steps.length) {
      if (onSave) {
        return onSave();
      }

      return onClose?.();
    } else {
      let currStep = steps[currentStepIndex];
      let newStepIndex = currentStepIndex + 1;
      const prevStep = steps[currentStepIndex - 1];

      // Skip parent step and focus on the first sub-step if they exist
      if (isWizardParentStep(currStep)) {
        newStepIndex += 1;
        currStep = steps[currentStepIndex + 1];
      }

      setCurrentStepIndex(newStepIndex);
      return onNext?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
    }
  };

  const goToPrevStep = () => {
    if (steps.length < currentStepIndex) {
      // Previous step was removed, just update the currentStep state
      setCurrentStepIndex(steps.length);
    } else {
      let currStep = steps[currentStepIndex - 2];
      let newStepIndex = currentStepIndex - 1;
      const prevStep = steps[currentStepIndex - 1];

      // // Skip parent step and focus on the step prior
      if (isWizardParentStep(currStep)) {
        newStepIndex -= 1;
        currStep = steps[currentStepIndex - 3];
      }

      setCurrentStepIndex(newStepIndex);
      return onBack?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
    }
  };

  const goToStepById = (id: number | string) => {
    const stepIndex = steps.findIndex(step => step.id === id) + 1;
    stepIndex > 0 && setCurrentStepIndex(stepIndex);
  };

  const goToStepByName = (name: string) => {
    const stepIndex = steps.findIndex(step => step.name === name) + 1;
    stepIndex > 0 && setCurrentStepIndex(stepIndex);
  };

  return (
    <WizardComposableContextProvider
      steps={steps}
      currentStepIndex={currentStepIndex}
      footer={isCustomWizardFooter(footer) && footer}
      onNext={goToNextStep}
      onBack={goToPrevStep}
      onClose={onClose}
      goToStepById={goToStepById}
      goToStepByName={goToStepByName}
      goToStepByIndex={goToStepByIndex}
    >
      <WizardComposableInternal {...internalProps}>{children}</WizardComposableInternal>
    </WizardComposableContextProvider>
  );
};

// eslint-disable-next-line patternfly-react/no-anonymous-functions
const WizardComposableInternal = ({ height, width, className, header, nav, ...restProps }: WizardComposableProps) => {
  const { activeStep, steps, footer, onNext, onBack, onClose, goToStepByIndex } = useWizardContext();

  const wizardFooter = isCustomWizardFooter(footer) ? (
    footer
  ) : (
    <WizardComposableFooter
      activeStep={activeStep}
      onNext={onNext}
      onBack={onBack}
      onClose={onClose}
      disableBackButton={activeStep.id === steps[0].id}
      {...footer}
    />
  );

  return (
    <div
      className={css(styles.wizard, className)}
      style={{
        ...(height ? { height } : {}),
        ...(width ? { width } : {})
      }}
      {...restProps}
    >
      {header}
      <WizardComposableToggle
        steps={steps}
        activeStep={activeStep}
        footer={wizardFooter}
        nav={nav}
        goToStepByIndex={goToStepByIndex}
      />
    </div>
  );
};

WizardComposable.displayName = 'WizardComposable';
