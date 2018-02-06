import { ProgressBar } from '../ProgressBar';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import React from 'react';
//import PropTypes from 'prop-types';

const availableTooltip = (props) => {
    return (
        <Tooltip id="availableTooltip">
            Available {props.max - props.now} %
        </Tooltip>
    );
};
const usedTooltip = (props) => {
    return (
        <Tooltip id="usedTooltip">
            Used {props.now} %
        </Tooltip>
    );
};

const UtilizationBar = ({...props}) => {
    const barStyle = () => {
      if(props.thresholdWarning && props.thresholdError) {
          var style = "success";
          if (props.thresholdWarning <= props.now) {
              style = "warning";
          }
          if (props.thresholdError <= props.now) {
              style = "danger";
          }
          return style;
      } else {
          return null;

      };
    };

    return (
        <div className="progress">
          <OverlayTrigger overlay={props.usedTooltipFunction(props)} placement="top" trigger={["hover", "focus"]} rootClose={false}>
            <ProgressBar bsStyle={barStyle()} min={props.min} max={props.max} now={props.now} key={1} isChild={true}></ProgressBar>
          </OverlayTrigger>
          <OverlayTrigger overlay={props.availableTooltipFunction(props)} placement="top" trigger={["hover", "focus"]} rootClose={false}>
            <ProgressBar min={props.min} max={props.max} now={props.max - props.now} key={2} bsClass="progress-bar progress-bar-remaining" isChild={true}></ProgressBar>
          </OverlayTrigger>
        </div>
    );
};

UtilizationBar.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    now: PropTypes.number,
    thresholdWarning: PropTypes.number,
    thresholdError: PropTypes.number,
    availableTooltipFunction: PropTypes.func,
    usedTooltipFunction: PropTypes.func,
};

UtilizationBar.defaultProps = {
    min: 0,
    max: 100,
    availableTooltipFunction: availableTooltip,
    usedTooltipFunction: usedTooltip,
};

export default UtilizationBar;