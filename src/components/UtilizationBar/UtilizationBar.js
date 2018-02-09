import { ProgressBar } from '../ProgressBar';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import React from 'react';

const AvailableTooltipFunction = (max, now) => {
  return <Tooltip id={Math.random()}>Available {max - now} %</Tooltip>;
};

const UsedTooltipFunction = now => {
  return <Tooltip id={Math.random()}>Used {now} %</Tooltip>;
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

const mainDivClasses = mainDivClasses => {
  if (mainDivClasses) {
    return mainDivClasses + " progress";
  } else {
    return "progress";
  }
};

  return (
    <div className={mainDivClasses(props.mainDivClasses)}>
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
  );
};

UtilizationBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  now: PropTypes.number.isRequired,
  thresholdWarning: PropTypes.number,
  thresholdError: PropTypes.number,
  availableTooltipFunction: PropTypes.func,
  usedTooltipFunction: PropTypes.func,
  mainDivClasses: PropTypes.string
};

UtilizationBar.defaultProps = {
  min: 0,
  max: 100,
  availableTooltipFunction: AvailableTooltipFunction,
  usedTooltipFunction: UsedTooltipFunction
};

export default UtilizationBar;
