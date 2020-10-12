import React from 'react';
import { css } from '@patternfly/react-styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5';

import constants from '../common/constants';
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

export interface SpiceConsoleState {
  status: string;
}
export class SpiceConsole extends React.Component<SpiceConsoleProps, SpiceConsoleState> {
  static displayName = 'SpiceConsole';
  static defaultProps: SpiceConsoleProps = {
    className: '',
    children: null,
    host: '',
    port: '80',
    path: '',
    encrypt: false,
    textConnecting: 'Connecting',
    textDisconnected: 'Disconnected'
  };
  private spiceStaticComponent: React.ReactNode;
  private sc: SpiceMainConn;

  constructor(props: SpiceConsoleProps) {
    super(props);
    this.state = { status: CONNECTING };
  }

  componentDidMount() {
    const { host, port, path, encrypt, password, onInitFailed } = this.props;

    try {
      const protocol = encrypt ? 'wss' : 'ws';
      const uri = `${protocol}://${host}:${port}/${path}`;

      this.sc = new SpiceMainConn({
        uri,
        /* eslint-disable camelcase */
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

  onCtrlAltDel = () => {
    if (this.sc) {
      sendCtrlAltDel();
    }
  };

  onSpiceError = (e: any) => {
    this.disconnect();
    this.onDisconnected(e);
  };

  onDisconnected = (e: any) => {
    this.setState({ status: DISCONNECTED });
    this.props.onDisconnected(e);
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

    if (!this.spiceStaticComponent) {
      // create just once
      this.spiceStaticComponent = <div id="spice-screen" />;
    }

    return (
      <div className={css('spice-console', this.props.className)}>
        {this.props.children}
        <div>{rightContent}</div>
        <div>
          {status}
          {this.spiceStaticComponent}
        </div>
      </div>
    );
  }
}
