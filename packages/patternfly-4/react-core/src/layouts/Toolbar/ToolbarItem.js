import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import './toolbar.css';

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

const ToolbarItem = ({ children, className, ...props }) => (
  <div {...props} className={css('pf-l-toolbar__item', className)}>
    {children}
  </div>
);

ToolbarItem.propTypes = propTypes;
ToolbarItem.defaultProps = defaultProps;

export default ToolbarItem;
