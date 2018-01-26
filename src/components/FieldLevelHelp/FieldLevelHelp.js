import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({ children, mode, content, ...props }) => {
  const trigger = mode === 'popover' ? 'click' : 'hover focus';
  const htmlContent = (
    <div
      dangerouslySetInnerHTML={{
        __html: content
      }}
    />
  );
  const overlay =
    mode === 'popover' ? (
      <Popover id="{mode}">{htmlContent}</Popover>
    ) : (
      <Tooltip id="{mode}">{htmlContent}</Tooltip>
    );
  const rootClose = true;

  return (
    <div>
      <label>{`${children} `}</label>
      <OverlayTrigger
        overlay={overlay}
        placement={'top'}
        trigger={trigger.split(' ')}
        rootClose={rootClose}
      >
        <Icon
          className="fa-fw"
          type="pf"
          name={'info'}
          style={{ color: '#0088ce' }}
        />
      </OverlayTrigger>
    </div>
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  /** Content type: popover or tooltip  */
  mode: PropTypes.string,
  /** Contents displayed with popover or tooltip  */
  content: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};

export default FieldLevelHelp;
