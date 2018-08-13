import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

const randomId = () => Date.now();

const TooltipFunction = value => {
  if (value.tooltipFunction) {
    return value.tooltipFunction(value.value, value.title);
  }

  return <Tooltip id={value.tooltipId || randomId()}>{`${value.title}: ${value.value}%`}</Tooltip>;
};

const BulletChartValue = ({ className, value, prevValue, dot, vertical, ...props }) => {
  const showValue = Math.min(Math.max(value.value + prevValue, 0), 120);

  const valueClasses = classNames(
    {
      'bullet-chart-pf-value-dot': dot,
      'bullet-chart-pf-value-bar': !dot
    },
    className
  );

  let valueComponent;
  if (dot) {
    valueComponent = (
      <div
        className={valueClasses}
        style={{
          left: vertical ? undefined : `${showValue}%`,
          bottom: vertical ? `${showValue}%` : undefined,
          backgroundColor: value.color,
          zIndex: 100 + showValue
        }}
        {...props}
      />
    );
  } else {
    valueComponent = (
      <div
        className={valueClasses}
        style={{
          left: vertical ? undefined : `${prevValue}%`,
          width: vertical ? undefined : `${showValue - prevValue}%`,
          bottom: vertical ? `${prevValue}%` : undefined,
          height: vertical ? `${showValue - prevValue}%` : undefined,
          backgroundColor: value.color,
          zIndex: 400 - showValue
        }}
        {...props}
      />
    );
  }
  return (
    <OverlayTrigger
      key={value.title}
      overlay={TooltipFunction(value)}
      placement={vertical ? 'right' : 'top'}
      trigger={['hover', 'focus']}
      rootClose={false}
    >
      {valueComponent}
    </OverlayTrigger>
  );
};

BulletChartValue.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Value */
  value: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string,
    color: PropTypes.string,
    tooltipFunction: PropTypes.func,
    tooltipId: PropTypes.string
  }).isRequired,
  /** Previous value (for stacked charts), default 0 */
  prevValue: PropTypes.number,
  /** Display a dot rather than a bar, default false */
  dot: PropTypes.bool,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartValue.defaultProps = {
  className: '',
  prevValue: 0,
  dot: false,
  vertical: false
};

export default BulletChartValue;
