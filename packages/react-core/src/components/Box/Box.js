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

const Box = ({ children, className, ...props }) => (
  <div className={css(styles.box, className)} {...props}>
    {children}
  </div>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
