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

const BoxBody = ({ children, className, ...props }) => (
  <div className={css(styles.boxBody, className)} {...props}>
    {children}
  </div>
);

BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;

export default BoxBody;
