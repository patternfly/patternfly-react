import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { SearchInput } from '../SearchInput';

export type MenuSelectClickHandler = (
  e: React.FormEvent<HTMLInputElement>,
  itemId: number | string,
  groupId: number | string,
  to: string
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
  variant?: 'default' | 'flyout';
  /** Search input of menu */
  searchInput?: React.ReactNode;
}

export const MenuContext = React.createContext<{
  onSelect?: (
    event: React.FormEvent<HTMLInputElement>,
    groupId: number | string,
    itemId: number | string,
    to: string,
    preventDefault: boolean,
    onClick: (
      e: React.FormEvent<HTMLInputElement>,
      itemId: number | string,
      groupId: number | string,
      to: string
    ) => void
  ) => void;
  onToggle?: (event: React.MouseEvent<HTMLInputElement>, groupId: number | string, expanded: boolean) => void;
  onSearchInputChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  updateIsScrollable?: (isScrollable: boolean) => void;
  isHorizontal?: boolean;
}>({});

export class Menu extends React.Component<MenuProps, { isScrollable: boolean; ouiaStateId: string }> {
  static displayName = 'Menu';
  static defaultProps: MenuProps = {
    onSelect: () => undefined,
    onToggle: () => undefined,
    onSearchInputChange: () => undefined,
    theme: 'dark',
    ouiaSafe: true
  };

  state = {
    isScrollable: false,
    ouiaStateId: getDefaultOUIAId(Menu.displayName, this.props.variant)
  };

  // Callback from NavItem
  onSelect(
    event: React.FormEvent<HTMLInputElement>,
    groupId: number | string,
    itemId: number | string,
    to: string,
    preventDefault: boolean,
    onClick: MenuSelectClickHandler
  ) {
    if (preventDefault) {
      event.preventDefault();
    }

    this.props.onSelect({ groupId, itemId, event, to });

    if (onClick) {
      onClick(event, itemId, groupId, to);
    }
  }

  // Callback from NavExpandable
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

  render() {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSelect,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onToggle,
      onSearchInputChange,
      // theme,
      ouiaId,
      ouiaSafe,
      variant,
      searchInput,
      ...props
    } = this.props;
    const isHorizontal = ['horizontal', 'tertiary'].includes(variant);

    return (
      <MenuContext.Provider
        value={{
          onSelect: (
            event: React.FormEvent<HTMLInputElement>,
            groupId: number | string,
            itemId: number | string,
            to: string,
            preventDefault: boolean,
            onClick: (
              e: React.FormEvent<HTMLInputElement>,
              itemId: number | string,
              groupId: number | string,
              to: string
            ) => void
          ) => this.onSelect(event, groupId, itemId, to, preventDefault, onClick),
          onToggle: (event: React.MouseEvent<HTMLInputElement>, groupId: number | string, expanded: boolean) =>
            this.onToggle(event, groupId, expanded),
          onSearchInputChange: (event: React.FormEvent<HTMLInputElement>, value: string) =>
            this.onSearchInputChange(event, value),
          updateIsScrollable: (isScrollable: boolean) => this.setState({ isScrollable }),
          isHorizontal
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
              <SearchInput onChange={this.onSearchInputChange} />
            </div>
          )}
          {children}
        </div>
      </MenuContext.Provider>
    );
  }
}
