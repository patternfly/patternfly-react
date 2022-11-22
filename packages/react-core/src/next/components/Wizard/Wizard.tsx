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
  onNavByIndex,
  onNext,
  onBack,
  onSave,
  onClose,
  ...wrapperProps
}: WizardProps) => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(startIndex);
  const initialSteps = buildSteps(children);

  const goToNextStep = (steps: WizardControlStep[] = initialSteps) => {
    const newStepIndex = steps.find(step => step.index > activeStepIndex && !step.isHidden && !isWizardParentStep(step))
      ?.index;

    if (activeStepIndex >= steps.length || !newStepIndex) {
      return onSave ? onSave() : onClose?.();
    }

    const currStep = isWizardParentStep(steps[activeStepIndex]) ? steps[activeStepIndex + 1] : steps[activeStepIndex];
    const prevStep = steps[activeStepIndex - 1];

    setActiveStepIndex(newStepIndex);
    return onNext?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
  };

  const goToPrevStep = (steps: WizardControlStep[] = initialSteps) => {
    const newStepIndex =
      findLastIndex(
        steps,
        (step: WizardControlStep) => step.index < activeStepIndex && !step.isHidden && !isWizardParentStep(step)
      ) + 1;
    const currStep = isWizardParentStep(steps[activeStepIndex - 2])
      ? steps[activeStepIndex - 3]
      : steps[activeStepIndex - 2];
    const prevStep = steps[activeStepIndex - 1];

    setActiveStepIndex(newStepIndex);
    return onBack?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
  };

  const goToStepByIndex = (steps: WizardControlStep[] = initialSteps, index: number) => {
    const lastStepIndex = steps.length + 1;

    // Handle index when out of bounds or hidden
    if (index < 1) {
      index = 1;
    } else if (index > lastStepIndex) {
      index = lastStepIndex;
    }

    const currStep = steps[index - 1];
    const prevStep = steps[activeStepIndex - 1];

    setActiveStepIndex(index);
    return onNavByIndex?.(normalizeNavStep(currStep), normalizeNavStep(prevStep));
  };

  const goToStepById = (steps: WizardControlStep[] = initialSteps, id: number | string) => {
    const step = steps.find(step => step.id === id);
    const stepIndex = step?.index;
    const lastStepIndex = steps.length + 1;

    if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isHidden) {
      setActiveStepIndex(stepIndex);
    }
  };

  const goToStepByName = (steps: WizardControlStep[] = initialSteps, name: string) => {
    const step = steps.find(step => step.name === name);
    const stepIndex = step?.index;
    const lastStepIndex = steps.length + 1;

    if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isHidden) {
      setActiveStepIndex(stepIndex);
    }
  };

  return (
    <WizardContextProvider
      steps={initialSteps}
      activeStepIndex={activeStepIndex}
      footer={footer}
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
        <WizardInternal nav={nav} isStepVisitRequired={isStepVisitRequired} />
      </div>
    </WizardContextProvider>
  );
};

const WizardInternal = ({ nav, isStepVisitRequired }: Pick<WizardProps, 'nav' | 'isStepVisitRequired'>) => {
  const { activeStep, steps, footer, goToStepByIndex } = useWizardContext();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const wizardNav = React.useMemo(() => {
    if (isCustomWizardNav(nav)) {
      return typeof nav === 'function' ? nav(isNavExpanded, steps, activeStep, goToStepByIndex) : nav;
    }

    return <WizardNavInternal nav={nav} isNavExpanded={isNavExpanded} isStepVisitRequired={isStepVisitRequired} />;
  }, [activeStep, isStepVisitRequired, goToStepByIndex, isNavExpanded, nav, steps]);

  return (
    <WizardToggle
      nav={wizardNav}
      footer={footer}
      steps={steps}
      activeStep={activeStep}
      isNavExpanded={isNavExpanded}
      toggleNavExpanded={() => setIsNavExpanded(prevIsExpanded => !prevIsExpanded)}
    />
  );
};

Wizard.displayName = 'Wizard';
