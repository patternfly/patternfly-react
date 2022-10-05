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
  WizardStepProps,
  useWizardContext,
  WizardNavStepFunction,
  WizardNavStepData,
  WizardNavItem,
  WizardHeader,
  WizardFooterWrapper,
  WizardNavItemType
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

const SomeContext = React.createContext({} as SomeContextProps);

const SomeContextProvider = ({ children }) => {
  const [isToggleStepChecked, setIsToggleStepChecked] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string>();

  return (
    <SomeContext.Provider value={{ isToggleStepChecked, errorMessage, setIsToggleStepChecked, setErrorMessage }}>
      {children}
    </SomeContext.Provider>
  );
};

const CustomWizardFooter = () => {
  const { currentStep, currentStepIndex, onNext, onBack, onClose } = useWizardContext();

  return (
    <WizardFooter
      currentStep={currentStep}
      onNext={onNext}
      onBack={onBack}
      onClose={onClose}
      isBackDisabled={currentStepIndex === 1}
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

const StepWithCustomFooter = (props: WizardStepProps) => {
  const { onNext: goToNextStep, onBack, onClose } = useWizardContext();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onNext(goToStep: () => void) {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    goToStep();
  }

  const footer = React.useMemo(
    () => (
      <WizardFooterWrapper>
        <Button variant="primary" onClick={() => onNext(goToNextStep)} isLoading={isLoading} isDisabled={isLoading}>
          Async Next
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="link" onClick={onClose}>
          Cancel
        </Button>
      </WizardFooterWrapper>
    ),
    [goToNextStep, isLoading, onBack, onClose]
  );

  return (
    <WizardStep {...props} footer={footer}>
      Step 3 content w/ custom async footer
    </WizardStep>
  );
};

const StepWithContextActions = (props: WizardStepProps) => {
  const { isToggleStepChecked, errorMessage, setIsToggleStepChecked, setErrorMessage } = React.useContext(SomeContext);

  const navItem: WizardNavItemType = React.useCallback(
    (step, currentStep, steps, goToStepByIndex) => (
      <WizardNavItem
        id={step.id}
        content={step.name}
        isCurrent={currentStep.id === step.id}
        stepIndex={steps.indexOf(step) + 1}
        isDisabled={step.isDisabled || !step.isVisited}
        isVisited={step.isVisited}
        onNavItemClick={goToStepByIndex}
        status={errorMessage ? 'error' : 'default'}
      />
    ),
    [errorMessage]
  );

  return (
    <WizardStep {...props} navItem={navItem}>
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
    </WizardStep>
  );
};

const StepToHide = (props: WizardStepProps) => {
  const { isToggleStepChecked } = React.useContext(SomeContext);
  return <WizardStep {...props} isHidden={isToggleStepChecked} />;
};

export const WizardKitchenSink: React.FunctionComponent = () => {
  const onNext: WizardNavStepFunction = (_currentStep: WizardNavStepData, _previousStep: WizardNavStepData) => {};

  return (
    <SomeContextProvider>
      <Wizard
        height={400}
        header={<WizardHeader title="You're a wizard, Harry" closeButtonAriaLabel="Close header" />}
        footer={<CustomWizardFooter />}
        isStepVisitRequired
        onNext={onNext}
        hasUnmountedSteps={false}
      >
        <WizardStep id={StepId.StepOne} name="Step 1" body={null} status="error">
          <StepContentWithDrawer />
        </WizardStep>
        <WizardStep
          id={StepId.StepTwo}
          name="Step 2"
          steps={[
            <StepWithContextActions id={StepId.StepTwoSubOne} key={StepId.StepTwoSubOne} name="Substep 1" />,
            <StepToHide id={StepId.StepTwoSubTwo} key={StepId.StepTwoSubTwo} name="Substep 2">
              Substep 2 content
            </StepToHide>
          ]}
        />
        <StepWithCustomFooter
          id={StepId.StepThree}
          name="Step 3"
          navItem={{ content: <span style={{ color: 'var(--pf-global--default-color--200)' }}>Custom item</span> }}
        />
        <WizardStep id={StepId.ReviewStep} name="Review" footer={{ nextButtonText: 'Submit' }}>
          Review step content
        </WizardStep>
      </Wizard>
    </SomeContextProvider>
  );
};
