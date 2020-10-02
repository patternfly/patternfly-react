import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { SearchInput } from '../SearchInput';
import { MenuGroup } from '.';
import { Divider, SelectOptionObject } from '..';
import { MenuContext } from './MenuContext';

export type MenuSelectClickHandler = (
  e: React.FormEvent<HTMLInputElement>,
  itemId: number | string,
  groupId: number | string,
  to: string,
  isSelected: boolean
) => void;

export interface MenuProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onSelect'>,
    OUIAProps {
  /** Anything that can be rendered inside of the nav */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
  /** Callback for updating when item selection changes */
  onSelect?: (selectedItem: {
    groupId: number | string;
    itemId: number | string;
    to: string;
    event: React.FormEvent<HTMLInputElement>;
    isSelected: boolean;
  }) => void;
  /** Callback for when a list is expanded or collapsed */
  onToggle?: (toggledItem: {
    groupId: number | string;
    isExpanded: boolean;
    event: React.FormEvent<HTMLInputElement>;
  }) => void;
  /** A callback for when the input value changes. */
  onSearchInputChange?: (changedItem: { value: string; event: React.FormEvent<HTMLInputElement> }) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Indicates which theme color to use */
  theme?: 'dark' | 'light';
  /** Indicates menu type */
  variant?: 'default' | 'flyout' | 'singleSelect' | 'multiSelect';
  /** Search input of menu */
  searchInput?: React.ReactNode;
  /** ID list of favorited ApplicationLauncherItems */
  favorites?: string[];
  /** Enables favorites. Callback called when an ApplicationLauncherItem's favorite button is clicked */
  onFavorite?: (itemId: string, isFavorite: boolean) => void;
  /** Label for the favorites group */
  favoritesLabel?: string;
  /** Flag to indicate if application launcher has groups */
  isGrouped?: boolean;
  /** Array of application launcher items */
  items?: React.ReactNode[];
  /** Array of selected items for multi select variants. */
  selections?: (string | SelectOptionObject)[];
}

export class Menu extends React.Component<MenuProps, { isScrollable: boolean; ouiaStateId: string }> {
  static displayName = 'Menu';
  static defaultProps: MenuProps = {
    onSelect: () => undefined,
    onToggle: () => undefined,
    onSearchInputChange: () => undefined,
    // onFavorite: () => undefined,
    // theme: 'dark',
    favorites: [] as string[],
    selections: [],
    favoritesLabel: 'Favorites',
    ouiaSafe: true,
    isGrouped: false
  };

  state = {
    isScrollable: false,
    ouiaStateId: getDefaultOUIAId(Menu.displayName, this.props.variant)
  };

  // Callback from MenuItem
  onSelect(
    event: React.FormEvent<HTMLInputElement>,
    groupId: number | string,
    itemId: number | string,
    to: string,
    preventDefault: boolean,
    isSelected: boolean,
    onClick: MenuSelectClickHandler
  ) {
    if (preventDefault) {
      event.preventDefault();
    }

    this.props.onSelect({ groupId, itemId, event, to, isSelected });

    if (onClick) {
      onClick(event, itemId, groupId, to, isSelected);
    }
  }

  // Callback from MenuExpandable
  onToggle(event: React.MouseEvent<HTMLInputElement>, groupId: number | string, toggleValue: boolean) {
    this.props.onToggle({
      event,
      groupId,
      isExpanded: toggleValue
    });
  }

  onSearchInputChange(event: React.FormEvent<HTMLInputElement>, value: string) {
    this.props.onSearchInputChange({
      event,
      value
    });
  }

  createRenderableFavorites = () => {
    const { items, isGrouped, favorites } = this.props;
    if (isGrouped) {
      const favoriteItems: React.ReactNode[] = [];
      (items as React.ReactElement[]).forEach(group =>
        (group.props.children.props.children as React.ReactElement[])
          .filter(item => favorites.includes(item.props.id))
          .map(item => favoriteItems.push(React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true })))
      );
      return favoriteItems;
    }
    return (items as React.ReactElement[])
      .filter(item => favorites.includes(item.props.id))
      .map(item => React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true }));
  };

  extendItemsWithFavorite = () => {
    const { items, isGrouped, favorites } = this.props;
    if (isGrouped) {
      return (items as React.ReactElement[]).map(group =>
        React.cloneElement(group, {
          children: React.Children.map(group.props.children.props.children as React.ReactElement[], item => {
            if (item.type === Divider) {
              return item;
            }
            return React.cloneElement(item, {
              isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
            });
          })
        })
      );
    }
    return (items as React.ReactElement[]).map(item =>
      React.cloneElement(item, {
        isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
      })
    );
  };

  render() {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSelect,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onToggle,
      // onSearchInputChange,
      // theme,
      ouiaId,
      ouiaSafe,
      variant,
      searchInput,
      favorites,
      selections,
      favoritesLabel,
      onFavorite,
      isGrouped,
      items,
      ...props
    } = this.props;
    // const isHorizontal = ['horizontal', 'tertiary'].includes(variant);
    let renderableItems: React.ReactNode[] = [];

    if (onFavorite) {
      let favoritesGroup: React.ReactNode[] = [];
      let renderableFavorites: React.ReactNode[] = [];
      if (favorites.length > 0) {
        renderableFavorites = this.createRenderableFavorites();
        favoritesGroup = [
          <MenuGroup key="favorites" label={favoritesLabel}>
            {renderableFavorites}
            <Divider component="li" />
          </MenuGroup>
        ];
      }
      if (renderableFavorites.length > 0) {
        renderableItems = favoritesGroup.concat(this.extendItemsWithFavorite());
      } else {
        renderableItems = this.extendItemsWithFavorite();
      }
    } else {
      renderableItems = items;
    }

    let variantProps: any;
    let variantChildren: any;

    switch (variant) {
      case 'singleSelect':
        variantProps = {
          selected: selections[0]
          // openedOnEnter
        };
        variantChildren = renderableItems;
        break;
      // case 'checkbox':
      //   variantProps = {
      //     checked: selections,
      //     isGrouped,
      //     hasInlineFilter
      //   };
      //   variantChildren = filterWithChildren;
      //   break;
      // case 'typeahead':
      //   variantProps = {
      //     selected: selections[0],
      //     openedOnEnter
      //   };
      //   variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
      //   if (variantChildren.length === 0) {
      //     variantChildren.push(<SelectOption isDisabled key={0} value={noResultsFoundText} isNoResultsOption />);
      //   }
      //   break;
      // case 'typeaheadmulti':
      //   variantProps = {
      //     selected: selections,
      //     openedOnEnter
      //   };
      //   variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
      //   if (variantChildren.length === 0) {
      //     variantChildren.push(<SelectOption isDisabled key={0} value={noResultsFoundText} isNoResultsOption />);
      //   }
      //   break;
    }

    return (
      <MenuContext.Provider
        value={{
          onFavorite,
          onSelect: (
            event: React.FormEvent<HTMLInputElement>,
            groupId: number | string,
            itemId: number | string,
            to: string,
            preventDefault: boolean,
            isSelected: boolean,
            onClick: (
              e: React.FormEvent<HTMLInputElement>,
              itemId: number | string,
              groupId: number | string,
              to: string,
              isSelected: boolean
            ) => void
          ) => this.onSelect(event, groupId, itemId, to, preventDefault, isSelected, onClick),
          onToggle: (event: React.MouseEvent<HTMLInputElement>, groupId: number | string, expanded: boolean) =>
            this.onToggle(event, groupId, expanded),
          onSearchInputChange: (event: React.FormEvent<HTMLInputElement>, value: string) =>
            this.onSearchInputChange(event, value),
          updateIsScrollable: (isScrollable: boolean) => this.setState({ isScrollable })
          // isHorizontal,
        }}
      >
        <div
          className={css(
            styles.menu,
            // theme === 'light' && styles.modifiers.light,
            // isHorizontal && styles.modifiers.horizontal,
            variant === 'flyout' && styles.modifiers.flyout,
            // this.state.isScrollable && styles.modifiers.scrollable,
            className
          )}
          aria-label={ariaLabel || variant === 'flyout' ? 'Local' : 'Global'}
          {...getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          {...props}
        >
          {searchInput && (
            <div className="pf-c-menu__search">
              <SearchInput />
            </div>
          )}
          {renderableItems}
        </div>
      </MenuContext.Provider>
    );
  }
}
