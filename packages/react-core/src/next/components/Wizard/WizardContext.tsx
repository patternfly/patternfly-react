import React from 'react';

import { isCustomWizardFooter, isWizardParentStep, WizardControlStep, WizardFooterType } from './types';
import { getCurrentStep } from './utils';
import { WizardFooter, WizardFooterProps } from './WizardFooter';

export interface WizardContextProps {
  /** List of steps */
  steps: WizardControlStep[];
  /** Current step */
  currentStep: WizardControlStep;
  /** Current step index */
  currentStepIndex: number;
  /** Footer element */
  footer: React.ReactElement;
  /** Navigate to the next step */
  onNext: () => void;
  /** Navigate to the previous step */
  onBack: () => void;
  /** Close the wizard */
  onClose: () => void;
  /** Navigate to step by ID */
  goToStepById: (id: number | string) => void;
  /** Navigate to step by name */
  goToStepByName: (name: string) => void;
  /** Navigate to step by index */
  goToStepByIndex: (index: number) => void;
  /** Update the footer with any react element */
  setFooter: (footer: React.ReactElement | Partial<WizardFooterProps>) => void;
  /** Get step by ID */
  getStep: (stepId: number | string) => WizardControlStep;
  /** Set step by ID */
  setStep: (step: Pick<WizardControlStep, 'id'> & Partial<WizardControlStep>) => void;
  /** Toggle step visibility by ID */
  toggleStep: (stepId: number | string, isHidden: boolean) => void;
}

export const WizardContext = React.createContext({} as WizardContextProps);

export interface WizardContextProviderProps {
  steps: WizardControlStep[];
  currentStepIndex: number;
  footer: WizardFooterType;
  isStepVisitRequired: boolean;
  children: React.ReactElement;
  onNext(steps: WizardControlStep[]): void;
  onBack(steps: WizardControlStep[]): void;
  onClose(): void;
  goToStepById(steps: WizardControlStep[], id: number | string): void;
  goToStepByName(steps: WizardControlStep[], name: string): void;
  goToStepByIndex(steps: WizardControlStep[], index: number): void;
}

export const WizardContextProvider: React.FunctionComponent<WizardContextProviderProps> = ({
  steps: initialSteps,
  footer: initialFooter,
  currentStepIndex,
  isStepVisitRequired,
  children,
  onNext,
  onBack,
  onClose,
  goToStepById,
  goToStepByName,
  goToStepByIndex
}) => {
  const [steps, setSteps] = React.useState(initialSteps);
  const [currentFooter, setCurrentFooter] = React.useState(
    typeof initialFooter !== 'function' ? initialFooter : undefined
  );
  const currentStep = getCurrentStep(steps, currentStepIndex);

  const goToNextStep = React.useCallback(() => onNext(steps), [onNext, steps]);
  const goToPrevStep = React.useCallback(() => onBack(steps), [onBack, steps]);

  const footer = React.useMemo(() => {
    const wizardFooter = currentFooter || initialFooter;

    if (isCustomWizardFooter(wizardFooter)) {
      const customFooter = wizardFooter;

      return typeof customFooter === 'function'
        ? customFooter(currentStep, goToNextStep, goToPrevStep, onClose)
        : customFooter;
    }

    return (
      <WizardFooter
        currentStep={currentStep}
        onNext={goToNextStep}
        onBack={goToPrevStep}
        onClose={onClose}
        isBackDisabled={currentStep?.id === steps[0]?.id}
        {...wizardFooter}
      />
    );
  }, [currentFooter, initialFooter, currentStep, goToNextStep, goToPrevStep, onClose, steps]);

  const getStep = React.useCallback((stepId: string | number) => steps.find(step => step.id === stepId), [steps]);

  const setStep = React.useCallback(
    (step: Pick<WizardControlStep, 'id'> & Partial<WizardControlStep>) =>
      setSteps(prevSteps =>
        prevSteps.map(prevStep => {
          if (prevStep.id === step.id) {
            return { ...prevStep, ...step };
          }

          return prevStep;
        })
      ),
    []
  );

  const toggleStep = React.useCallback(
    (stepId: string | number, isHidden: boolean) =>
      setSteps(prevSteps => {
        let stepToHide: WizardControlStep;

        return prevSteps.map(prevStep => {
          if (prevStep.id === stepId) {
            // Don't hide the currently active step or its parent (if a sub-step).
            if (
              isHidden &&
              (currentStep.id === prevStep.id ||
                (isWizardParentStep(prevStep) && prevStep.subStepIds.includes(currentStep.id)))
            ) {
              // eslint-disable-next-line no-console
              console.error('Wizard: Unable to hide the current step or its parent.');
              return prevStep;
            }

            stepToHide = { ...prevStep, isHidden };
            return stepToHide;
          }

          // When isStepVisitRequired is enabled, if the step was previously hidden and not visited yet,
          // when it is shown, all steps beyond it should be disabled to ensure it is visited.
          if (
            isStepVisitRequired &&
            stepToHide?.isHidden === false &&
            !stepToHide?.isVisited &&
            prevSteps.indexOf(stepToHide) < prevSteps.indexOf(prevStep)
          ) {
            return { ...prevStep, isVisited: false };
          }

          return prevStep;
        });
      }),
    [currentStep.id, isStepVisitRequired]
  );

  return (
    <WizardContext.Provider
      value={{
        steps,
        currentStep,
        currentStepIndex,
        footer,
        onClose,
        getStep,
        setStep,
        toggleStep,
        setFooter: setCurrentFooter,
        onNext: goToNextStep,
        onBack: goToPrevStep,
        goToStepById: React.useCallback(id => goToStepById(steps, id), [goToStepById, steps]),
        goToStepByName: React.useCallback(name => goToStepByName(steps, name), [goToStepByName, steps]),
        goToStepByIndex: React.useCallback(index => goToStepByIndex(steps, index), [goToStepByIndex, steps])
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

WizardContextProvider.displayName = 'WizardContextProvider';

export const useWizardContext = () => React.useContext(WizardContext);
