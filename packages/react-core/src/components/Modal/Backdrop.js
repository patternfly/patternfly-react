import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Backdrop/styles.css';

const propTypes = {
  /** content rendered inside the bullseye */
  children: PropTypes.node,
  /** additional classes added to the button */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const Backdrop = ({ className, children, ...props }) => (
  <div {...props} className={css(styles.backdrop, className)}>
    {children}
  </div>
);

Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

export default Backdrop;
