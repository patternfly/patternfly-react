import React from 'react';
import { progressBar, progressIndicator, progressMeasure } from '@patternfly/patternfly-next/components/Progress/progress.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** What should be rendered inside progress bar. */
  children: PropTypes.node,
  /** Additional classes for Progres bar. */
  className: PropTypes.string,
  /** Actual progress value. */
  value: PropTypes.number.isRequired
};

const defaultProps = {
  children: null,
  className: ''
};

const ProgressBar = ({ className, children, value, ...props }) => (
  <div {...props} className={css(progressBar, className)}>
    <div className={css(progressIndicator)} style={{ width: `${value}%` }}>
      <span className={css(progressMeasure)}>{children}</span>
    </div>
  </div>
);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
