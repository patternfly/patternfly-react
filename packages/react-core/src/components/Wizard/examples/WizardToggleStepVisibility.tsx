import { createContext, useContext, useState } from 'react';
import { Checkbox, Wizard, WizardStep } from '@patternfly/react-core';

interface SomeContextProps {
  isToggleStepChecked: boolean;
  setIsToggleStepChecked(isHidden: boolean): void;
}
type SomeContextRenderProps = Pick<SomeContextProps, 'isToggleStepChecked'>;
interface SomeContextProviderProps {
  children: (context: SomeContextRenderProps) => React.ReactElement<any>;
}

const SomeContext: React.Context<SomeContextProps> = createContext({} as SomeContextProps);

const SomeContextProvider: React.FunctionComponent<SomeContextProviderProps> = ({ children }) => {
  const [isToggleStepChecked, setIsToggleStepChecked] = useState(false);

  return (
    <SomeContext.Provider value={{ isToggleStepChecked, setIsToggleStepChecked }}>
      {children({ isToggleStepChecked })}
    </SomeContext.Provider>
  );
};

const StepContentWithAction: React.FunctionComponent = () => {
  const { isToggleStepChecked, setIsToggleStepChecked } = useContext(SomeContext);

  return (
    <Checkbox
      label="Toggle visibility of the next step"
      isChecked={isToggleStepChecked}
      onChange={(_event, checked) => setIsToggleStepChecked(checked)}
      id="toggle-hide-step-checkbox"
      name="Toggle Hide Step Checkbox"
    />
  );
};

export const WizardToggleStepVisibility: React.FunctionComponent = () => (
  <SomeContextProvider>
    {({ isToggleStepChecked }) => (
      <Wizard height={400} title="Toggle step visibility wizard">
        <WizardStep name="Hidden action step" id="toggle-visible-step-1">
          <StepContentWithAction />
        </WizardStep>
        <WizardStep name="Step 2" id="toggle-visible-step-2" isHidden={isToggleStepChecked}>
          Step 2 content
        </WizardStep>
        <WizardStep name="Review" id="toggle-visible-review-step" footer={{ nextButtonText: 'Finish' }}>
          Review step content
        </WizardStep>
      </Wizard>
    )}
  </SomeContextProvider>
);
