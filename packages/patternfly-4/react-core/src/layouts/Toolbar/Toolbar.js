import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Toolbar/toolbar.css';
import PropTypes from 'prop-types';

const propTypes = {
  /** Anything that can be rendered as toolbar content */
  children: PropTypes.node,
  /** Classes applied to toolbar parent */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: null
};

const Toolbar = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.toolbar, className)}>
    {children}
  </div>
);

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
