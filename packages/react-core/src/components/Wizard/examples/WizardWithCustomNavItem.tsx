import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';

export const WizardWithCustomNavItem: React.FunctionComponent = () => (
  <Wizard height={400} title="Custom navigation item wizard">
    <WizardStep name="Step 1" id="custom-nav-item-first-step">
      Step 1 content
    </WizardStep>
    <WizardStep
      id="custom-nav-item-second-step"
      name="Step 2"
      navItem={{
        content: <span style={{ color: 'var(--pf-v5-global--default-color--200)' }}>Custom item</span>
      }}
    >
      Step 2 content with a custom navigation item
    </WizardStep>
    <WizardStep name="Review" id="custom-nav-item-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
