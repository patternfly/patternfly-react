import React from 'react';
import {
  Button,
  DrawerActions,
  DrawerCloseButton,
  DrawerColorVariant,
  DrawerHead,
  DrawerPanelContent,
  Wizard
} from '@patternfly/react-core';

export const WizardWithDrawer: React.FunctionComponent = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [sectionGray, setSectionGray] = React.useState(false);
  const [panelGray, setPanelGray] = React.useState(true);
  const [contentGray, setContentGray] = React.useState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const drawerRef = React.useRef<HTMLSpanElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onOpenClick = () => {
    setIsDrawerExpanded(true);
  };

  const onCloseClick = () => {
    setIsDrawerExpanded(false);
  };

  const panel1Content = (
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
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
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
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
    <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
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

  const title = 'Wizard with drawer';

  return (
    <React.Fragment>
      <Wizard
        height={400}
        isDrawerExpanded={isDrawerExpanded}
        hasDrawer
        navAriaLabel={`${title} steps`}
        steps={steps}
      />
    </React.Fragment>
  );
};
