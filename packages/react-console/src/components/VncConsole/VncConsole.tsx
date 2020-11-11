import React from 'react';

import { css } from '@patternfly/react-styles';
import { EmptyState, EmptyStateBody, EmptyStateIcon, Spinner } from '@patternfly/react-core';

import * as NovncLog from 'novnc-core/lib/util/logging';
/** Has bad types. https://github.com/larryprice/novnc-core/issues/5 */
import RFB from 'novnc-core';

import { VncActions } from './VncActions';
import constants from '../common/constants';

import styles from '@patternfly/react-styles/css/components/Consoles/VncConsole';
import '@patternfly/react-styles/css/components/Consoles/VncConsole.css';

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

export const VncConsole: React.FunctionComponent<VncConsoleProps> = ({
  children,
  host,
  port = '80',
  path = '',
  encrypt = false,
  resizeSession = true,
  scaleViewport = false,
  viewOnly = false,
  shared = false,
  credentials,
  repeaterID = '',
  vncLogging = 'warn',
  consoleContainerId,
  additionalButtons = [] as React.ReactNode[],
  onDisconnected = () => {},
  onInitFailed,
  onSecurityFailure,
  textConnecting = 'Connecting',
  textDisconnected = 'Disconnected',
  textDisconnect = 'Disconnect',
  textSendShortcut,
  textCtrlAltDel
}) => {
  let rfb: any;
  let novncStaticComponent: React.ReactNode;
  let novncElem: HTMLDivElement;

  const [status, setStatus] = React.useState(CONNECTING);

  const addEventListeners = () => {
    rfb.addEventListener('connect', onConnected);
    rfb.addEventListener('disconnect', onDisconnected);
    rfb.addEventListener('securityfailure', onSecurityFailure);
  };

  React.useEffect(() => {
    NovncLog.init_logging(vncLogging);
    try {
      const protocol = encrypt ? 'wss' : 'ws';
      const url = `${protocol}://${host}:${port}/${path}`;

      const options = {
        repeaterID,
        shared,
        credentials
      };
      rfb = (new RFB() as any)(novncElem, url, options);
      addEventListeners();
      rfb.viewOnly = viewOnly;
      rfb.scaleViewport = scaleViewport;
      rfb.resizeSession = resizeSession;
    } catch (e) {
      onInitFailed && onInitFailed(e);
      rfb = undefined;
    }

    return () => {
      disconnect();
      removeEventListeners();
      rfb = undefined;
    };
  }, []);

  const disconnect = () => {
    if (!rfb) {
      return;
    }
    rfb.disconnect();
  };

  const onConnected = () => {
    setStatus(CONNECTED);
  };

  const _onDisconnected = (e: any) => {
    setStatus(DISCONNECTED);
    onDisconnected(e);
  };

  const _onSecurityFailure = (e: any) => {
    setStatus(DISCONNECTED);
    onSecurityFailure(e);
  };

  const onCtrlAltDel = () => {
    if (rfb) {
      rfb.sendCtrlAltDel();
    }
  };

  const removeEventListeners = () => {
    if (rfb) {
      rfb.removeEventListener('connect', onConnected);
      rfb.removeEventListener('disconnect', _onDisconnected);
      rfb.removeEventListener('securityfailure', _onSecurityFailure);
    }
  };

  let rightContent;
  let emptyState;
  switch (status) {
    case CONNECTED:
      rightContent = (
        <VncActions
          onCtrlAltDel={onCtrlAltDel}
          textSendShortcut={textSendShortcut}
          textCtrlAltDel={textCtrlAltDel}
          textDisconnect={textDisconnect}
          onDisconnect={disconnect}
          additionalButtons={additionalButtons}
        />
      );
      break;
    case DISCONNECTED:
      emptyState = (
        <EmptyState>
          <EmptyStateBody>{textDisconnected}</EmptyStateBody>
        </EmptyState>
      );
      break;
    case CONNECTING:
    default:
      emptyState = (
        <EmptyState>
          <EmptyStateIcon variant="container" component={Spinner} />
          <EmptyStateBody>{textConnecting}</EmptyStateBody>
        </EmptyState>
      );
  }

  if (!novncStaticComponent) {
    novncStaticComponent = <div id={consoleContainerId} ref={e => (novncElem = e)} />;
  }

  return (
    <div className={css(styles.consoleVnc)}>
      {children}
      <React.Fragment>
        {rightContent}
        <div>
          {emptyState}
          {novncStaticComponent}
        </div>
      </React.Fragment>
    </div>
  );
};
VncConsole.displayName = 'VncConsole';
