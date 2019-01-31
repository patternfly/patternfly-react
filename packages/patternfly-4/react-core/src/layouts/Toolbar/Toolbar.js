import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import './toolbar.css';

const propTypes = {
  /** Anything that can be rendered as toolbar content */
  children: PropTypes.node,
  /** Classes applied to toolbar parent */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: null
};

const Toolbar = ({ children, className, ...props }) => (
  <div {...props} className={css('pf-l-toolbar', className)}>
    {children}
  </div>
);

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
