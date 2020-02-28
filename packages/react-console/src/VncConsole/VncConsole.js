import React from 'react';
import PropTypes from 'prop-types';

import * as NovncLog from '@novnc/novnc/core/util/logging';
import RFB from '@novnc/novnc/core/rfb';

import classNames from 'classnames';
import { Toolbar, helpers } from 'patternfly-react';

import VncActions from './VncActions';
import constants from '../common/constants';

const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
const { noop } = helpers;

/* eslint no-console: ["warn", { allow: ["error"] }] */

class VncConsole extends React.Component {
  state = { status: CONNECTING };

  addEventListeners() {
    this.rfb.addEventListener('connect', this.onConnected);
    this.rfb.addEventListener('disconnect', this.onDisconnected);
    this.rfb.addEventListener('securityfailure', this.onSecurityFailure);
  }

  componentDidMount() {
    const {
      host,
      port,
      path,
      encrypt,
      resizeSession,
      scaleViewport,
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
      this.addEventListeners();
      this.rfb.viewOnly = viewOnly;
      this.rfb.scaleViewport = scaleViewport;
      this.rfb.resizeSession = resizeSession;
    } catch (e) {
      onInitFailed && onInitFailed(e);
      this.rfb = undefined;
    }
  }

  componentWillUnmount() {
    this.disconnect();
    this.removeEventListeners();
    this.rfb = undefined;
  }

  disconnect = () => {
    if (!this.rfb) {
      return;
    }
    this.rfb.disconnect();
  };

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

  removeEventListeners = () => {
    this.rfb.removeEventListener('connect', this.onConnected);
    this.rfb.removeEventListener('disconnect', this.onDisconnected);
    this.rfb.removeEventListener('securityfailure', this.onSecurityFailure);
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
    const {
      textDisconnected,
      textConnecting,
      textSendShortcut,
      textCtrlAltDel,
      textDisconnect,
      portalToolbarTo,
      consoleContainerId,
      additionalButtons
    } = this.props;

    let status = null;
    let rightContent = null;
    switch (this.state.status) {
      case CONNECTED:
        rightContent = (
          <VncActions
            portalToolbarTo={portalToolbarTo}
            onCtrlAltDel={this.onCtrlAltDel}
            textSendShortcut={textSendShortcut}
            textCtrlAltDel={textCtrlAltDel}
            textDisconnect={textDisconnect}
            onDisconnect={this.disconnect}
            additionalButtons={additionalButtons}
          />
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
      this.novncStaticComponent = <div id={consoleContainerId} ref={this.setNovncElem} />;
    }

    return (
      <div className={classNames('vnc-console', this.props.topClassName)}>
        {this.props.children}
        {portalToolbarTo ? (
          <React.Fragment>
            {rightContent}
            {status}
            {this.novncStaticComponent}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Toolbar.RightContent>{rightContent}</Toolbar.RightContent>
            <Toolbar.Results>
              {status}
              {this.novncStaticComponent}
            </Toolbar.Results>
          </React.Fragment>
        )}
      </div>
    );
  }
}

VncConsole.displayName = 'VncConsole';

VncConsole.propTypes = {
  children: PropTypes.node /** Children nodes */,

  host: PropTypes.string.isRequired /** FQDN or IP to connect to */,
  port: PropTypes.string /** TCP Port */,
  path: PropTypes.string /** host:port/path */,
  encrypt: PropTypes.bool /** For all following, see: https://github.com/novnc/noVNC/blob/master/docs/API.md */,
  resizeSession: PropTypes.bool /** Change remote session size according to local HTML container */,
  scaleViewport: PropTypes.bool /** Scale session size according to parent HTML container */,
  viewOnly: PropTypes.bool,
  shared: PropTypes.bool,
  credentials: PropTypes.object /** { username: '', password: '', target: ''} */,
  repeaterID: PropTypes.string,
  vncLogging: PropTypes.string /** log-level for noVNC */,
  portalToolbarTo: PropTypes.string,
  consoleContainerId: PropTypes.string,
  additionalButtons: PropTypes.arrayOf(PropTypes.node),

  topClassName: PropTypes.string /** Enable customization */,

  onDisconnected: PropTypes.func /** Callback. VNC server disconnected. */,
  onInitFailed: PropTypes.func /** Initialization of RFB failed */,
  onSecurityFailure: PropTypes.func /** Handshake failed */,

  textConnecting: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]) /** For localization and better integration */,
  textDisconnected: PropTypes.string,
  textDisconnect: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textCtrlAltDel: PropTypes.string
};

VncConsole.defaultProps = {
  children: null,

  port: '80',
  path: '',
  encrypt: false,
  resizeSession: true,
  scaleViewport: false,
  viewOnly: false,
  shared: false,
  credentials: undefined,
  repeaterID: '',
  vncLogging: 'warn',
  portalToolbarTo: '',
  consoleContainerId: undefined,
  additionalButtons: [],

  topClassName: '',

  onDisconnected: noop,
  onInitFailed: noop,
  onSecurityFailure: noop,

  textConnecting: 'Connecting',
  textDisconnected: 'Disconnected',
  textDisconnect: 'Disconnect',
  textSendShortcut: undefined /** Default value defined in VncActions */,
  textCtrlAltDel: undefined /** Default value defined in VncActions */
};

export default VncConsole;
