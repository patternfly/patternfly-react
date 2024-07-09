import React from 'react';

import { Radio, Wizard, WizardStep } from '@patternfly/react-core';

interface SomeContextProps {
  errorMessage: string | undefined;
  setErrorMessage(error: string | undefined): void;
  successMessage: string | undefined;
  setSuccessMessage(error: string | undefined): void;
}
type SomeContextRenderProps = Pick<SomeContextProps, 'successMessage', 'errorMessage'>;
interface SomeContextProviderProps {
  children: (context: SomeContextRenderProps) => React.ReactElement;
}

const SomeContext: React.Context<SomeContextProps> = React.createContext({} as SomeContextProps);

const SomeContextProvider = ({ children }: SomeContextProviderProps) => {
  const [errorMessage, setErrorMessage] = React.useState<string>();
  const [successMessage, setSuccessMessage] = React.useState<string>();

  return (
    <SomeContext.Provider value={{ errorMessage, setErrorMessage, successMessage, setSuccessMessage }}>
      {children({ errorMessage, successMessage })}
    </SomeContext.Provider>
  );
};

const StepContentWithAction = () => {
  const { errorMessage, setErrorMessage, successMessage, setSuccessMessage } = React.useContext(SomeContext);

  return (
    <>
      <Radio
        label="Give step 1 an error status"
        isChecked={!!errorMessage}
        onChange={(_event, checked) => {
          setErrorMessage(checked ? 'Some error message' : undefined);
          setSuccessMessage(!checked ? 'Some error message' : undefined);
        }}
        id="toggle-error-checkbox"
        name="Toggle Status"
      />
      <Radio
        label="Give step 1 a success status"
        isChecked={!!successMessage}
        onChange={(_event, checked) => {
          setSuccessMessage(checked ? 'Some success message' : undefined);
          setErrorMessage(!checked ? 'Some success message' : undefined);
        }}
        id="toggle-success-checkbox"
        name="Toggle Status"
      />
    </>
  );
};

export const WizardStepStatus: React.FunctionComponent = () => (
  <SomeContextProvider>
    {({ errorMessage, successMessage }) => {
      let status = 'default';
      if (errorMessage) {
        status = 'error';
      } else if (successMessage) {
        status = 'success';
      }
      return (
        <Wizard height={400} title="Step status wizard">
          <WizardStep status={status} id="status-step-1" name="Step 1">
            Step 1 content
          </WizardStep>
          <WizardStep name="Status step" id="error-status-step-2">
            <StepContentWithAction />
          </WizardStep>
          <WizardStep name="Review" id="status-review-step" footer={{ nextButtonText: 'Finish' }}>
            Review step content
          </WizardStep>
        </Wizard>
      );
    }}
  </SomeContextProvider>
);
