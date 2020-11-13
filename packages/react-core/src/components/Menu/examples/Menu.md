---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuList', 'MenuListItem', 'MenuAction']
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <MenuList>
          <MenuListItem itemId={0} isActive={activeItem === 0} onClick={(event) => console.log('clicked')}>
            Action
          </MenuListItem>
          <MenuListItem itemId={1} to="#default-link2" isActive={activeItem === 1} onClick={(event) => event.preventDefault()}>
            Link
          </MenuListItem>
          <MenuListItem isDisabled>
            Disabled Action
          </MenuListItem>
          <MenuListItem isDisabled to="#default-link4">
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem icon={<CodeBranchIcon />} itemId={0} isActive={activeItem === 0}>
            From Git
          </MenuListItem>
          <MenuListItem icon={<LayerGroupIcon />} itemId={1} isActive={activeItem === 1}>
            Container Image
          </MenuListItem>
          <MenuListItem icon={<CubeIcon />} itemId={2} isActive={activeItem === 2}>
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
      activeItemFlyout: 0
    };
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
    this.onSelectFlyout = (event, itemId) => {
      this.setState({
        activeItemFlyout: itemId
      });
    };
  }

  render() {
    const { activeItem, activeItemFlyout, handleMenuToggle } = this.state;
    const flyoutMenu = (
      <Menu onSelect={this.onSelectFlyout}>
        <MenuList>
          <MenuListItem itemId={10} isActive={activeItem === 10}>
            Application Grouping
          </MenuListItem>
          <MenuListItem itemId={11} isActive={activeItem === 11}>
            Count
          </MenuListItem>
          <MenuListItem itemId={12} isActive={activeItem === 12}>
            Labels
          </MenuListItem>
          <MenuListItem itemId={13} isActive={activeItem === 13}>
            Annotations
          </MenuListItem>
        </MenuList>
      </Menu>
    );

    return (
      <Menu onSelect={this.onSelect} isFlyoutMenu>
        <MenuList>
          <MenuListItem itemId={0} isActive={activeItem === 0}>
            Start rollout
          </MenuListItem>
          <MenuListItem itemId={1} isActive={activeItem === 1}>
            Pause rollouts
          </MenuListItem>
          <MenuListItem itemId={2} isActive={activeItem === 2}>
            Add storage
          </MenuListItem>
          <MenuListItem
            description="Description"
            itemId={3}
            isActive={activeItem === 3}
            isExpandable
            flyoutMenu={flyoutMenu}
          >
            Edit
          </MenuListItem>
          <MenuListItem itemId={4} isActive={activeItem === 4}>
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

    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };

    this.onChange = (event, value) => {
      this.setState({
        input: value
      });
    };
  }

  render() {
    const { activeItem, input } = this.state;
    const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];

    const menuListItems = menuListItemsText
      .filter(item => !input || item.toLowerCase().includes(input.toLowerCase()))
      .map((currentValue, index) => (
        <MenuListItem key={currentValue} itemId={index} isActive={activeItem === index}>
          {currentValue}
        </MenuListItem>
      ));
    if (input && menuListItems.length === 0) {
      menuListItems.push(
        <MenuListItem isDisabled key="no result">
          No results found
        </MenuListItem>
      );
    }

    return (
      <Menu hasSearchInput onSearchInputChange={this.onChange} onSelect={this.onSelect}>
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
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
          <MenuListItem to="#default-link3" itemId={2} isActive={activeItem === 2}>
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem itemId={0} isActive={activeItem === 0}>
            Action 1
          </MenuListItem>
          <MenuListItem itemId={1} isActive={activeItem === 1}>
            Action 2
          </MenuListItem>
          <Divider component="li" />
          <MenuListItem itemId={2} isActive={activeItem === 2}>
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuGroup>
          <MenuList>
            <MenuListItem to="#" itemId={0} isActive={activeItem === 0}>
              Link not in group
            </MenuListItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 1">
          <MenuList>
            <MenuListItem to="#" itemId={1} isActive={activeItem === 1}>
              Link 1
            </MenuListItem>
            <MenuListItem itemId={2} isActive={activeItem === 2}>
              Link 2
            </MenuListItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 2">
          <MenuList>
            <MenuListItem to="#" itemId={3} isActive={activeItem === 3}>
              Link 1
            </MenuListItem>
            <MenuListItem to="#" itemId={4} isActive={activeItem === 4}>
              Link 2
            </MenuListItem>
          </MenuList>
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
    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem icon={<CodeBranchIcon />} description="Description" itemId={0} isActive={activeItem === 0}>
            Action 1
          </MenuListItem>
          <MenuListItem
            isDisabled
            icon={<CodeBranchIcon />}
            description="Description"
            itemId={1}
            isActive={activeItem === 1}
          >
            Action 2 disabled
          </MenuListItem>
          <MenuListItem
            icon={<CodeBranchIcon />}
            description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
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
import { Menu, MenuItem, MenuGroup, MenuList, MenuListItem, MenuAction } from '@patternfly/react-core';
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
      isActionMenuOpen: false,
      selectedItems: [0, 2, 3]
    };

    this.onSelect = (event, itemId) => {
      if (this.state.selectedItems.indexOf(itemId) != -1) {
        this.setState({
          selectedItems: this.state.selectedItems.filter(id => id !== itemId)
        });
      } else {
        this.setState({
          selectedItems: [...this.state.selectedItems, itemId]
        });
      }
    };
  }

  render() {
    const { activeItem, selectedItems } = this.state;

    return (
      <Menu onSelect={this.onSelect}>
        <MenuGroup label="Actions">
          <MenuList>
            <MenuListItem
              isSelected={selectedItems.indexOf(0) != -1}
              action={
                <MenuAction
                  icon={<CodeBranchIcon />}
                  onActionClick={() => console.log('clicked on code icon')}
                  aria-label="Code"
                />
              }
              description="This is a description"
              itemId={0}
              isActive={activeItem === 0}
            >
              Item 1
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(1) != -1}
              action={
                <MenuAction
                  icon={<BellIcon />}
                  aria-label="Alert"
                />
              }
              description="This is a description"
              itemId={1}
              isActive={activeItem === 1}
            >
              Item 2
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(2) != -1}
              action={
                <MenuAction
                  icon={<ClipboardIcon />}
                  aria-label="Copy"
                />
              }
              itemId={2}
              isActive={activeItem === 2}
            >
              Item 3
            </MenuListItem>
            <MenuListItem
              isSelected={selectedItems.indexOf(3) != -1}
              action={
                <MenuAction
                  icon={<BarsIcon />}
                  aria-label="Expand"
                />
              }
              description="This is a description"
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

    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
    this.onFavorite = (event, itemId) => {
      const isFavorite = this.state.favorites.includes(itemId);
      if (isFavorite) {
        this.setState({
          favorites: this.state.favorites.filter(fav => fav !== itemId)
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
        isActive: activeItem === 0,
        itemId: 'item-1',
        ariaIsFavoriteLabel: 'starred',
        ariaIsNotFavoriteLabel: 'not starred'
      },
      {
        text: 'Item 2',
        description: 'Description 2',
        isActive: activeItem === 1,
        itemId: 'item-2',
        ariaIsFavoriteLabel: 'starred',
        ariaIsNotFavoriteLabel: 'not starred'
      },
      {
        text: 'Item 3',
        description: 'Description 3',
        isActive: activeItem === 2,
        itemId: 'item-3',
        ariaIsFavoriteLabel: 'starred',
        ariaIsNotFavoriteLabel: 'not starred'
      }
    ];

    return (
      <Menu onSelect={this.onSelect} onFavorite={this.onFavorite}>
        {favorites.length > 0 && (
          <React.Fragment>
            <MenuGroup label="Favorites">
              <MenuList>
                {items
                  // map the items into the favorites group that have been favorited
                  .filter(item => favorites.includes(item.itemId))
                  .map(item => {
                    const { text, itemId, ...rest } = item;
                    return (
                      <MenuListItem key={`fav-${itemId}`} itemId={itemId} isFavorite {...rest}>
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
              const { text, itemId, ...rest } = item;
              return (
                <MenuListItem
                  key={itemId}
                  itemId={itemId}
                  isFavorite={favorites.includes(itemId)}
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

    this.onSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId,
        selectedItem: itemId
      });
    };
  }

  render() {
    const { activeItem, selectedItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem itemId={0} isActive={activeItem === 0} isSelected={selectedItem === 0}>
            Option 1
          </MenuListItem>
          <MenuListItem itemId={1} isActive={activeItem === 1} isSelected={selectedItem === 1}>
            Option 2
          </MenuListItem>
          <MenuListItem icon={<TableIcon />} itemId={2} isActive={activeItem === 2} isSelected={selectedItem === 2}>
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
    this.onSelect = (event, itemId) => {
      if (this.state.selectedItems.indexOf(itemId) != -1) {
        this.setState({
          selectedItems: this.state.selectedItems.filter(id => id !== itemId)
        });
      } else {
        this.setState({
          selectedItems: [...this.state.selectedItems, itemId]
        });
      }
    };
  }

  render() {
    const { activeItem, selectedItems } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuListItem itemId={0} isActive={activeItem === 0} isSelected={selectedItems.indexOf(0) != -1}>
            Option 1
          </MenuListItem>
          <MenuListItem itemId={1} isActive={activeItem === 1} isSelected={selectedItems.indexOf(1) != -1}>
            Option 2
          </MenuListItem>
          <MenuListItem
            icon={<TableIcon />}
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
