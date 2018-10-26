import React from 'react';
import PropTypes from 'prop-types';

import * as NovncLog from '@novnc/novnc/core/util/logging';
import RFB from '@novnc/novnc/core/rfb';

import classNames from 'classnames';
import { Toolbar, noop } from 'patternfly-react';

import VncActions from './VncActions';

const CONNECTING = 'connecting';
const CONNECTED = 'connected';
const DISCONNECTED = 'disconnected';

/* eslint no-console: ["warn", { allow: ["error"] }] */

class VncConsole extends React.Component {
  state = { status: CONNECTING };

  componentDidMount() {
    const {
      host,
      port,
      path,
      encrypt,
      resizeSession,
      viewOnly,
      shared,
      credentials,
      repeaterID,
      vncLogging,
      onInitFailed
    } = this.props;

    NovncLog.init_logging(vncLogging);
    try {
      const protocol = encrypt ? 'wss' : 'ws';
      const url = `${protocol}://${host}:${port}/${path}`;

      const options = {
        repeaterID,
        shared,
        credentials
      };

      this.rfb = new RFB(this.novncElem, url, options);
      this.rfb.addEventListener('connect', this.onConnected);
      this.rfb.addEventListener('disconnect', this.onDisconnected);
      this.rfb.addEventListener('securityfailure', this.onSecurityFailure);
      this.rfb.viewOnly = viewOnly;
      this.rfb.scaleViewport = false; // if the remote session is smaller than HTML container, the view will be centered
      this.rfb.resizeSession = resizeSession;
    } catch (e) {
      onInitFailed && onInitFailed(e);
      this.rfb = undefined;
    }
  }

  onConnected = () => {
    this.setState({ status: CONNECTED });
  };

  onCtrlAltDel = e => {
    if (this.rfb) {
      this.rfb.sendCtrlAltDel();
      this.focusVnc(e);
    }
  };

  onDisconnected = e => {
    this.setState({ status: DISCONNECTED });
    this.props.onDisconnected(e);
  };

  onSecurityFailure = e => {
    this.setState({ status: DISCONNECTED });
    this.props.onSecurityFailure(e);
  };

  setNovncElem = e => {
    this.novncElem = e;
  };

  focusVnc = e => {
    if (e && e.target && e.target.blur) {
      e.target.blur();
    }
    this.novncElem && this.novncElem.focus();
  };

  render() {
    const { textDisconnected, textConnecting, textSendShortcut, textCtrlAltDel } = this.props;

    let status = null;
    let rightContent = null;
    switch (this.state.status) {
      case CONNECTED:
        rightContent = (
          <Toolbar.RightContent>
            <VncActions
              onCtrlAltDel={this.onCtrlAltDel}
              textSendShortcut={textSendShortcut}
              textCtrlAltDel={textCtrlAltDel}
            />
          </Toolbar.RightContent>
        );
        break;
      case DISCONNECTED:
        status = <div className="vnc-console-disconnected">{textDisconnected}</div>;
        break;
      case CONNECTING:
      default:
        status = <div className="vnc-console-connecting">{textConnecting}</div>;
    }

    if (!this.novncStaticComponent) {
      // create just once
      this.novncStaticComponent = <div ref={this.setNovncElem} />;
    }

    return (
      <div className={classNames('vnc-console', this.props.topClassName)}>
        {this.props.children}
        {rightContent}
        <Toolbar.Results>
          {status}
          {this.novncStaticComponent}
        </Toolbar.Results>
      </div>
    );
  }
}

VncConsole.propTypes = {
  children: PropTypes.node /** Children nodes */,

  host: PropTypes.string.isRequired /** FQDN or IP to connect to */,
  port: PropTypes.string /** TCP Port */,
  path: PropTypes.string /** host:port/path */,
  encrypt: PropTypes.bool /** For all following, see: https://github.com/novnc/noVNC/blob/master/docs/API.md */,
  resizeSession: PropTypes.bool /** Change remote session size according to local HTML container */,
  viewOnly: PropTypes.bool,
  shared: PropTypes.bool,
  credentials: PropTypes.object /** { username: '', password: '', target: ''} */,
  repeaterID: PropTypes.string,
  vncLogging: PropTypes.string /** log-level for noVNC */,

  topClassName: PropTypes.string /** Enable customization */,

  onDisconnected: PropTypes.func /** Callback. VNC server disconnected. */,
  onInitFailed: PropTypes.func /** Initialization of RFB failed */,
  onSecurityFailure: PropTypes.func /** Handshake failed */,

  textConnecting: PropTypes.string /** For localization */,
  textDisconnected: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textCtrlAltDel: PropTypes.string
};

VncConsole.defaultProps = {
  children: null,

  port: '80',
  path: '',
  encrypt: false,
  resizeSession: true,
  viewOnly: false,
  shared: false,
  credentials: undefined,
  repeaterID: '',
  vncLogging: 'warn',

  topClassName: '',

  onDisconnected: noop,
  onInitFailed: noop,
  onSecurityFailure: noop,

  textConnecting: 'Connecting',
  textDisconnected: 'Disconnected',
  textSendShortcut: undefined /** Default value defined in VncActions */,
  textCtrlAltDel: undefined /** Default value defined in VncActions */
};

export default VncConsole;
