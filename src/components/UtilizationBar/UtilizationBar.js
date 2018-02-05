import { ProgressBar } from '../ProgressBar';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import React from 'react';
//import PropTypes from 'prop-types';

const UtilizationBar = (...props) => {
    const availableTooltip = () => {
        debugger;
      return (
          <Tooltip id="availableTooltip">
            Available {props.units}
          </Tooltip>
      );
    };
    const usedTooltip = () => {
        debugger;
        return (
            <Tooltip id="usedTooltip">
              Used {props.units}
            </Tooltip>
        );
    };

    return (
        <div className="progress">
          <OverlayTrigger overlay={usedTooltip()} placement="top" trigger={["hover", "focus"]} rootClose={false}>
            <ProgressBar min={0} max={100} now={70} key={1} isChild={true}></ProgressBar>
          </OverlayTrigger>
          <OverlayTrigger overlay={availableTooltip()} placement="top" trigger={["hover", "focus"]} rootClose={false}>
            <ProgressBar now={30} key={2} bsClass="progress-bar progress-bar-remaining" isChild={true}></ProgressBar>
          </OverlayTrigger>
        </div>
    );
};

export default UtilizationBar;