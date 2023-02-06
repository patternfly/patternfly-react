import React from 'react';

import { Checkbox } from '@patternfly/react-core';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

interface SomeContextProps {
  errorMessage: string | undefined;
  setErrorMessage(error: string | undefined): void;
}
type SomeContextRenderProps = Pick<SomeContextProps, 'errorMessage'>;
interface SomeContextProviderProps {
  children: (context: SomeContextRenderProps) => React.ReactElement;
}

const SomeContext: React.Context<SomeContextProps> = React.createContext({} as SomeContextProps);

const SomeContextProvider = ({ children }: SomeContextProviderProps) => {
  const [errorMessage, setErrorMessage] = React.useState<string>();

  return (
    <SomeContext.Provider value={{ errorMessage, setErrorMessage }}>{children({ errorMessage })}</SomeContext.Provider>
  );
};

const StepContentWithAction = () => {
  const { errorMessage, setErrorMessage } = React.useContext(SomeContext);

  return (
    <Checkbox
      label="Give step 1 an error status"
      isChecked={!!errorMessage}
      onChange={checked => setErrorMessage(checked ? 'Some error message' : undefined)}
      id="toggle-error-checkbox"
      name="Toggle Error Checkbox"
    />
  );
};

export const WizardStepErrorStatus: React.FunctionComponent = () => (
  <SomeContextProvider>
    {({ errorMessage }) => (
      <Wizard height={400} title="Step error status wizard">
        <WizardStep status={errorMessage ? 'error' : 'default'} id="error-status-step-1" name="Step 1">
          Step 1 content
        </WizardStep>
        <WizardStep name="Error action step" id="error-status-step-2">
          <StepContentWithAction />
        </WizardStep>
        <WizardStep name="Review" id="error-status-review-step" footer={{ nextButtonText: 'Finish' }}>
          Review step content
        </WizardStep>
      </Wizard>
    )}
  </SomeContextProvider>
);
