import React from 'react';
import { PageSection, PageSectionTypes, Wizard, WizardStep } from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

export const WizardFullPage: React.FunctionComponent = () => (
  <React.Fragment>
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection type={PageSectionTypes.wizard}>
        <Wizard>
          <WizardStep name="Information" id="wizard-step-1">
            <p>Step 1 content</p>
          </WizardStep>
          <WizardStep
            name="Configuration"
            id="wizard-step-2"
            steps={[
              <WizardStep name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                <p>Configuration substep A</p>
              </WizardStep>,
              <WizardStep name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                <p>Configuration substep B</p>
              </WizardStep>
            ]}
          />
          <WizardStep name="Additional" id="wizard-step-3">
            <p>Step 3 content</p>
          </WizardStep>
          <WizardStep name="Review" id="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
            <p>Review step content</p>
          </WizardStep>
        </Wizard>
      </PageSection>
    </DashboardWrapper>
  </React.Fragment>
);
