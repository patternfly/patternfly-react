import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  Modal,
  ModalVariant,
  Wizard,
  WizardHeader,
  WizardStep
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const WizardInModalDemo: React.FunctionComponent = () => (
  <>
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection isWidthLimited>
        <Gallery hasGutter>
          {Array.from({ length: 10 }).map((_value, index) => (
            <GalleryItem key={index}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </DashboardWrapper>
    <Modal
      isOpen
      variant={ModalVariant.large}
      showClose={false}
      hasNoBodyWrapper
      aria-describedby="wiz-modal-demo-description"
      aria-labelledby="wiz-modal-demo-title"
    >
      <Wizard
        header={
          <WizardHeader
            title="Wizard in modal"
            titleId="wiz-modal-demo-title"
            description="Simple wizard description"
            descriptionId="wiz-modal-demo-description"
            closeButtonAriaLabel="Close wizard"
          />
        }
        height={400}
      >
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
    </Modal>
  </>
);
