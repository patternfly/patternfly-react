---
title: 'Nav'
cssPrefix: 'pf-c-nav'
typescript: true
---

## Simple nav

import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

class NavSimpleList extends React.Component {
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
      <Nav onSelect={this.onSelect} id="nav-primary-simple">
        <NavList id="nav-list-simple" variant={NavVariants.simple}>
          <NavItem id="simple-link1" preventDefault to="#simple-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem id="simple-link2" preventDefault to="#simple-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem id="simple-link3" preventDefault to="#simple-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItemSeparator />
          <NavItem id="simple-link4" preventDefault to="#simple-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}
```

## Nav (grouped)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect}>
        <NavGroup title="Section title 1">
          <NavItem preventDefault to="#grouped-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Link 1
          </NavItem>
          <NavItem preventDefault to="#grouped-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Link 2
          </NavItem>
          <NavItem preventDefault to="#grouped-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Link 3
          </NavItem>
        </NavGroup>
        <NavGroup title="Section title 2">
          <NavItem preventDefault to="#grouped-4" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Link 1
          </NavItem>
          <NavItem preventDefault to="#grouped-5" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Link 2
          </NavItem>
          <NavItem preventDefault to="#grouped-6" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Link 3
          </NavItem>
        </NavGroup>
      </Nav>
    );
  }
}
```

## Nav (default)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect}>
        <NavList>
          <NavItem id="default-link1" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem id="default-link2" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem id="default-link3" to="#default-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItem id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}
```

## Nav (expandable)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect} onToggle={this.onToggle}>
        <NavList>
          <NavExpandable title="Link 1" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#expandable-1"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Subnav Link 1
            </NavItem>
            <NavItemSeparator />
            <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              Subnav Link 2
            </NavItem>
            <NavItem to="#expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Subnav Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 2" groupId="grp-2" isActive={activeGroup === 'grp-2'} isExpanded>
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
              Subnav Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Subnav Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Subnav Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

## Nav (expandable+titles)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect}>
        <NavList>
          <NavExpandable title="Link 1" srText="SR Link" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#sr-expandable-1"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Subnav Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-2"
              groupId="grp-1"
              itemId="grp-1_itm-2"
              isActive={activeItem === 'grp-1_itm-2'}
            >
              Subnav Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-3"
              groupId="grp-1"
              itemId="grp-1_itm-3"
              isActive={activeItem === 'grp-1_itm-3'}
            >
              Subnav Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 2" srText="SR Link 2" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem
              preventDefault
              to="#sr-expandable-4"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm-1'}
            >
              Subnav Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Subnav Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#sr-expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Subnav Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

## Nav (mixed)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect}>
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
              Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-3"
              groupId="grp-1"
              itemId="grp-1_itm-2"
              isActive={activeItem === 'grp-1_itm-2'}
            >
              Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-4"
              groupId="grp-1"
              itemId="grp-1_itm-3"
              isActive={activeItem === 'grp-1_itm-3'}
            >
              Link 3
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
              Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-6"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#mixed-7"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}
```

## Nav (horizontal)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
    return (
      <div style={{ backgroundColor: '#292e34', padding: '1rem' }}>
        <Nav onSelect={this.onSelect}>
          <NavList variant={NavVariants.horizontal}>
            <NavItem preventDefault to="#horizontal-link1" itemId={0} isActive={activeItem === 0}>
              Item 1
            </NavItem>
            <NavItem preventDefault to="#horizontal-link2" itemId={1} isActive={activeItem === 1}>
              Item 2
            </NavItem>
            <NavItem preventDefault to="#horizontal-link3" itemId={2} isActive={activeItem === 2}>
              Item 3
            </NavItem>
          </NavList>
        </Nav>
      </div>
    );
  }
}
```

## Nav (tertiary)
```js
import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants
} from '@patternfly/react-core';

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
      <Nav onSelect={this.onSelect}>
        <NavList variant={NavVariants.tertiary}>
          <NavItem preventDefault to="#tertiary-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem preventDefault to="#tertiary-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem preventDefault to="#tertiary-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItem preventDefault to="#tertiary-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}
```
