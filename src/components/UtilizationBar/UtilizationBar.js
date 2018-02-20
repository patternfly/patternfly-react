import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ProgressBar } from '../ProgressBar';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';

const randomId = () => {
  return Date.now();
};

const AvailableTooltipFunction = (max, now) => {
  return <Tooltip id={randomId()}>Available {max - now} %</Tooltip>;
};

const UsedTooltipFunction = now => {
  return <Tooltip id={randomId()}>Used {now} %</Tooltip>;
};

const UtilizationBar = props => {
  const barStyle = () => {
    if (props.thresholdWarning && props.thresholdError) {
      let style = 'success';
      if (props.thresholdWarning <= props.now) {
        style = 'warning';
      }
      if (props.thresholdError <= props.now) {
        style = 'danger';
      }
      return style;
    } else {
      return null;
    }
  };

  const labelClasses = top => {
    return ClassNames(
      { 'progress-label-top-right': top, 'progress-label-right': !top },
      'pull-right',
      'label-text',
      'display-inline-block'
    );
  };

  const mainDivClasses = (onSide, userClasses) => {
    return ClassNames({
        'progress-container': onSide && props.description,
        'progress-description-left': onSide && props.description,
        'progress-label-right': onSide && props.label,
       },
       userClasses
    );
  };

  return (
    <div
      className={mainDivClasses(
        !props.descriptionPlacementTop,
        props.mainDivClasses
      )}
    >
      <div className={props.descriptionPlacementTop ? null : 'progress-bar'}>
        {props.label && (
          <span className={labelClasses(props.descriptionPlacementTop)}>
            <strong className="label-strong label-text">
              {props.now + ' of ' + props.max}
            </strong>{' '}
            {props.label}
          </span>
        )}
        {props.description && (
          <div className="progress-description label-text">
            {props.description}
          </div>
        )}
      </div>
      <div className="progress">
        <OverlayTrigger
          overlay={props.usedTooltipFunction(props.now)}
          placement="top"
          trigger={['hover', 'focus']}
          rootClose={false}
        >
          <ProgressBar
            bsStyle={barStyle()}
            min={props.min}
            max={props.max}
            now={props.now}
            key={1}
            isChild
          />
        </OverlayTrigger>
        <OverlayTrigger
          overlay={props.availableTooltipFunction(props.max, props.now)}
          placement="top"
          trigger={['hover', 'focus']}
          rootClose={false}
        >
          <ProgressBar
            min={props.min}
            max={props.max}
            now={props.max - props.now}
            key={2}
            bsClass="progress-bar progress-bar-remaining"
            isChild
          />
        </OverlayTrigger>
      </div>
    </div>
  );
};

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
  /** Function that renders tooltip for available part of bar. */
  availableTooltipFunction: PropTypes.func,
  /** Function that renders tooltip for used part of bar. */
  usedTooltipFunction: PropTypes.func,
  /** Classes for main div */
  mainDivClasses: PropTypes.string,
  /** Description that is displayed on the right side */
  description: PropTypes.string,
  /** Units */
  label: PropTypes.string,
  /** If set labels will be placed above utilization bar */
  descriptionPlacementTop: PropTypes.bool
};

UtilizationBar.defaultProps = {
  min: 0,
  max: 100,
  availableTooltipFunction: AvailableTooltipFunction,
  usedTooltipFunction: UsedTooltipFunction,
  descriptionPlacementTop: false,
  mainDivClasses: null,
  thresholdWarning: null,
  thresholdError: null,
  description: null,
  label: null
};

export default UtilizationBar;
