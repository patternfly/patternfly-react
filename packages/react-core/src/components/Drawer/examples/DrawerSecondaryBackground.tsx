import React from 'react';
import {
  Checkbox,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerSection,
  Button,
  DrawerColorVariant,
  DrawerContentColorVariant
} from '@patternfly/react-core';

export const DrawerSecondaryBackground: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [panelSecondary, setPanelSecondary] = React.useState(true);
  const [contentSecondary, setContentSecondary] = React.useState(false);
  const [sectionSecondary, setSectionSecondary] = React.useState(false);

  const drawerRef = React.useRef<HTMLSpanElement>(null);

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const togglePanelSecondary = (checked: boolean) => {
    setPanelSecondary(checked);
  };

  const toggleSectionSecondary = (checked: boolean) => {
    setSectionSecondary(checked);
  };

  const toggleContentSecondary = (checked: boolean) => {
    setContentSecondary(checked);
  };

  const panelContent = (
    <DrawerPanelContent colorVariant={panelSecondary ? DrawerColorVariant.secondary : DrawerColorVariant.default}>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          Drawer panel header
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  return (
    <React.Fragment>
      <Checkbox
        label="Secondary panel"
        isChecked={panelSecondary}
        onChange={(_event, checked) => togglePanelSecondary(checked)}
        aria-label="Secondary panel checkbox"
        id="toggle-secondary-panel"
        name="toggle-secondary-panel"
      />
      <Checkbox
        label="Secondary content"
        isChecked={contentSecondary}
        onChange={(_event, checked) => toggleContentSecondary(checked)}
        aria-label="Secondary content checkbox"
        id="toggle-secondary-content"
        name="toggle-secondary-content"
      />
      <Checkbox
        label="Secondary section"
        isChecked={sectionSecondary}
        onChange={(_event, checked) => toggleSectionSecondary(checked)}
        aria-label="Secondary section checkbox"
        id="toggle-secondary-section"
        name="toggle-secondary-section"
      />
      <br />
      <Button aria-expanded={isExpanded} onClick={onClick}>
        Toggle drawer
      </Button>
      <Drawer isExpanded={isExpanded} onExpand={onExpand}>
        <DrawerSection colorVariant={sectionSecondary ? DrawerColorVariant.secondary : DrawerColorVariant.default}>
          drawer-section
        </DrawerSection>
        <DrawerContent
          colorVariant={contentSecondary ? DrawerContentColorVariant.secondary : DrawerContentColorVariant.default}
          panelContent={panelContent}
        >
          <DrawerContentBody>{drawerContent}</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
