import React from 'react';
import PropTypes from 'prop-types';

import { Terminal } from 'xterm';

import { noop } from 'patternfly-react';

/**
 * Wraps terminal to a React Component.
 * Based on cockpit-components-terminal.jsx from the Cockpit project (https://github.com/cockpit-project/cockpit)
 */
class XTerm extends React.Component {
  state = { terminal: null, rows: null, cols: null };

  componentWillMount() {
    const term = new Terminal({
      cols: this.props.cols,
      rows: this.props.rows,
      screenKeys: true
    });

    if (this.props.onData) {
      term.on('data', this.props.onData);
    }
    if (this.props.onTitleChanged) {
      term.on('title', this.props.onTitleChanged);
    }

    this.setState({ terminal: term });
  }

  componentDidMount() {
    this.state.terminal.open(this.childTerminal);

    if (!this.props.rows) {
      window.addEventListener('resize', this.onWindowResize);
      this.onWindowResize();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.cols !== this.state.cols ||
      nextState.rows !== this.state.rows
    ) {
      this.state.terminal.resize(nextState.cols, nextState.rows);
      this.props.onResize(nextState.rows, nextState.cols);
    }
  }

  componentDidUpdate() {
    this.state.terminal.reset();
  }

  componentWillUnmount() {
    this.state.terminal.destroy();
    window.removeEventListener('resize', this.onWindowResize);
  }

  // eslint-disable-next-line class-methods-use-this
  onBeforeUnload = event => {
    // Firefox requires this when the page is in an iframe
    event.preventDefault();

    // see "an almost cross-browser solution" at
    // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.returnValue = '';
    return '';
  };

  /**
   * Backend closed connection.
   */
  onConnectionClosed(reason) {
    const term = this.state.terminal;
    if (term) {
      term.write(`\x1b[31m${reason || 'disconnected'}\x1b[m\r\n`);
      term.cursorHidden = true;
      term.refresh(term.y, term.y); // start to end row
    }
  }

  /**
   * Backend sent data.
   */
  onDataReceived(data) {
    if (this.state.terminal) {
      this.state.terminal.write(data);
    }
  }

  onFocusIn = () => {
    window.addEventListener('beforeunload', this.onBeforeUnload);
  };

  onFocusOut = () => {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  };

  onWindowResize = () => {
    const padding = 2 * 11;
    const node = this.getDOMNode();
    const terminal = this.childTerminal.querySelector('.terminal');

    const ch = document.createElement('span');
    ch.textContent = 'M';
    ch.style.position = 'absolute';
    terminal.appendChild(ch);
    const rect = ch.getBoundingClientRect();
    terminal.removeChild(ch);

    const state = {
      rows: Math.floor(
        (node.parentElement.clientHeight - padding) / rect.height
      ),
      cols: Math.floor((node.parentElement.clientWidth - padding) / rect.width)
    };
    this.setState(state);
  };

  focus = () => {
    if (this.state.terminal) this.state.terminal.focus();
  };

  render() {
    // ensure react never reuses this div by keying it with the terminal widget
    return (
      <div
        ref={c => {
          this.childTerminal = c;
        }}
        key={this.state.terminal}
        className="console-pf"
        onFocusIn={this.onFocusIn}
        onFocusOut={this.onFocusOut}
      />
    );
  }
}

XTerm.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,

  onTitleChanged: PropTypes.func, // (title) => {}
  onData: PropTypes.func, // Data to be sent from terminal to backend; (data) => {}
  onResize: PropTypes.func // (rows, cols) => {}
};

XTerm.defaultProps = {
  cols: 80,
  rows: 25,

  onTitleChanged: noop,
  onData: noop,
  onResize: noop
};

export default XTerm;
