import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

const randomId = () => Date.now();

const BulletChartValue = ({ className, value, percent, maxValue, prevValue, dot, vertical, ...props }) => {
  const usedMax = percent ? 100 : maxValue;
  const percentValue = percent ? value.value + prevValue : ((value.value + prevValue) / maxValue) * 100;
  const showValue = Math.min(Math.max(percentValue, 0), usedMax * 1.2);

  const TooltipFunction = () => {
    if (value.tooltipFunction) {
      return value.tooltipFunction(value.value, value.title);
    }

    const tipText = `${value.title}: ${value.value}${percent ? '%' : ''}`;
    return <Tooltip id={value.tooltipId || randomId()}>{tipText}</Tooltip>;
  };

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
          zIndex: Math.round(100 + showValue)
        }}
        {...props}
      />
    );
  } else {
    const prevShowValue = percent ? prevValue : (prevValue / maxValue) * 100;
    valueComponent = (
      <div
        className={valueClasses}
        style={{
          left: vertical ? undefined : `${prevShowValue}%`,
          width: vertical ? undefined : `${showValue - prevShowValue}%`,
          bottom: vertical ? `${prevShowValue}%` : undefined,
          height: vertical ? `${showValue - prevShowValue}%` : undefined,
          backgroundColor: value.color,
          zIndex: Math.round(400 - showValue)
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
  /** Option to use value as a percentage, default is true */
  percent: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,
  /** Previous value (for stacked charts), default 0 */
  prevValue: PropTypes.number,
  /** Display a dot rather than a bar, default false */
  dot: PropTypes.bool,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartValue.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  prevValue: 0,
  dot: false,
  vertical: false
};

export default BulletChartValue;
