import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';
import VerticalNavItem from './VerticalNavItem';
import VerticalNavMasthead from './VerticalNavMasthead';
import { filterChildren, findChild, hasDisplayName, noop, propsChanged } from '../../common/helpers';
import Timer from '../../common/Timer';
import controlled from '../../common/controlled';
import { layout } from '../../common/patternfly';
import {
  NavContextProvider,
  deepestOf,
  itemObjectTypes,
  addBodyEventListener,
  removeBodyEventListener,
  setBodyClassIf
} from './VerticalNavConstants';
import VerticalNavSecondaryItem from './VerticalNavSecondaryItem';
import VerticalNavTertiaryItem from './VerticalNavTertiaryItem';
import VerticalNavBrand from './VerticalNavBrand';
import VerticalNavIconBar from './VerticalNavIconBar';
import VerticalNavBadge from './VerticalNavBadge';
import VerticalNavDividerItem from './VerticalNavDividerItem';

/**
 * VerticalNav - The Vertical Navigation pattern
 * http://www.patternfly.org/pattern-library/navigation/vertical-navigation/
 */
class BaseVerticalNav extends React.Component {
  // More state is defined in controlledStateTypes.
  // These ones just don't need to be able to be controlled by props.
  state = {
    forceHidden: false, // eslint-disable-line react/no-unused-state
    controlledActivePath: false,
    controlledHoverPath: false,
    controlledMobilePath: false,
    controlledPinnedPath: false
  };

  componentDidMount() {
    this.updateBodyClasses();
    layout.addChangeListener(this.onLayoutChange);
    addBodyEventListener('mousedown', this.handleBodyClick);
  }

  componentDidUpdate(oldProps) {
    const bodyClassProps = ['navCollapsed', 'pinnedPath', 'showMobileNav', 'isMobile'];
    if (propsChanged(bodyClassProps, oldProps, this.props)) {
      this.updateBodyClasses();
    }
  }

  componentWillUnmount() {
    // Clear any timers so they don't trigger while the component is unmounted.
    this.hoverTimer.clearTimer();
    this.clearBodyClasses();
    layout.removeChangeListener(this.onLayoutChange);
    removeBodyEventListener('mousedown', this.handleBodyClick);
  }

  onLayoutChange = newLayout => {
    const { onLayoutChange, setControlledState } = this.props;
    setControlledState({ isMobile: newLayout === 'mobile' });
    onLayoutChange && onLayoutChange(newLayout);
  };

  setActivePath = activePath => {
    if (!this.state.controlledActivePath) {
      this.props.setControlledState({ activePath });
    }
  };

  setControlledActivePath = controlledActivePath => {
    this.setState({ controlledActivePath });
  };

  setControlledHoverPath = controlledHoverPath => {
    this.setState({ controlledHoverPath });
  };

  setControlledMobilePath = controlledMobilePath => {
    this.setState({ controlledMobilePath });
  };

  setControlledPinnedPath = controlledPinnedPath => {
    this.setState({ controlledPinnedPath });
  };

  setHoverPath = hoverPath => {
    if (!this.state.controlledHoverPath) {
      this.props.setControlledState({
        hoverPath,
        ...(hoverPath === null ? { showMobileNav: false } : {})
      });
    }
  };

  setMobilePath = mobilePath => {
    if (!this.state.controlledMobilePath) {
      this.props.setControlledState({ mobilePath });
    }
  };

  setPinnedPath = pinnedPath => {
    if (!this.state.controlledPinnedPath) {
      this.props.setControlledState({ pinnedPath });
    }
  };
  hoverTimer = new Timer();
  clearBodyClasses = () => {
    if (this.props.dynamicBodyClasses) {
      setBodyClassIf(false, 'collapsed-nav');
      setBodyClassIf(false, 'hidden-nav');
    }
  };

  collapseMenu = () => {
    const { onCollapse, setControlledState } = this.props;
    setControlledState({ navCollapsed: true });
    onCollapse && onCollapse();
  };

  expandMenu = () => {
    const { onExpand, setControlledState } = this.props;
    setControlledState({ navCollapsed: false });
    onExpand && onExpand();
  };

  forceHideSecondaryMenu = () => {
    this.setState({ forceHidden: true }); // eslint-disable-line react/no-unused-state
    setTimeout(() => {
      this.setState({ forceHidden: false }); // eslint-disable-line react/no-unused-state
    }, 500);
  };

  handleBodyClick = () => {
    // Clear hover state on body click. Helps especially when using blurDisabled prop.
    this.setHoverPath(null);
  };

  navigateToItem = item => {
    const { onNavigate } = this.props;
    onNavigate(item);
    // Note: This should become router-aware later on.
  };

  updateBodyClasses = () => {
    // Note: Updating the body element classes from here like this is a hacky, non-react-y pattern.
    // It's only here for consistency. See comments on getBodyContentElement in ./constants.js.
    const { dynamicBodyClasses, navCollapsed, pinnedPath, isMobile } = this.props;
    const collapsed = navCollapsed && pinnedPath === null;
    if (dynamicBodyClasses) {
      setBodyClassIf(!isMobile && collapsed, 'collapsed-nav');
      setBodyClassIf(isMobile, 'hidden-nav');
    }
  };

  updateNavOnItemBlur = (primary, secondary, tertiary, idPath, parentPath, noDelay, callback) => {
    const { hoverPath, blurDelay, blurDisabled, setControlledState } = this.props;
    const item = deepestOf(primary, secondary, tertiary);
    const hovered = hoverPath && hoverPath.startsWith(idPath);
    this.hoverTimer.clearTimer();
    if (hovered) {
      const doBlur = () => {
        if (!blurDisabled) {
          // IMPORTANT: We reference this.props below for the hoverPath value when the timeout fires.
          // If we just use the hoverPath in scope from above, it is from when the timeout was set.
          if (idPath === this.props.hoverPath) {
            // Only bump up the hover path if it's still set to the item we're blurring
            setControlledState({ hoverPath: parentPath });
          }
          callback && callback(primary, secondary, tertiary);
        }
      };
      if (item.subItems && item.subItems.length > 0) {
        if (noDelay) {
          doBlur();
        } else {
          this.hoverTimer.startTimer(doBlur, blurDelay);
        }
      }
    }
  };

  updateNavOnItemClick = (primary, secondary, tertiary, idPath, parentPath) => {
    const { onItemClick, hoverPath, hoverDisabled, isMobile } = this.props;
    this.hoverTimer.skipTimer();
    const item = deepestOf(primary, secondary, tertiary);
    const isLeafItem = !item.subItems || item.subItems.length === 0;
    if (isMobile) {
      this.setMobilePath(null);
    }
    if (isLeafItem) {
      this.setHoverPath(null);
    } else if (hoverDisabled && hoverPath === idPath) {
      // Clicking the currently-"hovered" item in hoverDisabled un-"hovers" it.
      this.setHoverPath(parentPath);
    }
    if (isLeafItem || !isMobile) {
      this.navigateToItem(item);
    }
    onItemClick && onItemClick(primary, secondary, tertiary);
  };

  updateNavOnItemHover = (primary, secondary, tertiary, idPath, parentPath, callback) => {
    const { onItemHover, hoverPath, hoverDelay, hoverDisabled, isMobile } = this.props;
    const item = deepestOf(primary, secondary, tertiary);
    const hovered = hoverPath && hoverPath.startsWith(idPath);
    const targetPath = item.subItems && item.subItems.length > 0 ? idPath : parentPath;
    const that = this;
    if (!isMobile) {
      this.hoverTimer.clearTimer();
      if (!hovered) {
        this.hoverTimer.startTimer(skipped => {
          if (skipped || !hoverDisabled) {
            that.setHoverPath(targetPath);
            callback && callback(primary, secondary, tertiary);
            onItemHover && onItemHover(primary, secondary, tertiary);
          }
        }, hoverDelay);
      }
    }
  };

  updateNavOnMenuToggleClick = () => {
    const { onMenuToggleClick, isMobile, showMobileNav, navCollapsed, setControlledState } = this.props;
    if (isMobile) {
      if (showMobileNav) {
        setControlledState({ showMobileNav: false });
      } else {
        this.setMobilePath(null);
        setControlledState({ showMobileNav: true });
      }
    } else if (navCollapsed) {
      this.expandMenu();
    } else {
      this.collapseMenu();
    }
    onMenuToggleClick && onMenuToggleClick();
  };

  updateNavOnMobileSelection = (primary, secondary, tertiary) => {
    const { onMobileSelection } = this.props;
    // All the behavior here is handled by mobilePath and setMobilePath,
    // but we still make a callback available here.
    onMobileSelection && onMobileSelection(primary, secondary, tertiary);
  };

  updateNavOnPin = (item, depth, pinned) => {
    const { onItemPin, isMobile } = this.props;
    if (!isMobile) {
      onItemPin && onItemPin(item, depth, pinned);
    }
  };

  render() {
    const { items, children } = this.props;
    // Nav items may be passed either as nested VerticalNavItem children, or as nested items in a prop.
    // The items prop will take priority, if present, and must be an array of item objects (not React components).
    // If the items prop is not present, items must be expressed as VerticalNavItem children instead.
    const itemsFromChildren = filterChildren(children, child => hasDisplayName(child, VerticalNavItem.displayName));
    const itemsFromProps =
      items &&
      items.length > 0 &&
      items.map((primaryItem, i) => (
        <VerticalNavItem item={primaryItem} key={`primary_${primaryItem.title}`}>
          {primaryItem.subItems &&
            primaryItem.subItems.map(secondaryItem => (
              <VerticalNavSecondaryItem
                isDivider={secondaryItem.isDivider}
                preventHref={secondaryItem.preventHref}
                item={secondaryItem}
                key={`secondary_${secondaryItem.title}`}
              >
                {secondaryItem.subItems &&
                  secondaryItem.subItems.map(tertiaryItem => (
                    <VerticalNavTertiaryItem item={tertiaryItem} key={`tertiary_${tertiaryItem.title}`} />
                  ))}
              </VerticalNavSecondaryItem>
            ))}
        </VerticalNavItem>
      ));
    const itemComponents = itemsFromProps || itemsFromChildren || [];

    const {
      hiddenIcons,
      pinnableMenus,
      showBadges,
      forceHidden,
      hideMasthead,
      persistentSecondary,
      hoverDelay,
      blurDelay,
      isMobile,
      showMobileNav,
      masthead,
      navCollapsed,
      activePath,
      hoverPath,
      mobilePath,
      pinnedPath
    } = this.props;

    const mastheadElem = masthead || (
      <nav className={classNames('navbar navbar-pf-vertical')}>
        {findChild(children, child => hasDisplayName(child, VerticalNavMasthead.displayName))}
      </nav>
    );

    const getPathDepth = path => path && path.split('/').filter(s => s !== '').length;
    const mobileDepth = getPathDepth(mobilePath);
    const hoverDepth = getPathDepth(hoverPath);
    const pinnedDepth = getPathDepth(pinnedPath);
    const showMobileSecondary = isMobile && mobileDepth >= 1;
    const showMobileTertiary = isMobile && mobileDepth >= 2;
    const hoverSecondaryNav = hoverDepth >= 1;
    const hoverTertiaryNav = hoverDepth >= 2;
    const pinnedSecondaryNav = pinnedDepth >= 1;
    const pinnedTertiaryNav = pinnedDepth >= 2;

    return (
      <NavContextProvider
        idPath="/"
        updateNavOnMenuToggleClick={this.updateNavOnMenuToggleClick}
        updateNavOnItemHover={this.updateNavOnItemHover}
        updateNavOnItemBlur={this.updateNavOnItemBlur}
        updateNavOnItemClick={this.updateNavOnItemClick}
        updateNavOnMobileSelection={this.updateNavOnMobileSelection}
        setActivePath={this.setActivePath}
        setHoverPath={this.setHoverPath}
        setMobilePath={this.setMobilePath}
        setPinnedPath={this.setPinnedPath}
        setControlledActivePath={this.setControlledActivePath}
        setControlledHoverPath={this.setControlledHoverPath}
        setControlledMobilePath={this.setControlledMobilePath}
        setControlledPinnedPath={this.setControlledPinnedPath}
        activePath={activePath}
        hoverPath={hoverPath}
        mobilePath={mobilePath}
        pinnedPath={pinnedPath}
        hiddenIcons={hiddenIcons}
        pinnableMenus={pinnableMenus}
        isMobile={isMobile}
        showMobileSecondary={showMobileSecondary}
        showMobileTertiary={showMobileTertiary}
        showBadges={showBadges}
        navCollapsed={navCollapsed}
        updateNavOnPin={this.updateNavOnPin}
        forceHideSecondaryMenu={this.forceHideSecondaryMenu}
        hoverDelay={hoverDelay}
        blurDelay={blurDelay}
      >
        {!hideMasthead && mastheadElem}
        <div
          className={classNames('nav-pf-vertical nav-pf-vertical-with-sub-menus', {
            'nav-pf-vertical-collapsible-menus': pinnableMenus,
            'hidden-icons-pf': hiddenIcons,
            'nav-pf-vertical-with-badges': showBadges,
            'nav-pf-persistent-secondary': persistentSecondary,
            'show-mobile-secondary': showMobileSecondary,
            'show-mobile-tertiary': showMobileTertiary,
            'hover-secondary-nav-pf': hoverSecondaryNav,
            'hover-tertiary-nav-pf': hoverTertiaryNav,
            'collapsed-secondary-nav-pf': pinnableMenus && pinnedSecondaryNav,
            'collapsed-tertiary-nav-pf': pinnableMenus && pinnedTertiaryNav,
            hidden: isMobile,
            collapsed: !isMobile && navCollapsed,
            'force-hide-secondary-nav-pf': forceHidden,
            'show-mobile-nav': showMobileNav
          })}
        >
          <ListGroup componentClass="ul">{itemComponents}</ListGroup>
        </div>
      </NavContextProvider>
    );
  }
}

const controlledState = {
  // NOTE: If you use any of these props, be sure to also use the corresponding callbacks/handlers.
  // These props override values of the same name set by setControlledState().
  types: {
    /** Use the mobile layout of the component. Corresponds to onLayoutChange callback. */
    isMobile: PropTypes.bool,
    /** Display the nav in mobile mode */
    showMobileNav: PropTypes.bool,
    /** Collapse the nav. Corresponds to onMenuToggleClick or onCollapse and onExpand callbacks. */
    navCollapsed: PropTypes.bool,
    /** The idPath matching the currently active item. Corresponds to onItemClick callback. */
    activePath: PropTypes.string,
    /** The idPath matching the currently hovered item. Corresponds to onItemHover and onItemBlur callbacks. */
    hoverPath: PropTypes.string,
    /** The idPath matching the currently selected item on mobile. Corresponds to onMobileSelection callback. */
    mobilePath: PropTypes.string,
    /** The idPath matching the currently pinned item. Corresponds to onItemPin callback. */
    pinnedPath: PropTypes.string
  },
  defaults: {
    isMobile: layout.is('mobile'),
    showMobileNav: null,
    navCollapsed: null,
    activePath: null,
    hoverPath: null,
    mobilePath: null,
    pinnedPath: null
  }
};

BaseVerticalNav.propTypes = {
  ...controlledState.types,
  /** Navigation items, passed as an array of objects (as opposed to JSX children w/ props) */
  items: PropTypes.arrayOf(PropTypes.shape(itemObjectTypes)),
  /** Enables the pin buttons on the active submenu. */
  pinnableMenus: PropTypes.bool,
  /** Automatically applies classes to the body element when the layout changes. */
  dynamicBodyClasses: PropTypes.bool,
  /** Hide all icons */
  hiddenIcons: PropTypes.bool,
  /** Show badges in nav items */
  showBadges: PropTypes.bool,
  /** Don't show items on hover, require a click */
  hoverDisabled: PropTypes.bool,
  /** Don't hide items on blur, require a click elsewhere */
  blurDisabled: PropTypes.bool,
  /** Force the nav to be hidden temporarily. */
  forceHidden: PropTypes.bool,
  /** Hide the masthead and notification drawer areas. */
  hideMasthead: PropTypes.bool,
  /** Persist the secondary nav */
  persistentSecondary: PropTypes.bool,
  /** Delay between mouse hover and menu show in ms */
  hoverDelay: PropTypes.number,
  /** Delay between mouse blur and menu hide in ms */
  blurDelay: PropTypes.number,
  /**  */
  masthead: PropTypes.node,
  /** Optional callback for updating isMobile prop */
  onLayoutChange: PropTypes.func, // eslint-disable-line react/require-default-props
  /** Optional callback for updating navCollapsed and showMobileNav props (option 1) */
  onMenuToggleClick: PropTypes.func,
  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onCollapse: PropTypes.func,
  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onExpand: PropTypes.func,
  /** Optional callback for updating active props on items or activePath prop. Only called on leaf item click. */
  onNavigate: PropTypes.func,
  /** Optional callback for updating active props on items or activePath prop. Called on any item click. */
  onItemClick: PropTypes.func,
  /** Optional callback for updating hovered prop on items */
  onItemHover: PropTypes.func,
  /** Optional callback for updating hovered prop on items */
  onItemBlur: PropTypes.func,
  /** Optional callback for updating pinned props on items or pinnedPath prop. */
  onItemPin: PropTypes.func,
  /** Optional callback for updating mobilePath prop */
  onMobileSelection: PropTypes.func, // *
  /** Navigation items, passed as Item, SecondaryItem and TertiaryItem children. */
  children: PropTypes.node,
  /** Helper injected by `controlled()` to manage controlledStateTypes values */
  setControlledState: PropTypes.func // eslint-disable-line react/require-default-props
};

BaseVerticalNav.defaultProps = {
  items: null,
  pinnableMenus: false,
  dynamicBodyClasses: true,
  hiddenIcons: false,
  showBadges: false,
  hoverDisabled: false,
  blurDisabled: false,
  forceHidden: false,
  hideMasthead: false,
  persistentSecondary: true,
  hoverDelay: 500,
  blurDelay: 700,
  masthead: null,
  onMenuToggleClick: null,
  onCollapse: null,
  onExpand: null,
  onItemClick: null,
  onItemHover: null,
  onItemBlur: null,
  onItemPin: null,
  onMobileSelection: null,
  onNavigate: noop,
  children: null
};

const NoPersist = controlled(controlledState)(BaseVerticalNav);
const WithPersist = controlled({
  ...controlledState,
  persist: ['navCollapsed', 'pinnedPath']
})(BaseVerticalNav);

const VerticalNav = ({ persist, ...props }) => (persist ? <WithPersist {...props} /> : <NoPersist {...props} />);

VerticalNav.propTypes = {
  ...BaseVerticalNav.propTypes,
  persist: PropTypes.bool
};

VerticalNav.defaultProps = {
  ...BaseVerticalNav.defaultProps,
  persist: true
};

VerticalNav.displayName = 'VerticalNav';

VerticalNav.NoPersist = NoPersist;
VerticalNav.WithPersist = WithPersist;

VerticalNav.Masthead = VerticalNavMasthead;
VerticalNav.Item = VerticalNavItem;
VerticalNav.SecondaryItem = VerticalNavSecondaryItem;
VerticalNav.TertiaryItem = VerticalNavTertiaryItem;
VerticalNav.Brand = VerticalNavBrand;
VerticalNav.IconBar = VerticalNavIconBar;
VerticalNav.Badge = VerticalNavBadge;
VerticalNav.Divider = VerticalNavDividerItem;

export default VerticalNav;
