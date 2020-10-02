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
    const menuItems = [
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
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
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
          to="#default-link2"
          itemId={2}
          isActive={activeItem === 2}
        >
          Docker File
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
      <MenuList>
        <MenuListItem isExpandable component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
          From Git
        </MenuListItem>
        <MenuListItem isExpandable component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
          Container Image
        </MenuListItem>
        <MenuListItem
          isExpandable
          component="button"
          description="Description"
          icon={<CubeIcon />}
          to="#default-link2"
          itemId={2}
          isActive={activeItem === 2}
        >
          From Docker File
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
      <MenuList>
        <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
          Start rollout
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
          Pause rollouts
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
          Add storage
        </MenuListItem>
        <MenuListItem
          component="button"
          description="Description"
          to="#default-link2"
          itemId={3}
          isActive={activeItem === 3}
        >
          Edit
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={4} isActive={activeItem === 4}>
          Delete deployment config
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} variant="flyout" items={menuItems}></Menu>;
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
    const menuItems = [
      <MenuList>
        <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
          Action 1
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
          Action 2
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
          Action 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu searchInput onSearchInputChange={this.onChange} onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
      <MenuList>
        <MenuListItem isExternalLink to="#default-link1" itemId={0} isActive={activeItem === 0}>
          Link 1
        </MenuListItem>
        <MenuListItem isExternalLink to="#default-link2" itemId={1} isActive={activeItem === 1}>
          Link 2
        </MenuListItem>
        <MenuListItem to="#default-link2" itemId={2} isActive={activeItem === 2}>
          Link 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems} />;
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
    const menuItems = [
      <MenuList>
        <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
          Action 1
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
          Action 2
        </MenuListItem>
        <Divider component="li" />
        <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
          Action 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
      <MenuList>
        <MenuListItem to="#default-link1" itemId={0} isActive={activeItem === 0}>
          Link not in group
        </MenuListItem>
        <Divider component="li" />
        <MenuGroup label="Group 1">
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
            Link 2
          </MenuListItem>
          <Divider component="li" />
        </MenuGroup>
        <MenuGroup label="Group 2">
          <MenuListItem component="button" to="#default-link2" itemId={3} isActive={activeItem === 3}>
            Link 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={4} isActive={activeItem === 4}>
            Link 2
          </MenuListItem>
        </MenuGroup>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems} />;
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
    const menuItems = [
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
          itemId={2}
          isActive={activeItem === 2}
        >
          Action 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems} />;
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
    const menuItems = [
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
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
            Item 3
          </MenuListItem>
          <MenuListItem
            component="button"
            description="This is a description"
            to="#default-link2"
            itemId={2}
            isActive={activeItem === 2}
          >
            Item 4
          </MenuListItem>
        </MenuList>
      </MenuGroup>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems} />;
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
      activeItem: 0,
      favorites: []
    };



    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
    this.onFavorite = (itemId, isFavorite) => {
      if (isFavorite) {
        this.setState({
          favorites: this.state.favorites.filter(id => id !== itemId)
        });
      } else
        this.setState({
          favorites: [...this.state.favorites, itemId]
        });
    };

  }

  render() {


console.log(this.state.favorites)
    const { activeItem, favorites } = this.state;
    const menuItems = [
      <MenuGroup label="All actions">
        <MenuList>
            <MenuListItem
              description="This is a description"
              to="#default-link1"
              itemId={0}
              isActive={activeItem === 0}
              id="item-1"
            >
              Item 1
            </MenuListItem>
            <MenuListItem
              description="This is a description"
              to="#default-link2"
              itemId={1}
              isExternalLink
              isActive={activeItem === 1}
              id="item-2"
            >
              Item 2
            </MenuListItem>
            <MenuListItem to="#default-link3" id="item-3"
            itemId={2}
            isExternalLink
            isActive={activeItem === 2}>
              Item 3
            </MenuListItem>
        </MenuList>
      </MenuGroup>
    ];

    return <Menu onSelect={this.onSelect} favorites={favorites} onFavorite={this.onFavorite} isGrouped items={menuItems}></Menu>;
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
      activeItem: 0,
      selectedItem: 0,
    };

    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId,
        selectedItem: result.itemId
      });
    };

  }


  render() {

    const { activeItem, selectedItem } = this.state;
    const menuItems = [
      <MenuList>
        <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0} isSelected={selectedItem === 0}>
          Option 1
        </MenuListItem>
        <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1} isSelected={selectedItem === 1}>
          Option 2
        </MenuListItem>
        <MenuListItem
          component="button"
          icon={<TableIcon />}
          to="#default-link2"
          itemId={2}
          isActive={activeItem === 2}
          isSelected={selectedItem === 2}
        >
          Option 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
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
    const menuItems = [
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
          itemId={2}
          isActive={activeItem === 2}
        >
          Option 3
        </MenuListItem>
      </MenuList>
    ];
    return <Menu onSelect={this.onSelect} items={menuItems}></Menu>;
  }
}
```
