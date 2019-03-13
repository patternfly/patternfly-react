import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/patternfly/components/Tabs/tabs.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import { getUniqueId, isElementInView, sideElementIsOutOfView } from '../../helpers/util';
import { SIDE } from '../../helpers/constants';
import TabContent from './TabContent';
import Tab from './Tab';

const propTypes = {
  /** content rendered inside the Tabs Component. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the Tabs */
  className: PropTypes.string,
  /** the index of the active tab */
  activeKey: PropTypes.number,
  /** handel tab selection */
  onSelect: PropTypes.func,
  /** Enables the filled tab list layout */
  isFilled: PropTypes.bool,
  /** Enables Secondary Tab styling */
  isSecondary: PropTypes.bool,
  /** Aria Label for the left Scroll Button */
  leftScrollAriaLabel: PropTypes.string,
  /** Aria Label for the right Scroll Button */
  rightScrollAriaLabel: PropTypes.string,
  /** allows for accessible Tabs with aria-label (should only be used if there is only one Tabs component on the current page) */
  label: PropTypes.string
};

const defaultProps = {
  className: '',
  activeKey: 0,
  onSelect: () => undefined,
  isFilled: false,
  isSecondary: false,
  leftScrollAriaLabel: 'Scroll left',
  rightScrollAriaLabel: 'Scroll Right',
  label: ''
};

class Tabs extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    showLeftScrollButton: false,
    showRightScrollButton: false,
    highlightLeftScrollButton: false,
    highlightRightScrollButton: false
  };

  id = getUniqueId();
  tabList = React.createRef();

  handleTabClick(event, eventKey, tabContentId, tabContentRef) {
    this.props.onSelect(event, eventKey);
    // process any tab content sections outside of the component
    if (tabContentRef) {
      React.Children.map(this.props.children, (child, i) => {
        const section = ReactDOM.findDOMNode(child.props.tabContentRef.current);
        if (section) {
          section.hidden = true;
        }
      });
      // most recently selected tabContent
      const selectedTabContent = ReactDOM.findDOMNode(tabContentRef.current);
      if (selectedTabContent) {
        selectedTabContent.hidden = false;
      }
    } else if (tabContentId) {
      React.Children.map(this.props.children, (child, i) => {
        const section = document.getElementById(child.props.tabContentId);
        if (section && section.tagName === 'SECTION') {
          section.hidden = true;
        }
      });
      // most recently selected tabContent
      const selectedTabContent = document.getElementById(tabContentId);
      if (selectedTabContent && selectedTabContent.tagName === 'SECTION') {
        selectedTabContent.hidden = false;
      }
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
      isFilled,
      isSecondary,
      label,
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

    const wrapperClass = css(
      styles.tabs,
      isFilled && styles.modifiers.fill,
      isSecondary && styles.modifiers.tabsSecondary,
      showLeftScrollButton && styles.modifiers.start,
      showRightScrollButton && styles.modifiers.end,
      highlightLeftScrollButton && styles.modifiers.startCurrent,
      highlightRightScrollButton && styles.modifiers.endCurrent,
      className
    );
    const component = <React.Fragment>
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
            <Tab {...child.props}
              ref={(node) => { this.child = node; }}
              className={css(styles.tabsButton)}
              onClick={event => this.handleTabClick(event, child.props.eventKey, child.props.tabContentId, child.props.tabContentRef)}
              id={`pf-tab-${child.props.eventKey}-${child.props.id || this.id}`}
              aria-controls={child.props.tabContentId ? `pf-tab-section-${child.props.eventKey}-${child.props.tabContentId}` : `pf-tab-section-${child.props.eventKey}-${child.props.id || this.id}`}>
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
    </React.Fragment>;

    return (
      <React.Fragment>
        {label !== ''
          ? <nav {...props}
            aria-label={label}
            className={wrapperClass}
          >
            {component}
          </nav>
          : <div {...props}
            className={wrapperClass}
          >
            {component}
          </div>
        }
        {children && children.map((child, index) => (
          <TabContent key={index} activeKey={activeKey} child={child} index={index} id={child.props.id || this.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default Tabs;
