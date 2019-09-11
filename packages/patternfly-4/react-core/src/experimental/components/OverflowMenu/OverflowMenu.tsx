import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css, getModifier } from '@patternfly/react-styles';

console.log(styles);

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  children?: any;
  className?: string;
  // Md, Lg, Xl
  breakpoint: string;
}

interface OverflowMenuState {
  windowWidth: number;
}

export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
  constructor(props: OverflowMenuProps) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  handleWindowResize = (event: any) => {
    if (window.innerWidth !== this.state.windowWidth) {
      this.setState({ windowWidth: window.innerWidth });
    }
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize);
  };

  render() {
    const {
      className,
      breakpoint = 'Lg',
      children
    } = this.props;
    return (
      <div
        {...this.props}
        className={css(
          styles.overflowMenu,
          getModifier(styles.modifiers, `showOn${breakpoint}`),
          className
        )}
      >
        { children }
      </div>
    );
  }
}
