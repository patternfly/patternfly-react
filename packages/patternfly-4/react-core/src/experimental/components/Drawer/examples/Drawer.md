---
title: 'Drawer'
cssPrefix: 'pf-c-drawer'
typescript: true
propComponents: ['Drawer', 'DrawerPanelContent', 'DrawerContent']
section: 'experimental'
experimentalStage: 'early'
---
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import { Alert } from '@patternfly/react-core';

## Examples
```js title=Basic
import React {ReactFragment} from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';

class SimpleDrawer extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    this.onClick = () => { 
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };
   }

  render() {
    const { isExpanded } = this.state;

    const drawerContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.";

    return (<React.Fragment>
            <Button onClick={this.onClick}>Toggle Drawer</Button>
            <Drawer isExpanded={isExpanded}>
              <DrawerContent>{drawerContent}</DrawerContent>
              <DrawerPanelContent> drawer-panel </DrawerPanelContent>
            </Drawer>
        </React.Fragment>);
  }
}
```

```js title=Basic-inline
import React {ReactFragment} from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';

class SimpleDrawerInlineContent extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    this.onClick = () => { 
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };
   }

  render() {
    const { isExpanded } = this.state;

    const drawerContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.";

    return (<React.Fragment>
            <Button onClick={this.onClick}>Toggle Drawer</Button>
            <Drawer isExpanded={isExpanded} isInline>
              <DrawerContent>{drawerContent}</DrawerContent>
              <DrawerPanelContent> drawer-panel </DrawerPanelContent>
            </Drawer>
        </React.Fragment>);
  }
}
```
