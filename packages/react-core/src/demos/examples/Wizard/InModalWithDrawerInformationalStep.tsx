import React from 'react';
import {
  Button,
  Content,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerPanelContent,
  DrawerColorVariant,
  DrawerHead,
  Flex,
  Modal,
  ModalVariant,
  Wizard,
  WizardHeader,
  WizardStep
} from '@patternfly/react-core';

export const WizardModalWithDrawerInfoStepDemo: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const drawerRef = React.useRef<HTMLSpanElement | null>(null);

  const onExpand = () => {
    if (drawerRef.current) {
      drawerRef.current.focus();
    }
  };

  const onOpenClick = () => {
    setIsDrawerExpanded(true);
  };

  const onCloseClick = () => {
    setIsDrawerExpanded(false);
  };

  const createStepContentWithDrawer = (stepName: string) => (
    <Drawer isInline isExpanded={isDrawerExpanded} onExpand={onExpand}>
      <DrawerContent
        panelContent={
          <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.secondary}>
            <DrawerHead>
              <span tabIndex={isDrawerExpanded ? 0 : -1} ref={drawerRef}>
                Drawer content: {stepName}
              </span>
              <DrawerActions>
                <DrawerCloseButton onClick={onCloseClick} />
              </DrawerActions>
            </DrawerHead>
          </DrawerPanelContent>
        }
      >
        <Flex
          className="pf-v6-c-wizard__main-body"
          direction={{ default: 'column' }}
          spaceItems={{ default: 'spaceItemsLg' }}
          height="100%"
        >
          <Content>
            <h1>{stepName} content</h1>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </Content>
        </Flex>
      </DrawerContent>
    </Drawer>
  );

  return (
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
            closeButtonAriaLabel="Close wizard"
            title="Wizard in modal with drawer and info step"
            titleId="wiz-modal-demo-title"
            description="Simple wizard description"
            descriptionId="wiz-modal-demo-description"
          />
        }
        height={400}
      >
        <WizardStep body={{ hasNoPadding: true }} name="Information" id="wizard-step-1">
          {createStepContentWithDrawer('Information step')}
        </WizardStep>
        <WizardStep
          name="Configuration"
          id="wizard-step-2"
          steps={[
            <WizardStep body={{ hasNoPadding: true }} name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
              {createStepContentWithDrawer('Configuration substep A')}
            </WizardStep>,
            <WizardStep body={{ hasNoPadding: true }} name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
              {createStepContentWithDrawer('Configuration substep B')}
            </WizardStep>
          ]}
        />
        <WizardStep body={{ hasNoPadding: true }} name="Additional" id="wizard-step-3">
          {createStepContentWithDrawer('Additional step')}
        </WizardStep>
        <WizardStep
          body={{ hasNoPadding: true }}
          name="Review"
          id="wizard-step-4"
          footer={{ nextButtonText: 'Finish' }}
        >
          {createStepContentWithDrawer('Review step')}
        </WizardStep>
      </Wizard>
    </Modal>
  );
};
