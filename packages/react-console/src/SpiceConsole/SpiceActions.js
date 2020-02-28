import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Button, helpers } from 'patternfly-react';

const { Dropdown } = Button;
const { noop } = helpers;

const SpiceActions = ({ textSendShortcut, textCtrlAltDel, onCtrlAltDel }) => (
  <Dropdown bsStyle="default" title={textSendShortcut} id="console-send-shortcut" onClick={noop}>
    <MenuItem eventKey="1" onClick={onCtrlAltDel}>
      {textCtrlAltDel}
    </MenuItem>
  </Dropdown>
);

SpiceActions.propTypes = {
  onCtrlAltDel: PropTypes.func,

  textCtrlAltDel: PropTypes.string,
  textSendShortcut: PropTypes.string
};

SpiceActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key'
};

export default SpiceActions;
