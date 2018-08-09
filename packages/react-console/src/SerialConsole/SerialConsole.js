import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { EmptyState, Button, noop } from 'patternfly-react';
import { CONNECTED, DISCONNECTED, LOADING } from './constants';

import XTerm from './XTerm';
import SerialConsoleActions from './SerialConsoleActions';

/**
 * SerialConsole Component for PatternFly React
 */
class SerialConsole extends React.Component {
  componentDidMount() {
    this.props.onConnect();
  }

  componentWillUnmount() {
    this.props.onDisconnect();
  }

  onResetClick = event => {
    if (event.button !== 0) return;

    this.props.onDisconnect();
    this.props.onConnect();
    event.target.blur();
    this.focusTerminal();
  };

  onDisconnectClick = event => {
    if (event.button !== 0) return;

    this.props.onDisconnect();
    event.target.blur();
    this.focusTerminal();
  };

  /**
   * Backend sent data.
   */
  onDataReceived(data) {
    if (this.childTerminal && this.props.status === CONNECTED) {
      this.childTerminal.onDataReceived(data);
    }
  }

  /**
   * Backend closed connection.
   */
  onConnectionClosed(reason) {
    if (this.childTerminal) {
      this.childTerminal.onConnectionClosed(reason);
    }
  }

  focusTerminal = () => {
    this.childTerminal && this.childTerminal.focus();
  };

  render() {
    const { id, status, topClassName } = this.props;
    const idPrefix = `${id || 'id'}-serialconsole`;

    let terminal;
    let isDisconnectEnabled = false;
    switch (status) {
      case CONNECTED:
        terminal = (
          <XTerm
            ref={c => {
              this.childTerminal = c;
            }}
            className="serial-console-pf"
            cols={this.props.cols}
            rows={this.props.rows}
            autoFit={this.props.autoFit}
            fontFamily={this.props.fontFamily}
            fontSize={this.props.fontSize}
            onConnect={this.props.onConnect}
            onDisconnect={this.props.onDisconnect}
            onData={this.props.onData}
            onTitleChanged={this.props.onTitleChanged}
            onResize={this.props.onResize}
          />
        );
        isDisconnectEnabled = true;
        break;
      case DISCONNECTED:
        terminal = (
          <EmptyState>
            <EmptyState.Title>{this.props.textDisconnectedTitle}</EmptyState.Title>
            <EmptyState.Info>{this.props.textDisconnected}</EmptyState.Info>
            <EmptyState.Action>
              <Button bsStyle="primary" bsSize="large" onClick={this.props.onConnect}>
                {this.props.textConnect}
              </Button>
            </EmptyState.Action>
          </EmptyState>
        );
        break;
      case LOADING:
      default:
        terminal = <span>{this.props.textLoading}</span>;
        break;
    }

    const classes = classNames('serial-console-pf', topClassName);

    return (
      <div className={classes} id={id}>
        <SerialConsoleActions
          idPrefix={idPrefix}
          isDisconnectEnabled={isDisconnectEnabled}
          onDisconnect={this.onDisconnectClick}
          onReset={this.onResetClick}
          textDisconnect={this.props.textDisconnect}
          textReconnect={this.props.textReconnect}
        />
        <div className="panel-body console-terminal-pf">{terminal}</div>
      </div>
    );
  }
}

SerialConsole.propTypes = {
  /** Initiate connection to backend. In other words, the calling components manages connection state. */
  onConnect: PropTypes.func.isRequired,
  /** Close connection to backend */
  onDisconnect: PropTypes.func.isRequired,
  /** Terminal has been resized, backend shall be informed. (rows, cols) => {} */
  onResize: PropTypes.func,
  /** Terminal produced data, like key-press */
  onData: PropTypes.func,
  /** Terminal title has been changed. */
  onTitleChanged: PropTypes.func,

  /** Connection status, a value from [''connected', 'disconnected', 'loading']. Default is 'loading' for a not matching value. */
  status: PropTypes.string.isRequired,
  id: PropTypes.string,

  /** Size of the terminal component */
  rows: PropTypes.number,
  cols: PropTypes.number,
  autoFit: PropTypes.bool,

  /** Font for text rendered to xterm canvas */
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,

  /** Enable customization */
  topClassName: PropTypes.string,

  /** Localization */
  textDisconnect: PropTypes.string,
  textDisconnectedTitle: PropTypes.string,
  textDisconnected: PropTypes.string,
  textLoading: PropTypes.string,
  textReconnect: PropTypes.string,
  textConnect: PropTypes.string
};

SerialConsole.defaultProps = {
  topClassName: '',

  id: '',
  rows: 25,
  cols: 80,
  autoFit: false,

  fontFamily: undefined /** Use xterm default: 'courier-new, courier, monospace' */,
  fontSize: undefined /** Use xterm default: 15 */,

  onTitleChanged: noop,
  onData: noop,
  onResize: noop,

  textDisconnectedTitle: 'Disconnected from serial console',
  textDisconnected: 'Click Connect to open serial console.',
  textLoading: 'Loading ...',
  textConnect: 'Connect',
  textDisconnect: undefined /** Default is set in SerialConsoleActions */,
  textReconnect: undefined /** Default is set in SerialConsoleActions */
};

export default SerialConsole;
