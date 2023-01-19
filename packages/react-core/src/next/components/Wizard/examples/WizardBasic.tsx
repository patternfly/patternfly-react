import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardBasic: React.FunctionComponent = () => (
  <Wizard height={400} title="Basic wizard">
    <WizardStep name="Step 1" id="basic-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep name="Step 2" id="basic-second-step">
      Step 2 content
    </WizardStep>
    <WizardStep name="Review" id="basic-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
