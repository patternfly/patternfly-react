import React from 'react';
import { Wizard, WizardHeader, WizardStep } from '@patternfly/react-core/next';

export const WizardWithHeader: React.FunctionComponent = () => (
  <Wizard
    height={400}
    title="Header wizard"
    header={
      <WizardHeader
        title="You're a wizard, Harry"
        description="To be clear, all those not named Harry are not wizards."
        closeButtonAriaLabel="Close header"
      />
    }
  >
    <WizardStep name="Step 1" id="header-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep name="Step 2" id="header-second-step">
      Step 2 content
    </WizardStep>
    <WizardStep name="Review" id="header-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
