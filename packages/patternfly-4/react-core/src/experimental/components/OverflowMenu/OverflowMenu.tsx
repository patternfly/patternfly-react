import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css, getModifier } from '@patternfly/react-styles';
import { OverflowMenuContext } from './OverflowMenuContext';
import { global_breakpoint_md, global_breakpoint_lg, global_breakpoint_xl } from '@patternfly/react-tokens';
import { debounce } from '../../../helpers/util';

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenu. */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint: 'md' | 'lg' | 'xl';
}

export interface OverflowMenuState extends React.HTMLProps<HTMLDivElement> {
  isBelowBreakpoint: boolean;
}

export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
  constructor(props: OverflowMenuProps) {
    super(props);
    this.state = {
      isBelowBreakpoint: false
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', debounce(this.handleResize, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.handleResize, 250));
  }

  handleResize = () => {
    const breakpoints: { [index: string]: { value: string } } = {
      md: global_breakpoint_md,
      lg: global_breakpoint_lg,
      xl: global_breakpoint_xl
    };
    const { breakpoint } = this.props;
    let breakpointWidth: string | number = breakpoints[breakpoint].value;
    breakpointWidth = Number(breakpointWidth.split('px')[0]);
    const isBelowBreakpoint = window.innerWidth < breakpointWidth;
    this.state.isBelowBreakpoint !== isBelowBreakpoint && this.setState({ isBelowBreakpoint });
  };

  render() {
    const { className, breakpoint, children, ...props } = this.props;
    return (
      <div
        {...props}
        className={css(styles.overflowMenu, getModifier(styles.modifiers, `showOn ${breakpoint}`), className)}
      >
        <OverflowMenuContext.Provider value={{ isBelowBreakpoint: this.state.isBelowBreakpoint }}>
          {children}
        </OverflowMenuContext.Provider>
      </div>
    );
  }
}

OverflowMenu.contextType = OverflowMenuContext;
