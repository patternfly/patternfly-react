import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartRange = ({ className, value, index, vertical, ...props }) => {
  const rangeClasses = classNames('bullet-chart-pf-range-bar', `range-${index}`, className);

  if (value > 0 && value <= 100) {
    return (
      <div
        className={rangeClasses}
        style={{
          width: vertical ? undefined : `${value}%`,
          height: vertical ? `${value}%` : undefined,
          zIndex: 100 - value
        }}
        {...props}
      />
    );
  }

  return null;
};

BulletChartRange.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** End value for the range */
  value: PropTypes.number.isRequired,
  /** Index for the range (1-3) */
  index: PropTypes.number.isRequired,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartRange.defaultProps = {
  className: '',
  vertical: false
};

export default BulletChartRange;
