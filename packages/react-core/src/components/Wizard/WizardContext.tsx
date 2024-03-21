import {
  ReactElement,
  MouseEvent,
  FunctionComponent,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext
} from 'react';

import { isCustomWizardFooter, isWizardSubStep, WizardStepType, WizardFooterType } from './types';
import { WizardFooter, WizardFooterProps } from './WizardFooter';

export interface WizardContextProps {
  /** List of steps */
  steps: WizardStepType[];
  /** Current step */
  activeStep: WizardStepType;
  /** Footer element */
  footer: ReactElement;
  /** Close the wizard */
  close: () => void;
  /** Navigate to the next step */
  goToNextStep: () => void | Promise<void>;
  /** Navigate to the previous step */
  goToPrevStep: () => void | Promise<void>;
  /** Navigate to step by ID */
  goToStepById: (id: number | string) => void;
  /** Navigate to step by name */
  goToStepByName: (name: string) => void;
  /** Navigate to step by index */
  goToStepByIndex: (index: number) => void;
  /** Update the footer with any react element */
  setFooter: (footer: ReactElement | Partial<WizardFooterProps>) => void;
  /** Get step by ID */
  getStep: (stepId: number | string) => WizardStepType;
  /** Set step by ID */
  setStep: (step: Pick<WizardStepType, 'id'> & Partial<WizardStepType>) => void;
}

export const WizardContext = createContext({} as WizardContextProps);

export interface WizardContextProviderProps {
  steps: WizardStepType[];
  activeStepIndex: number;
  footer: WizardFooterType;
  children: ReactElement;
  onNext(event: MouseEvent<HTMLButtonElement>, steps: WizardStepType[]): void;
  onBack(event: MouseEvent<HTMLButtonElement>, steps: WizardStepType[]): void;
  onClose?(event: MouseEvent<HTMLButtonElement>): void;
  goToStepById(steps: WizardStepType[], id: number | string): void;
  goToStepByName(steps: WizardStepType[], name: string): void;
  goToStepByIndex(
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>,
    steps: WizardStepType[],
    index: number
  ): void;
}

export const WizardContextProvider: FunctionComponent<WizardContextProviderProps> = ({
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
  const [currentSteps, setCurrentSteps] = useState<WizardStepType[]>(initialSteps);
  const [currentFooter, setCurrentFooter] = useState<WizardFooterType>();

  // Combined initial and current state steps
  const steps = useMemo(
    () =>
      currentSteps.map((currentStepProps, index) => ({
        ...currentStepProps,
        ...initialSteps[index]
      })),
    [initialSteps, currentSteps]
  );

  const activeStep = useMemo(() => steps.find((step) => step.index === activeStepIndex), [activeStepIndex, steps]);

  const close = useCallback(() => onClose?.(null), [onClose]);
  const goToNextStep = useCallback(() => onNext(null, steps), [onNext, steps]);
  const goToPrevStep = useCallback(() => onBack(null, steps), [onBack, steps]);

  const footer = useMemo(() => {
    const wizardFooter = activeStep?.footer || currentFooter || initialFooter;

    if (isCustomWizardFooter(wizardFooter)) {
      const customFooter = wizardFooter;

      return typeof customFooter === 'function'
        ? customFooter(activeStep, goToNextStep, goToPrevStep, close)
        : customFooter;
    }

    return (
      <WizardFooter
        activeStep={activeStep}
        onNext={goToNextStep}
        onBack={goToPrevStep}
        onClose={close}
        isBackDisabled={activeStep?.index === 1 || (isWizardSubStep(activeStep) && activeStep?.index === 2)}
        {...wizardFooter}
      />
    );
  }, [currentFooter, initialFooter, activeStep, goToNextStep, goToPrevStep, close]);

  const getStep = useCallback((stepId: string | number) => steps.find((step) => step.id === stepId), [steps]);

  const setStep = useCallback(
    (step: Pick<WizardStepType, 'id'> & Partial<WizardStepType>) =>
      setCurrentSteps((prevSteps) =>
        prevSteps.map((prevStep) => {
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
        close,
        getStep,
        setStep,
        goToNextStep,
        goToPrevStep,
        setFooter: setCurrentFooter,
        goToStepById: useCallback((id) => goToStepById(steps, id), [goToStepById, steps]),
        goToStepByName: useCallback((name) => goToStepByName(steps, name), [goToStepByName, steps]),
        goToStepByIndex: useCallback((index: number) => goToStepByIndex(null, steps, index), [goToStepByIndex, steps])
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

WizardContextProvider.displayName = 'WizardContextProvider';

export const useWizardContext = () => useContext(WizardContext);
