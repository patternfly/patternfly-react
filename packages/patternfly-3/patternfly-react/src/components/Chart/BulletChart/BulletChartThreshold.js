import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartThreshold = ({ className, threshold, vertical, percent, maxValue, ...props }) => {
  const percentValue = percent ? threshold : (threshold / maxValue) * 100;

  if (percentValue > 0 && percentValue <= 100) {
    const thresholdClasses = classNames('bullet-chart-pf-threshold-indicator', className);
    return (
      <div
        className={thresholdClasses}
        style={{
          left: vertical ? undefined : `${percentValue}%`,
          bottom: vertical ? `${percentValue}%` : undefined
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
  vertical: PropTypes.bool,
  /** Option to use threshold value as a percentage, default is true */
  percent: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number
};

BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false,
  percent: true,
  maxValue: 100
};

export default BulletChartThreshold;
