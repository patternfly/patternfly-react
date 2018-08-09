import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

const randomId = () => Date.now();

const BulletChartLegendItem = ({
  className,
  title,
  value,
  color,
  boxClassName,
  tooltipFunction,
  tooltipId,
  ...props
}) => {
  const classes = classNames('bullet-chart-pf-legend-item', className);

  const boxClasses = classNames('bullet-chart-pf-legend-item-box', boxClassName);

  const TooltipFunction = () => {
    if (tooltipFunction) {
      return tooltipFunction(title, value, color);
    }

    return <Tooltip id={tooltipId || randomId()}>{`${title}: ${value}%`}</Tooltip>;
  };

  return (
    <OverlayTrigger
      overlay={TooltipFunction(title, value, color)}
      placement="top"
      trigger={['hover', 'focus']}
      rootClose={false}
      {...props}
    >
      <span className={classes}>
        <span
          className={boxClasses}
          style={{
            backgroundColor: color
          }}
        />
        <span className="bullet-chart-pf-legend-item-text">{title}</span>
      </span>
    </OverlayTrigger>
  );
};

BulletChartLegendItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Text for the legend item */
  title: PropTypes.string,
  /* Value of the item */
  value: PropTypes.number,
  /* Color for the box */
  color: PropTypes.string,
  /** Additional css classes for the box */
  boxClassName: PropTypes.string,
  /** Tooltip function(title, value, color) to render tooltip contents */
  tooltipFunction: PropTypes.func,
  /** Tooltip ID */
  tooltipId: PropTypes.string
};

BulletChartLegendItem.defaultProps = {
  className: '',
  title: '',
  value: 0,
  color: undefined,
  boxClassName: '',
  tooltipFunction: undefined,
  tooltipId: undefined
};

export default BulletChartLegendItem;
