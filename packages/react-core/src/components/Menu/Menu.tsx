import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { SearchInput } from '../SearchInput';
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
  /** Array of selected items for multi select variants. */
  selections?: (string | SelectOptionObject)[];
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
    onFilter: null,
    selections: [],
    ouiaSafe: true
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

  render() {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onSelect,
      onToggle,
      onFilter,
      onSearchInputChange,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ouiaId,
      ouiaSafe,
      variant,
      searchInput,
      // selections,
      ...props
    } = this.props;

    return (
      <MenuContext.Provider
        value={{
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
          <div className={css(styles.menuContent)}>{children}</div>
        </div>
      </MenuContext.Provider>
    );
  }
}
