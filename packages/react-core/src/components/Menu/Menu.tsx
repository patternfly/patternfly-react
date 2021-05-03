import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';
import { canUseDOM } from '../../helpers/util';

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref' | 'onSelect'>, OUIAProps {
  /** Anything that can be rendered inside of the Menu */
  children?: React.ReactNode;
  /** Additional classes added to the Menu */
  className?: string;
  /** ID of the menu */
  id?: string;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect?: (event?: React.MouseEvent, itemId?: string | number) => void;
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
  isMenuDrilledIn?: boolean;
  /** Indicates the path of drilled in menu itemIds */
  drilldownItemPath?: string[];
  /** Array of menus that are drilled in */
  drilledInMenus?: string[];
  /** Callback for drilling into a submenu */
  onDrillIn?: (fromItemId: string, toItemId: string, itemId: string) => void;
  /** Callback for drilling out of a submenu */
  onDrillOut?: (toItemId: string, itemId: string) => void;
  /** Callback for collecting menu heights */
  onGetMenuHeight?: (menuId: string, height: number) => void;
  /** ID of parent menu for drilldown menus */
  parentMenu?: string;
  /** ID of the currently active menu for the drilldown variant */
  activeMenu?: string;
  /** itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: string | number;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Internal flag indicating if the Menu is the root of a menu tree */
  isRootMenu?: boolean;
}

export interface MenuState {
  searchInputValue: string | null;
  ouiaStateId: string;
  transitionMoveTarget: HTMLElement;
}

class MenuBase extends React.Component<MenuProps, MenuState> {
  private menuRef = React.createRef<HTMLDivElement>();
  private activeMenu = null as Element;
  static defaultProps: MenuProps = {
    ouiaSafe: true,
    isRootMenu: true
  };

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName),
    searchInputValue: '',
    transitionMoveTarget: null
  };

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('keydown', this.props.isRootMenu ? this.handleKeys : null);
      window.addEventListener('transitionend', this.props.isRootMenu ? this.handleDrilldownTransition : null);
    }

    let ref = this.menuRef;
    if (this.props.innerRef) {
      ref = this.props.innerRef as React.RefObject<HTMLDivElement>;
    }

    const firstItem = ref.current.querySelector('button, a');
    if (firstItem) {
      (firstItem as HTMLElement).tabIndex = 0;
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('keydown', this.handleKeys);
      window.removeEventListener('transitionend', this.handleDrilldownTransition);
    }
  }

  handleDrilldownTransition = (event: TransitionEvent) => {
    let ref = this.menuRef;
    if (this.props.innerRef) {
      ref = this.props.innerRef as React.RefObject<HTMLDivElement>;
    }

    if (
      !ref.current ||
      (ref.current !== (event.target as HTMLElement).closest('.pf-c-menu') &&
        !Array.from(ref.current.getElementsByClassName('pf-c-menu')).includes(
          (event.target as HTMLElement).closest('.pf-c-menu')
        ))
    ) {
      return;
    }

    if (event.propertyName === 'visibility') {
      if (this.state.transitionMoveTarget) {
        this.state.transitionMoveTarget.focus();
        this.setState({ transitionMoveTarget: null });
      } else {
        const nextMenu = ref.current.querySelector('#' + this.props.activeMenu) || ref.current || null;
        const nextTarget = Array.from(nextMenu.getElementsByTagName('UL')[0].children).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider'))
        )[0].firstChild;
        (nextTarget as HTMLElement).focus();
        (nextTarget as HTMLElement).tabIndex = 0;
      }
    }
  };

  handleKeys = (event: KeyboardEvent) => {
    const isDrilldown = this.props.containsDrilldown;
    let ref = this.menuRef;
    if (this.props.innerRef) {
      ref = this.props.innerRef as React.RefObject<HTMLDivElement>;
    }

    if (
      !ref.current ||
      (ref.current !== (event.target as HTMLElement).closest('.pf-c-menu') &&
        !Array.from(ref.current.getElementsByClassName('pf-c-menu')).includes(
          (event.target as HTMLElement).closest('.pf-c-menu')
        )) ||
      (event.target as HTMLElement).tagName === 'INPUT'
    ) {
      return;
    }
    event.stopImmediatePropagation();

    const activeElement = document.activeElement;
    if (
      (event.target as HTMLElement).closest('.pf-c-menu') !== this.activeMenu &&
      !(event.target as HTMLElement).classList.contains('pf-c-breadcrumb__link')
    ) {
      this.activeMenu = (event.target as HTMLElement).closest('.pf-c-menu');
    }
    const parentMenu = this.activeMenu;
    const key = event.key;
    let moveFocus = false;
    let moveTarget = null;
    let currentIndex = -1;
    const validMenuItems = isDrilldown
      ? Array.from(parentMenu.getElementsByTagName('UL')[0].children).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider'))
        )
      : Array.from(parentMenu.getElementsByTagName('LI')).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider'))
        );
    const isFromBreadcrumb =
      activeElement.classList.contains('pf-c-breadcrumb__link') ||
      activeElement.classList.contains('pf-c-dropdown__toggle');

    if (key === ' ' || key === 'Enter') {
      event.preventDefault();
      if (isDrilldown && !isFromBreadcrumb) {
        const isDrillingOut = activeElement.closest('li').classList.contains('pf-m-current-path');
        if (isDrillingOut && parentMenu.parentElement.tagName === 'LI') {
          (activeElement as HTMLElement).tabIndex = -1;
          (parentMenu.parentElement.firstChild as HTMLElement).tabIndex = 0;
          this.setState({ transitionMoveTarget: parentMenu.parentElement.firstChild as HTMLElement });
        } else {
          if (activeElement.nextElementSibling && activeElement.nextElementSibling.classList.contains('pf-c-menu')) {
            const childItems = Array.from(
              activeElement.nextElementSibling.getElementsByTagName('UL')[0].children
            ).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));

            (activeElement as HTMLElement).tabIndex = -1;
            (childItems[0].firstChild as HTMLElement).tabIndex = 0;
            this.setState({ transitionMoveTarget: childItems[0].firstChild as HTMLElement });
          }
        }
      }
      (document.activeElement as HTMLElement).click();
    }

    if (['ArrowUp', 'ArrowDown'].includes(key)) {
      validMenuItems.forEach((menuItem, index) => {
        if (
          activeElement.parentElement === menuItem ||
          (activeElement.closest('ol') && activeElement.closest('ol').firstChild === menuItem)
        ) {
          const increment = key === 'ArrowUp' ? -1 : 1;
          currentIndex = index + increment;

          if (currentIndex >= validMenuItems.length) {
            currentIndex = 0;
          }
          if (currentIndex < 0) {
            currentIndex = validMenuItems.length - 1;
          }

          moveFocus = true;
          moveTarget = validMenuItems[currentIndex].firstChild;
          event.preventDefault();
        }
      });
    }

    if (['ArrowLeft', 'ArrowRight'].includes(key)) {
      event.preventDefault();
      if (isFromBreadcrumb) {
        return;
      }
      let nextSibling;
      if (key === 'ArrowLeft') {
        nextSibling = activeElement.previousElementSibling;
      } else {
        nextSibling = activeElement.nextElementSibling;
      }
      if (nextSibling) {
        if (['A', 'BUTTON'].includes(nextSibling.tagName)) {
          moveFocus = true;
          moveTarget = nextSibling;
        }
      }
    }

    if (moveFocus && moveTarget) {
      (activeElement as HTMLElement).tabIndex = -1;
      (moveTarget as HTMLElement).tabIndex = 0;
      (moveTarget as HTMLElement).focus();
    }
  };

  render() {
    const {
      'aria-label': ariaLabel,
      id,
      children,
      className,
      onSelect,
      selected = null,
      onActionClick,
      ouiaId,
      ouiaSafe,
      containsFlyout,
      containsDrilldown,
      isMenuDrilledIn,
      drilldownItemPath,
      drilledInMenus,
      onDrillIn,
      onDrillOut,
      onGetMenuHeight,
      parentMenu = null,
      activeItemId = null,
      innerRef,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isRootMenu,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      activeMenu,
      ...props
    } = this.props;
    const _isMenuDrilledIn =
      (isMenuDrilledIn && isMenuDrilledIn) || (drilledInMenus && drilledInMenus.includes(id)) || false;
    return (
      <MenuContext.Provider
        value={{
          menuId: id,
          parentMenu: parentMenu ? parentMenu : id,
          onSelect,
          onActionClick,
          activeItemId,
          selected,
          drilledInMenus,
          drilldownItemPath,
          onDrillIn,
          onDrillOut,
          onGetMenuHeight
        }}
      >
        <div
          id={id}
          className={css(
            styles.menu,
            containsFlyout && styles.modifiers.flyout,
            containsDrilldown && styles.modifiers.drilldown,
            _isMenuDrilledIn && styles.modifiers.drilledIn,
            className
          )}
          aria-label={ariaLabel || containsFlyout ? 'Local' : 'Global'}
          ref={innerRef || this.menuRef || null}
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
