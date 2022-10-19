import React from 'react';

import {
  FormGroup,
  TextInput,
  Drawer,
  DrawerContent,
  Button,
  Flex,
  DrawerPanelContent,
  DrawerColorVariant,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Checkbox
} from '@patternfly/react-core';
import {
  Wizard,
  WizardStep,
  WizardBody,
  WizardFooter,
  useWizardContext,
  WizardHeader,
  WizardFooterWrapper,
  WizardNavStepFunction,
  WizardNavStepData
} from '@patternfly/react-core/next';

const StepId = {
  StepOne: 'sink-step-1',
  StepTwo: 'sink-step-2',
  StepTwoSubOne: 'sink-step-2-1',
  StepTwoSubTwo: 'sink-step-2-2',
  StepThree: 'sink-step-3',
  StepFour: 'sink-step-4',
  ReviewStep: 'sink-review-step'
};

interface SomeContextProps {
  isToggleStepChecked: boolean;
  errorMessage: string | undefined;
  setIsToggleStepChecked(isHidden: boolean): void;
  setErrorMessage(error: string | undefined): void;
}
type SomeContextRenderProps = Pick<SomeContextProps, 'isToggleStepChecked' | 'errorMessage'>;
interface SomeContextProviderProps {
  children: (context: SomeContextRenderProps) => React.ReactElement;
}

const SomeContext = React.createContext({} as SomeContextProps);

const SomeContextProvider = ({ children }: SomeContextProviderProps) => {
  const [isToggleStepChecked, setIsToggleStepChecked] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string>();

  return (
    <SomeContext.Provider value={{ isToggleStepChecked, errorMessage, setIsToggleStepChecked, setErrorMessage }}>
      {children({ isToggleStepChecked, errorMessage })}
    </SomeContext.Provider>
  );
};

const CustomWizardFooter = () => {
  const { activeStep, onNext, onBack, onClose } = useWizardContext();

  return (
    <WizardFooter
      activeStep={activeStep}
      onNext={onNext}
      onBack={onBack}
      onClose={onClose}
      isBackDisabled={activeStep.index === 1}
    />
  );
};

const StepContentWithDrawer = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);

  return (
    <Drawer isInline isExpanded={isDrawerExpanded}>
      <DrawerContent
        panelContent={
          <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
            <DrawerHead>
              <span tabIndex={isDrawerExpanded ? 0 : -1}>drawer content</span>
              <DrawerActions>
                <DrawerCloseButton onClick={() => setIsDrawerExpanded(false)} />
              </DrawerActions>
            </DrawerHead>
          </DrawerPanelContent>
        }
      >
        <WizardBody>
          <Flex direction={{ default: 'column' }}>
            {!isDrawerExpanded && (
              <Button isInline variant="link" onClick={() => setIsDrawerExpanded(prevExpanded => !prevExpanded)}>
                Open drawer
              </Button>
            )}

            <FormGroup fieldId="some-text-input" label="Text input label">
              <TextInput aria-label="Some Text Input Label" />
            </FormGroup>
          </Flex>
        </WizardBody>
      </DrawerContent>
    </Drawer>
  );
};

const CustomStepThreeFooter = () => {
  const { onNext: goToNextStep, onBack, onClose } = useWizardContext();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onNext(goToStep: () => void) {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    goToStep();
  }

  return (
    <WizardFooterWrapper>
      <Button variant="primary" onClick={() => onNext(goToNextStep)} isLoading={isLoading} isDisabled={isLoading}>
        Async Next
      </Button>
      <Button variant="secondary" onClick={onBack} isDisabled={isLoading}>
        Back
      </Button>
      <Button variant="link" onClick={onClose} isDisabled={isLoading}>
        Cancel
      </Button>
    </WizardFooterWrapper>
  );
};

const StepContentWithActions = () => {
  const { isToggleStepChecked, errorMessage, setIsToggleStepChecked, setErrorMessage } = React.useContext(SomeContext);

  return (
    <>
      <Checkbox
        label="Give this step an error status"
        isChecked={!!errorMessage}
        onChange={checked => setErrorMessage(checked ? 'Some error message' : undefined)}
        id="toggle-error-checkbox"
        name="Toggle Error Checkbox"
      />
      <Checkbox
        label="Toggle visibility of the next step"
        isChecked={isToggleStepChecked}
        onChange={checked => setIsToggleStepChecked(checked)}
        id="toggle-hide-step-checkbox"
        name="Toggle Hide Step Checkbox"
      />
    </>
  );
};

export const WizardKitchenSink: React.FunctionComponent = () => {
  const onNext: WizardNavStepFunction = (_currentStep: WizardNavStepData, _previousStep: WizardNavStepData) => {};

  return (
    <SomeContextProvider>
      {({ isToggleStepChecked, errorMessage }) => (
        <Wizard
          height={400}
          header={<WizardHeader title="You're a wizard, Harry" closeButtonAriaLabel="Close header" />}
          footer={<CustomWizardFooter />}
          onNext={onNext}
          isStepVisitRequired
        >
          <WizardStep id={StepId.StepOne} name="Step 1" body={null} status="error">
            <StepContentWithDrawer />
          </WizardStep>
          <WizardStep
            id={StepId.StepTwo}
            name="Step 2"
            steps={[
              <WizardStep
                status={errorMessage ? 'error' : 'default'}
                id={StepId.StepTwoSubOne}
                key={StepId.StepTwoSubOne}
                name="Substep 1"
              >
                <StepContentWithActions />
              </WizardStep>,
              <WizardStep
                id={StepId.StepTwoSubTwo}
                key={StepId.StepTwoSubTwo}
                name="Substep 2"
                isHidden={isToggleStepChecked}
              >
                Substep 2 content
              </WizardStep>
            ]}
          />
          <WizardStep
            id={StepId.StepThree}
            name="Step 3"
            navItem={{
              content: <span style={{ color: 'var(--pf-global--default-color--200)' }}>Custom item</span>
            }}
            footer={<CustomStepThreeFooter />}
          >
            Step 3 content w/ custom async footer
          </WizardStep>
          <WizardStep id={StepId.ReviewStep} name="Review" footer={{ nextButtonText: 'Submit' }}>
            Review step content
          </WizardStep>
        </Wizard>
      )}
    </SomeContextProvider>
  );
};
