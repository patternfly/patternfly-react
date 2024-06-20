import React from 'react';

import {
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Flex,
  FlexItem,
  Spinner,
  useWizardContext,
  Wizard,
  WizardFooter,
  WizardFooterWrapper,
  WizardStep
} from '@patternfly/react-core';

const CustomWizardFooter = () => {
  const { activeStep, goToNextStep, goToPrevStep, close } = useWizardContext();

  return (
    <WizardFooter
      activeStep={activeStep}
      onNext={goToNextStep}
      onBack={goToPrevStep}
      onClose={close}
      isBackDisabled={activeStep.index === 1}
    />
  );
};

const CustomStepTwoFooter = () => {
  const { goToNextStep, goToPrevStep, close } = useWizardContext();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onNext() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    goToNextStep();
  }

  return (
    <WizardFooterWrapper>
      <ActionList>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="secondary" onClick={goToPrevStep} isDisabled={isLoading}>
              Back
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="primary" onClick={onNext} isLoading={isLoading} isDisabled={isLoading}>
              Async Next
            </Button>
          </ActionListItem>
        </ActionListGroup>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="link" onClick={close} isDisabled={isLoading}>
              Cancel
            </Button>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </WizardFooterWrapper>
  );
};

interface ReviewStepContentProps {
  isSubmitting: boolean | undefined;
}

const ReviewStepContent: React.FunctionComponent<ReviewStepContentProps> = ({ isSubmitting }) => {
  if (isSubmitting === undefined) {
    return <FlexItem alignSelf={{ default: 'alignSelfFlexStart' }}>Review step content</FlexItem>;
  }

  if (isSubmitting) {
    return (
      <>
        <div>Calculating wizard score...</div>
        <Spinner />
      </>
    );
  }

  return <>50 points to Gryffindor!</>;
};

export const WizardWithCustomFooter: React.FunctionComponent = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>();

  async function onSubmit(): Promise<void> {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    setIsSubmitting(false);
  }

  return (
    <Wizard height={400} title="Custom footer wizard" footer={<CustomWizardFooter />}>
      <WizardStep name="Step 1" id="custom-footer-first-step">
        Step 1 content
      </WizardStep>
      <WizardStep id="custom-footer-second-step" name="Step 2" footer={<CustomStepTwoFooter />}>
        Step 2 content with a custom async footer
      </WizardStep>
      <WizardStep
        id="custom-footer-review-step"
        name="Review"
        footer={{
          nextButtonText: 'Submit',
          onNext: onSubmit,
          isNextDisabled: isSubmitting,
          isBackDisabled: isSubmitting
        }}
      >
        <Flex
          direction={{ default: 'column' }}
          alignItems={{ default: 'alignItemsCenter' }}
          spaceItems={{ default: 'spaceItemsLg' }}
        >
          <ReviewStepContent isSubmitting={isSubmitting} />
        </Flex>
      </WizardStep>
    </Wizard>
  );
};
