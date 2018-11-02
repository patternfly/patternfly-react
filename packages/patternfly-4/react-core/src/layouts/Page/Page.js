import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Page/page.css';
import { css } from '@patternfly/react-styles';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
import PropTypes from 'prop-types';
import { debounce } from '../../internal/util';

export const PageLayouts = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};

const propTypes = {
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children: PropTypes.node,
  /** Additional classes added to the page layout */
  className: PropTypes.string,
  /** Header component (e.g. <PageHeader />) */
  header: PropTypes.node,
  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar: PropTypes.node,
  /** enable condensed header on scroll feature (for desktop only). Adjusts the height on scroll of the page header and horizontal nav. */
  useCondensed: PropTypes.bool,
  /** condensed height override */
  scrollingDistance: PropTypes.number
};

const defaultProps = {
  children: null,
  className: '',
  header: null,
  sidebar: null,
  useCondensed: false,
  scrollingDistance: 20
};

export const PageContext = React.createContext();

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.mainRef = React.createRef();

    this.state = {
      isTall: this.isTall(props)
    };
  }
  componentDidMount() {
    const { useCondensed } = this.props;
    if (useCondensed) {
      // I picked this because it's approx 1 frame (ie: 16.7ms)
      this.mainRef.current.addEventListener('scroll', debounce(this.handleScroll, 16));
      window.addEventListener('resize', this.handleResize);
    }
  }
  componentWillUnmount() {
    const { useCondensed } = this.props;
    if (useCondensed) {
      this.mainRef.current.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }

  // only enable tall header if the user is using the `useCondensed` header feature and we are on desktop
  isTall = props =>
    props.useCondensed && typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);

  handleResize = () => {
    this.setState({ isTall: this.isTall(this.props) });
  };

  handleScroll = e => {
    const { scrollingDistance } = this.props;
    const { isTall } = this.state;
    if (this.isTall(this.props)) {
      window.requestAnimationFrame(() => {
        const main = e.target;
        const mainPosition = main.scrollTop;
        if (mainPosition > scrollingDistance && isTall) {
          this.setState({ isTall: false });
        } else if (mainPosition < scrollingDistance && !isTall) {
          this.setState({ isTall: true });
        }
      });
    }
  };

  render() {
    const { className, children, header, sidebar, useCondensed, scrollingDistance, ...rest } = this.props;
    const { isTall } = this.state;

    return (
      <PageContext.Provider value={{ isTall }}>
        <div {...rest} className={css(styles.page, className)}>
          {header}
          {sidebar}
          <main ref={this.mainRef} role="main" className={css(styles.pageMain)}>
            {children}
          </main>
        </div>
      </PageContext.Provider>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
