import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem, noop } from 'patternfly-react';

const VncActions = ({ textSendShortcut, textCtrlAltDel, onCtrlAltDel }) => (
  <DropdownButton bsStyle="default" title={textSendShortcut} id="console-send-shortcut" onClick={noop}>
    <MenuItem eventKey="1" onClick={onCtrlAltDel}>
      {textCtrlAltDel}
    </MenuItem>
  </DropdownButton>
);

VncActions.propTypes = {
  onCtrlAltDel: PropTypes.func,

  textCtrlAltDel: PropTypes.string,
  textSendShortcut: PropTypes.string
};

VncActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key'
};

export default VncActions;
