import React from 'react';
import { WizardControlStep } from './types';
import { getActiveStep } from './utils';

export interface WizardContextProps {
  /** List of steps */
  steps: WizardControlStep[];
  /** Active step */
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
  setFooter: (footer: React.ReactElement) => void;
}

export const WizardContext = React.createContext({} as WizardContextProps);

interface WizardContextRenderProps {
  steps: WizardControlStep[];
  activeStep: WizardControlStep;
  footer: React.ReactElement;
  onNext(): void;
  onBack(): void;
  onClose(): void;
}

export interface WizardContextProviderProps {
  steps: WizardControlStep[];
  currentStepIndex: number;
  footer: React.ReactElement;
  children: React.ReactElement | ((props: WizardContextRenderProps) => React.ReactElement);
  onNext(): void;
  onBack(): void;
  onClose(): void;
  goToStepById(id: number | string): void;
  goToStepByName(name: string): void;
  goToStepByIndex(index: number): void;
}

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const WizardContextProvider: React.FunctionComponent<WizardContextProviderProps> = ({
  steps: initialSteps,
  footer: initialFooter,
  currentStepIndex,
  children,
  onNext,
  onBack,
  onClose,
  goToStepById,
  goToStepByName,
  goToStepByIndex
}) => {
  const [steps, setSteps] = React.useState(initialSteps);
  const [footer, setFooter] = React.useState(initialFooter);
  const activeStep = getActiveStep(steps, currentStepIndex);

  // When the active step changes and the newly active step isn't visited, set the visited flag to true.
  React.useEffect(() => {
    if (activeStep && !activeStep?.visited) {
      setSteps(prevSteps =>
        prevSteps.map(step => {
          if (step.id === activeStep.id) {
            return { ...step, visited: true };
          }

          return step;
        })
      );
    }
  }, [activeStep]);

  return (
    <WizardContext.Provider
      value={{
        steps,
        activeStep,
        footer,
        onNext,
        onBack,
        onClose,
        goToStepById,
        goToStepByName,
        goToStepByIndex,
        setFooter
      }}
    >
      {typeof children === 'function' ? children({ activeStep, steps, footer, onNext, onBack, onClose }) : children}
    </WizardContext.Provider>
  );
};

export const useWizardContext = () => React.useContext(WizardContext);
