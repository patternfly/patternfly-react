import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import wizardHeightToken from '@patternfly/react-tokens/dist/esm/c_wizard_Height';

import {
  isWizardParentStep,
  WizardStepType,
  isCustomWizardNav,
  WizardFooterType,
  WizardNavType,
  WizardStepChangeScope
} from './types';
import { buildSteps, isStepEnabled } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardToggle } from './WizardToggle';
import { WizardNavInternal } from './WizardNavInternal';

/**
 * Wrapper for all steps and hosts state, including navigation helpers, within context.
 * The WizardContext provided by default gives any child of wizard access to those resources.
 */

export interface WizardProps extends React.HTMLProps<HTMLDivElement> {
  /** Step components */
  children: React.ReactNode;
  /** Wizard header */
  header?: React.ReactNode;
  /** Wizard footer */
  footer?: WizardFooterType;
  /** Wizard navigation */
  nav?: WizardNavType;
  /** Aria-label for the Nav */
  navAriaLabel?: string;
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
  /** Flag indicating whether the wizard content should be focused after the onNext or onBack callbacks
   * are called.
   */
  shouldFocusContent?: boolean;
}

export const Wizard = ({
  children,
  footer,
  height,
  width,
  className,
  header,
  nav,
  navAriaLabel,
  startIndex = 1,
  isVisitRequired = false,
  isProgressive = false,
  onStepChange,
  onSave,
  onClose,
  shouldFocusContent = true,
  ...wrapperProps
}: WizardProps) => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(startIndex);
  const initialSteps = buildSteps(children);
  const firstStepRef = React.useRef(initialSteps[startIndex - 1]);
  const wrapperRef = React.useRef(null);

  // When the startIndex maps to a parent step, focus on the first sub-step
  React.useEffect(() => {
    if (isWizardParentStep(firstStepRef.current)) {
      setActiveStepIndex(startIndex + 1);
    }
  }, [startIndex]);

  // When the number of steps changes and pushes activeStepIndex out of bounds, reset back to startIndex
  React.useEffect(() => {
    if (activeStepIndex > initialSteps.length) {
      setActiveStepIndex(startIndex);
    }
  }, [initialSteps, activeStepIndex, startIndex]);

  const focusMainContentElement = () =>
    setTimeout(() => {
      wrapperRef?.current?.focus && wrapperRef.current.focus();
    }, 0);

  const goToNextStep = (event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[] = initialSteps) => {
    const newStep = steps.find((step) => step.index > activeStepIndex && isStepEnabled(steps, step));

    if (activeStepIndex >= steps.length || !newStep?.index) {
      return onSave ? onSave(event) : onClose?.(event);
    }

    setActiveStepIndex(newStep?.index);
    onStepChange?.(event, newStep, steps[activeStepIndex - 1], WizardStepChangeScope.Next);
    shouldFocusContent && focusMainContentElement();
  };

  const goToPrevStep = (event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[] = initialSteps) => {
    const newStep = [...steps]
      .reverse()
      .find((step: WizardStepType) => step.index < activeStepIndex && isStepEnabled(steps, step));

    setActiveStepIndex(newStep?.index);
    onStepChange?.(event, newStep, steps[activeStepIndex - 1], WizardStepChangeScope.Back);
    shouldFocusContent && focusMainContentElement();
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
    const step = steps.find((step) => step.id === id);
    const stepIndex = step?.index;
    const lastStepIndex = steps.length + 1;

    if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
      setActiveStepIndex(stepIndex);
    }
  };

  const goToStepByName = (steps: WizardStepType[] = initialSteps, name: string) => {
    const step = steps.find((step) => step.name === name);
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
      shouldFocusContent={shouldFocusContent}
      mainWrapperRef={wrapperRef}
    >
      <div
        className={css(styles.wizard, className)}
        style={{
          ...(height ? { [wizardHeightToken.name]: typeof height === 'number' ? `${height}px` : height } : {}),
          ...(width ? { width } : {})
        }}
        {...wrapperProps}
      >
        {header}
        <WizardInternal
          nav={nav}
          navAriaLabel={navAriaLabel}
          isVisitRequired={isVisitRequired}
          isProgressive={isProgressive}
        />
      </div>
    </WizardContextProvider>
  );
};

const WizardInternal = ({
  nav,
  navAriaLabel,
  isVisitRequired,
  isProgressive
}: Pick<WizardProps, 'nav' | 'navAriaLabel' | 'isVisitRequired' | 'isProgressive'>) => {
  const { activeStep, steps, footer, goToStepByIndex } = useWizardContext();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const wizardNav = React.useMemo(() => {
    if (isCustomWizardNav(nav)) {
      return typeof nav === 'function' ? nav(isNavExpanded, steps, activeStep, goToStepByIndex) : nav;
    }

    return (
      <WizardNavInternal
        nav={nav}
        navAriaLabel={navAriaLabel}
        isNavExpanded={isNavExpanded}
        isVisitRequired={isVisitRequired}
        isProgressive={isProgressive}
      />
    );
  }, [activeStep, isVisitRequired, isProgressive, goToStepByIndex, isNavExpanded, nav, navAriaLabel, steps]);

  return (
    <WizardToggle
      nav={wizardNav}
      footer={footer}
      steps={steps}
      activeStep={activeStep}
      isNavExpanded={isNavExpanded}
      toggleNavExpanded={() => setIsNavExpanded((prevIsExpanded) => !prevIsExpanded)}
    />
  );
};

Wizard.displayName = 'Wizard';
