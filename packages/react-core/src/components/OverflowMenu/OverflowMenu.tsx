import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css } from '@patternfly/react-styles';
import { OverflowMenuContext } from './OverflowMenuContext';
import { debounce } from '../../helpers/util';
import { globalWidthBreakpoints } from '../../helpers/constants';
import { getResizeObserver } from '../../helpers/resizeObserver';

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenu. */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** A container reference to base the specified breakpoint on instead of the viewport width. */
  breakpointReference?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
}

export interface OverflowMenuState extends React.HTMLProps<HTMLDivElement> {
  isBelowBreakpoint: boolean;
  breakpointRef: HTMLElement;
}

export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
  static displayName = 'OverflowMenu';
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

  handleResizeWithDelay = debounce(this.handleResize, 250);

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, breakpoint, children, breakpointReference, ...props } = this.props;

    return (
      <div {...props} className={css(styles.overflowMenu, className)}>
        <OverflowMenuContext.Provider value={{ isBelowBreakpoint: this.state.isBelowBreakpoint }}>
          {children}
        </OverflowMenuContext.Provider>
      </div>
    );
  }
}

OverflowMenu.contextType = OverflowMenuContext;
