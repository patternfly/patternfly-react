import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardBasic: React.FunctionComponent = () => (
  <Wizard height={400}>
    <WizardStep name="First step" id="basic-first-step">
      <p>Step 1 content</p>
    </WizardStep>
    <WizardStep name="Second step" id="basic-second-step">
      <p>Step 2 content</p>
    </WizardStep>
    <WizardStep name="Third step" id="basic-third-step">
      <p>Step 3 content</p>
    </WizardStep>
    <WizardStep name="Fourth step" id="basic-fourth-step">
      <p>Step 4 content</p>{' '}
    </WizardStep>
    <WizardStep name="Review" id="basic-review-step" nextButtonText="Finish">
      <p>Review step content</p>
    </WizardStep>
  </Wizard>
);
