import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import { SerialConsole } from './index';
import { CONNECTED, DISCONNECTED, LOADING } from './constants';

import { name } from '../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/Serial Console`, module);
stories.addDecorator(
  defaultTemplate({
    title: 'SerialConsole',
    description:
      'This is an example of the SerialConsole component. For the purpose of this example, there is just a mock backend.'
  })
);
stories.addDecorator(withKnobs);

/* eslint no-console: ["warn", { allow: ["log"] }] */
const { log } = console; // let's keep these trace messages for tutoring purposes

const timeoutIds = [];
/**
 * The SerialConsoleConnector component is consumer-specific and wraps the communication with backend.
 * For the purpose of this storybook, the backend is just mimicked.
 */
export class SerialConsoleConnector extends React.Component {
  state = { status: LOADING, passKeys: false };

  onBackendDisconnected = () => {
    log('Backend has disconnected, pass the info to the UI component');
    if (this.childSerialconsole) {
      this.childSerialconsole.onConnectionClosed('Reason for disconnect provided by backend.');
    }

    this.setState({
      passKeys: false,
      status: DISCONNECTED // will close the terminal window
    });
  };

  onConnect = () => {
    log('SerialConsoleConnector.onConnect(), ', this.state);
    this.setConnected();
    this.tellFairyTale();
  };

  onData = data => {
    log('UI terminal component produced data, i.e. a key was pressed, pass it to backend. [', data, ']');

    // Normally, the "data" shall be passed to the backend which might send them back via onData() call
    // Since there is no backend, let;s pass them to UI component immediately.
    if (this.state.passKeys) {
      this.onDataFromBackend(data);
    }
  };

  onDataFromBackend = data => {
    log('Backend sent data, pass them to the UI component. [', data, ']');
    if (this.childSerialconsole) {
      this.childSerialconsole.onDataReceived(data);
    }
  };

  onDisconnect = () => {
    this.setState({
      status: DISCONNECTED
    });
    timeoutIds.forEach(id => clearTimeout(id));
  };

  onResize = (rows, cols) => {
    log('UI has been resized, pass this info to backend. [', rows, ', ', cols, ']');
  };

  setConnected = () => {
    this.setState({
      status: CONNECTED,
      passKeys: true
    });
  };

  tellFairyTale = () => {
    let time = 1000;
    timeoutIds.push(setTimeout(() => this.onDataFromBackend(' This is a mock terminal. '), time));

    time += 1000;
    timeoutIds.push(setTimeout(() => this.onDataFromBackend(' Something is happening! '), time));

    time += 1000;
    timeoutIds.push(setTimeout(() => this.onDataFromBackend(' Something is happening! '), time));

    time += 1000;
    timeoutIds.push(setTimeout(() => this.onDataFromBackend(' Backend will be disconnected shortly. '), time));

    time += 5000;
    timeoutIds.push(setTimeout(this.onBackendDisconnected, time));
  };

  render() {
    return (
      <SerialConsole
        onConnect={this.onConnect}
        onDisconnect={this.onDisconnect}
        onResize={this.onResize}
        onData={this.onData}
        id="my-serialconsole"
        status={this.state.status}
        ref={c => {
          this.childSerialconsole = c;
        }}
        autoFit={this.props.autoFit}
        cols={this.props.cols}
        rows={this.props.rows}
      />
    );
  }
}

SerialConsoleConnector.propTypes = {
  autoFit: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number
};

SerialConsoleConnector.defaultProps = {
  autoFit: false,
  rows: undefined,
  cols: undefined
};

stories.addWithInfo('SerialConsole', () => {
  const autoFit = boolean('Auto fit', true);
  const cols = autoFit ? undefined : number('Columns', 90);
  const rows = autoFit ? undefined : number('Rows', 35);

  return <SerialConsoleConnector autoFit={autoFit} cols={cols} rows={rows} />;
});
