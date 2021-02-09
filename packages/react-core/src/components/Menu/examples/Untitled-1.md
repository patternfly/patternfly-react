---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuList', 'MenuItem', 'MenuItemAction', 'MenuContent', 'MenuInput']
ouia: true
beta: true
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';

## Examples

### Basic

```js
import React from 'react';
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';

class MenuBasicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = (event, itemId) => {
      console.log(`clicked ${itemId}`);
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu activeItemId={activeItem} onSelect={this.onSelect}>
        <MenuList>
          <MenuItem itemId={0}>Action</MenuItem>
          <MenuItem
            itemId={1}
            to="#default-link2"
            // just for demo so that navigation is not triggered
            onClick={event => event.preventDefault()}
          >
            Link
          </MenuItem>
          <MenuItem isDisabled>Disabled Action</MenuItem>
          <MenuItem isDisabled to="#default-link4">
            Disabled Link
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With icons

```js
import React from 'react';
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';
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
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId={0}>
            From Git
          </MenuItem>
          <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId={1}>
            Container Image
          </MenuItem>
          <MenuItem icon={<CubeIcon aria-hidden />} itemId={2}>
            Docker File
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With flyout

```js
import React from 'react';
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';

class MenuWithFlyout extends React.Component {
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
    const flyoutMenu = (
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem itemId={10}>Application Grouping</MenuItem>
          <MenuItem itemId={11}>Count</MenuItem>
          <MenuItem itemId={12}>Labels</MenuItem>
          <MenuItem itemId={13}>Annotations</MenuItem>
        </MenuList>
      </Menu>
    );

    return (
      <Menu containsFlyout onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem itemId={0}>Start rollout</MenuItem>
          <MenuItem itemId={1}>Pause rollouts</MenuItem>
          <MenuItem itemId={2}>Add storage</MenuItem>
          <MenuItem description="Description" itemId={3} flyoutMenu={flyoutMenu}>
            Edit
          </MenuItem>
          <MenuItem itemId={4}>Delete deployment config</MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With drilldown

```js
import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem, Divider } from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

class MenuWithDrilldown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      menuStack: [],
      menuDrilledIn: [],
      drilldownPath: [],
      activeMenuRef: null
    };
    this.onSelect = (event, itemId) => {
      if (itemId.startsWith('group:')) {
        console.log(`selected sub-menu: ${itemId.split('group:')[1]}`);
      } else {
        console.log(`selected: ${itemId}`);
        this.setState({
          activeItem: itemId
        });
      }
    };
    this.drillIn = (menuId, pathId) => {
      this.setState({
        menuDrilledIn: [...this.state.menuDrilledIn, menuId],
        drilldownPath: [...this.state.drilldownPath, pathId]
      });
    };
    this.drillOut = (menuId, pathId) => {
      const menuDrilledInSansLast = this.state.menuDrilledIn.slice(0, this.state.menuDrilledIn.length - 1);
      const pathSansLast = this.state.drilldownPath.slice(0, this.state.drilldownPath.length - 1);
      this.setState({
        menuDrilledIn: menuDrilledInSansLast,
        drilldownPath: pathSansLast
      });
    };
    this.onRefChange = node => {
      debugger;
      const asd = this.state.menuDrilledIn;
      console.log("ref changed to:", node);
      // this.setState({ activeMenuRef: node });
    };
  }

  render() {
    const { activeItem, menuDrilledIn, drilldownPath } = this.state;

    // We wrap the menu items that contain drilldown menus to keep things DRY since they're used to drill into, as well as drill out of the next menu

    // rootMenu -> drilldownMenu1
    const MenuItemStartRollout = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:start_rollout" direction={direction} onClick={onClick} {...rest}>
        Start rollout
      </MenuItem>
    );
    // rootMenu -> drilldownMenu1
    const MenuItemPauseRollout = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:pause_rollout" direction={direction} onClick={onClick} {...rest}>
        Pause rollouts
      </MenuItem>
    );
    // rootMenu -> drilldownMenuStorage
    const MenuItemStorage = ({ direction, onClick, ...rest }) => (
      <MenuItem
        itemId="group:storage"
        icon={<StorageDomainIcon aria-hidden />}
        direction={direction}
        onClick={onClick}
        {...rest}
      >
        Add storage
      </MenuItem>
    );
    // drilldownMenu1 -> drilldownMenuGrouping
    const MenuItemAppGrouping = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:app_grouping" description="Groups A-C" direction={direction} onClick={onClick} {...rest}>
        Application Grouping
      </MenuItem>
    );
    // drilldownMenu1 -> drilldownMenuLabels
    const MenuItemLabels = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:labels" direction={direction} onClick={onClick} {...rest}>
        Labels
      </MenuItem>
    );

    // Menus
    const rootMenu = () => (
      <Menu
        id="rootMenu"
        containsDrilldown
        drilledIn={menuDrilledIn.includes('rootMenu')}
        onSelect={this.onSelect}
        style={{ '--pf-c-menu--m-drilldown--Height': '150px' }}
        ref={this.onRefChange}
      >
        <MenuContent>
          <MenuList>
            <MenuItemStartRollout
              direction="down"
              onPath={drilldownPath.includes('MenuItemStartRollout')}
              drilldownMenu={drilldownPath.includes('MenuItemStartRollout') && drilldownMenu1(<MenuItemStartRollout direction="up" onClick={() => this.drillOut()} />)}
              onClick={() => this.drillIn('rootMenu', 'MenuItemStartRollout')}
            />
            <MenuItemPauseRollout
              direction="down"
              onPath={drilldownPath.includes('MenuItemPauseRollout')}
              drilldownMenu={drilldownPath.includes('MenuItemPauseRollout') && drilldownMenu1(<MenuItemPauseRollout direction="up" onClick={() => this.drillOut()} />)}
              onClick={() => this.drillIn('rootMenu', 'MenuItemPauseRollout')}
            />
            <MenuItemStorage
              direction="down"
              onPath={drilldownPath.includes('MenuItemStorage')}
              drilldownMenu={drilldownMenuStorage(<MenuItemStorage direction="up" onClick={() => this.drillOut()} />)}
              onClick={() => this.drillIn('rootMenu', 'MenuItemStorage')}
            />
            <MenuItem itemId="edit">Edit</MenuItem>
            <MenuItem itemId="delete_deployment">Delete deployment config</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );
    const drilldownMenu1 = previousItem => (
      <Menu id="drilldownMenu1" drilledIn={menuDrilledIn.includes('drilldownMenu1')} onSelect={this.onSelect} ref={this.onRefChange}>
        <MenuContent>
          <MenuList>
            {previousItem}
            <Divider component="li" />
            <MenuItemAppGrouping
              direction="down"
              onPath={drilldownPath.includes('MenuItemAppGrouping')}
              drilldownMenu={drilldownMenuGrouping(
                <MenuItemAppGrouping direction="up" onClick={() => this.drillOut()} />
              )}
              onClick={() => this.drillIn('drilldownMenu1', 'MenuItemAppGrouping')}
            />
            <MenuItem itemId="count">Count</MenuItem>
            <MenuItemLabels
              direction="down"
              onPath={drilldownPath.includes('MenuItemLabels')}
              drilldownMenu={drilldownMenuLabels(<MenuItemLabels direction="up" onClick={() => this.drillOut()} />)}
              onClick={() => this.drillIn('drilldownMenu1', 'MenuItemLabels')}
            />
            <MenuItem itemId="annotations">Annotations</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );
    const drilldownMenuStorage = previousItem => (
      <Menu id="drilldownMenuStorage" onSelect={this.onSelect}>
        <MenuContent>
          <MenuList>
            {previousItem}
            <Divider component="li" />
            <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId="git">
              From Git
            </MenuItem>
            <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId="container">
              Container Image
            </MenuItem>
            <MenuItem icon={<CubeIcon aria-hidden />} itemId="docker">
              Docker File
            </MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );
    const drilldownMenuGrouping = previousItem => (
      <Menu id="drilldownMenuGrouping" onSelect={this.onSelect}>
        <MenuContent>
          <MenuList>
            {previousItem}
            <Divider component="li" />
            <MenuItem itemId="group_a">Group A</MenuItem>
            <MenuItem itemId="group_b">Group B</MenuItem>
            <MenuItem itemId="group_c">Group C</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );
    const drilldownMenuLabels = previousItem => (
      <Menu id="drilldownMenuLabels" onSelect={this.onSelect}>
        <MenuContent>
          <MenuList>
            {previousItem}
            <Divider component="li" />
            <MenuItem itemId="label_1">Label 1</MenuItem>
            <MenuItem itemId="label_2">Label 2</MenuItem>
            <MenuItem itemId="label_3">Label 3</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );

    return rootMenu();
  }
}
```

### Filtering with text input

```js
import React from 'react';
import { Menu, MenuList, MenuItem, MenuContent, MenuInput, TextInput, Divider } from '@patternfly/react-core';

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

    this.handleTextInputChange = (value, field) => {
      this.setState({ [field]: value });
    };
  }

  render() {
    const { activeItem, input } = this.state;
    const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];

    const menuListItems = menuListItemsText
      .filter(item => !input || item.toLowerCase().includes(input.toString().toLowerCase()))
      .map((currentValue, index) => (
        <MenuItem key={currentValue} itemId={index}>
          {currentValue}
        </MenuItem>
      ));
    if (input && menuListItems.length === 0) {
      menuListItems.push(
        <MenuItem isDisabled key="no result">
          No results found
        </MenuItem>
      );
    }

    return (
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuInput>
          <TextInput
            value={input}
            aria-label="filterable-example-with-text-input"
            iconVariant="search"
            type="search"
            onChange={value => this.handleTextInputChange(value, 'input')}
          />
        </MenuInput>
        <Divider />
        <MenuContent>
          <MenuList>{menuListItems}</MenuList>
        </MenuContent>
      </Menu>
    );
  }
}
```

### With links

```js
import React from 'react';
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';

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
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem isExternalLink to="#default-link1" itemId={0}>
            Link 1
          </MenuItem>
          <MenuItem isExternalLink to="#default-link2" itemId={1}>
            Link 2
          </MenuItem>
          <MenuItem to="#default-link3" itemId={2}>
            Link 3
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With separator(s)

```js
import React from 'react';
import { Divider, Menu, MenuList, MenuItem } from '@patternfly/react-core';

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
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem itemId={0}>Action 1</MenuItem>
          <MenuItem itemId={1}>Action 2</MenuItem>
          <Divider component="li" />
          <MenuItem itemId={2}>Action 3</MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With titled groups

```js
import React from 'react';
import { Menu, MenuGroup, MenuList, MenuItem, Divider } from '@patternfly/react-core';

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
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuGroup>
          <MenuList>
            <MenuItem to="#" itemId={0}>
              Link not in group
            </MenuItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 1">
          <MenuList>
            <MenuItem to="#" itemId={1}>
              Link 1
            </MenuItem>
            <MenuItem itemId={2}>Link 2</MenuItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 2">
          <MenuList>
            <MenuItem to="#" itemId={3}>
              Link 1
            </MenuItem>
            <MenuItem to="#" itemId={4}>
              Link 2
            </MenuItem>
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
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

class MenuWithDescription extends React.Component {
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
      <Menu onSelect={this.onSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem icon={<CodeBranchIcon aria-hidden />} description="Description" itemId={0}>
            Action 1
          </MenuItem>
          <MenuItem isDisabled icon={<CodeBranchIcon aria-hidden />} description="Description" itemId={1}>
            Action 2 disabled
          </MenuItem>
          <MenuItem
            icon={<CodeBranchIcon aria-hidden />}
            description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
            itemId={2}
          >
            Action 3
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### With actions

```js
import React from 'react';
import { Menu, MenuGroup, MenuList, MenuItem, MenuItemAction } from '@patternfly/react-core';
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
      if (this.state.selectedItems.indexOf(itemId) !== -1) {
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
      <Menu
        onSelect={this.onSelect}
        onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
        activeItemId={activeItem}
      >
        <MenuGroup label="Actions">
          <MenuList>
            <MenuItem
              isSelected={selectedItems.indexOf(0) !== -1}
              actions={
                <MenuItemAction
                  icon={<CodeBranchIcon aria-hidden />}
                  actionId="code"
                  onClick={() => console.log('clicked on code icon')}
                  aria-label="Code"
                />
              }
              description="This is a description"
              itemId={0}
            >
              Item 1
            </MenuItem>
            <MenuItem
              isDisabled
              isSelected={selectedItems.indexOf(1) !== -1}
              actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
              description="This is a description"
              itemId={1}
            >
              Item 2
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(2) !== -1}
              actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
              itemId={2}
            >
              Item 3
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(3) !== -1}
              actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId="expand" aria-label="Expand" />}
              description="This is a description"
              itemId={3}
            >
              Item 4
            </MenuItem>
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
import { Menu, MenuItem, MenuItemAction, MenuGroup, MenuList, Divider } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

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
    this.onFavorite = (event, itemId, actionId) => {
      console.log(`clicked ${itemId} - ${actionId}`);
      if (actionId === 'fav') {
        const isFavorite = this.state.favorites.includes(itemId);
        if (isFavorite) {
          this.setState({
            favorites: this.state.favorites.filter(fav => fav !== itemId)
          });
        } else {
          this.setState({
            favorites: [...this.state.favorites, itemId]
          });
        }
      }
    };
  }

  render() {
    const { activeItem, favorites } = this.state;

    const items = [
      {
        text: 'Item 1',
        description: 'Description 1',
        itemId: 'item-1',
        action: <BarsIcon aria-hidden />,
        actionId: 'bars'
      },
      {
        text: 'Item 2',
        description: 'Description 2',
        itemId: 'item-2',
        action: <ClipboardIcon aria-hidden />,
        actionId: 'clipboard'
      },
      {
        text: 'Item 3',
        description: 'Description 3',
        itemId: 'item-3',
        action: <BellIcon aria-hidden />,
        actionId: 'bell'
      }
    ];

    return (
      <Menu onSelect={this.onSelect} onActionClick={this.onFavorite} activeItemId={activeItem}>
        {favorites.length > 0 && (
          <React.Fragment>
            <MenuGroup label="Favorites">
              <MenuList>
                {items
                  // map the items into the favorites group that have been favorited
                  .filter(item => favorites.includes(item.itemId))
                  .map(item => {
                    const { text, description, itemId, action, actionId } = item;
                    return (
                      <MenuItem
                        key={`fav-${itemId}`}
                        isFavorited
                        description={description}
                        itemId={itemId}
                        actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}
                      >
                        {text}
                      </MenuItem>
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
              const { text, description, itemId, action, actionId } = item;
              const isFavorited = favorites.includes(item.itemId);
              return (
                <MenuItem
                  key={itemId}
                  isFavorited={isFavorited}
                  description={description}
                  itemId={itemId}
                  actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}
                >
                  {text}
                </MenuItem>
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
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';
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
      <Menu onSelect={this.onSelect} activeItemId={activeItem} selected={selectedItem}>
        <MenuList>
          <MenuItem itemId={0}>Option 1</MenuItem>
          <MenuItem itemId={1}>Option 2</MenuItem>
          <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>
            Option 3
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```

### Option multi select

```js
import React from 'react';
import { Menu, MenuList, MenuItem } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class MenuOptionMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectedItems: []
    };
    this.onSelect = (event, itemId) => {
      if (this.state.selectedItems.indexOf(itemId) !== -1) {
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
      <Menu onSelect={this.onSelect} activeItemId={activeItem} selected={selectedItems}>
        <MenuList>
          <MenuItem itemId={0}>Option 1</MenuItem>
          <MenuItem itemId={1}>Option 2</MenuItem>
          <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>
            Option 3
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```
