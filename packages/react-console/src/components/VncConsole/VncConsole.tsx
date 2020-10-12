import React from 'react';

import { EmptyState, EmptyStateBody, EmptyStateIcon, Spinner } from '@patternfly/react-core';

import * as NovncLog from 'novnc-core/lib/util/logging';
/** Blame all the ts-ignore on https://github.com/larryprice/novnc-core/issues/5 */
import RFB from 'novnc-core';

import { VncActions } from './VncActions';
import constants from '../common/constants';

import '@patternfly/react-styles/src/css/components/Consoles/VncConsole.css';

const { CONNECTED, CONNECTING, DISCONNECTED } = constants;

export interface VncConsoleProps extends React.HTMLProps<HTMLDivElement> {
  /** Children nodes */
  children?: React.ReactNode;

  /** FQDN or IP to connect to */
  host: string;
  /** TCP Port */
  port?: string;
  /** host:port/path */
  path?: string;
  encrypt?: boolean;
  /** Is a boolean indicating if a request to resize the remote session should be sent whenever the container changes dimensions */
  resizeSession?: boolean;
  /** Is a boolean indicating if the remote session should be scaled locally so it fits its container */
  scaleViewport?: boolean;
  /** Is a boolean indicating if any events (e.g. key presses or mouse movement) should be prevented from being sent to the server */
  viewOnly?: boolean;
  /** Is a boolean indicating if the remote server should be shared or if any other connected clients should be disconnected */
  shared?: boolean;
  /** An Object specifying the credentials to provide to the server when authenticating
   * { username: '' password: '' target: ''}
   */
  credentials?: object;
  /** A DOMString specifying the ID to provide to any VNC repeater encountered */
  repeaterID?: string;
  /** log-level for noVNC */
  vncLogging?: 'error' | 'warn' | 'none' | 'debug' | 'info';
  consoleContainerId?: string;
  additionalButtons?: React.ReactNode[];

  /** Callback. VNC server disconnected. */
  onDisconnected?: (e: any) => void;
  /** Initialization of RFB failed */
  onInitFailed?: (e: any) => void;
  /** Handshake failed */
  onSecurityFailure?: (e: any) => void;

  /* Text content rendered inside the EmptyState for when console is connecting */
  textConnecting?: string | React.ReactNode;
  /* Text content rendered inside the EmptyState for when console is disconnnected */
  textDisconnected?: string;
  /** Text content rendered inside the Disconnect button */
  textDisconnect?: string;
  /** Text content rendered inside the button Send shortcut dropdown toggle */
  textSendShortcut?: string;
  /** Text content rendered inside the Ctrl-Alt-Delete dropdown entry */
  textCtrlAltDel?: string;
}

export interface VncConsoleState {
  status: string;
}

export class VncConsole extends React.Component<VncConsoleProps, VncConsoleState> {
  static displayName = 'VncConsole';
  static defaultProps = {
    port: '80',
    path: '',
    encrypt: false,
    resizeSession: true,
    scaleViewport: false,
    viewOnly: false,
    shared: false,
    repeaterID: '',
    vncLogging: 'warn',
    additionalButtons: [] as React.ReactNode[],
    onDisconnected: () => {},
    textConnecting: 'Connecting',
    textDisconnected: 'Disconnected',
    textDisconnect: 'Disconnect'
  };
  private rfb: RFB;
  private novncStaticComponent: React.ReactNode;
  private novncElem: HTMLDivElement;

  constructor(props: VncConsoleProps) {
    super(props);
    this.state = { status: CONNECTING };
  }

  addEventListeners() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.rfb.addEventListener('connect', this.onConnected);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.rfb.addEventListener('disconnect', this.onDisconnected);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.rfb = new RFB(this.novncElem, url, options);
      this.addEventListeners();
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.rfb.viewOnly = viewOnly;
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.rfb.scaleViewport = scaleViewport;
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
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

  onDisconnected = (e: any) => {
    this.setState({ status: DISCONNECTED });
    this.props.onDisconnected(e);
  };

  onSecurityFailure = (e: any) => {
    this.setState({ status: DISCONNECTED });
    this.props.onSecurityFailure(e);
  };

  onCtrlAltDel = () => {
    if (this.rfb) {
      this.rfb.sendCtrlAltDel();
    }
  };

  removeEventListeners = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.rfb.removeEventListener('connect', this.onConnected);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.rfb.removeEventListener('disconnect', this.onDisconnected);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.rfb.removeEventListener('securityfailure', this.onSecurityFailure);
  };

  render() {
    const {
      textDisconnected,
      textConnecting,
      textSendShortcut,
      textCtrlAltDel,
      textDisconnect,
      consoleContainerId,
      additionalButtons
    } = this.props;

    let status = null;
    let rightContent = null;
    switch (this.state.status) {
      case CONNECTED:
        rightContent = (
          <VncActions
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
        status = (
          <EmptyState>
            <EmptyStateBody>{textDisconnected}</EmptyStateBody>
          </EmptyState>
        );
        break;
      case CONNECTING:
      default:
        status = (
          <EmptyState>
            <EmptyStateIcon variant="container" component={Spinner} />
            <EmptyStateBody>{textConnecting}</EmptyStateBody>
          </EmptyState>
        );
    }

    if (!this.novncStaticComponent) {
      this.novncStaticComponent = <div id={consoleContainerId} ref={e => (this.novncElem = e)} />;
    }

    return (
      <div className="pf-c-console__vnc">
        {this.props.children}
        <React.Fragment>
          {rightContent}
          <div>
            {status}
            {this.novncStaticComponent}
          </div>
        </React.Fragment>
      </div>
    );
  }
}
