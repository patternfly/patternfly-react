import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Toolbar, helpers } from 'patternfly-react';
import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5'; // eslint-disable-line import/no-unresolved

import constants from '../common/constants';
import SpiceActions from './SpiceActions';

const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
const { noop } = helpers;

class SpiceConsole extends React.Component {
  state = { status: CONNECTING };

  componentDidMount() {
    const { host, port, path, encrypt, password, onInitFailed } = this.props;

    try {
      const protocol = encrypt ? 'wss' : 'ws';
      const uri = `${protocol}://${host}:${port}/${path}`;

      this.sc = new SpiceMainConn({
        uri,
        screen_id: 'spice-screen',
        password,
        onerror: this.onSpiceError,
        onsuccess: this.onConnected
      });
    } catch (e) {
      onInitFailed && onInitFailed(e);
      this.disconnect();
    }
  }

  componentWillUnmount() {
    this.disconnect();
  }

  disconnect() {
    if (this.sc) {
      this.sc.stop();
      this.sc = undefined;
    }
  }
  onConnected = () => {
    this.setState({ status: CONNECTED });
  };

  onCtrlAltDel = e => {
    if (this.sc) {
      // workaround
      window.sc = this.sc;
      sendCtrlAltDel();
      window.sc = undefined;
    }
  };

  onSpiceError = e => {
    this.disconnect();
    this.onDisconnected(e);
    //      if (e !== undefined && e.message === "Permission denied.") {
  };

  onDisconnected = e => {
    this.setState({ status: DISCONNECTED });
    this.props.onDisconnected(e);
  };

  onSecurityFailure = e => {
    this.setState({ status: DISCONNECTED });
    this.props.onSecurityFailure(e);
  };

  render() {
    const { textDisconnected, textConnecting, textSendShortcut, textCtrlAltDel } = this.props;

    let status = null;
    let rightContent = null;
    switch (this.state.status) {
      case CONNECTED:
        rightContent = (
          <SpiceActions
            onCtrlAltDel={this.onCtrlAltDel}
            textSendShortcut={textSendShortcut}
            textCtrlAltDel={textCtrlAltDel}
          />
        );
        break;
      case DISCONNECTED:
        status = <div className="spice-console-disconnected">{textDisconnected}</div>;
        break;
      case CONNECTING:
      default:
        status = <div className="spice-console-connecting">{textConnecting}</div>;
    }

    if (!this.SpiceStaticComponent) {
      // create just once
      this.SpiceStaticComponent = <div id="spice-screen" ref={this.setSpiceElem} />;
    }

    return (
      <div className={classNames('spice-console', this.props.topClassName)}>
        {this.props.children}
        <Toolbar.RightContent>{rightContent}</Toolbar.RightContent>
        <Toolbar.Results>
          {status}
          {this.SpiceStaticComponent}
        </Toolbar.Results>
      </div>
    );
  }
}

SpiceConsole.displayName = 'SpiceConsole';

SpiceConsole.propTypes = {
  children: PropTypes.node /** Children nodes */,

  host: PropTypes.string.isRequired /** FQDN or IP to connect to */,
  port: PropTypes.string /** TCP Port */,
  path: PropTypes.string /** host:port/path */,
  encrypt: PropTypes.bool,
  password: PropTypes.string /** token */,

  topClassName: PropTypes.string /** Enable customization */,

  onDisconnected: PropTypes.func /** Callback. Spice server disconnected. */,
  onInitFailed: PropTypes.func /** Initialization of Spice failed */,
  onSecurityFailure: PropTypes.func /** Handshake failed */,

  textConnecting: PropTypes.string /** For localization */,
  textDisconnected: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textCtrlAltDel: PropTypes.string
};

SpiceConsole.defaultProps = {
  children: null,

  port: '80',
  path: '',
  encrypt: false,
  password: undefined,

  topClassName: '',

  onDisconnected: noop,
  onInitFailed: noop,
  onSecurityFailure: noop,

  textConnecting: 'Connecting',
  textDisconnected: 'Disconnected',
  textSendShortcut: undefined,
  /** Default value defined in SpiceActions
   */ textCtrlAltDel: undefined
  /** Default value defined in SpiceActions
   */
};

export default SpiceConsole;
