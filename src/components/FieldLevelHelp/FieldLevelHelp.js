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
  const trigger = contentType === 'popover' ? 'click' : 'hover focus';
  const htmlContent = (
    <div
      dangerouslySetInnerHTML={{
        __html: content
      }}
    />
  );
  const overlay =
    contentType === 'popover' ? (
      <Popover id="{contentType}">{htmlContent}</Popover>
    ) : (
      <Tooltip id="{contentType}">{htmlContent}</Tooltip>
    );
  const rootClose = true;

  return (
    <OverlayTrigger
      overlay={overlay}
      placement={'top'}
      trigger={trigger.split(' ')}
      rootClose={rootClose}
    >
      <label>
        {children + ' '}
        <Icon type="pf" name={'info'} style={{ color: '#0088ce' }} />
      </label>
    </OverlayTrigger>
  );
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
