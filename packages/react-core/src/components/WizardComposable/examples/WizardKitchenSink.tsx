import React from 'react';

import {
  WizardComposable,
  WizardComposableStep,
  WizardHeader,
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
  WizardComposableBody,
  WizardComposableFooter,
  useWizardContext,
  WizardNavItem,
  Step,
  useWizardFooter
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

const CustomWizardFooter = () => {
  const { activeStep, onNext, onBack, onClose } = useWizardContext();
  return <WizardComposableFooter activeStep={activeStep} onNext={onNext} onBack={onBack} onClose={onClose} />;
};

const CustomNavItem = () => {
  const { steps, activeStep, goToStepByIndex } = useWizardContext();
  const step = (steps.find(step => step.id === 'third-step') || {}) as Step;

  return (
    <WizardNavItem
      id={step.id}
      content={step.name}
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
        <WizardComposableBody>
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
        </WizardComposableBody>
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

export const WizardKitchenSink: React.FunctionComponent = () => (
  <WizardComposable
    height={400}
    header={<WizardHeader title="You're a wizard, Harry" closeButtonAriaLabel="Close header" />}
    footer={<CustomWizardFooter />}
    nav={{ forceStepVisit: true, isExpandable: true }}
  >
    <WizardComposableStep id="first-step" name="First step" includeStepBody={false}>
      <StepContentWithDrawer />
    </WizardComposableStep>
    <WizardComposableStep
      id="second-step"
      name="Second step"
      steps={[
        <WizardComposableStep id="sub-step-one" key="substep-one" name="Substep 1">
          Substep 1 content
        </WizardComposableStep>,
        <WizardComposableStep id="sub-step-two" key="substep-two" name="Substep 2">
          Substep 2 content
        </WizardComposableStep>
      ]}
    />
    <WizardComposableStep id="third-step" name="Third step" navItem={<CustomNavItem />}>
      <StepWithCustomFooter />
    </WizardComposableStep>
    <WizardComposableStep id="fourth-step" name="Fourth step">
      Step 4 content
    </WizardComposableStep>
    <WizardComposableStep id="review-step" name="Review" nextButtonText="Submit" disableNext>
      Review step content
    </WizardComposableStep>
  </WizardComposable>
);
