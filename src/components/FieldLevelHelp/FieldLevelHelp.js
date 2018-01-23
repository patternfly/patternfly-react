import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({ children, popoverContent, ...props }) => {
  const htmlPopoverContent = (
    <div
      dangerouslySetInnerHTML={{
        __html: popoverContent
      }}
    />
  );
  const popover = (
    <Popover id="popover" >
      {htmlPopoverContent}
    </Popover>
  );
  const placement = 'top';
  const trigger = 'click';
  const rootClose = true;
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
};
FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  /** Content displayed with popover  */
  popoverContent: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};

export default FieldLevelHelp;
