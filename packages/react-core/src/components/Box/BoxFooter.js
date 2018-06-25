import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Box/styles.css';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const BoxFooter = ({ children, className, ...props }) => (
  <div className={css(styles.boxFooter, className)} {...props}>
    {children}
  </div>
);

BoxFooter.propTypes = propTypes;
BoxFooter.defaultProps = defaultProps;

export default BoxFooter;
