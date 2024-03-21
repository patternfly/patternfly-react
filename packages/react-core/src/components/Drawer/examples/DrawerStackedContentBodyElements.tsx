import { FunctionComponent, useState, useRef, Fragment } from 'react';
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

export const DrawerStackedContentBodyElements: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const drawerRef = useRef<HTMLDivElement>();

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
          drawer title{' '}
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
        drawer-panel
      </DrawerHead>
      <DrawerPanelBody hasNoPadding>drawer-panel with no padding</DrawerPanelBody>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <Fragment>
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
    </Fragment>
  );
};
