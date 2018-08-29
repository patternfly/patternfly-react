import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartThreshold = ({ className, threshold, vertical, ...props }) => {
  if (threshold > 0 && threshold <= 100) {
    const thresholdClasses = classNames('bullet-chart-pf-threshold-indicator', className);
    return (
      <div
        className={thresholdClasses}
        style={{
          left: vertical ? undefined : `${threshold}%`,
          bottom: vertical ? `${threshold}%` : undefined
        }}
        {...props}
      />
    );
  }

  return null;
};

BulletChartThreshold.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Threshold value */
  threshold: PropTypes.number.isRequired,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false
};

export default BulletChartThreshold;
