import React from 'react';
import findLastIndex from 'lodash/findLastIndex';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import {
  isWizardParentStep,
  WizardNavStepFunction,
  WizardControlStep,
  isCustomWizardNav,
  WizardFooterType,
  WizardNavType
} from './types';
import { buildSteps, normalizeNavStep } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardStepProps } from './WizardStep';
import { WizardToggle } from './WizardToggle';
import { WizardNavInternal } from './WizardNavInternal';

/**
 * Wrapper for all steps and hosts state, including navigation helpers, within context.
 * The WizardContext provided by default gives any child of wizard access to those resources.
 */

export interface WizardProps extends React.HTMLProps<HTMLDivElement> {
  /** Step components */
  children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[];
  /** Wizard header */
  header?: React.ReactNode;
  /** Wizard footer */
  footer?: WizardFooterType;
  /** Wizard navigation */
  nav?: WizardNavType;
  /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
  startIndex?: number;
  /** Additional classes spread to the wizard */
  className?: string;
  /** Custom width of the wizard */
  width?: number | string;
  /** Custom height of the wizard */
  height?: number | string;
  /** Disables navigation items that haven't been visited. Defaults to false */
  isStepVisitRequired?: boolean;
  /** Flag to unmount inactive steps instead of hiding. Defaults to true */
  hasUnmountedSteps?: boolean;
  /** Callback function when a step in the navigation is clicked */
  onNavByIndex?: WizardNavStepFunction;
  /** Callback function after next button is clicked */
  onNext?: WizardNavStepFunction;
  /** Callback function after back button is clicked */
  onBack?: WizardNavStepFunction;
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave?: () => void;
  /** Callback function to close the wizard */
  onClose?: () => void;
}

export const Wizard = ({
  children,
  footer,
  height,
  width,
  className,
  header,
  nav,
  startIndex = 1,
  isStepVisitRequired = false,
  hasUnmountedSteps = true,
  onNavByIndex,
  onNext,
  onBack,
  onSave,
  onClose,
  ...wrapperProps
}: WizardProps) => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(startIndex);
  const initialSteps = buildSteps(children);

  const goToNextStep = (steps: WizardControlStep[] = initialSteps) => {
    const newStepIndex =
      steps.findIndex((step, index) => index + 1 > currentStepIndex && !step.isHidden && !isWizardParentStep(step)) + 1;

    if (currentStepIndex >= steps.length || !newStepIndex) {
      return onSave ? onSave() : onClose?.();
    }

    const currStep = isWizardParentStep(steps[currentStepIndex])
      ? steps[currentStepIndex + 1]
      : steps[currentStepIndex];
    const prevStep = steps[currentStepIndex - 1];

    setCurrentStepIndex(newStepIndex);

    return onNext?.(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
  };

  const goToPrevStep = (steps: WizardControlStep[] = initialSteps) => {
    const newStepIndex =
      findLastIndex(
        steps,
        (step: WizardControlStep, index: number) =>
          index + 1 < currentStepIndex && !step.isHidden && !isWizardParentStep(step)
      ) + 1;
    const currStep = isWizardParentStep(steps[currentStepIndex - 2])
      ? steps[currentStepIndex - 3]
      : steps[currentStepIndex - 2];
    const prevStep = steps[currentStepIndex - 1];

    setCurrentStepIndex(newStepIndex);

    return onBack?.(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
  };

  const goToStepByIndex = (steps: WizardControlStep[] = initialSteps, index: number) => {
    const lastStepIndex = steps.length + 1;

    // Handle index when out of bounds or hidden
    if (index < 1) {
      index = 1;
    } else if (index > lastStepIndex) {
      index = lastStepIndex;
    } else if (steps[index - 1].isHidden) {
      // eslint-disable-next-line no-console
      console.error('Wizard: Unable to navigate to hidden step.');
    }

    const currStep = steps[index - 1];
    const prevStep = steps[currentStepIndex - 1];
    setCurrentStepIndex(index);

    return onNavByIndex?.(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
  };

  const goToStepById = (steps: WizardControlStep[] = initialSteps, id: number | string) => {
    const stepIndex = steps.findIndex(step => step.id === id) + 1;

    if (stepIndex > 0 && stepIndex < steps.length + 1 && !steps[stepIndex].isHidden) {
      setCurrentStepIndex(stepIndex);
    } else {
      // eslint-disable-next-line no-console
      console.error(`Wizard: Unable to navigate to step with id: ${id}.`);
    }
  };

  const goToStepByName = (steps: WizardControlStep[] = initialSteps, name: string) => {
    const stepIndex = initialSteps.findIndex(step => step.name === name) + 1;

    if (stepIndex > 0 && stepIndex < steps.length + 1 && !steps[stepIndex].isHidden) {
      setCurrentStepIndex(stepIndex);
    } else {
      // eslint-disable-next-line no-console
      console.error(`Wizard: Unable to navigate to step with name: ${name}.`);
    }
  };

  return (
    <WizardContextProvider
      steps={initialSteps}
      currentStepIndex={currentStepIndex}
      footer={footer}
      isStepVisitRequired={isStepVisitRequired}
      onNext={goToNextStep}
      onBack={goToPrevStep}
      onClose={onClose}
      goToStepById={goToStepById}
      goToStepByName={goToStepByName}
      goToStepByIndex={goToStepByIndex}
    >
      <div
        className={css(styles.wizard, className)}
        style={{
          ...(height ? { height } : {}),
          ...(width ? { width } : {})
        }}
        {...wrapperProps}
      >
        {header}
        <WizardInternal nav={nav} hasUnmountedSteps={hasUnmountedSteps} isStepVisitRequired={isStepVisitRequired} />
      </div>
    </WizardContextProvider>
  );
};

const WizardInternal = ({
  nav,
  hasUnmountedSteps,
  isStepVisitRequired
}: Pick<WizardProps, 'nav' | 'hasUnmountedSteps' | 'isStepVisitRequired'>) => {
  const { currentStep, steps, footer, goToStepByIndex } = useWizardContext();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const wizardNav = React.useMemo(() => {
    if (isCustomWizardNav(nav)) {
      return typeof nav === 'function' ? nav(isNavExpanded, steps, currentStep, goToStepByIndex) : nav;
    }

    return <WizardNavInternal nav={nav} isNavExpanded={isNavExpanded} isStepVisitRequired={isStepVisitRequired} />;
  }, [currentStep, isStepVisitRequired, goToStepByIndex, isNavExpanded, nav, steps]);

  return (
    <WizardToggle
      nav={wizardNav}
      footer={footer}
      steps={steps}
      currentStep={currentStep}
      isNavExpanded={isNavExpanded}
      toggleNavExpanded={() => setIsNavExpanded(prevIsExpanded => !prevIsExpanded)}
      hasUnmountedSteps={hasUnmountedSteps}
    />
  );
};

Wizard.displayName = 'Wizard';
