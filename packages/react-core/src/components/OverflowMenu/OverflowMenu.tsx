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
  /** Flag to indicate that the specified breakpoint should be relative to the overflow menu
   * container width instead of the viewport width.
   */
  hasBreakpointOnContainer?: boolean;
}

export interface OverflowMenuState extends React.HTMLProps<HTMLDivElement> {
  isBelowBreakpoint: boolean;
}

export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
  static displayName = 'OverflowMenu';
  constructor(props: OverflowMenuProps) {
    super(props);
    this.state = {
      isBelowBreakpoint: false
    };
  }

  overflowMenuRef = React.createRef<HTMLDivElement>();
  observer: any = () => {};

  componentDidMount() {
    this.handleResize();

    const containerToObserve = this.props.hasBreakpointOnContainer && this.overflowMenuRef.current;
    this.observer = getResizeObserver(containerToObserve, this.handleResizeWithDelay);
  }

  componentWillUnmount() {
    this.observer();
  }

  handleResize = () => {
    const { hasBreakpointOnContainer } = this.props;
    const breakpointWidth = globalWidthBreakpoints[this.props.breakpoint];
    if (!breakpointWidth) {
      // eslint-disable-next-line no-console
      console.error('OverflowMenu will not be visible without a valid breakpoint.');
      return;
    }

    const relativeWidth = hasBreakpointOnContainer ? this.overflowMenuRef.current.clientWidth : window.innerWidth;
    const isBelowBreakpoint = relativeWidth < breakpointWidth;
    if (this.state.isBelowBreakpoint !== isBelowBreakpoint) {
      this.setState({ isBelowBreakpoint });
    }
  };

  handleResizeWithDelay = debounce(this.handleResize, 250);

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, breakpoint, children, hasBreakpointOnContainer, ...props } = this.props;

    return (
      <div {...props} className={css(styles.overflowMenu, className)} ref={this.overflowMenuRef}>
        <OverflowMenuContext.Provider value={{ isBelowBreakpoint: this.state.isBelowBreakpoint }}>
          {children}
        </OverflowMenuContext.Provider>
      </div>
    );
  }
}

OverflowMenu.contextType = OverflowMenuContext;
