---
id: Tabs
section: components
cssPrefix: pf-c-tabs
propComponents: ['Tabs', 'TabProps', 'TabContent', 'TabTitleText', 'TabTitleIcon' ]
ouia: true
---
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
import ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';

Most tab variations are available as open (default) or box style tabs. Select the 'isBox' checkbox to preview an example with box styled tabs.
The Tabs items background can be also toggled with 'Tab light variation' checkbox.
Similarly the 'Tab content light variation' checkbox affects the TabContent background.

## Examples

### Default
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isBox: false,
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
    const {activeTabKey, isBox } = this.state;
    const tooltipRef = React.createRef();

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
          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled ref={tooltipRef}>
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." reference={tooltipRef} />
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

### Uncontrolled
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

class UncontrolledSimpleTabs extends React.Component {

  render() {
    const tooltipRef = React.createRef();

    return (
      <>
        <Tabs defaultActiveKey={0}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
              Disabled
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled ref={tooltipRef}>
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." reference={tooltipRef} />
      </>
    );
  }
}
```

### Box light variation
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isTabsLightScheme: true,
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };

    this.toggleScheme = checked => {
      this.setState({
        isTabsLightScheme: checked
      });
    };
  }

  render() {
    const {activeTabKey, isBox, isTabsLightScheme } = this.state;
    const tooltipRef = React.createRef();

    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} variant={isTabsLightScheme ? 'light300' : 'default'} isBox>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled ref={tooltipRef}>
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." reference={tooltipRef} />
        <div style={{marginTop: "20px"}}>
          <Checkbox
              label="Tabs light variation"
              isChecked={isTabsLightScheme}
              onChange={this.toggleScheme}
              aria-label="show light scheme variation checkbox"
              id="toggle-scheme"
              name="toggle-scheme"
            />
        </div>
      </div>
    );
  }
}
```

### Default overflow
```js
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

### Vertical
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

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
    const tooltipRef = React.createRef();
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
          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled ref={tooltipRef}>
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." reference={tooltipRef} position="right" />
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

### Vertical expandable
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';
class VerticalExpandableTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0,
      isExpanded: false
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }
  render() {
    const {activeTabKey, isExpanded} = this.state;
    return (
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isVertical expandable={{default: 'expandable', md: 'nonExpandable', lg: 'expandable'}} isExpanded={isExpanded} onToggle={this.onToggle} toggleText="Containers">
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
    );
  }
}
```

### Vertical expandable uncontrolled
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';
class VerticalExpandableUncontrolledTabs extends React.Component {
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
    const {activeTabKey} = this.state;
    return (
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isVertical expandable={{default: 'expandable', md: 'nonExpandable', lg: 'expandable'}}  defaultIsExpanded={false} toggleText="Containers">
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
    );
  }
}
```

### Inset
```js
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
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} inset={{
          default: 'insetNone',
          md: 'insetSm',
          xl: 'inset2xl',
          '2xl': 'insetLg'
        }}
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

### Page Insets
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

class PageInsetsTabs extends React.Component {
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
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} usePageInsets
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

### Icons and text
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
import ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';

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

### Tabs with sub tabs
```js
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
            <Tab eventKey={20} title={<TabTitleText>Secondary tab item 1</TabTitleText>}>
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={21} title={<TabTitleText>Secondary tab item 2</TabTitleText>}>
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={22} title={<TabTitleText>Secondary tab item 3</TabTitleText>}>
              Secondary tab item 3 section
            </Tab>
            <Tab eventKey={23} title={<TabTitleText>Secondary tab item 4</TabTitleText>}>
              Secondary tab item 4 section
            </Tab>
            <Tab eventKey={24} title={<TabTitleText>Secondary tab item 5</TabTitleText>}>
              Secondary tab item 5 section
            </Tab>
            <Tab eventKey={25} title={<TabTitleText>Secondary tab item 6</TabTitleText>}>
              Secondary tab item 6 section
            </Tab>
            <Tab eventKey={26} title={<TabTitleText>Secondary tab item 7</TabTitleText>}>
              Secondary tab item 7 section
            </Tab>
            <Tab eventKey={27} title={<TabTitleText>Secondary tab item 8</TabTitleText>}>
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

### Filled
```js
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

### Filled with icons
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon, Checkbox } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';

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

### Using the nav element
```js
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
       <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href="#users">
          Users
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href="#containers">
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href="#database">
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#disabled">
          Disabled
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#aria-disabled">
          ARIA Disabled
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href="#network">
          Network
        </Tab>
      </Tabs>
    );
  }
}
```


### Sub nav using the nav element
```js
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
            <Tab eventKey={20} title={<TabTitleText>Item 1</TabTitleText>} href="#">
              Item 1 item section
            </Tab>
            <Tab eventKey={21} title={<TabTitleText>Item 2</TabTitleText>} href="#">
              Item 2 section
            </Tab>
            <Tab eventKey={22} title={<TabTitleText>Item 3</TabTitleText>} href="#">
              Item 3 section
            </Tab>
            <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#">
              Disabled
            </Tab>
            <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#">
              ARIA Disabled
            </Tab>
            <Tab eventKey={25} title={<TabTitleText>Item 6</TabTitleText>} href="#">
              Item 6 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href="#">
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href="#">
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#">
          Disabled
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#">
          ARIA Disabled
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href="#">
          Network
        </Tab>
      </Tabs>
    );
  }
}
```

### Separate content
```js
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

### Tab content with body and padding
```js
import React from 'react';
import { Tabs, Tab, TabTitleText, TabContent, TabContentBody } from '@patternfly/react-core';

const TabContentWithBody = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  
  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const contentRef1 = React.createRef();
  const contentRef2 = React.createRef();
  const contentRef3 = React.createRef();

  return (
    <React.Fragment>
      <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} tabContentId="refTab1Section" tabContentRef={contentRef1} />
        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}tabContentId="refTab2Section" tabContentRef={contentRef2} />
        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}  tabContentId="refTab3Section" tabContentRef={contentRef3} />
      </Tabs>
      <div>
        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Tab item 1">
          <TabContentBody hasPadding> Tab 1 section </TabContentBody>
        </TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Tab item 2" hidden>
          <TabContentBody hasPadding> Tab 2 section </TabContentBody>
        </TabContent>
        <TabContent eventKey={2} id="refTab3Section" ref={contentRef3} aria-label="Tab item 3" hidden>
          <TabContentBody hasPadding> Tab 3 section </TabContentBody>
        </TabContent>
      </div>
    </React.Fragment>
  );
}
```

### Children mounting on click
```js
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

### Unmounting invisible children
```js
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

### Toggled separate content
```js
import React from 'react';
import { Tabs, Tab, TabContent, Button, Divider } from '@patternfly/react-core';

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
