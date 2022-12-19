import React from 'react';

import { isCustomWizardFooter, WizardControlStep, WizardFooterType } from './types';
import { getActiveStep } from './utils';
import { WizardFooter, WizardFooterProps } from './WizardFooter';

export interface WizardContextProps {
  /** List of steps */
  steps: WizardControlStep[];
  /** Current step */
  activeStep: WizardControlStep;
  /** Footer element */
  footer: React.ReactElement;
  /** Navigate to the next step */
  onNext: () => void | Promise<void>;
  /** Navigate to the previous step */
  onBack: () => void | Promise<void>;
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
}

export const WizardContext = React.createContext({} as WizardContextProps);

export interface WizardContextProviderProps {
  steps: WizardControlStep[];
  activeStepIndex: number;
  footer: WizardFooterType;
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
  activeStepIndex,
  children,
  onNext,
  onBack,
  onClose,
  goToStepById,
  goToStepByName,
  goToStepByIndex
}) => {
  const [currentSteps, setCurrentSteps] = React.useState(initialSteps);
  const [currentFooter, setCurrentFooter] = React.useState(
    typeof initialFooter !== 'function' ? initialFooter : undefined
  );

  // Combined initial and current state steps
  const steps = React.useMemo(
    () =>
      currentSteps.map((currentStepProps, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isVisited, ...initialStepProps } = initialSteps[index];

        return {
          ...currentStepProps,
          ...initialStepProps
        };
      }),
    [initialSteps, currentSteps]
  );
  const activeStep = getActiveStep(steps, activeStepIndex);

  const goToNextStep = React.useCallback(() => onNext(steps), [onNext, steps]);
  const goToPrevStep = React.useCallback(() => onBack(steps), [onBack, steps]);

  const footer = React.useMemo(() => {
    const wizardFooter = activeStep?.footer || currentFooter || initialFooter;

    if (isCustomWizardFooter(wizardFooter)) {
      const customFooter = wizardFooter;

      return typeof customFooter === 'function'
        ? customFooter(activeStep, goToNextStep, goToPrevStep, onClose)
        : customFooter;
    }

    return (
      <WizardFooter
        activeStep={activeStep}
        onNext={goToNextStep}
        onBack={goToPrevStep}
        onClose={onClose}
        isBackDisabled={activeStep?.id === steps[0]?.id}
        {...wizardFooter}
      />
    );
  }, [currentFooter, initialFooter, activeStep, goToNextStep, goToPrevStep, onClose, steps]);

  const getStep = React.useCallback((stepId: string | number) => steps.find(step => step.id === stepId), [steps]);

  const setStep = React.useCallback(
    (step: Pick<WizardControlStep, 'id'> & Partial<WizardControlStep>) =>
      setCurrentSteps(prevSteps =>
        prevSteps.map(prevStep => {
          if (prevStep.id === step.id) {
            return { ...prevStep, ...step };
          }

          return prevStep;
        })
      ),
    []
  );

  return (
    <WizardContext.Provider
      value={{
        steps,
        activeStep,
        footer,
        onClose,
        getStep,
        setStep,
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
