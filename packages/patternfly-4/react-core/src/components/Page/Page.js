import React, { cloneElement } from 'react';
import styles from '@patternfly/patternfly/components/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { global_breakpoint_md as globalBreakpointMd } from '@patternfly/react-tokens';
import { debounce } from '../../helpers/util';

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
  /** Skip to content component for the page */
  skipToContent: PropTypes.node,
  /** Breadcrumb component for the page */
  breadcrumb: PropTypes.node,
  /** If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into
   * the sidebar component or add a callback onNavToggle function into the PageHeader component */
  isManagedSidebar: PropTypes.bool,
  /** Can add callback to be notified when resize occurs, for example to set the sidebar isNav prop to false for a width < 768px
   * Returns object { mobileView: boolean, windowSize: number } */
  onPageResize: PropTypes.func,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  breadcrumb: null,
  children: null,
  className: '',
  header: null,
  sidebar: null,
  skipToContent: null,
  isManagedSidebar: false,
  onPageResize: null
};

class Page extends React.Component {
  state = {
    desktopIsNavOpen: true,
    mobileIsNavOpen: false,
    mobileView: false
  };

  componentDidMount() {
    const { isManagedSidebar, onPageResize } = this.props;
    if (isManagedSidebar || onPageResize) {
      window.addEventListener('resize', debounce(this.handleResize, 250));
      // Initial check if should be shown
      this.handleResize();
    }
  }

  componentWillUnmount() {
    const { isManagedSidebar, onPageResize } = this.props;
    (isManagedSidebar || onPageResize) && window.removeEventListener('resize', debounce(this.handleResize, 250));
  }

  handleResize = e => {
    const { onPageResize } = this.props;
    const windowSize = window.innerWidth;
    const mobileView = windowSize < Number.parseInt(globalBreakpointMd.value, 10);
    onPageResize && onPageResize({ mobileView, windowSize });
    this.setState(prevState => ({
      mobileView
    }));
  };

  onNavToggleMobile = () => {
    this.setState({
      mobileIsNavOpen: !this.state.mobileIsNavOpen
    });
  };

  onNavToggleDesktop = () => {
    this.setState({
      desktopIsNavOpen: !this.state.desktopIsNavOpen
    });
  };

  render() {
    const {
      breadcrumb,
      className,
      children,
      header,
      sidebar,
      skipToContent,
      isManagedSidebar,
      onPageResize,
      ...rest
    } = this.props;
    const { mobileView, mobileIsNavOpen, desktopIsNavOpen } = this.state;

    return (
      <div {...rest} className={css(styles.page, className)}>
        {skipToContent}
        {isManagedSidebar
          ? cloneElement(header, {
              onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
              isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
            })
          : header}
        {isManagedSidebar
          ? cloneElement(sidebar, {
              isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
            })
          : sidebar}
        <main role="main" className={css(styles.pageMain)}>
          {breadcrumb && <section className={css(styles.pageMainBreadcrumb)}>{breadcrumb}</section>}
          {skipToContent && <a id={skipToContent.props.href.replace(/#*/, '')} />}
          {children}
        </main>
      </div>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
