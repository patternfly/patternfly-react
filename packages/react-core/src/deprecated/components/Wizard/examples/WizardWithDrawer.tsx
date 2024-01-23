import React from 'react';
import {
  Button,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelContent,
  DrawerColorVariant
} from '@patternfly/react-core';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';

export const WizardWithDrawer: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);

  const drawerRef = React.useRef<HTMLSpanElement>(null);

  const onExpandDrawer = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onOpenClick = () => {
    setIsDrawerExpanded(true);
  };

  const onCloseClick = () => {
    setIsDrawerExpanded(false);
  };

  const panel1Content = (
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.secondary}>
      <DrawerHead>
        <span tabIndex={isDrawerExpanded ? 0 : -1} ref={drawerRef}>
          drawer-panel-1 content
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const panel2Content = (
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.secondary}>
      <DrawerHead>
        <span tabIndex={0} ref={drawerRef}>
          drawer-panel-2 content
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const panel3Content = (
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.secondary}>
      <DrawerHead>
        <span tabIndex={0} ref={drawerRef}>
          drawer-panel-3 content
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const drawerToggleButton = (
    <Button isInline variant="link" onClick={onOpenClick}>
      Open Drawer
    </Button>
  );

  const steps = [
    {
      name: 'Information',
      component: <p>Information step content</p>,
      drawerPanelContent: panel1Content,
      drawerToggleButton
    },
    {
      name: 'Configuration',
      steps: [
        {
          name: 'Substep A',
          component: <p>Substep A content</p>,
          drawerPanelContent: panel2Content,
          drawerToggleButton
        },
        {
          name: 'Substep B',
          component: <p>Substep B content</p>,
          drawerPanelContent: panel2Content,
          drawerToggleButton
        },
        {
          name: 'Substep C',
          component: <p>Substep C content</p>,
          drawerPanelContent: panel2Content,
          drawerToggleButton
        }
      ]
    },
    {
      name: 'Additional',
      component: <p>Additional step content</p>,
      drawerPanelContent: panel3Content,
      drawerToggleButton
    },
    {
      name: 'Review',
      component: <p>Review step content</p>,
      nextButtonText: 'Finish'
    }
  ];

  const title = 'Wizard with drawer example';

  return (
    <React.Fragment>
      <WizardDeprecated
        height={400}
        isDrawerExpanded={isDrawerExpanded}
        onExpandDrawer={onExpandDrawer}
        hasDrawer
        navAriaLabel={`${title} steps`}
        steps={steps}
      />
    </React.Fragment>
  );
};
