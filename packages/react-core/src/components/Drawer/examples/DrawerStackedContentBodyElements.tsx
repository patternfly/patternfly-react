import React from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelBody,
  Button,
  Title
} from '@patternfly/react-core';

export const DrawerStackedContentBodyElements: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const drawerRef = React.useRef<HTMLDivElement>();

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Title headingLevel="h3" size="2xl" tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          Drawer panel header in a Title
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody hasNoPadding>Drawer panel body with no padding</DrawerPanelBody>
      <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <React.Fragment>
      <Button aria-expanded={isExpanded} onClick={onClick}>
        Toggle drawer
      </Button>
      <Drawer isExpanded={isExpanded} onExpand={onExpand}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>content-body</DrawerContentBody>
          <DrawerContentBody hasPadding>content-body with padding</DrawerContentBody>
          <DrawerContentBody>content-body</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
