import { Component } from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css } from '@patternfly/react-styles';
import { OverflowMenuContext } from './OverflowMenuContext';
import { debounce } from '../../helpers/util';
import { globalWidthBreakpoints, globalHeightBreakpoints } from '../../helpers/constants';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { PickOptional } from '../../helpers/typeUtils';

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenu. */
  className?: string;
  /** Indicates breakpoint at which to switch between expanded and collapsed states. The "sm" breakpoint does not apply to vertical overflow menus. */
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** A container reference to base the specified breakpoint on instead of the viewport width. */
  breakpointReference?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
  /** Indicates the overflow menu orientation is vertical and should respond to height changes instead of width. */
  isVertical?: boolean;
}

export interface OverflowMenuState extends React.HTMLProps<HTMLDivElement> {
  isBelowBreakpoint: boolean;
  breakpointRef: HTMLElement;
}

class OverflowMenu extends Component<OverflowMenuProps, OverflowMenuState> {
  static displayName = 'OverflowMenu';

  static defaultProps: PickOptional<OverflowMenuProps> = {
    isVertical: false
  };

  constructor(props: OverflowMenuProps) {
    super(props);
    this.state = {
      isBelowBreakpoint: false,
      breakpointRef: undefined
    };
  }

  observer: any = () => {};

  getBreakpointRef() {
    const { breakpointReference } = this.props;

    if ((breakpointReference as React.RefObject<any>).current) {
      return (breakpointReference as React.RefObject<any>).current;
    } else if (typeof breakpointReference === 'function') {
      return breakpointReference();
    }
  }

  componentDidMount() {
    const reference = this.props.breakpointReference ? this.getBreakpointRef() : undefined;

    this.setState({ breakpointRef: reference });
    this.observer = getResizeObserver(reference, this.handleResizeWithDelay);
    this.handleResize();
  }

  componentDidUpdate(prevProps: Readonly<OverflowMenuProps>, prevState: Readonly<OverflowMenuState>): void {
    const reference = this.props.breakpointReference ? this.getBreakpointRef() : undefined;

    if (prevState.breakpointRef !== reference) {
      // To remove any previous observer/event listener from componentDidMount before adding a new one
      this.observer();
      this.setState({ breakpointRef: reference });
      this.observer = getResizeObserver(reference, this.handleResizeWithDelay);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    this.observer();
  }

  handleResize = () => {
    const { isVertical } = this.props;
    if (isVertical) {
      this.handleResizeHeight();
    } else {
      this.handleResizeWidth();
    }
  };

  handleResizeWidth = () => {
    const breakpointWidth = globalWidthBreakpoints[this.props.breakpoint];
    if (!breakpointWidth) {
      // eslint-disable-next-line no-console
      console.error('OverflowMenu will not be visible without a valid breakpoint.');
      return;
    }

    const relativeWidth = this.state.breakpointRef ? this.state.breakpointRef.clientWidth : window.innerWidth;
    const isBelowBreakpoint = relativeWidth < breakpointWidth;
    if (this.state.isBelowBreakpoint !== isBelowBreakpoint) {
      this.setState({ isBelowBreakpoint });
    }
  };

  handleResizeHeight = () => {
    const breakpointHeight = globalHeightBreakpoints[this.props.breakpoint];
    if (breakpointHeight === 0) {
      // eslint-disable-next-line no-console
      console.warn('The "sm" breakpoint does not apply to vertical overflow menus.');
      return;
    }

    if (!breakpointHeight) {
      // eslint-disable-next-line no-console
      console.error('OverflowMenu will not be visible without a valid breakpoint.');
      return;
    }

    const relativeHeight = this.state.breakpointRef ? this.state.breakpointRef.clientHeight : window.innerHeight;
    const isBelowBreakpoint = relativeHeight < breakpointHeight;
    if (this.state.isBelowBreakpoint !== isBelowBreakpoint) {
      this.setState({ isBelowBreakpoint });
    }
  };

  handleResizeWithDelay = debounce(this.handleResize, 250);

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, breakpoint, children, breakpointReference, isVertical, ...props } = this.props;

    return (
      <div {...props} className={css(styles.overflowMenu, isVertical && styles.modifiers.vertical, className)}>
        <OverflowMenuContext.Provider value={{ isBelowBreakpoint: this.state.isBelowBreakpoint }}>
          {children}
        </OverflowMenuContext.Provider>
      </div>
    );
  }
}

OverflowMenu.contextType = OverflowMenuContext;

export { OverflowMenu };
