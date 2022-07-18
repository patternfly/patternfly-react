import React from 'react';
import { Step, SubStep } from './types';
import { getActiveStep } from './utils';

export interface WizardComposableContextProps {
  steps: (Step | SubStep)[];
  activeStep: Step | SubStep;
  footer: React.ReactElement;
  onNext(): void;
  onBack(): void;
  onClose(): void;
  goToStepById(id: number | string): void;
  goToStepByName(name: string): void;
  goToStepByIndex(index: number): void;
  setFooter(footer: React.ReactElement): void;
}

export const WizardComposableContext = React.createContext({} as WizardComposableContextProps);

interface WizardComposableContextRenderProps {
  steps: (Step | SubStep)[];
  activeStep: Step | SubStep;
  footer: React.ReactElement;
  onNext(): void;
  onBack(): void;
  onClose(): void;
}

interface WizardComposableContextProviderProps {
  steps: (Step | SubStep)[];
  currentStepIndex: number;
  footer: React.ReactElement;
  children: React.ReactElement | ((props: WizardComposableContextRenderProps) => React.ReactElement);
  onNext(): void;
  onBack(): void;
  onClose(): void;
  goToStepById(id: number | string): void;
  goToStepByName(name: string): void;
  goToStepByIndex(index: number): void;
}

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const WizardComposableContextProvider: React.FunctionComponent<WizardComposableContextProviderProps> = ({
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
    if (!activeStep.visited) {
      setSteps(prevSteps =>
        prevSteps.map(step => {
          if (step.id === activeStep.id) {
            return { ...step, visited: true };
          }

          return step;
        })
      );
    }
  }, [activeStep.id, activeStep.visited]);

  return (
    <WizardComposableContext.Provider
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
    </WizardComposableContext.Provider>
  );
};

export const WizardComposableContextConsumer = WizardComposableContext.Consumer;
export const useWizardContext = () => React.useContext(WizardComposableContext);
