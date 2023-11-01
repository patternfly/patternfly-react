import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { isElementInView } from '../../helpers/util';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { getResizeObserver } from '../../helpers/resizeObserver';

export interface NavListProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** @deprecated Please use backScrollAriaLabel. Aria-label for the left scroll button */
  ariaLeftScroll?: string;
  /** @deprecated Please use forwardScrollAriaLabel. Aria-label for the right scroll button */
  ariaRightScroll?: string;
  /** Aria-label for the back scroll button */
  backScrollAriaLabel?: string;
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel?: string;
}

class NavList extends React.Component<NavListProps> {
  static displayName = 'NavList';
  static contextType = NavContext;
  context!: React.ContextType<typeof NavContext>;
  static defaultProps: NavListProps = {
    ariaLeftScroll: 'Scroll left',
    backScrollAriaLabel: 'Scroll back',
    ariaRightScroll: 'Scroll right',
    forwardScrollAriaLabel: 'Scroll foward'
  };
  private direction = 'ltr';

  state = {
    scrollViewAtStart: false,
    scrollViewAtEnd: false
  };

  navList = React.createRef<HTMLUListElement>();
  observer: any = () => {};

  handleScrollButtons = () => {
    const container = this.navList.current;
    if (container) {
      // check if it elements are in view
      const scrollViewAtStart = isElementInView(container, container.firstChild as HTMLElement, false);
      const scrollViewAtEnd = isElementInView(container, container.lastChild as HTMLElement, false);
      this.setState({
        scrollViewAtStart,
        scrollViewAtEnd
      });
      this.context.updateIsScrollable(!scrollViewAtStart || !scrollViewAtEnd);
    }
  };

  scrollBack = () => {
    // find first Element that is fully in view on the left, then scroll to the element before it
    const container = this.navList.current;
    if (container) {
      const childrenArr = Array.from(container.children);
      let firstElementInView: Element;
      let lastElementOutOfView: Element;
      for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
        if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
          firstElementInView = childrenArr[i];
          lastElementOutOfView = childrenArr[i - 1];
        }
      }
      if (lastElementOutOfView) {
        if (this.direction === 'ltr') {
          // LTR scrolls left to go back
          container.scrollLeft -= lastElementOutOfView.scrollWidth;
        } else {
          // RTL scrolls right to go back
          container.scrollLeft += lastElementOutOfView.scrollWidth;
        }
      }
      this.handleScrollButtons();
    }
  };

  scrollForward = () => {
    // find last Element that is fully in view on the right, then scroll to the element after it
    const container = this.navList.current;
    if (container) {
      const childrenArr = Array.from(container.children);
      let lastElementInView: Element;
      let firstElementOutOfView: Element;
      for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
        if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
          lastElementInView = childrenArr[i];
          firstElementOutOfView = childrenArr[i + 1];
        }
      }
      if (firstElementOutOfView) {
        if (this.direction === 'ltr') {
          // LTR scrolls right to go forward
          container.scrollLeft += firstElementOutOfView.scrollWidth;
        } else {
          // RTL scrolls left to go forward
          container.scrollLeft -= firstElementOutOfView.scrollWidth;
        }
      }
      this.handleScrollButtons();
    }
  };

  componentDidMount() {
    this.observer = getResizeObserver(this.navList.current, this.handleScrollButtons, true);
    this.direction = getComputedStyle(this.navList.current).getPropertyValue('direction');
    this.handleScrollButtons();
  }

  componentWillUnmount() {
    this.observer();
  }

  componentDidUpdate() {
    this.direction = getComputedStyle(this.navList.current).getPropertyValue('direction');
  }

  render() {
    const {
      children,
      className,
      ariaLeftScroll,
      ariaRightScroll,
      backScrollAriaLabel,
      forwardScrollAriaLabel,
      ...props
    } = this.props;
    const { scrollViewAtStart, scrollViewAtEnd } = this.state;

    return (
      <NavContext.Consumer>
        {({ isHorizontal }) => (
          <PageSidebarContext.Consumer>
            {({ isSidebarOpen }) => (
              <React.Fragment>
                {isHorizontal && (
                  <button
                    className={css(styles.navScrollButton)}
                    aria-label={backScrollAriaLabel || ariaLeftScroll}
                    onClick={this.scrollBack}
                    disabled={scrollViewAtStart}
                    tabIndex={isSidebarOpen ? null : -1}
                  >
                    <AngleLeftIcon />
                  </button>
                )}
                <ul
                  ref={this.navList}
                  className={css(styles.navList, className)}
                  onScroll={this.handleScrollButtons}
                  role="list"
                  {...props}
                >
                  {children}
                </ul>
                {isHorizontal && (
                  <button
                    className={css(styles.navScrollButton)}
                    aria-label={forwardScrollAriaLabel || ariaRightScroll}
                    onClick={this.scrollForward}
                    disabled={scrollViewAtEnd}
                    tabIndex={isSidebarOpen ? null : -1}
                  >
                    <AngleRightIcon />
                  </button>
                )}
              </React.Fragment>
            )}
          </PageSidebarContext.Consumer>
        )}
      </NavContext.Consumer>
    );
  }
}

export { NavList };
