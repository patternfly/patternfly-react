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

const BoxHeader = ({ children, className, ...props }) => (
  <div className={css(styles.boxHeader, className)} {...props}>
    {children}
  </div>
);

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

export default BoxHeader;
