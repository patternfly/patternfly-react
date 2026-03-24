import { Wizard, WizardStep } from '@patternfly/react-core';

export const WizardPlain: React.FunctionComponent = () => (
  <Wizard height={400} title="Plain wizard" isPlain>
    <WizardStep name="Step 1" id="plain-first-step">
      <p>Step 1 content</p>
    </WizardStep>
    <WizardStep name="Step 2" id="plain-second-step">
      <p>Step 2 content</p>
    </WizardStep>
    <WizardStep name="Review" id="plain-review-step" footer={{ nextButtonText: 'Finish' }}>
      <p>Review step content</p>
    </WizardStep>
  </Wizard>
);
