import React from 'react';

import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, Spinner } from '@patternfly/react-core';

import { XTerm, XTermProps } from './XTerm';
import { SerialConsoleActions } from './SerialConsoleActions';

import constants from '../common/constants';

const { CONNECTED, DISCONNECTED, LOADING } = constants;

export interface SerialConsoleProps extends XTermProps {
  /** Initiate connection to backend. In other words, the calling components manages connection state. */
  onConnect: () => void;
  /** Close connection to backend */
  onDisconnect: () => void;
  /** Connection status; a value from [''connected'; 'disconnected'; 'loading']. Default is 'loading' for a not matching value. */
  status?: string;
  /** Text content rendered inside the Connect button */
  textConnect?: string;
  /** Text content rendered inside the Disconnect button */
  textDisconnect?: string;
  /** Text content rendered inside the Reset button */
  textReset?: string;
  /* Text content rendered inside the EmptyState for when console is disconnnected */
  textDisconnected?: string;
  /* Text content rendered inside the EmptyState for when console is loading */
  textLoading?: string;
}

export class SerialConsole extends React.Component<SerialConsoleProps> {
  static displayName = 'SerialConsole';
  static defaultProps: SerialConsoleProps = {
    onConnect: () => {},
    onDisconnect: () => {},
    status: 'loading',
    textDisconnected: 'Click Connect to open serial console.',
    textLoading: 'Loading ...',
    textConnect: 'Connect'
  };
  private childTerminal = React.createRef<XTerm>();

  componentDidMount() {
    this.props.onConnect();
  }

  componentWillUnmount() {
    this.props.onDisconnect();
  }

  onConnectClick = () => {
    this.props.onConnect();
    this.focusTerminal();
  };

  onDisconnectClick = () => {
    this.props.onDisconnect();
    this.focusTerminal();
  };

  onResetClick = () => {
    this.props.onDisconnect();
    this.props.onConnect();
    this.focusTerminal();
  };

  focusTerminal = () => {
    this.childTerminal && this.childTerminal.current.terminal.focus();
  };

  /**
   * Backend sent data.
   *
   * @param {string} data String content to be writen into the terminal
   */
  onDataReceived = (data: string) => {
    if (this.childTerminal && this.props.status === CONNECTED) {
      this.childTerminal.current.onDataReceived(data);
    }
  };

  /**
   * Backend closed connection.
   *
   * @param {string} reason String error to be written into the terminal
   */
  onConnectionClosed = (reason: string) => {
    if (this.childTerminal) {
      this.childTerminal.current.onConnectionClosed(reason);
    }
  };

  render() {
    const { status } = this.props;

    let terminal;
    switch (status) {
      case CONNECTED:
        terminal = (
          <XTerm
            ref={this.childTerminal}
            cols={this.props.cols}
            rows={this.props.rows}
            fontFamily={this.props.fontFamily}
            fontSize={this.props.fontSize}
            onTitleChanged={this.props.onTitleChanged}
            onResize={this.props.onResize}
            onData={this.props.onData}
          />
        );
        break;
      case DISCONNECTED:
        terminal = (
          <EmptyState>
            <EmptyStateBody>{this.props.textDisconnected}</EmptyStateBody>
            <Button onClick={this.onConnectClick}>{this.props.textConnect}</Button>
          </EmptyState>
        );
        break;
      case LOADING:
      default:
        terminal = (
          <EmptyState>
            <EmptyStateIcon variant="container" component={Spinner} />
            <EmptyStateBody>{this.props.textLoading}</EmptyStateBody>
          </EmptyState>
        );
        break;
    }

    return (
      <>
        {status !== DISCONNECTED && (
          <SerialConsoleActions
            onDisconnect={this.onDisconnectClick}
            onReset={this.onResetClick}
            textDisconnect={this.props.textDisconnect}
            textReset={this.props.textReset}
          />
        )}
        <div className="pf-c-console__serial">{terminal}</div>
      </>
    );
  }
}
