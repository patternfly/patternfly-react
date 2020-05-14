---
title: 'Tabs'
section: components
cssPrefix: 'pf-c-tabs'
propComponents: ['Tabs', 'Tab', 'TabContent', 'TabTitleText', TabTitleIcon ]
typescript: true
---
import { Tabs, Tab, TabsComponent, TabContent, TabTitleText, TabTitleIcon, Checkbox } from '@patternfly/react-core';
import { UsersIcon,  BoxIcon, DatabaseIcon, ServerIcon, LaptopIcon, ProjectDiagramIcon } from '@patternfly/react-icons';

Most tab variations are available as open (default) or box style tabs. Select the 'isBox' checkbox to preview an example with box styled tabs.

## Examples
```js title=Default
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
        </Tabs>
        <div style={{marginTop: "20px"}}>
          <Checkbox
              label="isBox"
              isChecked={isBox}
              onChange={this.toggleBox}
              aria-label="show box variation checkbox"
              id="toggle-box"
              name="toggle-box"
            />
        </div>
      </div>
    );
  }
}
```

```js title=Default-overflow
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class ScrollButtonsPrimaryTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
          <Tab eventKey={7} title={<TabTitleText>Tab item 7</TabTitleText>}>
            Tab 7 section
          </Tab>
          <Tab eventKey={8} title={<TabTitleText>Tab item 8</TabTitleText>}>
            Tab 8 section
          </Tab>
          <Tab eventKey={9} title={<TabTitleText>Tab item 9</TabTitleText>}>
            Tab 9 section
          </Tab>
          <Tab eventKey={10} title={<TabTitleText>Tab item 10</TabTitleText>}>
            Tab 10 section
          </Tab>
          <Tab eventKey={11} title={<TabTitleText>Tab item 11</TabTitleText>}>
            Tab 11 section
          </Tab>
        </Tabs>
        <div style={{marginTop: "20px"}}>
          <Checkbox
              label="isBox"
              isChecked={isBox}
              onChange={this.toggleBox}
              aria-label="show box variation checkbox on overflow"
              id="toggle-box-overflow"
              name="toggle-box-overflow"
            />
        </div>
      </div>
    );
  }
}
```

```js title=Vertical
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isVertical isBox={isBox}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
        </Tabs>
        <div style={{marginTop: "20px"}}>
          <Checkbox
                label="isBox"
                isChecked={isBox}
                onChange={this.toggleBox}
                aria-label="show box variation checkbox with vertical"
                id="toggle-box-vertical"
                name="toggle-box-vertical"
              />
        </div>
      </div>
    );
  }
}
```

```js title=Inset
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class InsetTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} inset='none' breakpointMods={[
          { breakpoint: 'md', modifier: 'insetSm' },
          { breakpoint: '2xl', modifier: 'insetLg' },
          { breakpoint: 'xl', modifier: 'inset_2xl' }
        ]} 
        isBox={isBox}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
        </Tabs>
        <div style={{marginTop: "20px"}}>
          <Checkbox
                label="isBox"
                isChecked={isBox}
                onChange={this.toggleBox}
                aria-label="show box variation checkbox with inset"
                id="toggle-box-inset"
                name="toggle-box-inset"
              />
        </div>
      </div>
    );
  }
}
```

```js title=Icons-and-text
import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon } from '@patternfly/react-core';
import { UsersIcon,  BoxIcon, DatabaseIcon, ServerIcon, LaptopIcon, ProjectDiagramIcon } from '@patternfly/react-icons';

class IconAndTextTabs extends React.Component {
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
        <Tab eventKey={0} title={<><TabTitleIcon><UsersIcon /></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}>
          Users
        </Tab>
        <Tab eventKey={1} title={<><TabTitleIcon><BoxIcon /></TabTitleIcon> <TabTitleText>Containers</TabTitleText>  </>}>
          Containers
        </Tab>
        <Tab eventKey={2} title={<><TabTitleIcon><DatabaseIcon /></TabTitleIcon> <TabTitleText>Database</TabTitleText>  </>}>
          Database
        </Tab>
        <Tab eventKey={3} title={<><TabTitleIcon><ServerIcon /></TabTitleIcon> <TabTitleText>Server</TabTitleText>  </>}>
          Server
        </Tab>
        <Tab eventKey={4} title={<><TabTitleIcon><LaptopIcon /></TabTitleIcon> <TabTitleText>System</TabTitleText>  </>}>
          System
        </Tab>
        <Tab eventKey={6} title={<><TabTitleIcon><ProjectDiagramIcon /></TabTitleIcon> <TabTitleText>Network</TabTitleText>  </>}>
          Network
        </Tab>
      </Tabs>
    );
  }
}
```

```js title=Tabs-with-sub-tabs
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class SecondaryTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey1: 0,
      activeTabKey2: 10,
      isBox: false
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

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey1, activeTabKey2, isBox} = this.state;
    return (
      <div>
      <Tabs activeKey={activeTabKey1} onSelect={this.handleTabClickFirst} isBox={isBox}>
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
          <Tabs activeKey={activeTabKey2} isSecondary onSelect={this.handleTabClickSecond}>
            <Tab eventKey={20} title={<TabTitleText>Secondary tab item 1</TabTitleText>} >
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={21} title={<TabTitleText>Secondary tab item 2</TabTitleText>}>>
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={22} title={<TabTitleText>Secondary tab item 3</TabTitleText>}>>
              Secondary tab item 3 section
            </Tab>
            <Tab eventKey={23} title={<TabTitleText>Secondary tab item 4</TabTitleText>}>>
              Secondary tab item 4 section
            </Tab>
            <Tab eventKey={24} title={<TabTitleText>Secondary tab item 5</TabTitleText>}>>
              Secondary tab item 5 section
            </Tab>
            <Tab eventKey={25} title={<TabTitleText>Secondary tab item 6</TabTitleText>}>>
              Secondary tab item 6 section
            </Tab>
            <Tab eventKey={26} title={<TabTitleText>Secondary tab item 7</TabTitleText>}>>
              Secondary tab item 7 section
            </Tab>
            <Tab eventKey={27} title={<TabTitleText>Secondary tab item 8</TabTitleText>}>>
              Secondary tab item 8 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
          Server
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
          System
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
          Network
        </Tab>
        <Tab eventKey={7} title={<TabTitleText>Tab item 7</TabTitleText>}>
          Tab 7 section
        </Tab>
        <Tab eventKey={8} title={<TabTitleText>Tab item 8</TabTitleText>}>
          Tab 8 section
        </Tab>
        <Tab eventKey={9} title={<TabTitleText>Tab item 9</TabTitleText>}>
          Tab 9 section
        </Tab>
        <Tab eventKey={10} title={<TabTitleText>Tab item 10</TabTitleText>}>
          Tab 10 section
        </Tab>
        <Tab eventKey={11} title={<TabTitleText>Tab item 11</TabTitleText>}>
          Tab 11 section
        </Tab>
      </Tabs>
      <div style={{marginTop: "20px"}}>
        <Checkbox
              label="isBox"
              isChecked={isBox}
              onChange={this.toggleBox}
              aria-label="show box variation checkbox with sub tabs"
              id="toggle-box-secondary"
              name="toggle-box-secondary"
            />
        </div>
      </div>
    );
  }
}
```

```js title=Filled
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class FilledTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
      <Tabs isFilled activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
          Users
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
          Database
        </Tab>
      </Tabs>
       <div style={{marginTop: "20px"}}>
        <Checkbox
              label="isBox"
              isChecked={isBox}
              onChange={this.toggleBox}
              aria-label="show box variation checkbox with filled tabs"
              id="toggle-box-filled"
              name="toggle-box-filled"
            />
        </div>
      </div>
    );
  }
}
```

```js title=Filled-with-icons
import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon, Checkbox } from '@patternfly/react-core';
import { UsersIcon,  BoxIcon, DatabaseIcon } from '@patternfly/react-icons';

class FilledTabsWithIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleBox = checked => {
      this.setState({
        isBox: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
      <Tabs isFilled activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
        <Tab eventKey={0} title={<><TabTitleIcon><UsersIcon /></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}>
          Users
        </Tab>
        <Tab eventKey={1} title={<><TabTitleIcon><BoxIcon /></TabTitleIcon> <TabTitleText>Containers</TabTitleText>  </>}>
          Containers
        </Tab>
        <Tab eventKey={2} title={<><TabTitleIcon><DatabaseIcon /></TabTitleIcon> <TabTitleText>Database</TabTitleText>  </>}>
          Database
        </Tab>
      </Tabs>
      <div style={{marginTop: "20px"}}>
        <Checkbox
              label="isBox"
              isChecked={isBox}
              onChange={this.toggleBox}
              aria-label="show box variation checkbox with filled icon tabs"
              id="toggle-box-filled-icon"
              name="toggle-box-filled-icon"
            />
        </div>
      </div>
    );
  }
}
```

```js title=Using-the-nav-element
import React from 'react';
import { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';

class TabsNav extends React.Component {
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
        component={TabsComponent.nav}
      >
       <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href="#">
          Users
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href="#">
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href="#">
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>} href="#">
          Server
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>} href="#">
          System
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href="#">
          Network
        </Tab>
      </Tabs>
    );
  }
}
```


```js title=Sub-nav-using-the-nav-element
import React from 'react';
import { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';

class SecondaryTabsNav extends React.Component {
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
        component={TabsComponent.nav}
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href="#">
          <Tabs
            activeKey={this.state.activeTabKey2}
            isSecondary
            onSelect={this.handleTabClickSecond}
            aria-label="Local secondary"
            component={TabsComponent.nav}
          >
            <Tab eventKey={20} title={<TabTitleText>Secondary tab item 1</TabTitleText>} href="#">
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={21} title={<TabTitleText>Secondary tab item 2</TabTitleText>} href="#">
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={22} title={<TabTitleText>Secondary tab item 3</TabTitleText>} href="#">
              Secondary tab item 3 section
            </Tab>
            <Tab eventKey={23} title={<TabTitleText>Secondary tab item 4</TabTitleText>}href="#" >
              Secondary tab item 4 section
            </Tab>
            <Tab eventKey={24} title={<TabTitleText>Secondary tab item 5</TabTitleText>} href="#">
              Secondary tab item 5 section
            </Tab>
            <Tab eventKey={25} title={<TabTitleText>Secondary tab item 6</TabTitleText>} href="#">
              Secondary tab item 6 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href="#">
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href="#">
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>} href="#">
          Server
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>} href="#">
          System
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href="#">
          Network
        </Tab>
      </Tabs>
    );
  }
}
```

```js title=Separate-content
import React from 'react';
import { Tabs, Tab, TabTitleText, TabContent } from '@patternfly/react-core';

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
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} tabContentId="refTab1Section" tabContentRef={this.contentRef1} />
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}tabContentId="refTab2Section" tabContentRef={this.contentRef2} />
          <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}  tabContentId="refTab3Section" tabContentRef={this.contentRef3} />
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

```js title=Children-mounting-on-click
import React from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

class MountingSimpleTabs extends React.Component {
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
      <Tabs mountOnEnter activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} >
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>} >
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>} >
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

```js title=Unmounting-invisible-children
import React from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

class UnmountingSimpleTabs extends React.Component {
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
      <Tabs unmountOnExit activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} >
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>} >
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>} >
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}
```

```js title=Toggled-separate-content
import React from 'react';
import { Tabs, Tab, TabsVariant, TabContent, Button, Divider } from '@patternfly/react-core';

class ToggledSeparateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      isTab2Hidden: false
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
    const { activeKey, isTab2Hidden } = this.state;
    return (
      <React.Fragment>
        <Button onClick={() => this.setState({ isTab2Hidden: !isTab2Hidden })}>
          {isTab2Hidden ? 'Show' : 'Hide'} tab 2
        </Button>
        <Divider style={{ paddingTop: '1rem', paddingBottom: '1rem' }} />
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab eventKey={0} title="Tab item 1" tabContentId="refTab1Section" tabContentRef={this.contentRef1} />
          {!isTab2Hidden && (
            <Tab eventKey={1} title="Tab item 2" tabContentId="refTab2Section" tabContentRef={this.contentRef2} />
          )}
          <Tab eventKey={2} title="Tab item 3" tabContentId="refTab3Section" tabContentRef={this.contentRef3} />
        </Tabs>
        <div>
          <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Tab item 1">
            Tab 1 section
          </TabContent>
          {!isTab2Hidden && (
            <TabContent eventKey={1} id="refTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>
              Tab 2 section
            </TabContent>
          )}
          <TabContent eventKey={2} id="refTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}
```
