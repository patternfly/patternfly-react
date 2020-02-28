import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartAxis = ({ children, className, ...props }) => {
  const bulletChartAxisClass = classNames('bullet-chart-pf-axis', className);

  return <div className={bulletChartAxisClass}>{children}</div>;
};

BulletChartAxis.propTypes = {
  /** Children nodes */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
};

BulletChartAxis.defaultProps = {
  className: ''
};

export default BulletChartAxis;
