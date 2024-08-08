import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import breadcrumbStyles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';
import { canUseDOM } from '../../helpers/util';
import { KeyboardHandler } from '../../helpers';
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
  /** Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** Indicating that the menu should have nav flyout styling */
  isNavFlyout?: boolean;
  /** Indicates if menu contains a drilldown menu */
  containsDrilldown?: boolean;
  /** Indicates if a menu is drilled into */
  isMenuDrilledIn?: boolean;
  /** Indicates the path of drilled in menu itemIds */
  drilldownItemPath?: string[];
  /** Array of menus that are drilled in */
  drilledInMenus?: string[];
  /** Callback for drilling into a submenu */
  onDrillIn?: (
    event: React.KeyboardEvent | React.MouseEvent,
    fromItemId: string,
    toItemId: string,
    itemId: string
  ) => void;
  /** Callback for drilling out of a submenu */
  onDrillOut?: (event: React.KeyboardEvent | React.MouseEvent, toItemId: string, itemId: string) => void;
  /** Callback for collecting menu heights */
  onGetMenuHeight?: (menuId: string, height: number) => void;
  /** ID of parent menu for drilldown menus */
  parentMenu?: string;
  /** ID of the currently active menu for the drilldown variant */
  activeMenu?: string;
  /** itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: string | number;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
  /** Internal flag indicating if the Menu is the root of a menu tree */
  isRootMenu?: boolean;
  /** Indicates if the menu should be without the outer box-shadow */
  isPlain?: boolean;
  /** Indicates if the menu should be srollable */
  isScrollable?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** Determines the accessible role of the menu. For a non-checkbox menu that can have
   * one or more items selected, pass in "listbox". */
  role?: string;
}

export interface MenuState {
  ouiaStateId: string;
  transitionMoveTarget: HTMLElement;
  flyoutRef: React.Ref<HTMLLIElement> | null;
  disableHover: boolean;
  currentDrilldownMenuId: string;
}

class MenuBase extends React.Component<MenuProps, MenuState> {
  static displayName = 'Menu';
  static contextType = MenuContext;
  context!: React.ContextType<typeof MenuContext>;
  private menuRef = React.createRef<HTMLDivElement>();
  private activeMenu = null as Element;
  static defaultProps: MenuProps = {
    ouiaSafe: true,
    isRootMenu: true,
    isPlain: false,
    isScrollable: false,
    role: 'menu'
  };

  constructor(props: MenuProps) {
    super(props);
    if (props.innerRef) {
      this.menuRef = props.innerRef as React.RefObject<HTMLDivElement>;
    }
  }

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName),
    transitionMoveTarget: null,
    flyoutRef: null,
    disableHover: false,
    currentDrilldownMenuId: this.props.id
  };

  allowTabFirstItem() {
    // Allow tabbing to first menu item
    const current = this.menuRef.current;
    if (current) {
      const first = current.querySelector('ul button:not(:disabled), ul a:not(:disabled)') as
        | HTMLButtonElement
        | HTMLAnchorElement;
      if (first) {
        first.tabIndex = 0;
      }
    }
  }

  componentDidMount() {
    if (this.context) {
      this.setState({ disableHover: this.context.disableHover });
    }
    if (canUseDOM && this.props.containsDrilldown) {
      window.addEventListener('transitionend', this.props.isRootMenu ? this.handleDrilldownTransition : null);
    }

    this.allowTabFirstItem();
  }

  componentWillUnmount() {
    if (canUseDOM && this.props.containsDrilldown) {
      window.removeEventListener('transitionend', this.handleDrilldownTransition);
    }
  }

  componentDidUpdate(prevProps: MenuProps) {
    if (prevProps.children !== this.props.children) {
      this.allowTabFirstItem();
    }
  }

  handleDrilldownTransition = (event: TransitionEvent) => {
    const current = this.menuRef.current;
    if (
      !current ||
      (current !== (event.target as HTMLElement).closest(`.${styles.menu}`) &&
        !Array.from(current.getElementsByClassName(styles.menu)).includes(
          (event.target as HTMLElement).closest(`.${styles.menu}`)
        ))
    ) {
      return;
    }

    if (this.state.transitionMoveTarget) {
      this.state.transitionMoveTarget.focus();
      this.setState({ transitionMoveTarget: null });
    } else {
      const nextMenu = current.querySelector('#' + this.props.activeMenu) || current || null;
      const nextMenuLists = nextMenu.getElementsByTagName('UL');
      if (nextMenuLists.length === 0) {
        return;
      }
      const nextMenuChildren = Array.from(nextMenuLists[0].children);
      if (!this.state.currentDrilldownMenuId || nextMenu.id !== this.state.currentDrilldownMenuId) {
        this.setState({ currentDrilldownMenuId: nextMenu.id });
      } else {
        // if the drilldown transition ends on the same menu, do not focus the first item
        return;
      }
      const nextTarget = nextMenuChildren.filter(
        (el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider))
      )[0].firstChild;
      (nextTarget as HTMLElement).focus();
      (nextTarget as HTMLElement).tabIndex = 0;
    }
  };

  handleExtraKeys = (event: KeyboardEvent) => {
    const isDrilldown = this.props.containsDrilldown;
    const activeElement = document.activeElement;

    if (
      (event.target as HTMLElement).closest(`.${styles.menu}`) !== this.activeMenu &&
      !(event.target as HTMLElement).classList.contains(breadcrumbStyles.breadcrumbLink)
    ) {
      this.activeMenu = (event.target as HTMLElement).closest(`.${styles.menu}`);
      this.setState({ disableHover: true });
    }

    if ((event.target as HTMLElement).tagName === 'INPUT') {
      return;
    }

    const parentMenu = this.activeMenu;
    const key = event.key;
    const isFromBreadcrumb = activeElement.classList.contains(breadcrumbStyles.breadcrumbLink);

    if (key === ' ' || key === 'Enter') {
      event.preventDefault();
      if (isDrilldown && !isFromBreadcrumb) {
        const isDrillingOut = activeElement.closest('li').classList.contains('pf-m-current-path');
        if (isDrillingOut && parentMenu.parentElement.tagName === 'LI') {
          (activeElement as HTMLElement).tabIndex = -1;
          (parentMenu.parentElement.firstChild as HTMLElement).tabIndex = 0;
          this.setState({ transitionMoveTarget: parentMenu.parentElement.firstChild as HTMLElement });
        } else {
          if (activeElement.nextElementSibling && activeElement.nextElementSibling.classList.contains(styles.menu)) {
            const childItems = Array.from(
              activeElement.nextElementSibling.getElementsByTagName('UL')[0].children
            ).filter((el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider)));

            (activeElement as HTMLElement).tabIndex = -1;
            (childItems[0].firstChild as HTMLElement).tabIndex = 0;
            this.setState({ transitionMoveTarget: childItems[0].firstChild as HTMLElement });
          }
        }
      }
      (document.activeElement as HTMLElement).click();
    }
  };

  createNavigableElements = () => {
    const isDrilldown = this.props.containsDrilldown;

    if (isDrilldown) {
      return this.activeMenu
        ? Array.from(this.activeMenu.getElementsByTagName('UL')[0].children).filter(
            (el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider))
          )
        : [];
    } else {
      return this.menuRef.current
        ? Array.from(this.menuRef.current.getElementsByTagName('LI')).filter(
            (el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider))
          )
        : [];
    }
  };

  render() {
    const {
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
      isPlain,
      isScrollable,
      drilldownItemPath,
      drilledInMenus,
      onDrillIn,
      onDrillOut,
      onGetMenuHeight,
      parentMenu = null,
      activeItemId = null,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      innerRef,
      isRootMenu,
      activeMenu,
      role,
      isNavFlyout,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;
    const _isMenuDrilledIn = isMenuDrilledIn || (drilledInMenus && drilledInMenus.includes(id)) || false;
    return (
      <MenuContext.Provider
        value={{
          menuId: id,
          parentMenu: parentMenu || id,
          onSelect,
          onActionClick,
          activeItemId,
          selected,
          drilledInMenus,
          drilldownItemPath,
          onDrillIn,
          onDrillOut,
          onGetMenuHeight,
          flyoutRef: this.state.flyoutRef,
          setFlyoutRef: (flyoutRef) => this.setState({ flyoutRef }),
          disableHover: this.state.disableHover,
          role
        }}
      >
        {isRootMenu && (
          <KeyboardHandler
            containerRef={(this.menuRef as React.RefObject<HTMLDivElement>) || null}
            additionalKeyHandler={this.handleExtraKeys}
            createNavigableElements={this.createNavigableElements}
            isActiveElement={(element: Element) =>
              document.activeElement.closest('li') === element || // if element is a basic MenuItem
              document.activeElement.parentElement === element ||
              document.activeElement.closest(`.${styles.menuSearch}`) === element || // if element is a MenuSearch
              (document.activeElement.closest('ol') && document.activeElement.closest('ol').firstChild === element)
            }
            getFocusableElement={(navigableElement: Element) =>
              (navigableElement?.tagName === 'DIV' && navigableElement.querySelector('input')) || // for MenuSearchInput
              ((navigableElement.firstChild as Element)?.tagName === 'LABEL' &&
                navigableElement.querySelector('input')) || // for MenuItem checkboxes
              ((navigableElement.firstChild as Element)?.tagName === 'DIV' &&
                navigableElement.querySelector('a, button, input')) || // For aria-disabled element that is rendered inside a div with "display: contents" styling
              (navigableElement.firstChild as Element)
            }
            noHorizontalArrowHandling={
              document.activeElement &&
              (document.activeElement.classList.contains(breadcrumbStyles.breadcrumbLink) ||
                document.activeElement.tagName === 'INPUT')
            }
            noEnterHandling
            noSpaceHandling
          />
        )}
        <div
          id={id}
          className={css(
            styles.menu,
            isPlain && styles.modifiers.plain,
            isScrollable && styles.modifiers.scrollable,
            containsFlyout && styles.modifiers.flyout,
            isNavFlyout && 'pf-m-nav',
            containsDrilldown && styles.modifiers.drilldown,
            _isMenuDrilledIn && styles.modifiers.drilledIn,
            className
          )}
          ref={this.menuRef}
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
