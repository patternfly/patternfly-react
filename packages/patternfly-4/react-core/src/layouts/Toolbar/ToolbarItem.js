import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Toolbar/toolbar.css';
import PropTypes from 'prop-types';

const propTypes = {
  /** Anything that can be rendered as toolbar item content */
  children: PropTypes.node,
  /** Classes applied to toolbar item */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: null
};

const ToolbarItem = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.toolbarItem, className)}>
    {children}
  </div>
);

ToolbarItem.propTypes = propTypes;
ToolbarItem.defaultProps = defaultProps;

export default ToolbarItem;
