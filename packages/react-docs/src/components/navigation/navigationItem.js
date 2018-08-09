import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './navigationItem.styles';
import Link from 'gatsby-link';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

const NavigationItem = ({ to, children }) => (
  <li>
    <Link className={css(styles.navigationItem)} activeClassName={css(styles.active)} to={to}>
      {children}
    </Link>
  </li>
);

NavigationItem.propTypes = propTypes;

export default NavigationItem;
