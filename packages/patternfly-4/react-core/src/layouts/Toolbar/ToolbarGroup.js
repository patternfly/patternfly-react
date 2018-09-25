import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Toolbar/toolbar.css';
import PropTypes from 'prop-types';

const propTypes = {
  /** Anything that can be rendered as one toolbar group */
  children: PropTypes.node,
  /** Classes applied to toolbar group */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: null
};

const ToolbarGroup = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.toolbarGroup, className)}>
    {children}
  </div>
);

ToolbarGroup.propTypes = propTypes;
ToolbarGroup.defaultProps = defaultProps;

export default ToolbarGroup;
