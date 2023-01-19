import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import {
  isWizardParentStep,
  WizardStepType,
  isCustomWizardNav,
  WizardFooterType,
  WizardNavType,
  WizardStepChangeScope
} from './types';
import { buildSteps } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardToggle } from './WizardToggle';
import { WizardNavInternal } from './WizardNavInternal';

/**
 * Wrapper for all steps and hosts state, including navigation helpers, within context.
 * The WizardContext provided by default gives any child of wizard access to those resources.
 */

export interface WizardProps extends React.HTMLProps<HTMLDivElement> {
  /** Step components */
  children: React.ReactNode | React.ReactNode[];
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
  /** Disables steps that haven't been visited. Defaults to false. */
  isVisitRequired?: boolean;
  /** Progressively shows steps, where all steps following the active step are hidden. Defaults to false. */
  isProgressive?: boolean;
  /** Callback function when navigating between steps */
  onStepChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    currentStep: WizardStepType,
    prevStep: WizardStepType,
    scope: WizardStepChangeScope
  ) => void | Promise<void>;
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  /** Callback function to close the wizard */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  isVisitRequired = false,
  isProgressive = false,
  onStepChange,
  onSave,
  onClose,
  ...wrapperProps
}: WizardProps) => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(startIndex);
  const initialSteps = buildSteps(children);
  const firstStepRef = React.useRef(initialSteps[startIndex - 1]);

  // When the startIndex maps to a parent step, focus on the first sub-step
  React.useEffect(() => {
    if (isWizardParentStep(firstStepRef.current)) {
      setActiveStepIndex(startIndex + 1);
    }
  }, [startIndex]);

  const goToNextStep = (event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[] = initialSteps) => {
    const newStep = steps.find(
      step => step.index > activeStepIndex && !step.isHidden && !step.isDisabled && !isWizardParentStep(step)
    );

    if (activeStepIndex >= steps.length || !newStep?.index) {
      return onSave ? onSave(event) : onClose?.(event);
    }

    const currStep = isWizardParentStep(steps[activeStepIndex]) ? steps[activeStepIndex + 1] : steps[activeStepIndex];
    const prevStep = steps[activeStepIndex - 1];

    setActiveStepIndex(newStep?.index);
    onStepChange?.(event, currStep, prevStep, WizardStepChangeScope.Next);
  };

  const goToPrevStep = (event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[] = initialSteps) => {
    const newStep = [...steps]
      .reverse()
      .find(
        (step: WizardStepType) =>
          step.index < activeStepIndex && !step.isHidden && !step.isDisabled && !isWizardParentStep(step)
      );
    const currStep = isWizardParentStep(steps[activeStepIndex - 2])
      ? steps[activeStepIndex - 3]
      : steps[activeStepIndex - 2];
    const prevStep = steps[activeStepIndex - 1];

    setActiveStepIndex(newStep?.index);
    onStepChange?.(event, currStep, prevStep, WizardStepChangeScope.Back);
  };

  const goToStepByIndex = (
    event: React.MouseEvent<HTMLButtonElement>,
    steps: WizardStepType[] = initialSteps,
    index: number
  ) => {
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
    onStepChange?.(event, currStep, prevStep, WizardStepChangeScope.Nav);
  };

  const goToStepById = (steps: WizardStepType[] = initialSteps, id: number | string) => {
    const step = steps.find(step => step.id === id);
    const stepIndex = step?.index;
    const lastStepIndex = steps.length + 1;

    if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
      setActiveStepIndex(stepIndex);
    }
  };

  const goToStepByName = (steps: WizardStepType[] = initialSteps, name: string) => {
    const step = steps.find(step => step.name === name);
    const stepIndex = step?.index;
    const lastStepIndex = steps.length + 1;

    if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
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
        <WizardInternal nav={nav} isVisitRequired={isVisitRequired} isProgressive={isProgressive} />
      </div>
    </WizardContextProvider>
  );
};

const WizardInternal = ({
  nav,
  isVisitRequired,
  isProgressive
}: Pick<WizardProps, 'nav' | 'isVisitRequired' | 'isProgressive'>) => {
  const { activeStep, steps, footer, goToStepByIndex } = useWizardContext();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const wizardNav = React.useMemo(() => {
    if (isCustomWizardNav(nav)) {
      return typeof nav === 'function' ? nav(isNavExpanded, steps, activeStep, goToStepByIndex) : nav;
    }

    return (
      <WizardNavInternal
        nav={nav}
        isNavExpanded={isNavExpanded}
        isVisitRequired={isVisitRequired}
        isProgressive={isProgressive}
      />
    );
  }, [activeStep, isVisitRequired, isProgressive, goToStepByIndex, isNavExpanded, nav, steps]);

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
