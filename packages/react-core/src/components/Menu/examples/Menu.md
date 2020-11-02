---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuItem', 'MenuListItem', 'MenuList', 'MenuExpandable']
ouia: true
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

## Examples

### Basic

```js
import React from 'react';
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';

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
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

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
            to="#default-link2"
            itemId={2}
            isActive={activeItem === 2}
          >
            Docker File
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
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';

class MenuWithFlyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      isSubmenuOpen: false
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem, handleMenuToggle } = this.state;
    const flyoutMenu = (
      <Menu>
        <MenuList>
          <MenuListItem component="button" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Application Grouping
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Count
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
            Labels
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
            Annotations
          </MenuListItem>
        </MenuList>
      </Menu>
    );

    return (
      <Menu onSelect={this.onSelect} variant="flyout">
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
            isExpandable
            flyoutMenu={flyoutMenu}
          >
            Edit
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={4} isActive={activeItem === 4}>
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
import { Menu, MenuItem, MenuList, MenuListItem, SearchInput } from '@patternfly/react-core';

class MenuWithFiltering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      input: ''
    };

    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onChange = (value, event) => {
      this.setState({
        input: value
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];

    const menuListItems = menuListItemsText.map((currentValue, index) =>
      this.state.input.value == null ? (
        <MenuListItem component="button" to="#default-link1" itemId={index} isActive={activeItem === index}>
          {currentValue}
        </MenuListItem>
      ) : currentValue.toLowerCase().includes(this.state.input.value) ? (
        <MenuListItem component="button" to="#default-link1" itemId={index} isActive={activeItem === index}>
          {currentValue}
        </MenuListItem>
      ) : null
    );

    return (
      <Menu searchInput onSearchInputChange={this.onChange} onSelect={this.onSelect}>
        <MenuList>{menuListItems}</MenuList>
      </Menu>
    );
  }
}
```

### With links

```js
import React from 'react';
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';

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
          <MenuListItem to="#default-link2" itemId={2} isActive={activeItem === 2}>
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
import { Divider, Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';

class MenuWithSeparators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      console.log(`clicked on ${result.itemId}`);
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
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
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
import { Menu, MenuGroup, MenuItem, MenuList, MenuListItem, Divider } from '@patternfly/react-core';

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
        <MenuGroup>
          <MenuListItem to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link not in group
          </MenuListItem>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 1">
          <MenuListItem component="button" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={2} isActive={activeItem === 2}>
            Link 2
          </MenuListItem>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 2">
          <MenuListItem component="button" to="#default-link2" itemId={3} isActive={activeItem === 3}>
            Link 1
          </MenuListItem>
          <MenuListItem component="button" to="#default-link2" itemId={4} isActive={activeItem === 4}>
            Link 2
          </MenuListItem>
        </MenuGroup>
      </Menu>
    );
  }
}
```

### With description

```js
import React from 'react';
import { Dropdown, Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

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
            itemId={2}
            isActive={activeItem === 2}
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
import {
  Menu,
  MenuItem,
  MenuGroup,
  MenuList,
  MenuListItem,
  KebabToggle,
  Dropdown,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

class MenuWithActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      isKebabDropdownOpen: false,
      selectedItems: [0, 2, 3]
    };

    this.onSelect = item => {
      if (this.state.selectedItems.indexOf(item.itemId) != -1) {
        this.setState({
          selectedItems: this.state.selectedItems.filter(id => id !== item.itemId)
        });
      } else {
        this.setState({
          selectedItems: [...this.state.selectedItems, item.itemId]
        });
      }
    };

    this.onToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };
  }

  render() {
    const { activeItem, isKebabDropdownOpen, selectedItems } = this.state;

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    const kebabToggleAction = (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-6" />}
        isOpen={isKebabDropdownOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );

    return (
      <Menu onSelect={this.onSelect}>
        <MenuGroup label="Actions">
          <MenuList>
            <MenuListItem
              isSelected={selectedItems.indexOf(0) != -1}
              menuItemAction={kebabToggleAction}
              component="button"
              description="This is a description"
              to="#default-link1"
              itemId={0}
              isActive={activeItem === 0}
            >
              Item 1
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(1) != -1}
              menuItemAction={<BellIcon />}
              component="button"
              description="This is a description"
              to="#default-link2"
              itemId={1}
              isActive={activeItem === 1}
            >
              Item 2
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(2) != -1}
              menuItemAction={<ClipboardIcon />}
              component="button"
              to="#default-link2"
              itemId={2}
              isActive={activeItem === 2}
            >
              Item 3
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(3) != -1}
              menuItemAction={<BarsIcon />}
              component="button"
              description="This is a description"
              to="#default-link2"
              itemId={3}
              isActive={activeItem === 3}
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
import { Menu, MenuItem, MenuGroup, MenuList, MenuListItem, Divider } from '@patternfly/react-core';

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
    const { activeItem, favorites } = this.state;

    const items = [
      {
        text: 'Item 1',
        description: 'Description 1',
        to: '#default-link1',
        itemId: 0,
        isActive: activeItem === 0,
        id: 'item-1'
      },
      {
        text: 'Item 2',
        description: 'Description 2',
        to: '#default-link2',
        itemId: 1,
        isActive: activeItem === 1,
        id: 'item-2'
      },
      {
        text: 'Item 3',
        description: 'Description 3',
        to: '#default-link3',
        itemId: 2,
        isActive: activeItem === 2,
        id: 'item-3'
      }
    ];

    return (
      <Menu onSelect={this.onSelect}>
        {favorites.length > 0 && (
          <React.Fragment>
            <MenuGroup label="Favorites">
              <MenuList>
                {items
                  // map the items into the favorites group that have been favorited
                  .filter(item => favorites.includes(item.id))
                  .map(item => {
                    const { text, id, ...rest } = item;
                    return (
                      <MenuListItem key={id} id={id} onFavorite={this.onFavorite} isFavorite {...rest}>
                        {text}
                      </MenuListItem>
                    );
                  })}
              </MenuList>
            </MenuGroup>
            <Divider />
          </React.Fragment>
        )}
        <MenuGroup label="All actions">
          <MenuList>
            {items.map(item => {
              const { text, id, ...rest } = item;
              return (
                <MenuListItem
                  key={id}
                  id={id}
                  onFavorite={this.onFavorite}
                  isFavorite={favorites.includes(id)}
                  {...rest}
                >
                  {text}
                </MenuListItem>
              );
            })}
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
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class MenuOptionSingleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectedItem: 0
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
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            component="button"
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
            isSelected={selectedItem === 0}
          >
            Option 1
          </MenuListItem>
          <MenuListItem
            component="button"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
            isSelected={selectedItem === 1}
          >
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
      </Menu>
    );
  }
}
```

### Option multi select

```js
import React from 'react';
import { Menu, MenuItem, MenuList, MenuListItem } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class MenuOptionMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectedItems: []
    };
    this.onSelect = item => {
      if (this.state.selectedItems.indexOf(item.itemId) != -1) {
        this.setState({
          selectedItems: this.state.selectedItems.filter(id => id !== item.itemId)
        });
      } else {
        this.setState({
          selectedItems: [...this.state.selectedItems, item.itemId]
        });
      }
    };
  }

  render() {
    const { activeItem, selectedItems } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem
            component="button"
            to="#default-link1"
            itemId={0}
            isActive={activeItem === 0}
            isSelected={selectedItems.indexOf(0) != -1}
          >
            Option 1
          </MenuListItem>
          <MenuListItem
            component="button"
            to="#default-link2"
            itemId={1}
            isActive={activeItem === 1}
            isSelected={selectedItems.indexOf(1) != -1}
          >
            Option 2
          </MenuListItem>
          <MenuListItem
            component="button"
            icon={<TableIcon />}
            to="#default-link2"
            itemId={2}
            isActive={activeItem === 2}
            isSelected={selectedItems.indexOf(2) != -1}
          >
            Option 3
          </MenuListItem>
        </MenuList>
      </Menu>
    );
  }
}
```
