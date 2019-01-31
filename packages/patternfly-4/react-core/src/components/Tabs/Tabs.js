import React from 'react';
import styles from '@patternfly/patternfly-next/components/Tabs/tabs.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import { getUniqueId, isElementInView, sideElementIsOutOfView } from '../../internal/util';
import { SIDE } from '../../internal/constants';

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
  rightScrollAriaLabel: PropTypes.string
};

const defaultProps = {
  className: '',
  activeKey: 0,
  onSelect: () => undefined,
  isFilled: false,
  isSecondary: false,
  leftScrollAriaLabel: 'Scroll left',
  rightScrollAriaLabel: 'Scroll Right'
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

  handleTabClick(event, eventKey) {
    this.props.onSelect(event, eventKey);
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
                <button
                  className={css(styles.tabsButton)}
                  onClick={event => this.handleTabClick(event, child.props.eventKey)}
                  id={`pf-tab-${child.props.eventKey}-${child.props.id || this.id}`}
                  aria-controls={`pf-tab-section-${child.props.eventKey}-${child.props.id || this.id}`}
                >
                  {child.props.title}
                </button>
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
        </div>
        {children.map((child, index) => (
          <section
            key={index}
            hidden={child.props.eventKey !== activeKey}
            className={css(child.props.className)}
            id={`pf-tab-section-${child.props.eventKey}-${child.props.id || this.id}`}
            aria-labelledby={`pf-tab-${child.props.eventKey}-${child.props.id || this.id}`}
          >
            {child.props.children}
          </section>
        ))}
      </React.Fragment>
    );
  }
}

export default Tabs;
