import React from 'react';
import styles from '@patternfly/patternfly-next/components/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

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
  sidebar: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  header: null,
  sidebar: null
};

const Page = props => {
  const { className, children, header, sidebar, ...rest } = props;
  return (
    <div {...rest} className={css(styles.page, className)}>
      {header}
      {sidebar}
      <main role="main" className={css(styles.pageMain)}>
        {children}
      </main>
    </div>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
