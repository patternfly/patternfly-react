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
  condensedHeader: PropTypes.bool,
  /** codensed height override */
  condensedHeight: PropTypes.number
};

const defaultProps = {
  children: null,
  className: '',
  header: null,
  sidebar: null,
  condensedHeader: false,
  condensedHeight: 20
};

class Page extends React.Component {
  state = { headerCondensed: false };

  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
  }
  componentDidMount() {
    const { condensedHeader } = this.props;
    if (condensedHeader) {
      this.mainRef.current.addEventListener('scroll', debounce(this.handleScroll, 16));
    }
  }
  componentWillUnmount() {
    const { condensedHeader } = this.props;
    if (condensedHeader) {
      this.mainRef.current.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = e => {
    const { headerCondensed } = this.state;
    const { condensedHeight } = this.props;
    const main = e.target;
    const mainPosition = main.scrollTop;
    if (mainPosition > condensedHeight && !headerCondensed) {
      this.setState({ headerCondensed: true });
    } else if (mainPosition < condensedHeight && headerCondensed) {
      this.setState({ headerCondensed: false });
    }
  };

  render() {
    const { className, children, header, sidebar, condensedHeader, condensedHeight, ...rest } = this.props;
    const { headerCondensed } = this.state;

    const clonedHeader = React.cloneElement(header, { condensed: headerCondensed });
    return (
      <div {...rest} className={css(styles.page, className)}>
        {condensedHeader ? clonedHeader : header}
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
