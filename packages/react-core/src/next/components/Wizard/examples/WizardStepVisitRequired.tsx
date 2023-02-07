import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardStepVisitRequired: React.FunctionComponent = () => (
  <Wizard height={400} title="Incrementally enabled steps wizard" isVisitRequired>
    <WizardStep name="Step 1" id="req-visit-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep name="Step 2" id="req-visit-second-step">
      Step 2 content
    </WizardStep>
    <WizardStep name="Step 3" id="req-visit-third-step">
      Step 3 content
    </WizardStep>
    <WizardStep name="Step 4" id="req-visit-fourth-step">
      Step 4 content
    </WizardStep>
    <WizardStep name="Review" id="req-visit-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
