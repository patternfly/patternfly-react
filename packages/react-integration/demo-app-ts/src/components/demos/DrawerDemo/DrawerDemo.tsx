import React, { Component } from 'react';
import {
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerColorVariant,
  DrawerPanelContent,
  DrawerProps,
  DrawerSection
} from '@patternfly/react-core';

export interface DrawerDemoState {
  isExpanded: boolean;
  isFocusTrapExpanded: boolean;
  isCustomFocusExpanded: boolean;
}

export class DrawerDemo extends Component<DrawerProps, DrawerDemoState> {
  static displayName = 'DrawerDemo';
  state = {
    isExpanded: false,
    isFocusTrapExpanded: false,
    isCustomFocusExpanded: false
  };

  drawerRef = React.createRef<HTMLButtonElement>();

  onExpand = () => {
    this.drawerRef.current && this.drawerRef.current.focus();
  };

  onClick = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({
      isExpanded
    });
  };

  onFocusTrapClick = () => {
    this.setState((prevState) => ({ isFocusTrapExpanded: !prevState.isFocusTrapExpanded }));
  };

  onCustomFocusClick = () => {
    this.setState((prevState) => ({ isCustomFocusExpanded: !prevState.isCustomFocusExpanded }));
  };

  onCloseClick = () => {
    this.setState({
      isExpanded: false
    });
  };

  onFocusTrapCloseClick = () => {
    this.setState({ isFocusTrapExpanded: false });
  };

  onCustomFocusCloseClick = () => {
    this.setState({ isCustomFocusExpanded: false });
  };

  render() {
    const { isExpanded, isFocusTrapExpanded, isCustomFocusExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent
        widths={{
          default: 'width_100',
          lg: 'width_50',
          xl: 'width_33',
          '2xl': 'width_25'
        }}
        colorVariant={DrawerColorVariant.secondary}
      >
        <DrawerHead>
          <span ref={this.drawerRef} tabIndex={isExpanded ? 0 : -1}>
            drawer-panel in demo with onExpand
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const focusTrapPanelContent = (
      <DrawerPanelContent
        focusTrap={{ enabled: true }}
        id="focusTrap-panelContent"
        colorVariant={DrawerColorVariant.secondary}
      >
        <DrawerHead>
          <span>drawer-panel</span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onFocusTrapCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const customFocusPanelContent = (
      <DrawerPanelContent
        focusTrap={{ enabled: true, elementToFocusOnExpand: '#customFocus-panelContent' }}
        id="customFocus-panelContent"
        colorVariant={DrawerColorVariant.secondary}
      >
        <DrawerHead>
          <span>drawer-panel</span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCustomFocusCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    return (
      <>
        <Button id="toggleButton" onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer
          id="basic-drawer"
          isExpanded={isExpanded}
          onExpand={this.onExpand}
          position="bottom"
          style={{ minHeight: '300px', height: '300px' }}
        >
          <DrawerSection colorVariant={DrawerColorVariant.default}>drawer-section</DrawerSection>
          <DrawerContent colorVariant={DrawerColorVariant.default} panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
        <Button id="toggleFocusTrapButton" onClick={this.onFocusTrapClick}>
          Toggle Drawer with focus trap
        </Button>
        <Drawer isExpanded={isFocusTrapExpanded} style={{ minHeight: '300px', height: '300px' }}>
          <DrawerContent colorVariant={DrawerColorVariant.default} panelContent={focusTrapPanelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
        <Button id="toggleCustomFocusButton" onClick={this.onCustomFocusClick}>
          Toggle Drawer with custom focus
        </Button>
        <Drawer isExpanded={isCustomFocusExpanded} style={{ minHeight: '300px', height: '300px' }}>
          <DrawerContent colorVariant={DrawerColorVariant.default} panelContent={customFocusPanelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}
