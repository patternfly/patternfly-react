import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Page/page.css';
import { css } from '@patternfly/react-styles';
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
  /** condensed header on scroll */
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

class Page extends React.Component {
  state = { isCondensed: false };

  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
  }
  componentDidMount() {
    const { useCondensed } = this.props;
    if (useCondensed) {
      // I picked this because it's approx 1 frame (ie: 16.7ms)
      this.mainRef.current.addEventListener('scroll', debounce(this.handleScroll, 16));
    }
  }
  componentWillUnmount() {
    const { useCondensed } = this.props;
    if (useCondensed) {
      this.mainRef.current.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = e => {
    window.requestAnimationFrame(() => {
      const { isCondensed } = this.state;
      const { scrollingDistance } = this.props;
      const main = e.target;
      const mainPosition = main.scrollTop;
      if (mainPosition > scrollingDistance && !isCondensed) {
        this.setState({ isCondensed: true });
      } else if (mainPosition < scrollingDistance && isCondensed) {
        this.setState({ isCondensed: false });
      }
    });
  };

  render() {
    const { className, children, header, sidebar, useCondensed, scrollingDistance, ...rest } = this.props;
    const { isCondensed } = this.state;

    const clonedHeader = React.cloneElement(header, { isCondensed });
    return (
      <div {...rest} className={css(styles.page, className)}>
        {useCondensed ? clonedHeader : header}
        {sidebar}
        <main ref={this.mainRef} role="main" className={css(styles.pageMain)}>
          {children}
        </main>
      </div>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
