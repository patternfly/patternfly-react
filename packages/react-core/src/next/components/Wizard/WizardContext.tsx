import React from 'react';

import { isCustomWizardFooter, WizardControlStep, WizardFooterType } from './types';
import { getActiveStep } from './utils';
import { useGetMergedSteps } from './hooks/useGetMergedSteps';
import { WizardFooter, WizardFooterProps } from './WizardFooter';

export interface WizardContextProps {
  /** List of steps */
  steps: WizardControlStep[];
  /** Current step */
  activeStep: WizardControlStep;
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
  /** Set multiple steps */
  setSteps: React.Dispatch<React.SetStateAction<WizardControlStep[]>>;
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
  const [steps, setSteps] = React.useState(initialSteps);
  const [currentFooter, setCurrentFooter] = React.useState(
    typeof initialFooter !== 'function' ? initialFooter : undefined
  );
  const mergedSteps = useGetMergedSteps(initialSteps, steps);
  const activeStep = getActiveStep(mergedSteps, activeStepIndex);

  const goToNextStep = React.useCallback(() => onNext(mergedSteps), [onNext, mergedSteps]);
  const goToPrevStep = React.useCallback(() => onBack(mergedSteps), [onBack, mergedSteps]);

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
        isBackDisabled={activeStep?.id === mergedSteps[0]?.id}
        {...wizardFooter}
      />
    );
  }, [currentFooter, initialFooter, activeStep, goToNextStep, goToPrevStep, onClose, mergedSteps]);

  const getStep = React.useCallback((stepId: string | number) => mergedSteps.find(step => step.id === stepId), [
    mergedSteps
  ]);

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

  return (
    <WizardContext.Provider
      value={{
        steps: mergedSteps,
        activeStep,
        footer,
        onClose,
        getStep,
        setStep,
        setSteps,
        setFooter: setCurrentFooter,
        onNext: goToNextStep,
        onBack: goToPrevStep,
        goToStepById: React.useCallback(id => goToStepById(mergedSteps, id), [goToStepById, mergedSteps]),
        goToStepByName: React.useCallback(name => goToStepByName(mergedSteps, name), [goToStepByName, mergedSteps]),
        goToStepByIndex: React.useCallback(index => goToStepByIndex(mergedSteps, index), [goToStepByIndex, mergedSteps])
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

WizardContextProvider.displayName = 'WizardContextProvider';

export const useWizardContext = () => React.useContext(WizardContext);
