---
title: 'Tabs'
cssPrefix: 'pf-c-tabs'
propComponents: ['Tab', 'Tabs']
typescript: true
---

## Simple tabs

import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

Use primary sections

```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Scroll buttons primary tabs
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class ScrollButtonsPrimaryTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
        <Tab eventKey={3} title="Tab item 4">
          Tab 4 section
        </Tab>
        <Tab eventKey={4} title="Tab item 5">
          Tab 5 section
        </Tab>
        <Tab eventKey={5} title="Tab item 6">
          Tab 6 section
        </Tab>
        <Tab eventKey={6} title="Tab item 7">
          Tab 7 section
        </Tab>
        <Tab eventKey={7} title="Tab item 8">
          Tab 8 section
        </Tab>
        <Tab eventKey={8} title="Tab item 9">
          Tab 9 section
        </Tab>
        <Tab eventKey={9} title="Tab item 10">
          Tab 10 section
        </Tab>
        <Tab eventKey={10} title="Tab item 11">
          Tab 11 section
        </Tab>
        <Tab eventKey={11} title="Tab item 12">
          Tab 12 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Secondary buttons tabs
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class SecondaryTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey1: 0,
      activeTabKey2: 10
    };
    // Toggle currently active tab
    this.handleTabClickFirst = (event, tabIndex) => {
      this.setState({
        activeTabKey1: tabIndex
      });
    };
    // Toggle currently active secondary tab
    this.handleTabClickSecond = (event, tabIndex) => {
      this.setState({
        activeTabKey2: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey1} onSelect={this.handleTabClickFirst}>
        <Tab eventKey={0} title="Tab item 1">
          <Tabs activeKey={this.state.activeTabKey2} isSecondary onSelect={this.handleTabClickSecond}>
            <Tab eventKey={10} title="Secondary tab item 1">
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={11} title="Secondary tab item 2">
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={12} title="Secondary tab item 3">
              Secondary tab item 3 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Scroll buttons secondary tabs
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class ScrollButtonsSecondaryTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey} isSecondary onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
        <Tab eventKey={3} title="Tab item 4">
          Tab 4 section
        </Tab>
        <Tab eventKey={4} title="Tab item 5">
          Tab 5 section
        </Tab>
        <Tab eventKey={5} title="Tab item 6">
          Tab 6 section
        </Tab>
        <Tab eventKey={6} title="Tab item 7">
          Tab 7 section
        </Tab>
        <Tab eventKey={7} title="Tab item 8">
          Tab 8 section
        </Tab>
        <Tab eventKey={8} title="Tab item 9">
          Tab 9 section
        </Tab>
        <Tab eventKey={9} title="Tab item 10">
          Tab 10 section
        </Tab>
        <Tab eventKey={10} title="Tab item 11">
          Tab 11 section
        </Tab>
        <Tab eventKey={11} title="Tab item 12">
          Tab 12 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Filled buttons tabs
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class FilledTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs isFilled activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Secondary tabs using the nav element
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class SecondaryTabsNavVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey1: 0,
      activeTabKey2: 10
    };

    // Toggle currently active tab
    this.handleTabClickFirst = (event, tabIndex) => {
      this.setState({
        activeTabKey1: tabIndex
      });
    };

    // Toggle currently active secondary tab
    this.handleTabClickSecond = (event, tabIndex) => {
      this.setState({
        activeTabKey2: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.activeTabKey1}
        onSelect={this.handleTabClickFirst}
        aria-label="Local"
        variant={TabsVariant.nav}
      >
        <Tab eventKey={0} title="Tab item 1">
          <Tabs
            activeKey={this.state.activeTabKey2}
            isSecondary
            onSelect={this.handleTabClickSecond}
            aria-label="Local secondary"
            variant={TabsVariant.nav}
          >
            <Tab eventKey={10} title="Secondary tab item 1">
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={11} title="Secondary tab item 2">
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={12} title="Secondary tab item 3">
              Secondary tab item 3 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Tabs using the nav element
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class TabsNavVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.activeTabKey}
        onSelect={this.handleTabClick}
        aria-label="Local"
        variant={TabsVariant.nav}
      >
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

## Separate tab content
```js
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';

class SeparateTabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };

    this.contentRef1 = React.createRef();
    this.contentRef2 = React.createRef();
    this.contentRef3 = React.createRef();

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab eventKey={0} title="Tab item 1" tabContentId="refTab1Section" tabContentRef={this.contentRef1} />
          <Tab eventKey={1} title="Tab item 2" tabContentId="refTab2Section" tabContentRef={this.contentRef2} />
          <Tab eventKey={2} title="Tab item 3" tabContentId="refTab3Section" tabContentRef={this.contentRef3} />
        </Tabs>
        <div>
          <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Tab item 1">
            Tab 1 section
          </TabContent>
          <TabContent eventKey={1} id="refTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>
            Tab 2 section
          </TabContent>
          <TabContent eventKey={2} id="refTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}
```
