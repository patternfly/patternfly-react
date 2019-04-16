/**
 * WindowScroller.js
 * https://github.com/bvaughn/react-virtualized/blob/9.21.0/source/WindowScroller/WindowScroller.js
 * Brian Vaughn
 *
 * Forked from version 9.21.0; includes the following modifications:
 * 1) Allow scrollElement to be queryable as a string using document.querySelector or passed as an element
 * */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { canUseDOM } from 'exenv';
import { registerScrollListener, unregisterScrollListener } from './utils/onScroll';
import { getDimensions, getPositionOffset, getScrollOffset } from './utils/dimensions';
import createDetectElementResize from './utils/detectElementResize';

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const IS_SCROLLING_TIMEOUT = 150;

const getWindow = () => (typeof window !== 'undefined' ? window : undefined);

class WindowScroller extends React.PureComponent {
  static defaultProps = {
    onResize: () => {},
    onScroll: () => {},
    scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
    scrollElement: getWindow(),
    serverHeight: 0,
    serverWidth: 0
  };

  _window = getWindow();
  _isMounted = false;
  _positionFromTop = 0;
  _positionFromLeft = 0;
  _detectElementResize = {
    addResizeListener: () => null,
    removeResizeListener: () => null
  };
  _child = null;

  constructor(props) {
    super(props);
    this.state = {
      ...getDimensions(this._getScrollElement(), this.props),
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };
    this.onResize = this.onResize.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  onResize() {
    this.updatePosition();
  }

  updatePosition(scrollable) {
    if (!canUseDOM) {
      return null;
    }

    const { onResize } = this.props;
    const { height, width } = this.state;
    const scrollElement = this._getScrollElement();

    const thisNode = this._child || ReactDOM.findDOMNode(this);
    if (thisNode instanceof Element && scrollElement) {
      const offset = getPositionOffset(thisNode, scrollElement);
      this._positionFromTop = offset.top;
      this._positionFromLeft = offset.left;
    }

    const dimensions = getDimensions(scrollElement, this.props);
    if (height !== dimensions.height || width !== dimensions.width) {
      this.setState({
        height: dimensions.height,
        width: dimensions.width
      });
      onResize({
        height: dimensions.height,
        width: dimensions.width
      });
    }
  }

  componentDidMount() {
    const scrollElement = this._getScrollElement();
    this._detectElementResize = createDetectElementResize();

    this.updatePosition(scrollElement);

    if (scrollElement) {
      registerScrollListener(this, scrollElement);
      this._registerResizeListener(scrollElement);
    }

    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!canUseDOM) {
      return;
    }
    const prevScrollElement = document.getElementById(prevProps.scrollElement);
    const scrollElement = this._getScrollElement();

    if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
      this.updatePosition(scrollElement);

      unregisterScrollListener(this, prevScrollElement);
      registerScrollListener(this, scrollElement);

      this._unregisterResizeListener(prevScrollElement);
      this._registerResizeListener(scrollElement);
    }
  }

  componentWillUnmount() {
    const scrollElement = this._getScrollElement();
    if (scrollElement) {
      unregisterScrollListener(this, scrollElement);
      this._unregisterResizeListener(scrollElement);
    }

    this._isMounted = false;
  }

  render() {
    const { children } = this.props;
    const { isScrolling, scrollTop, scrollLeft, height, width } = this.state;

    return children({
      onChildScroll: this._onChildScroll,
      registerChild: this._registerChild,
      height,
      isScrolling,
      scrollLeft,
      scrollTop,
      width
    });
  }

  _getScrollElement() {
    if (!canUseDOM) {
      return null;
    }

    const { scrollElement } = this.props;
    if (typeof scrollElement === 'string') {
      return document.querySelector(scrollElement);
    }
    // scrollElement defaults to Window
    return scrollElement;
  }

  _registerChild = element => {
    if (element && !(element instanceof Element)) {
      console.warn('WindowScroller registerChild expects to be passed Element or null');
    }
    this._child = element;
    this.updatePosition();
  };

  _onChildScroll = ({ scrollTop }) => {
    if (this.state.scrollTop === scrollTop) {
      return;
    }
    const scrollElement = this._getScrollElement();
    if (scrollElement) {
      if (typeof scrollElement.scrollTo === 'function') {
        scrollElement.scrollTo(0, scrollTop + this._positionFromTop);
      } else {
        scrollElement.scrollTop = scrollTop + this._positionFromTop;
      }
    }
  };

  _registerResizeListener = element => {
    if (element === window) {
      window.addEventListener('resize', this.onResize, false);
    } else {
      this._detectElementResize.addResizeListener(element, this.onResize);
    }
  };

  _unregisterResizeListener = element => {
    if (element === window) {
      window.removeEventListener('resize', this.onResize, false);
    } else if (element && element.__resizeListeners__) {
      this._detectElementResize.removeResizeListener(element, this.onResize);
    }
  };

  // Referenced by utils/onScroll
  __handleWindowScrollEvent = () => {
    if (!this._isMounted) {
      return;
    }

    const { onScroll } = this.props;
    const scrollElement = this._getScrollElement();

    if (scrollElement) {
      const scrollOffset = getScrollOffset(scrollElement);
      const scrollLeft = Math.max(0, scrollOffset.left - this._positionFromLeft);
      const scrollTop = Math.max(0, scrollOffset.top - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollLeft,
        scrollTop
      });

      onScroll({
        scrollLeft,
        scrollTop
      });
    }
  };

  // Referenced by utils/onScroll
  __resetIsScrolling = () => {
    this.setState({
      isScrolling: false
    });
  };
}

WindowScroller.propTypes = {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: PropTypes.func.isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: PropTypes.func,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: PropTypes.func,

  /** Query string for element to attach scroll event listeners. Defaults to window if no element query string provided. */
  scrollElement: PropTypes.string,
  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: PropTypes.number,

  /** Height used for server-side rendering */
  serverHeight: PropTypes.number,

  /** Width used for server-side rendering */
  serverWidth: PropTypes.number
};

export default WindowScroller;
