import React from 'react';
import PropTypes from 'prop-types';

// TODO: Remove this object as it is no longer needed with the toolbar.

const propTypes = {
  /** Anything that can be rendered as toolbar item content */
  children: PropTypes.node,
  /** Classes applied to toolbar item */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: null
};

const ToolbarItem = ({ children, className, ...props }) => <div {...props}>{children}</div>;

ToolbarItem.propTypes = propTypes;
ToolbarItem.defaultProps = defaultProps;

export default ToolbarItem;
