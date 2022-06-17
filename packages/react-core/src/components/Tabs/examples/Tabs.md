---
id: Tabs
section: components
cssPrefix: pf-c-tabs
propComponents: ['Tabs', 'Tab', 'TabContent', 'TabTitleText', 'TabTitleIcon']
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

When passing in a Tooltip component to the Tab component, the Tooltip can also be passed in directly to the `tooltip` prop.

```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

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
    const { activeTabKey, isBox } = this.state;
    const tooltip = (
      <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
    );

    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the default example"
        >
          <Tab eventKey={0} aria-label="default user tab" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="default container tab" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="default database tab" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="default disabled tab" itle={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} aria-label="default aria disabled tab" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab
            tooltip={tooltip}
            eventKey={5}
            aria-label="default aria disabled with tooltip tab"
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
          >
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
          <Checkbox
            label="isBox"
            isChecked={isBox}
            onChange={this.toggleBox}
            aria-label="show box variation checkbox"
            id="toggle-simple-box"
            name="toggle-simple-box"
          />
        </div>
      </div>
    );
  }
}
```

### With tooltip react ref

When using a React ref to link a Tooltip to a Tab component via the `reference` prop, you should avoid manually passing in a value of "off" to the `aria-live` prop. Doing so may lead to the tooltip becoming less accessible to assistive technologies.

The tooltip should also have the `id` prop passed in. The value given to this prop should then be passed into the tab's `aria-describedby` prop. This ensures a tooltip used with a React ref will be announced by the JAWS and NVDA screen readers.

```js
import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

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
    const { activeTabKey, isBox } = this.state;
    const tooltipRef = React.createRef();

    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the example with a tooltip ref"
        >
          <Tab eventKey={0} aria-label="Tooltip labelled users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Tooltip labelled containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Tooltip labelled database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Tooltip labelled disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} aria-label="Tooltip labelled aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab
            eventKey={5}
            aria-label="Tooltip labelled aria disabled tooltip"
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
            ref={tooltipRef}
            aria-describedby="tooltip-ref1"
          >
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <Tooltip
          id="tooltip-ref1"
          content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
          reference={tooltipRef}
        />
        <div style={{ marginTop: '20px' }}>
          <Checkbox
            label="isBox"
            isChecked={isBox}
            onChange={this.toggleBox}
            aria-label="show box variation checkbox"
            id="toggle-box-with-tooltip"
            name="toggle-box-with-tooltip"
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
    const tooltip = (
      <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
    );

    return (
      <>
        <Tabs defaultActiveKey={0} aria-label="Tabs in the uncontrolled example">
          <Tab eventKey={0} aria-label="Uncontrolled users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Uncontrolled containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Uncontrolled database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Uncontrolled disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} aria-label="Uncontrolled aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab
            eventKey={5}
            aria-label="Uncontrolled aria disabled with tooltip"
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
            tooltip={tooltip}
          >
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
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
      isTabsLightScheme: true
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
    const { activeTabKey, isBox, isTabsLightScheme } = this.state;
    const tooltip = (
      <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
    );

    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          variant={isTabsLightScheme ? 'light300' : 'default'}
          isBox
          aria-label="Tabs in the box light variation example"
        >
          <Tab eventKey={0} aria-label="Lightbox users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Lightbox containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Lightbox database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Lightbox disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} aria-label="Lightbox aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab
            eventKey={5}
            aria-label="Lightbox aria disabled with tooltip"
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
            tooltip={tooltip}
          >
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isBox } = this.state;
    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the default overflow example"
        >
          <Tab eventKey={0} aria-label="Default overflow users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Default overflow containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Default overflow database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Default overflow server" title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} aria-label="Default overflow system" title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} aria-label="Default overflow network" title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
          <Tab eventKey={7} aria-label="Default overflow tab 7" title={<TabTitleText>Tab item 7</TabTitleText>}>
            Tab 7 section
          </Tab>
          <Tab eventKey={8} aria-label="Default overflow tab 8" title={<TabTitleText>Tab item 8</TabTitleText>}>
            Tab 8 section
          </Tab>
          <Tab eventKey={9} aria-label="Default overflow tab 9" title={<TabTitleText>Tab item 9</TabTitleText>}>
            Tab 9 section
          </Tab>
          <Tab eventKey={10} aria-label="Default overflow tab 10" title={<TabTitleText>Tab item 10</TabTitleText>}>
            Tab 10 section
          </Tab>
          <Tab eventKey={11} aria-label="Default overflow tab 11" title={<TabTitleText>Tab item 11</TabTitleText>}>
            Tab 11 section
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isBox } = this.state;
    const tooltip = (
      <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
    );

    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isVertical
          isBox={isBox}
          aria-label="Tabs in the vertical example"
        >
          <Tab eventKey={0} aria-label="Vertical users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Vertical containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Vertical database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Vertical disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
            Disabled
          </Tab>
          <Tab eventKey={4} aria-label="Vertical aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
            ARIA Disabled
          </Tab>
          <Tab
            eventKey={5}
            aria-label="Vertical aria disabled with tooltip"
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
            tooltip={tooltip}
          >
            ARIA Disabled (Tooltip)
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isExpanded } = this.state;
    return (
      <Tabs
        activeKey={activeTabKey}
        onSelect={this.handleTabClick}
        isVertical
        expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}
        isExpanded={isExpanded}
        onToggle={this.onToggle}
        toggleText="Containers"
        aria-label="Tabs in the vertical expandable example"
      >
        <Tab eventKey={0} aria-label="Vertical expandable users" title={<TabTitleText>Users</TabTitleText>}>
          Users
        </Tab>
        <Tab eventKey={1} aria-label="Vertical expandable containers" title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
        <Tab eventKey={2} aria-label="Vertical expandable database" title={<TabTitleText>Database</TabTitleText>}>
          Database
        </Tab>
        <Tab eventKey={3} aria-label="Vertical expandable server" title={<TabTitleText>Server</TabTitleText>}>
          Server
        </Tab>
        <Tab eventKey={4} aria-label="Vertical expandable system" title={<TabTitleText>System</TabTitleText>}>
          System
        </Tab>
        <Tab eventKey={6} aria-label="Vertical expandable network" title={<TabTitleText>Network</TabTitleText>}>
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
    const { activeTabKey } = this.state;
    return (
      <Tabs
        activeKey={activeTabKey}
        onSelect={this.handleTabClick}
        isVertical
        expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}
        defaultIsExpanded={false}
        toggleText="Containers"
        aria-label="Tabs in the vertical expandable uncontrolled example"
      >
        <Tab eventKey={0} aria-label="Vertical expandable uncontrolled users" title={<TabTitleText>Users</TabTitleText>}>
          Users
        </Tab>
        <Tab eventKey={1} aria-label="Vertical expandable uncontrolled containers" title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
        <Tab eventKey={2} aria-label="Vertical expandable uncontrolled database" title={<TabTitleText>Database</TabTitleText>}>
          Database
        </Tab>
        <Tab eventKey={3} aria-label="Vertical expandable uncontrolled server" title={<TabTitleText>Server</TabTitleText>}>
          Server
        </Tab>
        <Tab eventKey={4} aria-label="Vertical expandable uncontrolled system" title={<TabTitleText>System</TabTitleText>}>
          System
        </Tab>
        <Tab eventKey={6} aria-label="Vertical expandable uncontrolled network" title={<TabTitleText>Network</TabTitleText>}>
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
    const { activeTabKey, isBox } = this.state;
    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          inset={{
            default: 'insetNone',
            md: 'insetSm',
            xl: 'insetLg',
            '2xl': 'inset2xl'
          }}
          isBox={isBox}
          aria-label="Tabs in the inset example"
        >
          <Tab eventKey={0} aria-label="Inset users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Inset containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Inset database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Inset server" title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} aria-label="Inset system" title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} aria-label="Inset network" title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isBox } = this.state;
    return (
      <div>
        <Tabs
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          usePageInsets
          isBox={isBox}
          aria-label="Tabs in the page insets example"
        >
          <Tab eventKey={0} aria-label="Page inset users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Page inset constainers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Page inset database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="Page inset server" title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} aria-label="Page inset system" title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} aria-label="Page inset network" title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
          <Checkbox
            label="isBox"
            isChecked={isBox}
            onChange={this.toggleBox}
            aria-label="show box variation checkbox with inset"
            id="toggle-box-page-inset"
            name="toggle-box-page-inset"
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
      <Tabs
        activeKey={this.state.activeTabKey}
        onSelect={this.handleTabClick}
        aria-label="Tabs in the icons and text example"
      >
        <Tab
          eventKey={0}
          aria-label="Icons and text users"
          title={
            <>
              <TabTitleIcon>
                <UsersIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>Users</TabTitleText>{' '}
            </>
          }
        >
          Users
        </Tab>
        <Tab
          eventKey={1}
          aria-label="Icons and text containers"
          title={
            <>
              <TabTitleIcon>
                <BoxIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>Containers</TabTitleText>{' '}
            </>
          }
        >
          Containers
        </Tab>
        <Tab
          eventKey={2}
          aria-label="Icons and text database"
          title={
            <>
              <TabTitleIcon>
                <DatabaseIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>Database</TabTitleText>{' '}
            </>
          }
        >
          Database
        </Tab>
        <Tab
          eventKey={3}
          aria-label="Icons and text server"
          title={
            <>
              <TabTitleIcon>
                <ServerIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>Server</TabTitleText>{' '}
            </>
          }
        >
          Server
        </Tab>
        <Tab
          eventKey={4}
          aria-label="Icons and text system"
          title={
            <>
              <TabTitleIcon>
                <LaptopIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>System</TabTitleText>{' '}
            </>
          }
        >
          System
        </Tab>
        <Tab
          eventKey={6}
          aria-label="Icons and text network"
          title={
            <>
              <TabTitleIcon>
                <ProjectDiagramIcon />
              </TabTitleIcon>{' '}
              <TabTitleText>Network</TabTitleText>{' '}
            </>
          }
        >
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
    const { activeTabKey1, activeTabKey2, isBox } = this.state;
    return (
      <div>
        <Tabs
          activeKey={activeTabKey1}
          onSelect={this.handleTabClickFirst}
          isBox={isBox}
          aria-label="Tabs in the tabs with subtabs example"
        >
          <Tab eventKey={0} aria-label="with subtabs users" title={<TabTitleText>Users</TabTitleText>}>
            <Tabs
              aria-label="secondary tabs for users"
              activeKey={activeTabKey2}
              isSecondary
              onSelect={this.handleTabClickSecond}
            >
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
          <Tab eventKey={1} aria-label="with subtabs containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="with subtabs database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
          <Tab eventKey={3} aria-label="with subtabs server" title={<TabTitleText>Server</TabTitleText>}>
            Server
          </Tab>
          <Tab eventKey={4} aria-label="with subtabs system" title={<TabTitleText>System</TabTitleText>}>
            System
          </Tab>
          <Tab eventKey={6} aria-label="with subtabs network" title={<TabTitleText>Network</TabTitleText>}>
            Network
          </Tab>
          <Tab eventKey={7} aria-label="with subtabs item 7" title={<TabTitleText>Tab item 7</TabTitleText>}>
            Tab 7 section
          </Tab>
          <Tab eventKey={8} aria-label="with subtabs item 8" title={<TabTitleText>Tab item 8</TabTitleText>}>
            Tab 8 section
          </Tab>
          <Tab eventKey={9} aria-label="with subtabs item 9" title={<TabTitleText>Tab item 9</TabTitleText>}>
            Tab 9 section
          </Tab>
          <Tab eventKey={10} aria-label="with subtabs item 10" title={<TabTitleText>Tab item 10</TabTitleText>}>
            Tab 10 section
          </Tab>
          <Tab eventKey={11} aria-label="with subtabs item 11" title={<TabTitleText>Tab item 11</TabTitleText>}>
            Tab 11 section
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isBox } = this.state;
    return (
      <div>
        <Tabs
          isFilled
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the filled example"
        >
          <Tab eventKey={0} aria-label="Filled users" title={<TabTitleText>Users</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} aria-label="Filled containers" title={<TabTitleText>Containers</TabTitleText>}>
            Containers
          </Tab>
          <Tab eventKey={2} aria-label="Filled database" title={<TabTitleText>Database</TabTitleText>}>
            Database
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
    const { activeTabKey, isBox } = this.state;
    return (
      <div>
        <Tabs
          isFilled
          activeKey={activeTabKey}
          onSelect={this.handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the filled with icons example"
        >
          <Tab
            eventKey={0}
            aria-label="Filled with icons users"
            title={
              <>
                <TabTitleIcon>
                  <UsersIcon />
                </TabTitleIcon>{' '}
                <TabTitleText>Users</TabTitleText>{' '}
              </>
            }
          >
            Users
          </Tab>
          <Tab
            eventKey={1}
            aria-label="Filled with icons containers"
            title={
              <>
                <TabTitleIcon>
                  <BoxIcon />
                </TabTitleIcon>{' '}
                <TabTitleText>Containers</TabTitleText>{' '}
              </>
            }
          >
            Containers
          </Tab>
          <Tab
            eventKey={2}
            aria-label="Filled with icons database"
            title={
              <>
                <TabTitleIcon>
                  <DatabaseIcon />
                </TabTitleIcon>{' '}
                <TabTitleText>Database</TabTitleText>{' '}
              </>
            }
          >
            Database
          </Tab>
        </Tabs>
        <div style={{ marginTop: '20px' }}>
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
        aria-label="Tabs in the nav element example"
      >
        <Tab eventKey={0} aria-label="Nav element users" title={<TabTitleText>Users</TabTitleText>} href="#users">
          Users
        </Tab>
        <Tab eventKey={1} aria-label="Nav element containers" title={<TabTitleText>Containers</TabTitleText>} href="#containers">
          Containers
        </Tab>
        <Tab eventKey={2} aria-label="Nav element database" title={<TabTitleText>Database</TabTitleText>} href="#database">
          Database
        </Tab>
        <Tab eventKey={3} aria-label="Nav element disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#disabled">
          Disabled
        </Tab>
        <Tab eventKey={4} aria-label="Nav element aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#aria-disabled">
          ARIA Disabled
        </Tab>
        <Tab eventKey={6} aria-label="Nav element network" title={<TabTitleText>Network</TabTitleText>} href="#network">
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
        aria-label="Tabs in the sub tabs with nav element example"
      >
        <Tab eventKey={0} aria-label="Nav element with subnav users" title={<TabTitleText>Users</TabTitleText>} href="#">
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
        <Tab eventKey={1} aria-label="Nav element with subnav containers" title={<TabTitleText>Containers</TabTitleText>} href="#">
          Containers
        </Tab>
        <Tab eventKey={2} aria-label="Nav element with subnav database" title={<TabTitleText>Database</TabTitleText>} href="#">
          Database
        </Tab>
        <Tab eventKey={3} aria-label="Nav element with subnav disabled" title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#">
          Disabled
        </Tab>
        <Tab eventKey={4} aria-label="Nav element with subnav aria disabled" title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#">
          ARIA Disabled
        </Tab>
        <Tab eventKey={6} aria-label="Nav element with subnav network" title={<TabTitleText>Network</TabTitleText>} href="#">
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
        <Tabs
          activeKey={this.state.activeTabKey}
          onSelect={this.handleTabClick}
          aria-label="Tabs in the seperate content example"
        >
          <Tab
            eventKey={0}
            aria-label="Separate content item 1"
            title={<TabTitleText>Tab item 1</TabTitleText>}
            tabContentId="refTab1Section"
            tabContentRef={this.contentRef1}
          />
          <Tab
            eventKey={1}
            aria-label="Separate content item 2"
            title={<TabTitleText>Tab item 2</TabTitleText>}
            tabContentId="refTab2Section"
            tabContentRef={this.contentRef2}
          />
          <Tab
            eventKey={2}
            aria-label="Separate content item 3"
            title={<TabTitleText>Tab item 3</TabTitleText>}
            tabContentId="refTab3Section"
            tabContentRef={this.contentRef3}
          />
        </Tabs>
        <div>
          <TabContent
            eventKey={0}
            id="refTab1Section"
            ref={this.contentRef1}
            aria-label="This is content for the first tab"
          >
            Tab 1 section
          </TabContent>
          <TabContent
            eventKey={1}
            id="refTab2Section"
            ref={this.contentRef2}
            aria-label="This is content for the second tab"
            hidden
          >
            Tab 2 section
          </TabContent>
          <TabContent
            eventKey={2}
            id="refTab3Section"
            ref={this.contentRef3}
            aria-label="This is content for the third tab"
            hidden
          >
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
      <Tabs activeKey={activeTabKey} onSelect={handleTabClick} aria-label="Tabs in the body and padding example">
        <Tab
          eventKey={0}
          aria-label="Content body padding item 1"
          title={<TabTitleText>Tab item 1</TabTitleText>}
          tabContentId="tab1WithBodyPaddingSection"
          tabContentRef={contentRef1}
        />
        <Tab
          eventKey={1}
          aria-label="Content body padding item 2"
          title={<TabTitleText>Tab item 2</TabTitleText>}
          tabContentId="tab2WithBodyPaddingSection"
          tabContentRef={contentRef2}
        />
        <Tab
          eventKey={2}
          aria-label="Content body padding item 3"
          title={<TabTitleText>Tab item 3</TabTitleText>}
          tabContentId="tab3WithBodyPaddingSection"
          tabContentRef={contentRef3}
        />
      </Tabs>
      <div>
        <TabContent eventKey={0} id="tab1WithBodyPaddingSection" ref={contentRef1} aria-label="This is content for the first tab with body and padding">
          <TabContentBody hasPadding> Tab 1 section </TabContentBody>
        </TabContent>
        <TabContent
          eventKey={1}
          id="tab2WithBodyPaddingSection"
          ref={contentRef2}
          aria-label="This is content for the second tab"
          hidden
        >
          <TabContentBody hasPadding> Tab 2 section </TabContentBody>
        </TabContent>
        <TabContent
          eventKey={2}
          id="tab3WithBodyPaddingSection"
          ref={contentRef3}
          aria-label="This is content for the third tab"
          hidden
        >
          <TabContentBody hasPadding> Tab 3 section </TabContentBody>
        </TabContent>
      </div>
    </React.Fragment>
  );
};
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
      <Tabs
        mountOnEnter
        activeKey={this.state.activeTabKey}
        onSelect={this.handleTabClick}
        aria-label="Tabs in the children mounting on click example"
      >
        <Tab eventKey={0} aria-label="Item 1 mount on click" title={<TabTitleText>Tab item 1</TabTitleText>}>
          Tab 1 section
        </Tab>
        <Tab eventKey={1} aria-label="Item 2 mount on click" title={<TabTitleText>Tab item 2</TabTitleText>}>
          Tab 2 section
        </Tab>
        <Tab eventKey={2} aria-label="Item 3 mount on click" title={<TabTitleText>Tab item 3</TabTitleText>}>
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
      <Tabs
        unmountOnExit
        activeKey={this.state.activeTabKey}
        onSelect={this.handleTabClick}
        aria-label="Tabs in the unmounting invisible children example"
      >
        <Tab eventKey={0} aria-label="Item 1 invisible children" title={<TabTitleText>Tab item 1</TabTitleText>}>
          Tab 1 section
        </Tab>
        <Tab eventKey={1} aria-label="Item 2 invisible children" title={<TabTitleText>Tab item 2</TabTitleText>}>
          Tab 2 section
        </Tab>
        <Tab eventKey={2} aria-label="Item 3 invisible children" title={<TabTitleText>Tab item 3</TabTitleText>}>
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
        <Tabs
          activeKey={this.state.activeTabKey}
          onSelect={this.handleTabClick}
          aria-label="Tabs in the toggled separate content example"
        >
          <Tab eventKey={0} aria-label="Item 1 toggle separate content" title="Tab item 1" tabContentId="tab1SeparateSection" tabContentRef={this.contentRef1} />
          {!isTab2Hidden && (
            <Tab eventKey={1} aria-label="Item 2 toggle separate content" title="Tab item 2" tabContentId="tab2SeparateSection" tabContentRef={this.contentRef2} />
          )}
          <Tab eventKey={2} aria-label="Item 3 toggle separate content" title="Tab item 3" tabContentId="tab3SeparateSection" tabContentRef={this.contentRef3} />
        </Tabs>
        <div>
          <TabContent
            eventKey={0}
            id="tab1SeparateSection"
            ref={this.contentRef1}
            aria-label="This is content for the separate first tab"
          >
            Tab 1 section
          </TabContent>
          {!isTab2Hidden && (
            <TabContent
              eventKey={1}
              id="tab2SeparateSection"
              ref={this.contentRef2}
              aria-label="This is content for the second tab"
              hidden
            >
              Tab 2 section
            </TabContent>
          )}
          <TabContent
            eventKey={2}
            id="tab3SeparateSection"
            ref={this.contentRef3}
            aria-label="This is content for the third tab"
            hidden
          >
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}
```

### Dynamic

To enable closeable tabs, pass the `onClose` property to `Tabs`, and to enable the add button, pass the `onAdd` property to `Tabs`. Aria labels may be controlled manually by passing `closeButtonAriaLabel` to `Tab` and `addButtonAriaLabel` to `Tabs`.

```ts file="./TabsDynamic.tsx" isBeta
```
