import * as React from 'react';
import styles from '@patternfly/patternfly/components/Tabs/tabs.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import { getUniqueId, isElementInView, sideElementIsOutOfView } from '../../helpers/util';
import { SIDE } from '../../helpers/constants';
import TabContent from './TabContent';
import Tab from './Tab';

export const TabsVariant = {
  div: 'div',
  nav: 'nav'
};

const propTypes = {
  /** content rendered inside the Tabs Component. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the Tabs */
  className: PropTypes.string,
  /** the index of the active tab */
  activeKey: PropTypes.number,
  /** handle tab selection */
  onSelect: PropTypes.func,
  /** uniquely identifies the Tabs */
  id: PropTypes.string,
  /** enables the filled tab list layout */
  isFilled: PropTypes.bool,
  /** enables Secondary Tab styling */
  isSecondary: PropTypes.bool,
  /** aria-label for the left Scroll Button */
  leftScrollAriaLabel: PropTypes.string,
  /** aria-label for the right Scroll Button */
  rightScrollAriaLabel: PropTypes.string,
  /** determines what tag is used around the Tabs. Use "nav" to define the Tabs inside a navigation region */
  variant: PropTypes.oneOf(Object.values(TabsVariant)),
  /** provides an accessible label for the Tabs. Labels should be unique for each set of Tabs that are present on a page. When variant is set to nav, this prop should be defined to differentiate the Tabs from other navigation regions on the page. */
  'aria-label': PropTypes.string
};

const defaultProps = {
  className: '',
  activeKey: 0,
  onSelect: () => undefined,
  id: null,
  isFilled: false,
  isSecondary: false,
  leftScrollAriaLabel: 'Scroll left',
  rightScrollAriaLabel: 'Scroll Right',
  'aria-label': null,
  variant: TabsVariant.div
};

const Tabs = ({ 'aria-label': ariaLabel, id, variant, ...props }) => {
  const unique_id = id || getUniqueId();
  return variant === TabsVariant.nav ? (
    <TabsWithNav ariaLabel={ariaLabel} id={unique_id} {...props} />
  ) : (
    <TabsWithDiv id={unique_id} {...props} />
  );
};

const TabsWithNav = ({
  activeKey,
  ariaLabel,
  className,
  id,
  isFilled,
  isSecondary,
  leftScrollAriaLabel,
  rightScrollAriaLabel,
  showLeftScrollButton,
  showRightScrollButton,
  highlightLeftScrollButton,
  highlightRightScrollButton,
  ...props
}) => (
  <React.Fragment>
    <nav
      {...props}
      aria-label={ariaLabel}
      className={css(
        styles.tabs,
        isFilled && styles.modifiers.fill,
        isSecondary && styles.modifiers.tabsSecondary,
        showLeftScrollButton && styles.modifiers.start,
        showRightScrollButton && styles.modifiers.end,
        highlightLeftScrollButton && styles.modifiers.startCurrent,
        highlightRightScrollButton && styles.modifiers.endCurrent,
        className
      )}
    >
      <InternalTabs
        id={id}
        activeKey={activeKey}
        leftScrollAriaLabel={leftScrollAriaLabel}
        rightScrollAriaLabel={rightScrollAriaLabel}
        {...props}
      />
    </nav>

    <InternalTabContainer id={id} activeKey={activeKey} {...props} />
  </React.Fragment>
);

const TabsWithDiv = ({
  activeKey,
  className,
  id,
  isFilled,
  isSecondary,
  leftScrollAriaLabel,
  rightScrollAriaLabel,
  showLeftScrollButton,
  showRightScrollButton,
  highlightLeftScrollButton,
  highlightRightScrollButton,
  ...props
}) => (
  <React.Fragment>
    <div
      {...props}
      className={css(
        styles.tabs,
        isFilled && styles.modifiers.fill,
        isSecondary && styles.modifiers.tabsSecondary,
        showLeftScrollButton && styles.modifiers.start,
        showRightScrollButton && styles.modifiers.end,
        highlightLeftScrollButton && styles.modifiers.startCurrent,
        highlightRightScrollButton && styles.modifiers.endCurrent,
        className
      )}
    >
      <InternalTabs
        id={id}
        activeKey={activeKey}
        leftScrollAriaLabel={leftScrollAriaLabel}
        rightScrollAriaLabel={rightScrollAriaLabel}
        {...props}
      />
    </div>
    <InternalTabContainer id={id} activeKey={activeKey} {...props} />
  </React.Fragment>
);

class InternalTabs extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    showLeftScrollButton: false,
    showRightScrollButton: false,
    highlightLeftScrollButton: false,
    highlightRightScrollButton: false
  };

  tabList = React.createRef();

  handleTabClick(event, eventKey, tabContentRef) {
    this.props.onSelect(event, eventKey);
    // process any tab content sections outside of the component
    if (tabContentRef) {
      React.Children.map(this.props.children, (child, i) => {
        child.props.tabContentRef.current.hidden = true;
      });
      // most recently selected tabContent
      tabContentRef.current.hidden = false;
    }
  }

  handleScrollButtons = () => {
    if (this.tabList.current) {
      const container = this.tabList.current;
      // get first element and check if it is in view
      const showLeftScrollButton = !isElementInView(container, container.firstChild, false);

      // get lase element and check if it is in view
      const showRightScrollButton = !isElementInView(container, container.lastChild, false);

      // determine if selected tab is out of view and apply styles
      let selectedTab;
      const childrenArr = Array.from(container.children);
      childrenArr.forEach(child => {
        const { className } = child;
        if (className.search('pf-m-current') > 0) {
          selectedTab = child;
        }
      });

      const sideOutOfView = sideElementIsOutOfView(container, selectedTab);

      this.setState({
        showLeftScrollButton,
        showRightScrollButton,
        highlightLeftScrollButton: (sideOutOfView === SIDE.LEFT || sideOutOfView === SIDE.BOTH) && showLeftScrollButton,
        highlightRightScrollButton:
          (sideOutOfView === SIDE.RIGHT || sideOutOfView === SIDE.BOTH) && showRightScrollButton
      });
    }
  };

  scrollLeft = () => {
    // find first Element that is fully in view on the left, then scroll to the element before it
    if (this.tabList.current) {
      const container = this.tabList.current;
      const childrenArr = Array.from(container.children);
      let firstElementInView;
      let lastElementOutOfView;
      let i;
      for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
        if (isElementInView(container, childrenArr[i], false)) {
          firstElementInView = childrenArr[i];
          lastElementOutOfView = childrenArr[i - 1];
        }
      }
      lastElementOutOfView && (container.scrollLeft -= lastElementOutOfView.scrollWidth);
    }
  };

  scrollRight = () => {
    // find last Element that is fully in view on the right, then scroll to the element after it
    if (this.tabList.current) {
      const container = this.tabList.current;
      const childrenArr = Array.from(container.children);
      let lastElementInView;
      let firstElementOutOfView;
      let i;
      for (i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
        if (isElementInView(container, childrenArr[i], false)) {
          lastElementInView = childrenArr[i];
          firstElementOutOfView = childrenArr[i + 1];
        }
      }
      firstElementOutOfView && (container.scrollLeft += firstElementOutOfView.scrollWidth);
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleScrollButtons, false);
    // call the handle resize function to check if scroll buttons should be shown
    this.handleScrollButtons();
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.handleScrollButtons, false);
  }

  render() {
    const {
      className,
      children,
      activeKey,
      id,
      isFilled,
      isSecondary,
      leftScrollAriaLabel,
      rightScrollAriaLabel,
      ...props
    } = this.props;
    const {
      showLeftScrollButton,
      showRightScrollButton,
      highlightLeftScrollButton,
      highlightRightScrollButton
    } = this.state;

    return (
      <React.Fragment>
        {!isSecondary && (
          <button
            className={css(styles.tabsScrollButton)}
            variant="plain"
            aria-label={leftScrollAriaLabel}
            onClick={this.scrollLeft}
          >
            <AngleLeftIcon />
          </button>
        )}
        <ul className={css(styles.tabsList)} ref={this.tabList} onScroll={this.handleScrollButtons}>
          {children.map((child, index) => (
            <li
              key={index}
              className={css(
                styles.tabsItem,
                child.props.eventKey === activeKey && styles.modifiers.current,
                className
              )}
            >
              <Tab
                {...child.props}
                ref={node => {
                  this.child = node;
                }}
                className={css(styles.tabsButton)}
                onClick={event => this.handleTabClick(event, child.props.eventKey, child.props.tabContentRef)}
                id={`pf-tab-${child.props.eventKey}-${child.props.id || id}`}
                aria-controls={
                  child.props.tabContentId
                    ? child.props.tabContentId
                    : `pf-tab-section-${child.props.eventKey}-${child.props.id || id}`
                }
              >
                {child.props.title}
              </Tab>
            </li>
          ))}
        </ul>
        {!isSecondary && (
          <button
            className={css(styles.tabsScrollButton)}
            variant="plain"
            aria-label={rightScrollAriaLabel}
            onClick={this.scrollRight}
          >
            <AngleRightIcon />
          </button>
        )}
      </React.Fragment>
    );
  }
}

const InternalTabContainer = ({ activeKey, children, id, ...props }) => (
  <React.Fragment>
    {children.map((child, index) =>
      !child.props.children ? null : (
        <TabContent key={index} activeKey={activeKey} child={child} id={child.props.id || id} />
      )
    )}
  </React.Fragment>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
