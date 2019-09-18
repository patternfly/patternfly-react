import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { global_breakpoint_md, global_breakpoint_lg, global_breakpoint_xl } from '@patternfly/react-tokens/dist/js';
import { debounce } from '../../../helpers/util';

export interface OverflowMenuContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuContent */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint?: 'md' | 'lg' | 'xl';
}

export interface OverflowMenuContentState extends React.HTMLProps<HTMLDivElement> {
  isHidden: boolean;
  breakpoints: { 
    [index: string]: {value: string}
  };
}

export class OverflowMenuContent extends React.Component<OverflowMenuContentProps, OverflowMenuContentState> {
  constructor(props: OverflowMenuContentProps) {
    super(props);
    this.state = {
      isHidden: false,
      breakpoints: {
        global_breakpoint_md,
        global_breakpoint_lg,
        global_breakpoint_xl
      }
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', debounce(this.handleResize, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { breakpoint } = this.props;
    const { breakpoints } = this.state;
    let breakpointWidth: string | number = breakpoints[`global_breakpoint_${breakpoint}`].value;
    breakpointWidth = Number(breakpointWidth.split('px')[0]);
    const isHidden = window.innerWidth < breakpointWidth;
    this.state.isHidden !== isHidden && this.setState({ isHidden });
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={css(styles.overflowMenuContent, className)}>
        {React.Children.map(children, (menuItem: React.ReactElement<OverflowMenuContentState>) =>
          React.cloneElement(menuItem, {
            isHidden: this.state.isHidden
          })
        )}
      </div>
    )
  }
}