import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { global_breakpoint_md, global_breakpoint_lg, global_breakpoint_xl } from '@patternfly/react-tokens';
import { debounce } from '../../../helpers/util';
import { OverflowMenuContext, OverflowMenuContentContext } from './OverflowMenuContexts';

export interface OverflowMenuContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuContent */
  className?: string;
}

export interface OverflowMenuContentState extends React.HTMLProps<HTMLDivElement> {
  isHidden: boolean;
}

export class OverflowMenuContent extends React.Component<OverflowMenuContentProps, OverflowMenuContentState> {
  constructor(props: OverflowMenuContentProps) {
    super(props);
    this.state = {
      isHidden: false,
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', debounce(this.handleResize, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.handleResize, 250));
  }

  handleResize = () => {
    const breakpoints: {[index: string]: {value: string}} = {
      md: global_breakpoint_md,
      lg: global_breakpoint_lg,
      xl: global_breakpoint_xl
    }
    const { breakpoint } = this.context;
    let breakpointWidth: string | number = breakpoints[breakpoint].value;
    breakpointWidth = Number(breakpointWidth.split('px')[0]);
    const isHidden = window.innerWidth < breakpointWidth;
    this.state.isHidden !== isHidden && this.setState({ isHidden });
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={css(styles.overflowMenuContent, className)}>
        <OverflowMenuContentContext.Provider value={{ isHidden: this.state.isHidden }}>
          { children }
        </OverflowMenuContentContext.Provider>
      </div>
    )
  }
}

OverflowMenuContent.contextType = OverflowMenuContext;
