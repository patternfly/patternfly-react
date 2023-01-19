import React from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerPanelContent,
  DrawerColorVariant,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Flex,
  Button
} from '@patternfly/react-core';
import { useWizardContext, Wizard, WizardStep } from '@patternfly/react-core/next';

const StepContentWithDrawer: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const { activeStep } = useWizardContext();
  const drawerRef = React.useRef<HTMLSpanElement>(null);

  const onWizardExpand = () => drawerRef.current && drawerRef.current.focus();

  return (
    <Drawer isInline isExpanded={isDrawerExpanded} onExpand={onWizardExpand}>
      <DrawerContent
        panelContent={
          <DrawerPanelContent widths={{ default: 'width_50' }} colorVariant={DrawerColorVariant.light200}>
            <DrawerHead>
              <span tabIndex={isDrawerExpanded ? 0 : -1} ref={drawerRef}>
                Drawer content: <strong>{activeStep?.name}</strong>
              </span>
              <DrawerActions>
                <DrawerCloseButton onClick={() => setIsDrawerExpanded(false)} />
              </DrawerActions>
            </DrawerHead>
          </DrawerPanelContent>
        }
      >
        <Flex
          className="pf-c-wizard__main-body"
          direction={{ default: 'column' }}
          spaceItems={{ default: 'spaceItemsLg' }}
          height="100%"
        >
          {!isDrawerExpanded && (
            <Button isInline variant="link" onClick={() => setIsDrawerExpanded(prevExpanded => !prevExpanded)}>
              Open drawer
            </Button>
          )}
          <div>{activeStep?.name} content</div>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export const WizardStepDrawerContent: React.FunctionComponent = () => (
  <Wizard height={400} title="With drawer wizard">
    <WizardStep body={null} name="Step 1" id="with-drawer-step-1">
      <StepContentWithDrawer />
    </WizardStep>
    <WizardStep
      name="Step 2"
      id="with-drawer-step-2"
      steps={[
        <WizardStep body={null} key="with-drawer-substep-1" name="Substep 1" id="with-drawer-substep-1">
          <StepContentWithDrawer />
        </WizardStep>,
        <WizardStep body={null} key="with-drawer-substep-2" name="Substep 2" id="with-drawer-substep-2">
          <StepContentWithDrawer />
        </WizardStep>
      ]}
    >
      <StepContentWithDrawer />
    </WizardStep>
    <WizardStep name="Review" id="with-drawer-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
