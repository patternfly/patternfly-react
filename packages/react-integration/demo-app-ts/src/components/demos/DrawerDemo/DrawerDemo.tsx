import React from 'react';
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerSection,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerProps
} from '@patternfly/react-core';

export interface DrawerDemoState {
  isExpanded: boolean;
}

export class DrawerDemo extends React.Component<DrawerProps, DrawerDemoState> {
  constructor(props: DrawerProps) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  onClick = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({
      isExpanded
    });
  };

  onCloseClick = () => {
    this.setState({
      isExpanded: false
    });
  };

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent
        widths={{
          default: 'width_100',
          lg: 'width_50',
          xl: 'width_33',
          '2xl': 'width_25'
        }}
      >
        <DrawerHead>
          <span>drawer-panel</span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    return (
      <React.Fragment>
        <Button id="toggleButton" onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded}>
          <DrawerSection>drawer-section</DrawerSection>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
