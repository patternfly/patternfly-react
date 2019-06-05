import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** What should be rendered inside progress bar. */
  children: PropTypes.node,
  /** Additional classes for Progres bar. */
  className: PropTypes.string,
  /** Actual progress value. */
  value: PropTypes.number.isRequired,
  /** Minimal value of progress. */
  ariaProps: PropTypes.object.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: ''
};

const ProgressBar = ({ ariaProps, className, children, value, ...props }) => (
  <div {...props} className={css(styles.progressBar, className)} {...ariaProps}>
    <div className={css(styles.progressIndicator)} style={{ width: `${value}%` }}>
      <span className={css(styles.progressMeasure)}>{children}</span>
    </div>
  </div>
);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
