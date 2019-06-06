import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Additional classes added to the page sidebar */
  className: PropTypes.string,
  /** Component to render the side navigation (e.g. <Nav /> */
  nav: PropTypes.node,
  /** Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
  isNavOpen: PropTypes.bool,
  /** Additional props are spread to the container <aside> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
    <div className={css(styles.pageSidebarBody)}>{nav}</div>
  </div>
);

PageSidebar.propTypes = propTypes;
PageSidebar.defaultProps = defaultProps;

export default PageSidebar;
