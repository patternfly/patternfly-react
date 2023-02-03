import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardProgressiveSteps: React.FunctionComponent = () => (
  <Wizard height={400} title="Progressive steps wizard" isProgressive>
    <WizardStep id="progressive-step-1" name="Get started">
      Get started content
    </WizardStep>
    <WizardStep id="progressive-step-2" name="Update options">
      Update options content
    </WizardStep>
    <WizardStep
      id="progressive-step-3"
      name="Quick options"
      steps={[
        <WizardStep key="progressive-substep-1" id="progressive-substep-1" name="Substep 1">
          Substep 1 content
        </WizardStep>,
        <WizardStep key="progressive-substep-2" id="progressive-substep-2" name="Substep 2">
          Substep 2 content
        </WizardStep>,
        <WizardStep key="progressive-substep-3" id="progressive-substep-3" name="Substep 3">
          Substep 3 content
        </WizardStep>
      ]}
    />
    <WizardStep id="progressive-step-4" name="Review" footer={{ nextButtonText: 'Finish' }}>
      Review content
    </WizardStep>
  </Wizard>
);
