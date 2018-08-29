import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartAxisTic = ({ className, vertical, value, ...props }) => {
  const bulletChartAxisTicClass = classNames('bullet-chart-pf-axis-tic', className);

  let ticStyle;
  if (vertical) {
    ticStyle = { bottom: `calc(${value}% - 10px)` };
  } else {
    ticStyle = { left: `calc(${value}% - 15px)` };
  }

  return (
    <span className={bulletChartAxisTicClass} style={ticStyle}>
      {value}
    </span>
  );
};

BulletChartAxisTic.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Vertical axis, default false */
  vertical: PropTypes.bool,
  /** Value for the tic mark */
  value: PropTypes.number.isRequired,
  /** Text for the tic mark, default is the value */
  text: PropTypes.string
};

BulletChartAxisTic.defaultProps = {
  className: '',
  vertical: false,
  text: undefined
};

export default BulletChartAxisTic;
