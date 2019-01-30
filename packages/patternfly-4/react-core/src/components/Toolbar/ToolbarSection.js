import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Toolbar/toolbar.css';
import PropTypes from 'prop-types';

// TODO: This needs to be replaced with toolbar total items and toolbar filter.

const propTypes = {
  /** Anything that can be rendered as toolbar section */
  children: PropTypes.node,
  /** Classes applied to toolbar section */
  className: PropTypes.string,
  /** Aria label applied to toolbar section */
  'aria-label': props => {
    if (!props['aria-label']) {
      return new Error('ToolbarSection requires aria-label to be specified');
    }
    return null;
  },
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

const ToolbarSection = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.toolbarTotalItems, className)}>
    {children}
  </div>
);

ToolbarSection.propTypes = propTypes;
ToolbarSection.defaultProps = defaultProps;

export default ToolbarSection;
