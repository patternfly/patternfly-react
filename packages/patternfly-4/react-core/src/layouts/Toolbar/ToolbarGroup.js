import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import './toolbar.css';

const propTypes = {
  /** Anything that can be rendered as one toolbar group */
  children: PropTypes.node,
  /** Classes applied to toolbar group */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: null
};

const ToolbarGroup = ({ children, className, ...props }) => (
  <div {...props} className={css('pf-l-toolbar__group', className)}>
    {children}
  </div>
);

ToolbarGroup.propTypes = propTypes;
ToolbarGroup.defaultProps = defaultProps;

export default ToolbarGroup;
