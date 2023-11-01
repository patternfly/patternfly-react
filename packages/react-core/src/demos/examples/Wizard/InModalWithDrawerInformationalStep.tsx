import React from 'react';
import {
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerPanelContent,
  DrawerHead,
  Flex,
  Modal,
  ModalVariant,
  Text,
  TextContent,
  TextVariants,
  Wizard,
  WizardHeader,
  WizardStep,
  DrawerColorVariant
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
          <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
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
          className="pf-v5-c-wizard__main-body"
          direction={{ default: 'column' }}
          spaceItems={{ default: 'spaceItemsLg' }}
          height="100%"
        >
          <TextContent>
            <Text component={TextVariants.h1}>{stepName} content</Text>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </TextContent>
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
        <WizardStep body={null} name="Information" id="wizard-step-1">
          {createStepContentWithDrawer('Information step')}
        </WizardStep>
        <WizardStep
          name="Configuration"
          id="wizard-step-2"
          steps={[
            <WizardStep body={null} name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
              {createStepContentWithDrawer('Configuration substep A')}
            </WizardStep>,
            <WizardStep body={null} name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
              {createStepContentWithDrawer('Configuration substep B')}
            </WizardStep>
          ]}
        />
        <WizardStep body={null} name="Additional" id="wizard-step-3">
          {createStepContentWithDrawer('Additional step')}
        </WizardStep>
        <WizardStep body={null} name="Review" id="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
          {createStepContentWithDrawer('Review step')}
        </WizardStep>
      </Wizard>
    </Modal>
  );
};
