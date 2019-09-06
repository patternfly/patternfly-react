import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MenuItem, Button, helpers } from 'patternfly-react';

const { Dropdown } = Button;
const { noop } = helpers;

const VncActions = ({
  textSendShortcut,
  textCtrlAltDel,
  textDisconnect,
  onCtrlAltDel,
  onDisconnect,
  portalToolbarTo
}) => {
  const toolbar = (
    <div>
      <Dropdown bsStyle="default" title={textSendShortcut} id="console-send-shortcut" onClick={noop}>
        <MenuItem eventKey="1" onClick={onCtrlAltDel}>
          {textCtrlAltDel}
        </MenuItem>
      </Dropdown>
      <Button bsStyle="default" onClick={onDisconnect}>
        {textDisconnect}
      </Button>
    </div>
  );

  if (!portalToolbarTo) {
    return toolbar;
  }
  return (
    document.getElementById(portalToolbarTo) && ReactDOM.createPortal(toolbar, document.getElementById(portalToolbarTo))
  );
};

VncActions.propTypes = {
  onDisconnect: PropTypes.func.isRequired,
  onCtrlAltDel: PropTypes.func,

  textCtrlAltDel: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textDisconnect: PropTypes.string,

  portalToolbarTo: PropTypes.string // id of element where VncAction should be inserted
};

VncActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key',
  textDisconnect: 'Disconnect',

  portalToolbarTo: ''
};

export default VncActions;
