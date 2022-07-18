import React from 'react';
import { WizardComposable, WizardComposableStep } from '@patternfly/react-core';

export const WizardBasic: React.FunctionComponent = () => (
  <WizardComposable height={400}>
    <WizardComposableStep name="First step" id="first-step">
      <p>Step 1 content</p>
    </WizardComposableStep>
    <WizardComposableStep name="Second step" id="second-step">
      <p>Step 2 content</p>
    </WizardComposableStep>
    <WizardComposableStep name="Third step" id="third-step">
      <p>Step 3 content</p>
    </WizardComposableStep>
    <WizardComposableStep name="Fourth step" id="fourth-step">
      <p>Step 4 content</p>{' '}
    </WizardComposableStep>
    <WizardComposableStep name="Review" id="fifth-step" nextButtonText="Finish">
      <p>Review step content</p>
    </WizardComposableStep>
  </WizardComposable>
);
