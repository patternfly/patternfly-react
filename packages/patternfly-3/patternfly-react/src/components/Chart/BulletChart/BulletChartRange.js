import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartRange = ({ className, value, percent, maxValue, index, color, vertical, ...props }) => {
  const rangeClasses = classNames('bullet-chart-pf-range-bar', `range-${index}`, className);
  if (value > 0 && (percent ? value <= 100 : value <= maxValue)) {
    const showValue = percent ? value : (value / maxValue) * 100;
    const rangeStyle = {
      width: vertical ? undefined : `${showValue}%`,
      height: vertical ? `${showValue}%` : undefined,
      zIndex: Math.round(100 - showValue)
    };
    if (color) {
      rangeStyle.backgroundColor = color;
    }
    return <div className={rangeClasses} style={rangeStyle} {...props} />;
  }

  return null;
};

BulletChartRange.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** End value for the range */
  value: PropTypes.number.isRequired,
  /** Option to use end value as a percentage, default is true */
  percent: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,
  /** Index for the range (1-3) */
  index: PropTypes.number.isRequired,
  /** Optional color for the range, should use defaults but provided for flexibility */
  color: PropTypes.string,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartRange.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  color: '',
  vertical: false
};

export default BulletChartRange;
