---
id: Navigation
section: components
cssPrefix: pf-c-nav
propComponents: ['Nav', 'NavList', 'NavGroup', 'NavItem', 'NavItemSeparator', 'NavExpandable']
ouia: true
---

import './nav.css';

## Examples

### Default

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavDefaultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Default global nav">
        <NavList>
          <NavItem id="default-link1" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Default Link 1
          </NavItem>
          <NavItem id="default-link2" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Default Link 2
          </NavItem>
          <NavItem id="default-link3" to="#default-link3" itemId={2} isActive={activeItem === 2}>
            Default Link 3
          </NavItem>
          <NavItem id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
            Default Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}
```

### Grouped

Note: to keep nav groups accessible an `aria-label` should be supplied if the `title` prop is not passed.

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavGroupedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'grp-1_itm-1'
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Grouped global nav">
        <NavGroup title="Section title 1">
          <NavItem preventDefault to="#grouped-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Group 1 Link 1
          </NavItem>
          <NavItem preventDefault to="#grouped-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Group 1 Link 2
          </NavItem>
          <NavItem preventDefault to="#grouped-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Group 1 Link 3
          </NavItem>
        </NavGroup>
        <NavGroup title="Section title 2">
          <NavItem preventDefault to="#grouped-4" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Group 2 Link 1
          </NavItem>
          <NavItem preventDefault to="#grouped-5" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Group 2 Link 2
          </NavItem>
          <NavItem preventDefault to="#grouped-6" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Group 2 Link 3
          </NavItem>
        </NavGroup>
      </Nav>
    );
  }
}
```

### Expandable

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavExpandableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };
    this.onSelect = result => {
      this.setState({
        activeGroup: result.groupId,
        activeItem: result.itemId
      });
    };
    this.onToggle = result => {
      // eslint-disable-next-line no-console
      console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
    };
    this.handleItemOnclick = (event, itemId, groupId) => {
      // eslint-disable-next-line no-console
      console.log(`my own click handler on ${itemId}`);
    };
  }

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} onToggle={this.onToggle} aria-label="Expandable global nav">
        <NavList>
          <NavExpandable title="Expandable Group 1" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#expandable-1"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Subnav 1 Link 1
            </NavItem>
            <NavItemSeparator />
            <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              Subnav 1 Link 2
            </NavItem>
            <NavItem to="#expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Subnav 1 Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Expandable Group 2" groupId="grp-2" isActive={activeGroup === 'grp-2'} isExpanded>
            <NavItem
              preventDefault
              onClick={this.handleItemOnclick}
              groupId="grp-2"
              itemId="own-item-handler"
              isActive={activeItem === 'own-item-handler'}
            >
              Custom onClick
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-4"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm-1'}
            >
              Subnav 2 Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Subnav 2 Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Subnav 2 Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

### Expandable (w/subnavigation titles)

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavExpandableTitlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };
    this.onSelect = result => {
      this.setState({
        activeGroup: result.groupId,
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Expandable with subnav global nav">
        <NavList>
          <NavExpandable title="Expandable with subnav group 1" srText="SR Link" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#sr-expandable-1"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Expandable 1 link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-2"
              groupId="grp-1"
              itemId="grp-1_itm-2"
              isActive={activeItem === 'grp-1_itm-2'}
            >
              Expandable 1 link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-3"
              groupId="grp-1"
              itemId="grp-1_itm-3"
              isActive={activeItem === 'grp-1_itm-3'}
            >
              Expandable 1 link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Expandable with subnav group 2" srText="SR Link 2" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem
              preventDefault
              to="#sr-expandable-4"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm-1'}
            >
              Expandable 2 Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Expandable 2 Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Expandable 2 Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

### Expandable third level

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

NavExpandableThirdLevelList = () => {
  const [activeGroup, setActiveGroup] = React.useState('grp-1');
  const [activeItem, setActiveItem] = React.useState('grp-1_itm-1');

  onSelect = result => {
    setActiveGroup(result.groupId);
    setActiveItem(result.itemId);
  };

  onToggle = result => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  return (
    <Nav onSelect={onSelect} onToggle={onToggle} aria-label="Expandable third level global nav">
      <NavList>
        <NavExpandable title="Third level group 1" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
          <NavItem
            preventDefault
            to="#expandable-1"
            groupId="grp-1"
            itemId="grp-1_itm-1"
            isActive={activeItem === 'grp-1_itm-1'}
          >
            With 3rd 1 Link 1
          </NavItem>
          <NavItem
            preventDefault
            to="#expandable-2"
            groupId="grp-1"
            itemId="grp-1_itm-2"
            isActive={activeItem === 'grp-1_itm-2'}
          >
            With 3rd 1 Link 2
          </NavItem>
          <NavItem
            preventDefault
            to="#expandable-3"
            groupId="grp-1"
            itemId="grp-1_itm-3"
            isActive={activeItem === 'grp-1_itm-3'}
          >
            With 3rd 1 Link 3
          </NavItem>
        </NavExpandable>
        <NavExpandable title="Third level group 2" groupId="grp-2" isActive={activeGroup === 'grp-2'} isExpanded>
          <NavItem
            preventDefault
            to="#expandable-4"
            groupId="grp-2"
            itemId="grp-2_itm-1"
            isActive={activeItem === 'grp-2_itm-1'}
          >
            With 3rd 2 Link 1
          </NavItem>
          <NavExpandable title="Third Level" groupId="grp-3" isActive={activeGroup === 'grp-3'} isExpanded>
            <NavItem
              preventDefault
              to="#expandable-6"
              groupId="grp-3"
              itemId="grp-3_itm-1"
              isActive={activeItem === 'grp-3_itm-1'}
            >
              Third Level Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-7"
              groupId="grp-3"
              itemId="grp-3_itm-2"
              isActive={activeItem === 'grp-3_itm-2'}
            >
              Third Level Link 2
            </NavItem>
          </NavExpandable>
          <NavItem
            preventDefault
            to="#expandable-8"
            groupId="grp-2"
            itemId="grp-2_itm-2"
            isActive={activeItem === 'grp-2_itm-3'}
          >
            With 3rd 2 Link 3
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
```

### Mixed

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavMixedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: '',
      activeItem: 'itm-1'
    };
    this.onSelect = result => {
      this.setState({
        activeGroup: result.groupId,
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Mixed global nav">
        <NavList>
          <NavItem preventDefault to="#mixed-1" itemId="itm-1" isActive={activeItem === 'itm-1'}>
            Link 1 (not expandable)
          </NavItem>
          <NavExpandable title="Link 2 - expandable" groupId="grp-1" isActive={activeGroup === 'grp-1'}>
            <NavItem
              preventDefault
              to="#mixed-2"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Mixed Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-3"
              groupId="grp-1"
              itemId="grp-1_itm-2"
              isActive={activeItem === 'grp-1_itm-2'}
            >
              Mixed Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-4"
              groupId="grp-1"
              itemId="grp-1_itm-3"
              isActive={activeItem === 'grp-1_itm-3'}
            >
              Mixed Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 3 - expandable" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem
              preventDefault
              to="#mixed-5"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm-1'}
            >
              Mixed 2 Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-6"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Mixed 2 Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-7"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Mixed 2 Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

### Horizontal (only in PageHeader)

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader } from '@patternfly/react-core';

class NavHorizontalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    const nav = (
      <Nav onSelect={this.onSelect} variant="horizontal" aria-label="Horizontal global nav">
        <NavList>
          {Array.apply(0, Array(10)).map(function(x, i) {
            const num = i + 1;
            return (
              <NavItem key={num} itemId={num} isActive={activeItem === num} href="#">
                Horizontal nav item {num}
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    );
    return <PageHeader topNav={nav} />;
  }
}
```

### Horizontal subnav

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader } from '@patternfly/react-core';

class HorizontalSubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} variant="horizontal-subnav" aria-label="Horizontal subnav global nav">
        <NavList>
          {Array.apply(0, Array(10)).map(function(x, i) {
            const num = i + 1;
            return (
              <NavItem key={num} itemId={num} isActive={activeItem === num} href="#">
                Horizontal nav item {num}
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    );
  }
}
```

### Legacy tertiary

```js
import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageSection } from '@patternfly/react-core';

class NavTertiaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} variant="tertiary" aria-label="Tertiary global nav">
        <NavList>
          {Array.apply(0, Array(10)).map(function(x, i) {
            const num = i + 1;
            return (
              <NavItem key={num} itemId={num} isActive={activeItem === num} href="#">
                Tertiary nav item {num}
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    );
  }
}
```

### Flyout

A flyout should be a `Menu` component. Press `space` or `right arrow` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `escape` or `left arrow` to close a flyout.

```js isBeta
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  Menu,
  MenuContent,
  MenuList,
  MenuItem
} from '@patternfly/react-core';

NavWithFlyout = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const onSelect = result => setActiveItem(result.itemId);
  const onMenuSelect = (event, itemId) => setActiveItem(itemId);

  const numFlyouts = 5;
  const FlyoutMenu = ({ depth, children }) => (
    <Menu key={depth} containsFlyout isNavFlyout id={`menu-${depth}`} onSelect={onMenuSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`} to={`#menu-link-${depth}`}>
            Next menu
          </MenuItem>
          {[...Array(numFlyouts - depth).keys()].map(j => (
            <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`} to={`#menu-link-${depth}-${j}`}>
              Menu {depth} item {j}
            </MenuItem>
          ))}
          <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`} to={`#second-menu-link-${depth}`}>
            Next menu
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  let curFlyout = <FlyoutMenu depth={1} />;
  for (let i = 2; i < numFlyouts - 1; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  return (
    <Nav onSelect={onSelect} aria-label="Flyout global nav">
      <NavList>
        <NavItem id="flyout-link1" to="#flyout-link1" itemId={0} isActive={activeItem === 0}>
          Flyout Link 1
        </NavItem>
        <NavItem id="flyout-link2" to="#flyout-link2" itemId={1} isActive={activeItem === 1}>
          Flyout Link 2
        </NavItem>
        <NavItem flyout={curFlyout} id="flyout-link3" to="#flyout-link3" itemId={2} isActive={activeItem === 2}>
          Flyout Link 3
        </NavItem>
        <NavItem id="flyout-link4" to="#flyout-link4" itemId={3} isActive={activeItem === 3}>
          Flyout Link 4
        </NavItem>
      </NavList>
    </Nav>
  );
};
```

### Drilldown

```ts isBeta file="./NavDrilldown.tsx"
```
