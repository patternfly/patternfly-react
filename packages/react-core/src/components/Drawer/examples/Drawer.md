---
title: 'Drawer'
cssPrefix: 'pf-c-drawer'
typescript: true
propComponents:
  [
    Drawer,
    DrawerContent,
    DrawerPanelContent,
    DrawerContentBody,
    DrawerPanelBody,
    DrawerSection,
    DrawerHead,
    DrawerActions,
    DrawerCloseButton
  ]
section: 'components'
beta: true
---

import { Drawer, DrawerPanelContent, DrawerContent, DrawerContentBody, DrawerPanelBody, DrawerSection, DrawerHead, DrawerActions, DrawerCloseButton } from '@patternfly/react-core';

## Examples

```js title=Basic
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button,
  Title
} from '@patternfly/react-core';

class SimpleDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount} >
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Panel-on-left
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class SimpleDrawerPanelLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Panel-on-left
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class SimpleDrawerPanelLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} position="left" onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Basic-inline
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class SimpleDrawerInlineContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} isInline onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=-Inline-panel-on-left
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerInlineContentPanelLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} isInline onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=-Inline-panel-on-left
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerInlineContentPanelLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} isInline position="left" onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Stacked-content-body-elements
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerStackedContentBodyElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <h3 className= "pf-c-title pf-m-2xl" tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer title </h3>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
          drawer-panel
        </DrawerHead>
        <DrawerPanelBody hasNoPadding>drawer-panel with no padding</DrawerPanelBody>
        <DrawerPanelBody>drawer-panel</DrawerPanelBody>
      </DrawerPanelContent>
    );

    return (
      <React.Fragment>
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>content-body</DrawerContentBody>
            <DrawerContentBody hasPadding>content-body with padding</DrawerContentBody>
            <DrawerContentBody>content-body</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Stacked-content-body-elements
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerStackedContentBodyElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <h3 className= "pf-c-title pf-m-2xl" tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer title </h3>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
          drawer-panel
        </DrawerHead>
        <DrawerPanelBody hasNoPadding>drawer-panel with no padding</DrawerPanelBody>
        <DrawerPanelBody>drawer-panel</DrawerPanelBody>
      </DrawerPanelContent>
    );

    return (
      <React.Fragment>
        <Button aria-expanded={isExpanded} onClick={this.onClick} >
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>content-body</DrawerContentBody>
            <DrawerContentBody hasPadding>content-body with padding</DrawerContentBody>
            <DrawerContentBody>content-body</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Modified-content-padding
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerModifiedContentPadding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody hasPadding>
              <b>Drawer content padding.</b> {drawerContent}
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Modified-panel-padding
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class DrawerModifiedPanelPadding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead hasNoPadding>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Additional-section-above-drawer-content
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerSection,
  Button
} from '@patternfly/react-core';

class DrawerWithSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerSection>drawer-section</DrawerSection>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```

```js title=Static-drawer
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton
} from '@patternfly/react-core';

StaticDrawer = () => {
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton onClick={this.onClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  return (
    <Drawer isStatic>
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>{drawerContent}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};
```

```js title=Breakpoint
import React, { ReactFragment } from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';

class SimpleDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.drawerRef = React.createRef();

    this.onMount = () => {
      this.state.isExpanded && this.drawerRef.current && this.drawerRef.current.focus()
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }}>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>drawer-panel</span>
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
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onMount={this.onMount}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
```
