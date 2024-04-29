import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';

export const WizardFocusOnNextBack: React.FunctionComponent = () => (
  <Wizard shouldFocusContent title="Wizard that focuses content on next or back click">
    <WizardStep name="Step 1" id="wizard-focus-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep name="Step 2" id="wizard-focus-second-step">
      Step 2 content
    </WizardStep>
    <WizardStep name="Review" id="wizard-focus-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
