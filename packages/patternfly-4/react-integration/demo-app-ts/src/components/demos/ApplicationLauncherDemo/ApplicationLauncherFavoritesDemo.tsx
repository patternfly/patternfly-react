import React from 'react';
import {
  ApplicationLauncher,
  ApplicationLauncherItem,
  ApplicationLauncherGroup,
  ApplicationLauncherSeparator
} from '@patternfly/react-core';

export class ApplicationLauncherFavoritesDemo extends React.Component {
  state = {
    isOpen: false,
    favorites: [],
    filteredItems: null
  };

  appLauncherItems = [
    <ApplicationLauncherGroup key="group 1c">
      <ApplicationLauncherItem key="group 1a" id="item-1">
        Item without group title
      </ApplicationLauncherItem>
      <ApplicationLauncherSeparator key="separator" />
    </ApplicationLauncherGroup>,
    <ApplicationLauncherGroup label="Group 2" key="group 2c">
      <ApplicationLauncherItem key="group 2a" id="item-2" isExternal component="button">
        Group 2 button
      </ApplicationLauncherItem>
      <ApplicationLauncherItem key="group 2b" id="item-3" isExternal href="#">
        Group 2 anchor link
      </ApplicationLauncherItem>
      <ApplicationLauncherSeparator key="separator" />
    </ApplicationLauncherGroup>,
    <ApplicationLauncherGroup label="Group 3" key="group 3c">
      <ApplicationLauncherItem key="group 3a" id="item-4" isExternal component="button">
        Group 3 button
      </ApplicationLauncherItem>
      <ApplicationLauncherItem key="group 3b" id="item-5" isExternal href="#">
        Group 3 anchor link
      </ApplicationLauncherItem>
    </ApplicationLauncherGroup>
  ];

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };
  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onFavorite = (itemId, isFavorite) => {
    if (isFavorite) {
      this.setState({
        favorites: this.state.favorites.filter(id => id !== itemId)
      });
    } else {
      this.setState({
        favorites: [...this.state.favorites, itemId]
      });
    }
  };
  onSearch = textInput => {
    if (textInput === '') {
      this.setState({
        filteredItems: null
      });
    } else {
      const filteredGroups = this.appLauncherItems
        .map(group => {
          const filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter(item => {
              if (item.type === ApplicationLauncherSeparator) {
                return item;
              }
              return item.props.children.toLowerCase().includes(textInput.toLowerCase());
            })
          });
          if (
            filteredGroup.props.children.length > 0 &&
            filteredGroup.props.children[0].type !== ApplicationLauncherSeparator
          ) {
            return filteredGroup;
          }
        })
        .filter(newGroup => newGroup);

      if (filteredGroups.length > 0) {
        let lastGroup = filteredGroups.pop();
        lastGroup = React.cloneElement(lastGroup, {
          children: lastGroup.props.children.filter(item => item.type !== ApplicationLauncherSeparator)
        });
        filteredGroups.push(lastGroup);
      }

      this.setState({
        filteredItems: filteredGroups
      });
    }
  };
  render() {
    const { isOpen, favorites, filteredItems } = this.state;
    return (
      <ApplicationLauncher
        onToggle={this.onToggle}
        toggleId="toggle-fav"
        onFavorite={this.onFavorite}
        onSearch={this.onSearch}
        isOpen={isOpen}
        items={filteredItems || this.appLauncherItems}
        favorites={favorites}
        isGrouped
      />
    );
  }
}
