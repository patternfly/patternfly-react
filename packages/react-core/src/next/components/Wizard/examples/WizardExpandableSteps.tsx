import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

export const WizardExpandableSteps: React.FunctionComponent = () => (
  <Wizard height={400} title="Expandable steps wizard" nav={{ isExpanded: true }}>
    <WizardStep
      name="Step 1"
      id="expand-steps-1"
      isExpandable
      steps={[
        <WizardStep name="Substep A" id="expand-steps-sub-a" key="expand-steps-sub-a">
          Substep A content
        </WizardStep>,
        <WizardStep name="Substep B" id="expand-steps-sub-b" key="expand-steps-sub-b">
          Substep B content
        </WizardStep>
      ]}
    />
    <WizardStep name="Step 2" id="expand-steps-2">
      Step 2 content
    </WizardStep>
    <WizardStep
      name="Step 3"
      id="expand-steps-3"
      isExpandable
      steps={[
        <WizardStep name="Substep C" id="expand-steps-sub-c" key="expand-steps-sub-c">
          Substep C content
        </WizardStep>,
        <WizardStep name="Substep D" id="expand-steps-sub-d" key="expand-steps-sub-d">
          Substep D content
        </WizardStep>
      ]}
    />
    <WizardStep name="Step 4" id="expand-steps-4">
      Step 4 content
    </WizardStep>
    <WizardStep name="Review" id="expand-steps-review" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
