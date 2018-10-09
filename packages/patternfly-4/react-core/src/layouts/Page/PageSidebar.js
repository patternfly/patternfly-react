import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the page sidebar */
  className: PropTypes.string,
  /** Component to render the side navigation (e.g. <Nav /> */
  nav: PropTypes.node,
  /** True if the side nav is shown  */
  isNavOpen: PropTypes.bool
};

const defaultProps = {
  className: '',
  nav: null,
  isNavOpen: true
};

const PageSidebar = ({ className, nav, isNavOpen, ...props }) => (
  <aside
    className={css(
      styles.pageSidebar,
      isNavOpen && styles.modifiers.expanded,
      !isNavOpen && styles.modifiers.collapsed,
      className
    )}
    {...props}
  >
    {nav}
  </aside>
);

PageSidebar.propTypes = propTypes;
PageSidebar.defaultProps = defaultProps;

export default PageSidebar;
