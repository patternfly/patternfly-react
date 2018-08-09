import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartLegend = ({ children, className, ...props }) => {
  const bulletChartLegendClass = classNames('bullet-chart-pf-legend', className);

  return (
    <div className={bulletChartLegendClass} {...props}>
      {children}
    </div>
  );
};

BulletChartLegend.propTypes = {
  /** Children nodes */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
};
BulletChartLegend.defaultProps = {
  className: ''
};
export default BulletChartLegend;
