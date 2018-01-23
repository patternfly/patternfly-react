import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({ children, contentType, content, ...props }) => {
  const placement = 'top';
  const rootClose = true;
  const htmlContent = (
    <div
      dangerouslySetInnerHTML={{
        __html: content
      }}
    />
  );

  if (contentType === 'popover') {
    const popover = (
      <Popover id="popover" >
        {htmlContent}
      </Popover>
    );
    const trigger = 'click';

    return (
      <OverlayTrigger
        overlay={popover}
        placement={placement}
        trigger={trigger.split(' ')}
        rootClose={rootClose}
      >
        <label>
          {children + ' '}
          <Icon type="pf" name={'info'} style={{ color: '#0088ce' }} />
        </label>
      </OverlayTrigger>
    );
  } else if (contentType === 'tooltip') {
    const tooltip = (
      <Tooltip id="tooltip">
        {htmlContent}
      </Tooltip>
    );
    const trigger = 'hover focus';

    return (
      <OverlayTrigger
        overlay={tooltip}
        placement={placement}
        trigger={trigger.split(' ')}
        rootClose={rootClose}
      >
        <label>
          {children + ' '}
          <Icon type="pf" name={'info'} style={{ color: '#0088ce' }} />
        </label>
      </OverlayTrigger>
    );
  }
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  /** Content type: popover or tooltip  */
  contentType: PropTypes.string,
  /** Contents displayed with popover or tooltip  */
  content: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};

export default FieldLevelHelp;
