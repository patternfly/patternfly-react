import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Toolbar/toolbar.css';
import PropTypes from 'prop-types';

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
  }
};

const defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

const ToolbarSection = ({ children, className, ...props }) => (
  <section {...props} className={css(styles.toolbarSection, className)}>
    {children}
  </section>
);

ToolbarSection.propTypes = propTypes;
ToolbarSection.defaultProps = defaultProps;

export default ToolbarSection;
