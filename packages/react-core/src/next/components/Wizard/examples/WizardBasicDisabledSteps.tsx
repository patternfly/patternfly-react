import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardBasicDisabledSteps: React.FunctionComponent = () => (
  <Wizard height={400} title="Basic disabled wizard">
    <WizardStep name="Step 1" id="bdisabled-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep name="Step 2" id="bdisabled-second-step" isDisabled>
      Step 2 content
    </WizardStep>
    <WizardStep name="Step 3" id="bdisabled-third-step">
      Step 3 content
    </WizardStep>
    <WizardStep name="Step 4" id="bdisabled-fourth-step" isDisabled>
      Step 4 content
    </WizardStep>
    <WizardStep name="Review" id="bdisabled-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
