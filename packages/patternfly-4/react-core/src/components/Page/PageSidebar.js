import React from 'react';
import styles from '@patternfly/patternfly-next/components/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the page sidebar */
  className: PropTypes.string,
  /** Component to render the side navigation (e.g. <Nav /> */
  nav: PropTypes.node,
  /** True if the side nav is shown  */
  isNavOpen: PropTypes.bool,
  /** Additional props are spread to the container <aside> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  nav: null,
  isNavOpen: true
};

const PageSidebar = ({ className, nav, isNavOpen, ...props }) => (
  <div
    id="page-sidebar"
    className={css(
      styles.pageSidebar,
      isNavOpen && styles.modifiers.expanded,
      !isNavOpen && styles.modifiers.collapsed,
      className
    )}
    {...props}
  >
    {nav}
  </div>
);

PageSidebar.propTypes = propTypes;
PageSidebar.defaultProps = defaultProps;

export default PageSidebar;
