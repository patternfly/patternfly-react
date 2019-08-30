import React from 'react';
import { Drawer, DrawerPanelContent, DrawerProps } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';

export interface DrawerDemoState {
  isExpanded: boolean;
}

export class DrawerDemo extends React.Component<DrawerProps, DrawerDemoState> {
  constructor(props) {
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
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = <DrawerPanelContent> drawer-panel </DrawerPanelContent>;

    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    return (
      <React.Fragment>
        <Button id="toggleButton" onClick={this.onClick}>Toggle Drawer</Button>
        <Drawer isExpanded={isExpanded} isInline panelContent={panelContent}>
          {drawerContent}
        </Drawer>
      </React.Fragment>
    );
  }
}
