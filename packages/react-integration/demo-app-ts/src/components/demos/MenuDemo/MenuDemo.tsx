import React, { Component } from 'react';

import {
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
  Stack,
  StackItem,
  Title,
  Divider,
  MenuItemAction,
  MenuContent,
  MenuInput,
  MenuFooter,
  Button,
  Spinner,
  SearchInput
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';

export class MenuDemo extends Component {
  state = {
    activeItem: 0,
    selectedItem: 0,
    defaultActiveItem: 0,
    input: '',
    selectedItems: [0, 2, 3],
    favorites: [] as string[],
    numOptions: 3,
    isLoading: false
  };

  menuOptions = [
    <MenuItem key={0} itemId={0}>
      Action
    </MenuItem>,
    <MenuItem
      key={2}
      itemId={1}
      to="#default-link2"
      // just for demo so that navigation is not triggered
      onClick={event => event.preventDefault()}
    >
      Link
    </MenuItem>,
    <MenuItem key={3} isDisabled>
      Disabled Action
    </MenuItem>,
    <MenuItem key={4} isDisabled to="#default-link4">
      Disabled Link
    </MenuItem>,
    <MenuItem key={5} itemId={2}>
      Action 2
    </MenuItem>,
    <MenuItem key={6} itemId={3}>
      Action 3
    </MenuItem>,
    <MenuItem key={7} itemId={4}>
      Action 4
    </MenuItem>,
    <MenuItem key={8} itemId={5}>
      Action 5
    </MenuItem>,
    <MenuItem key={9} itemId={6}>
      Final option
    </MenuItem>
  ];

  simulateNetworkCall = (callback: any) => {
    setTimeout(callback, 2);
  };

  onViewMoreClick = () => {
    // Set select loadingVariant to spinner then simulate network call before loading more options
    this.setState({ isLoading: true });
    this.simulateNetworkCall(() => {
      const newLength =
        this.state.numOptions + 3 <= this.menuOptions.length ? this.state.numOptions + 3 : this.menuOptions.length;
      this.setState({ numOptions: newLength, isLoading: false });
    });
  };

  onSimpleSelect = (event: React.MouseEvent, itemId: string) => {
    this.setState({ activeItem: itemId });
  };

  onActionSelect = (event: any, itemId: number) => {
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

  onFavorite = (event: any, itemId: string, actionId: string) => {
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

  onSingleOptionSelect = (event: any, itemId: number) => {
    this.setState({
      activeItem: itemId,
      selectedItem: itemId
    });
  };

  onMultiOptionSelect = (event: any, itemId: number) => {
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = (event: React.FormEvent, value: string) => {
    this.setState({
      input: value
    });
  };

  handleTextInputChange = (value: string, field: any) => {
    this.setState({ [field]: value });
  };

  renderBasicMenu() {
    const { activeItem } = this.state;
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Basic Menu
        </Title>
        <Menu activeItemId={activeItem} onSelect={this.onSimpleSelect} id="menu-basic">
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem itemId={1} to="#default-link2" id="default-link2">
              Link
            </MenuItem>
            <MenuItem isDisabled>Disabled Action</MenuItem>
            <MenuItem isDisabled to="#default-link4">
              Disabled Link
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderIconsMenu() {
    const { activeItem } = this.state;
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Menu with Icons
        </Title>
        <Menu onSelect={this.onSimpleSelect} activeItemId={activeItem} id="menu-with-icons">
          <MenuList>
            <MenuItem id="icons-menu-item-1" icon={<CodeBranchIcon id="code-branch-icon" aria-hidden />} itemId={0}>
              From Git
            </MenuItem>
            <MenuItem id="icons-menu-item-2" icon={<LayerGroupIcon id="layer-group-icon" aria-hidden />} itemId={1}>
              Container Image
            </MenuItem>
            <MenuItem id="icons-menu-item-3" icon={<CubeIcon id="cube-icon" aria-hidden />} itemId={2}>
              Docker File
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderFlyoutMenu() {
    const { activeItem } = this.state;

    const flyoutMenu = (
      <Menu onSelect={this.onSimpleSelect} activeItemId={activeItem}>
        <MenuList>
          <MenuItem itemId={10}>Application Grouping</MenuItem>
          <MenuItem itemId={11}>Count</MenuItem>
          <MenuItem itemId={12}>Labels</MenuItem>
          <MenuItem itemId={13}>Annotations</MenuItem>
        </MenuList>
      </Menu>
    );

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Flyout
        </Title>
        <Menu style={{ width: '85%' }} containsFlyout onSelect={this.onSimpleSelect} activeItemId={activeItem}>
          <MenuList>
            <MenuItem itemId={0}>Start rollout</MenuItem>
            <MenuItem itemId={1}>Pause rollouts</MenuItem>
            <MenuItem itemId={2}>Add storage</MenuItem>
            <MenuItem description="Description" itemId={3} id="edit" flyoutMenu={flyoutMenu}>
              Edit
            </MenuItem>
            <MenuItem itemId={4}>Delete deployment config</MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderFilterableMenu() {
    const { activeItem, input } = this.state;
    const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];

    const menuListItems = menuListItemsText
      .filter(item => !input || item.toLowerCase().includes(input.toLowerCase()))
      .map((currentValue, index) => (
        <MenuItem id="filtered-items" key={currentValue} itemId={index}>
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
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Filterable Menu
        </Title>
        <Menu onSelect={this.onSimpleSelect} activeItemId={activeItem} id="filterable-menu">
          <MenuInput>
            <SearchInput
              value={input}
              aria-label="filterable-example-with-text-input"
              type="search"
              onChange={(_event, value) => this.handleTextInputChange(value, 'input')}
            />
          </MenuInput>
          <Divider />
          <MenuContent>
            <MenuList>{menuListItems}</MenuList>
          </MenuContent>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithLinks() {
    const { activeItem } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Links
        </Title>
        <Menu id="menu-with-links" onSelect={this.onSimpleSelect} activeItemId={activeItem}>
          <MenuList>
            <MenuItem id="links-menu-link-1" isExternalLink to="#default-link1" itemId={0}>
              Link 1
            </MenuItem>
            <MenuItem id="links-menu-link-2" isExternalLink to="#default-link2" itemId={1}>
              Link 2
            </MenuItem>
            <MenuItem id="links-menu-link-3" to="#default-link3" itemId={2}>
              Link 3
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithSeparators() {
    const { activeItem } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Separator
        </Title>
        <Menu id="menu-with-separators" onSelect={this.onSimpleSelect} activeItemId={activeItem}>
          <MenuList>
            <MenuItem itemId={0}>Action 1</MenuItem>
            <MenuItem itemId={1}>Action 2</MenuItem>
            <Divider id="separator" component="li" />
            <MenuItem itemId={2}>Action 3</MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithTitledGroups() {
    const { activeItem } = this.state;

    const GroupMenuExampleCmp: React.FunctionComponent<{ className: string }> = ({ className }) => (
      <div>
        <h1 className={className}>Group 4</h1>
      </div>
    );

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Titled Groups
        </Title>
        <Menu id="menu-with-titled-groups" onSelect={this.onSimpleSelect} activeItemId={activeItem}>
          <MenuGroup>
            <MenuList>
              <MenuItem to="#" itemId={0}>
                Link not in group
              </MenuItem>
            </MenuList>
          </MenuGroup>
          <Divider />
          <MenuGroup id="group-1" label="Group 1">
            <MenuList>
              <MenuItem to="#" itemId={1}>
                Link 1
              </MenuItem>
              <MenuItem itemId={2}>Link 2</MenuItem>
            </MenuList>
          </MenuGroup>
          <Divider />
          <MenuGroup id="group-2" label="Group 2">
            <MenuList>
              <MenuItem to="#" itemId={3}>
                Link 1
              </MenuItem>
              <MenuItem to="#" itemId={4}>
                Link 2
              </MenuItem>
            </MenuList>
          </MenuGroup>
          <MenuGroup
            id="group-3"
            label={
              <div>
                <h1 className="pf-c-menu__group-title">Group 3</h1>
              </div>
            }
          >
            <MenuItem to="#" itemId={1}>
              Link 1
            </MenuItem>
          </MenuGroup>
          <MenuGroup id="group-4" label={<GroupMenuExampleCmp className="my-awesome-style" />}>
            <MenuItem to="#" itemId={1}>
              Link 1
            </MenuItem>
          </MenuGroup>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithDescription() {
    const { activeItem } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Description
        </Title>
        <Menu id="menu-with-description" onSelect={this.onSimpleSelect} activeItemId={activeItem}>
          <MenuList>
            <MenuItem
              id="description-item-1"
              icon={<CodeBranchIcon aria-hidden />}
              description="Description"
              itemId={0}
            >
              Action 1
            </MenuItem>
            <MenuItem
              id="description-item-2"
              isDisabled
              icon={<CodeBranchIcon aria-hidden />}
              description="Description"
              itemId={1}
            >
              Action 2 disabled
            </MenuItem>
            <MenuItem
              id="description-item-3"
              icon={<CodeBranchIcon aria-hidden />}
              description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
              itemId={2}
            >
              Action 3
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithActions() {
    const { activeItem, selectedItems } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Actions
        </Title>
        <Menu
          onSelect={this.onActionSelect}
          // eslint-disable-next-line no-console
          onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
          activeItemId={activeItem}
          id="menu-with-actions"
        >
          <MenuGroup label="Actions">
            <MenuList id="actions-list">
              <MenuItem
                isSelected={selectedItems.indexOf(0) !== -1}
                actions={
                  <MenuItemAction
                    icon={<CodeBranchIcon aria-hidden />}
                    actionId="code"
                    // eslint-disable-next-line no-console
                    onClick={() => console.log('clicked on code icon')}
                    aria-label="Code"
                    id="action-1"
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
      </StackItem>
    );
  }

  renderMenuWithFavorites() {
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
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Favorites
        </Title>
        <Menu
          id="favorites-menu"
          onSelect={this.onSimpleSelect}
          onActionClick={this.onFavorite}
          activeItemId={activeItem}
        >
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
      </StackItem>
    );
  }

  renderMenuWithSingleSelect() {
    const { activeItem, selectedItem } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Single Select
        </Title>
        <Menu
          onSelect={this.onSingleOptionSelect}
          activeItemId={activeItem}
          selected={selectedItem}
          id="single-select-menu"
        >
          <MenuList>
            <MenuItem id="single-select-item-1" itemId={0}>
              Option 1
            </MenuItem>
            <MenuItem id="single-select-item-2" itemId={1}>
              Option 2
            </MenuItem>
            <MenuItem id="single-select-item-3" icon={<TableIcon aria-hidden />} itemId={2}>
              Option 3
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderMenuWithMultiSelect() {
    const { activeItem, selectedItems } = this.state;

    return (
      <StackItem>
        <Title headingLevel="h2" size="2xl">
          Menu with Multi Select
        </Title>
        <Menu
          onSelect={this.onMultiOptionSelect}
          activeItemId={activeItem}
          selected={selectedItems}
          id="multi-select-menu"
        >
          <MenuList>
            <MenuItem id="multi-select-item-1" itemId={0}>
              Option 1
            </MenuItem>
            <MenuItem id="multi-select-item-2" itemId={1}>
              Option 2
            </MenuItem>
            <MenuItem id="multi-select-item-3" icon={<TableIcon aria-hidden />} itemId={2}>
              Option 3
            </MenuItem>
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  renderFooterMenu() {
    const { activeItem } = this.state;
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Footer Menu
        </Title>
        <Menu activeItemId={activeItem} onSelect={this.onSimpleSelect} id="menu-footer">
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem itemId={1} to="#default-link2" id="default-link2">
              Link
            </MenuItem>
            <MenuItem isDisabled>Disabled Action</MenuItem>
            <MenuItem isDisabled to="#default-link4">
              Disabled Link
            </MenuItem>
          </MenuList>
          <MenuFooter>
            <Button variant="link" isInline>
              Action
            </Button>
          </MenuFooter>
        </Menu>
      </StackItem>
    );
  }

  renderViewMoreMenu() {
    const { activeItem, numOptions, isLoading } = this.state;
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          View More Menu
        </Title>
        <Menu activeItemId={activeItem} onSelect={this.onSimpleSelect} id="menu-view-more">
          <MenuList>
            {this.menuOptions.slice(0, numOptions)}
            {numOptions !== this.menuOptions.length && (
              <MenuItem
                {...(!isLoading && { isLoadButton: true })}
                {...(isLoading && { isLoading: true })}
                onClick={this.onViewMoreClick}
                itemId="loader"
              >
                {isLoading ? <Spinner size="lg" /> : 'View more'}
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack hasGutter>
        {this.renderBasicMenu()}
        {this.renderIconsMenu()}
        {this.renderFlyoutMenu()}
        {this.renderFilterableMenu()}
        {this.renderMenuWithLinks()}
        {this.renderMenuWithSeparators()}
        {this.renderMenuWithTitledGroups()}
        {this.renderMenuWithDescription()}
        {this.renderMenuWithActions()}
        {this.renderMenuWithFavorites()}
        {this.renderMenuWithSingleSelect()}
        {this.renderMenuWithMultiSelect()}
        {this.renderFooterMenu()}
        {this.renderViewMoreMenu()}
      </Stack>
    );
  }
}
