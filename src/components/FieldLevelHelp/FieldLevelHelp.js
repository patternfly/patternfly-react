import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({ children, content, close, ...props }) => {
  const trigger = 'click';
  const overlay = <Popover id="popover">{content}</Popover>;
  const rootClose = close === 'true';

  return (
    <OverlayTrigger
      overlay={overlay}
      placement="top"
      trigger={trigger.split(' ')}
      rootClose={rootClose}
    >
      <Button bsStyle="link">
        <Icon type="pf" name="info" />
      </Button>
    </OverlayTrigger>
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: PropTypes.node,
  /** leave popover/tooltip open  */
  close: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};
FieldLevelHelp.defaultProps = {
  close: 'true'
};

export default FieldLevelHelp;
