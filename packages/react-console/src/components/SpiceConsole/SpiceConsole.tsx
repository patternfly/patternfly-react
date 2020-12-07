import React from 'react';
import { css } from '@patternfly/react-styles';
import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5';

import { constants } from '../common/constants';
import { SpiceActions } from './SpiceActions';

const { CONNECTED, CONNECTING, DISCONNECTED } = constants;

export interface SpiceConsoleProps extends React.HTMLProps<HTMLDivElement> {
  /** Children nodes */
  children?: React.ReactNode;
  /** FQDN or IP to connect to */
  host?: string;
  /** TCP Port */
  port?: string;
  /** host:port/path */
  path?: string;
  /** Enable use of TLS encryption on the SPICE server */
  encrypt?: boolean;
  /** token */
  password?: string;
  /** Additional classes added to the component */
  className?: string;

  /** Callback. Spice server disconnected. */
  onDisconnected?: (e: any) => void;
  /** Initialization of Spice failed */
  onInitFailed?: (e: any) => void;

  textConnecting?: string;
  textDisconnected?: string;
  textSendShortcut?: string;
  textCtrlAltDel?: string;
}

export const SpiceConsole: React.FunctionComponent<SpiceConsoleProps> = ({
  children = null,
  host = '',
  port = '80',
  path = '',
  encrypt = false,
  password,
  className = '',
  onDisconnected,
  onInitFailed,
  textConnecting = 'Connecting',
  textDisconnected = 'Disconnected',
  textSendShortcut,
  textCtrlAltDel
}) => {
  let spiceStaticComponent: React.ReactNode;
  let sc: any;
  const [status, setStatus] = React.useState(CONNECTING);

  React.useEffect(() => {
    try {
      const protocol = encrypt ? 'wss' : 'ws';
      const uri = `${protocol}://${host}:${port}/${path}`;

      sc = new SpiceMainConn({
        uri,
        /* eslint-disable camelcase */
        screen_id: 'spice-screen',
        password,
        onerror: onSpiceError,
        onsuccess: setStatus(CONNECTED)
      });
    } catch (e) {
      onInitFailed && onInitFailed(e);
      disconnect();
    }
    return () => disconnect();
  }, []);

  const disconnect = () => {
    if (sc) {
      sc.stop();
      sc = undefined;
    }
  };

  const onCtrlAltDel = () => {
    if (sc) {
      sendCtrlAltDel();
    }
  };

  const onSpiceError = (e: any) => {
    disconnect();
    setStatus(DISCONNECTED);
    onDisconnected(e);
  };

  if (!spiceStaticComponent) {
    // create just once
    spiceStaticComponent = <div id="spice-screen" />;
  }

  return (
    <div className={css('spice-console', className)}>
      {children}
      <div>
        {status === CONNECTED && (
          <SpiceActions
            onCtrlAltDel={onCtrlAltDel}
            textSendShortcut={textSendShortcut}
            textCtrlAltDel={textCtrlAltDel}
          />
        )}
      </div>
      <div>
        {(status === DISCONNECTED || status === CONNECTING) && (
          <div className={'spice-console-' + status}>{status === DISCONNECTED ? textDisconnected : textConnecting}</div>
        )}
        {status}
        {spiceStaticComponent}
      </div>
    </div>
  );
};
SpiceConsole.displayName = 'SpiceConsole';
