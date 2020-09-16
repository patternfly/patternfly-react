---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuItem', 'MenuList']
ouia: true
---

import { CodeBranchIcon, LayerGroupIcon, CubeIcon, TableIcon } from '@patternfly/react-icons/dist/js/icons';

## Examples

### Basic

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';

class MenuBasicList extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            component="button"
            // id="default-link1"
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
          >
            Action
          </MenuListItem>
          <MenuListItem to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link
          </MenuListItem>
          <MenuListItem
            isDisabled
            component="button"
            // id="default-link3"
            to="#default-link3"
            itemId={2}
            isActive={activeItem === 2}
          >
            Disabled Action
          </MenuListItem>
          <MenuListItem isDisabled id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
            Disabled Link
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With icons

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuIconsList extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            component="button"
            icon={<CodeBranchIcon />}
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
          >
            From Git
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<LayerGroupIcon />}
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Container Image
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<CubeIcon />}
            //
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Docker File
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With expanded toggle

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuExpandableList extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            From Git
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Container Image
          </MenuListItem>
          <MenuListItem
            component="button"
            description="Description"
            icon={<CubeIcon />}
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            From Docker File
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With flyout

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithFlyout extends React.Component {
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
      <Menu onSelect={this.onSelect} variant="flyout">
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Start rollout
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Pause rollouts
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Add storage
          </MenuListItem>
          <MenuListItem
            component="button"
            description="Description"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Edit
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Delete deployment config
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With filtering

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithFiltering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      value: ''
    };

    this.onChange = (value, event) => {
      this.setState({
        value: value
      });
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
      <Menu searchInput onSearchInputChange={this.onChange} onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            component="button"
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
          >
            Action 1
          </MenuListItem>
          <MenuListItem
            component="button"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Action 2
          </MenuListItem>
          <MenuListItem
            component="button"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Action 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With links

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithLinks extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem isExternalLink to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </MenuListItem>
          <MenuListItem isExternalLink to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </MenuListItem>
          <MenuListItem to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With separator(s)

```js
import React from 'react';
import { Divider, Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithSeparators extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Action 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Action 2
          </MenuListItem>
          <Divider component="li" />
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Action 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With titled groups

```js
import React from 'react';
import { Menu, MenuGroup, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithTitledGroups extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link not in group
          </MenuListItem>
          <Divider component="li" />
          <MenuGroup label="Group 1">
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Link 1
            </MenuListItem>
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Link 2
            </MenuListItem>
            <Divider component="li" />
          </MenuGroup>
          <MenuGroup label="Group 2">
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Link 1
            </MenuListItem>
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Link 2
            </MenuListItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  }
}
```

### With description

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithTitledGroups extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            icon={<CodeBranchIcon />}
            description="Description"
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
          >
            Action 1
          </MenuListItem>
          <MenuListItem
            component="button"
            isDisabled
            icon={<CodeBranchIcon />}
            description="Description"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Action 2 disabled
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<CodeBranchIcon />}
            description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Action 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With actions

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithActions extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuGroup label="Actions">
          <MenuList>
            <MenuListItem
              component="button"
              description="This is a description"
              to="#default-link1"
              itemId={0}
              isActive={activeItem === 0}
            >
              Item 1
            </MenuListItem>
            <MenuListItem
              component="button"
              description="This is a description"
              to="#default-link2"
              itemId={1}
              isActive={activeItem === 1}
            >
              Item 2
            </MenuListItem>
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Item 3
            </MenuListItem>
            <MenuListItem
              component="button"
              description="This is a description"
              to="#default-link2"
              itemId={1}
              isActive={activeItem === 1}
            >
              Item 4
            </MenuListItem>
          </MenuList>
        </MenuGroup>
      </Menu>
    );
  }
}
```

### With favorites

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuWithFavorites extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuGroup label="Favorites">
          <MenuList>
            <MenuListItem
              component="button"
              description="This is a description"
              to="#default-link1"
              itemId={0}
              isActive={activeItem === 0}
            >
              Item 1
            </MenuListItem>
            <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
              Item 2
            </MenuListItem>
            <Divider component="li" />
            <MenuGroup label="All actions">
              <MenuListItem
                component="button"
                description="This is a description"
                to="#default-link2"
                itemId={1}
                isActive={activeItem === 1}
              >
                Item 1
              </MenuListItem>
              <MenuListItem
                component="button"
                description="This is a description"
                to="#default-link2"
                itemId={1}
                isActive={activeItem === 1}
              >
                Item 2
              </MenuListItem>
              <MenuListItem
                component="button"
                to="#default-link2"
                itemId={1}
                isActive={activeItem === 1}
              >
                Item 3
              </MenuListItem>
            </MenuGroup>
          </MenuList>
        </MenuGroup>
      </Menu>
    );
  }
}
```

### Option single select

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import { CodeBranchIcon, LayerGroupIcon, CubeIcon } from '@patternfly/react-icons/dist/js/icons';

class MenuOptionSingleSelect extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Option 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Option 2
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<TableIcon />}
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Option 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### Option multi select

```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class MenuOptionMultiSelect extends React.Component {
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
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Option 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Option 2
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<TableIcon />}
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
          >
            Option 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```
