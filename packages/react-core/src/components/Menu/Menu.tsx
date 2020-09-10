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
  /** Anything that can be rendered inside of the Menu */
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
  onSearchInputChange?: (changedItem: {
    value: string;
    event: React.FormEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>;
  }) => void;
  /** Optional callback for custom filtering */
  onFilter?: (e: React.ChangeEvent<HTMLInputElement>) => React.ReactElement[];
  /** Accessibility label */
  'aria-label'?: string;
  /** Indicates which theme color to use */
  theme?: 'dark' | 'light';
  /** Indicates menu type */
  variant?: 'default' | 'flyout' | 'singleSelect' | 'multiSelect';
  /** Search input of menu */
  searchInput?: React.ReactNode;
  /** ID list of favorited MenuListItems */
  favorites?: string[];
  /** Enables favorites. Callback called when an MenuItems's favorite button is clicked */
  onFavorite?: (itemId: string, isFavorite: boolean) => void;
  /** Label for the favorites group */
  favoritesLabel?: string;
  /** Flag to indicate if menu has groups */
  isGrouped?: boolean;
  /** Array of selected items for multi select variants. */
  selections?: (string | SelectOptionObject)[];
  /** Text to display in typeahead select when no results are found */
  noResultsFoundText?: string;
}

export interface MenuState {
  typeaheadInputValue: string | null;
  ouiaStateId: string;
}

export class Menu extends React.Component<MenuProps, MenuState> {
  static displayName = 'Menu';
  static defaultProps: MenuProps = {
    onSelect: () => undefined,
    onToggle: () => undefined,
    onSearchInputChange: () => undefined,
    onFilter: null,
    favorites: [] as string[],
    selections: [],
    favoritesLabel: 'Favorites',
    ouiaSafe: true,
    isGrouped: false,
    noResultsFoundText: 'No results found'
  };

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName, this.props.variant),
    typeaheadInputValue: ''
  };
  onFilter: (value: string, event: React.FormEvent<HTMLInputElement>) => void;

  // Callback from MenuItem
  onSelect(
    event: React.FormEvent<HTMLInputElement>,
    groupId: number | string,
    itemId: number | string,
    to: string,
    preventDefault: boolean,
    isSelected: boolean
  ) {
    if (preventDefault) {
      event.preventDefault();
    }

    this.props.onSelect({ groupId, itemId, event, to, isSelected });
  }

  createRenderableFavorites = () => {
    const { children, isGrouped, favorites } = this.props;
    if (isGrouped) {
      const favoriteItems: React.ReactNode[] = [];
      React.Children.forEach(children, group =>
        ((group as React.ReactElement).props.children.props.children as React.ReactElement[])
          .filter(item => favorites.includes(item.props.id))
          .map(item => favoriteItems.push(React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true })))
      );
      return favoriteItems;
    }
    return (React.Children.toArray(children) as React.ReactElement[])
      .filter(item => favorites.includes(item.props.id))
      .map(item => React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true }));
  };

  extendItemsWithFavorite = () => {
    const { children, isGrouped, favorites } = this.props;
    if (isGrouped) {
      return (React.Children.toArray(children) as React.ReactElement[]).map(group =>
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
    return (React.Children.toArray(children) as React.ReactElement[]).map(item =>
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onSelect,
      onToggle,
      isGrouped,
      onFilter,
      onSearchInputChange,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ouiaId,
      ouiaSafe,
      variant,
      searchInput,
      favorites,
      // selections,
      favoritesLabel,
      onFavorite,
      ...props
    } = this.props;
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
      renderableItems = React.Children.toArray(children);
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
            isSelected: boolean
          ) => this.onSelect(event, groupId, itemId, to, preventDefault, isSelected),
          onToggle: (event: React.MouseEvent<HTMLInputElement>, groupId: number | string, expanded: boolean) =>
            this.props.onToggle({
              event,
              groupId,
              isExpanded: expanded
            })
        }}
      >
        <div
          className={css(styles.menu, variant === 'flyout' && styles.modifiers.flyout, className)}
          aria-label={ariaLabel || variant === 'flyout' ? 'Local' : 'Global'}
          {...getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          {...props}
        >
          {searchInput && (
            <React.Fragment>
              <div className="pf-c-menu__search">
                <SearchInput
                  value={this.state.typeaheadInputValue}
                  onChange={(value, event) => {
                    this.setState({ typeaheadInputValue: value });
                    this.props.onSearchInputChange({ value, event });
                  }}
                  onClear={event => {
                    this.setState({ typeaheadInputValue: '' });
                    this.props.onSearchInputChange({ value: '', event });
                  }}
                />
              </div>
              <Divider />
            </React.Fragment>
          )}
          <div className={'pf-c-menu__content'}>{favorites ? renderableItems : children}</div>
        </div>
      </MenuContext.Provider>
    );
  }
}
