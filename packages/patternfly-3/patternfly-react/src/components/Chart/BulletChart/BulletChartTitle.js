import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartTitle = ({ className, label, details, ...props }) => {
  const titleContainerClasses = classNames('bullet-chart-pf-title-container', className);

  return (
    <div className={titleContainerClasses} {...props}>
      <div className="bullet-chart-pf-title">{label}</div>
      <div className="bullet-chart-pf-details">{details}</div>
    </div>
  );
};

BulletChartTitle.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Details text */
  details: PropTypes.string
};

BulletChartTitle.defaultProps = {
  className: '',
  label: '',
  details: ''
};

export default BulletChartTitle;
