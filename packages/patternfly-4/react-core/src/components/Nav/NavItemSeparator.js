import React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the nav item separator */
  className: PropTypes.string,
  /** Additional props are spread to the container <li> */
  '': PropTypes.any
};

const defaultProps = {
  className: ''
};

const NavItemSeparator = ({ className, ...rest }) => (
  <li className={css(styles.navSeparator, className)} role="separator" {...rest} />
);

NavItemSeparator.propTypes = propTypes;
NavItemSeparator.defaultProps = defaultProps;
NavItemSeparator.componentType = 'NavItemSeparator';

export default NavItemSeparator;
