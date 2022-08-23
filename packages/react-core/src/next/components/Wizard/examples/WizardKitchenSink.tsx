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
  DrawerCloseButton
} from '@patternfly/react-core';
import {
  Wizard,
  WizardStep,
  WizardBody,
  WizardFooter,
  WizardStepProps,
  WizardControlStep,
  useWizardFooter,
  useWizardContext,
  WizardNavStepFunction,
  WizardNavStepData,
  WizardNavItem,
  WizardHeader
} from '@patternfly/react-core/next';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

const CustomWizardFooter = () => {
  const { activeStep, onNext, onBack, onClose } = useWizardContext();
  return <WizardFooter activeStep={activeStep} onNext={onNext} onBack={onBack} onClose={onClose} />;
};

const CustomNavItem = () => {
  const { steps, activeStep, goToStepByIndex } = useWizardContext();
  const step = (steps.find(step => step.id === 'third-step') || {}) as WizardControlStep;

  return (
    <WizardNavItem
      id={step.id}
      content={<span style={{ color: 'var(--pf-global--default-color--200)' }}>Custom item</span>}
      isCurrent={activeStep.id === step.id}
      step={steps.indexOf(step) + 1}
      isDisabled={step.isDisabled || !step.visited}
      onNavItemClick={goToStepByIndex}
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

const StepWithCustomFooter = () => {
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
      <div className={css(styles.wizardFooter)}>
        <Button
          variant="primary"
          type="submit"
          onClick={() => onNext(goToNextStep)}
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Async Next
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="link" onClick={onClose}>
          Cancel
        </Button>
      </div>
    ),
    [isLoading, onBack, onClose, goToNextStep]
  );
  useWizardFooter(footer);

  return <>Step 3 content w/ custom async footer</>;
};

const CustomStepFour = (props: WizardStepProps) => <div {...props} id={props.id.toString()} />;

export const WizardKitchenSink: React.FunctionComponent = () => {
  const onNext: WizardNavStepFunction = (currentStep: WizardNavStepData, previousStep: WizardNavStepData) => {
    // eslint-disable-next-line no-console
    console.log('currentStep: ', currentStep, '\n previousStep: ', previousStep);
  };

  return (
    <Wizard
      height={400}
      header={<WizardHeader title="You're a wizard, Harry" closeButtonAriaLabel="Close header" />}
      footer={<CustomWizardFooter />}
      nav={{ forceStepVisit: true, isExpandable: true }}
      onNext={onNext}
    >
      <WizardStep id="sink-first-step" name="First step" body={null}>
        <StepContentWithDrawer />
      </WizardStep>
      <WizardStep
        id="sink-second-step"
        name="Second step"
        steps={[
          <WizardStep id="sink-sub-step-one" key="substep-one" name="Substep 1">
            Substep 1 content
          </WizardStep>,
          <WizardStep id="sink-sub-step-two" key="substep-two" name="Substep 2">
            Substep 2 content
          </WizardStep>
        ]}
      />
      <WizardStep id="sink-third-step" name="Third step" navItem={<CustomNavItem />}>
        <StepWithCustomFooter />
      </WizardStep>
      <CustomStepFour id="sink-fourth-step" name="Fourth step">
        <WizardBody>Step 4 content</WizardBody>
      </CustomStepFour>
      <WizardStep id="sink-review-step" name="Review" nextButtonText="Submit">
        Review step content
      </WizardStep>
    </Wizard>
  );
};
