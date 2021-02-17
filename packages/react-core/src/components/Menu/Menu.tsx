import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref' | 'onSelect'>, OUIAProps {
  /** Anything that can be rendered inside of the Menu */
  children?: React.ReactNode;
  /** Additional classes added to the Menu */
  className?: string;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect?: (event?: any, itemId?: any) => void;
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected?: any | any[];
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
  /** Search input of menu */
  hasSearchInput?: boolean;
  /** A callback for when the input value changes. */
  onSearchInputChange?: (
    event: React.FormEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>,
    value: string
  ) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** Indicates if menu contains a drilldown menu */
  containsDrilldown?: boolean;
  /** Indicates if a menu is drilled into */
  drilledIn?: boolean;
  /** itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: any;
  activeMenu?: any;
  id?: any;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

export interface MenuState {
  searchInputValue: string | null;
  ouiaStateId: string;
}

class MenuBase extends React.Component<MenuProps, MenuState> {
  static defaultProps: MenuProps = {
    ouiaSafe: true
  };

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName),
    searchInputValue: ''
  };

  render() {
    console.log(`rendering ${this.props.id}`);
    const {
      'aria-label': ariaLabel,
      children,
      className,
      onSelect,
      selected = null,
      onActionClick,
      ouiaId,
      ouiaSafe,
      containsFlyout,
      containsDrilldown,
      drilledIn,
      activeItemId = null,
      innerRef,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      activeMenu,
      ...props
    } = this.props;

    return (
      <MenuContext.Provider value={{ onSelect, onActionClick, activeItemId, selected }}>
        <div
          className={css(
            styles.menu,
            containsFlyout && styles.modifiers.flyout,
            containsDrilldown && styles.modifiers.drilldown,
            drilledIn && styles.modifiers.drilledIn,
            className
          )}
          aria-label={ariaLabel || containsFlyout ? 'Local' : 'Global'}
          ref={innerRef}
          {...getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          {...props}
        >
          {children}
        </div>
      </MenuContext.Provider>
    );
  }
}

export const Menu = React.forwardRef((props: MenuProps, ref: React.Ref<HTMLDivElement>) => (
  <MenuBase {...props} innerRef={ref} />
));
Menu.displayName = 'Menu';
