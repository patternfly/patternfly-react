import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../ProgressBar';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import { labelClasses, mainDivClasses, barStyle } from './helpers';

const randomId = () => Date.now();

const AvailableTooltipFunction = (max, now) => <Tooltip id={randomId()}>Available {max - now} %</Tooltip>;

const UsedTooltipFunction = (max, now) => <Tooltip id={randomId()}>Used {now} %</Tooltip>;

const UtilizationBar = ({
  min,
  max,
  now,
  availableTooltipFunction,
  usedTooltipFunction,
  descriptionPlacementTop,
  description,
  thresholdWarning,
  thresholdError,
  label,
  className
}) => (
  <div className={mainDivClasses(!descriptionPlacementTop, className, description, label)}>
    <div className={descriptionPlacementTop ? null : 'progress-bar'}>
      {label && <span className={labelClasses(descriptionPlacementTop)}>{label}</span>}
      {description && <div className="progress-description label-text">{description}</div>}
    </div>
    <div className="progress">
      <OverlayTrigger
        overlay={usedTooltipFunction(max, now)}
        placement="top"
        trigger={['hover', 'focus']}
        rootClose={false}
      >
        <ProgressBar
          bsStyle={barStyle(thresholdWarning, thresholdError, now)}
          min={min}
          max={max}
          now={now}
          key={1}
          isChild
        />
      </OverlayTrigger>
      <OverlayTrigger
        overlay={availableTooltipFunction(max, now)}
        placement="top"
        trigger={['hover', 'focus']}
        rootClose={false}
      >
        <ProgressBar
          min={min}
          max={max}
          now={max - now}
          key={2}
          bsClass="progress-bar progress-bar-remaining"
          isChild
        />
      </OverlayTrigger>
    </div>
  </div>
);

UtilizationBar.propTypes = {
  /** Minimal value */
  min: PropTypes.number,
  /** Maximal value */
  max: PropTypes.number,
  /** Current value */
  now: PropTypes.number.isRequired,
  /** Threshold value. Bar will change value to orange if it's surpassed. */
  thresholdWarning: PropTypes.number,
  /** Threshold value. Bar will change value to red if it's surpassed.  */
  thresholdError: PropTypes.number,
  /** Function that renders tooltip for available part of bar. Takes params max and now. */
  availableTooltipFunction: PropTypes.func,
  /** Function that renders tooltip for used part of bar. Takes params max and now. */
  usedTooltipFunction: PropTypes.func,
  /** Description that is displayed on the right side */
  description: PropTypes.node,
  /** Units */
  label: PropTypes.node,
  /** If set labels will be placed above utilization bar */
  descriptionPlacementTop: PropTypes.bool,
  /** User's custom classes */
  className: PropTypes.string
};

UtilizationBar.defaultProps = {
  min: 0,
  max: 100,
  availableTooltipFunction: AvailableTooltipFunction,
  usedTooltipFunction: UsedTooltipFunction,
  descriptionPlacementTop: false,
  thresholdWarning: null,
  thresholdError: null,
  description: null,
  label: null,
  className: null
};

export default UtilizationBar;
