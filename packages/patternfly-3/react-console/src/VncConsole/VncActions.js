import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Button, helpers } from 'patternfly-react';

const { Dropdown } = Button;
const { noop } = helpers;

const VncActions = ({ textSendShortcut, textCtrlAltDel, onCtrlAltDel }) => (
  <Dropdown bsStyle="default" title={textSendShortcut} id="console-send-shortcut" onClick={noop}>
    <MenuItem eventKey="1" onClick={onCtrlAltDel}>
      {textCtrlAltDel}
    </MenuItem>
  </Dropdown>
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
