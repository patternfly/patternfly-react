import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuContent */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint?: 'Md' | 'Lg' | 'Xl';
}

export interface OverflowMenuContentState extends React.HTMLProps<HTMLDivElement> {
  isHidden: boolean;
}

export class OverflowMenuContent extends React.Component<OverflowMenuContentProps, OverflowMenuContentState> {
  constructor(props: OverflowMenuContentProps) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { breakpoint } = this.props;
    const breakpointWidth = (breakpoint === 'Md')
      ? 768
      : (breakpoint === 'Lg')
        ? 992
        : 1200;
    this.setState({ isHidden: window.innerWidth < breakpointWidth });
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