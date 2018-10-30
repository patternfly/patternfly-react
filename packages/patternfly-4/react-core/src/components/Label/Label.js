import React from 'react';
import styles from '@patternfly/patternfly-next/components/Label/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const Label = ({ className, children, isCompact, ...props }) => (
  <span {...props} className={css(styles.label, className, isCompact && styles.modifiers.compact)}>
    {children}
  </span>
);

Label.propTypes = {
  /** Additional classes added to the label. */
  className: PropTypes.string,
  /** Content rendered inside the label. */
  children: PropTypes.node.isRequired,
  /** Flag to show if the label is compact. */
  isCompact: PropTypes.bool
};

Label.defaultProps = {
  className: '',
  isCompact: false
};

export default Label;
