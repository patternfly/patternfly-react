import React from 'react';
import PropTypes from 'prop-types';

import { Terminal } from 'xterm';
import { proposeGeometry } from 'xterm/lib/addons/fit/fit';

import { noop } from 'patternfly-react';
import { debounce } from '../common/helpers';

/**
 * Wraps terminal to a React Component.
 * Based on cockpit-components-terminal.jsx from the Cockpit project (https://github.com/cockpit-project/cockpit)
 */
class XTerm extends React.Component {
  state = { terminal: null, rows: null, cols: null, autoFit: false };

  componentWillMount() {
    const term = new Terminal({
      cols: this.props.cols,
      rows: this.props.rows,
      screenKeys: true,
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize
    });

    if (this.props.onData) {
      term.on('data', this.props.onData);
    }
    if (this.props.onTitleChanged) {
      term.on('title', this.props.onTitleChanged);
    }

    this.setState({
      terminal: term,
      cols: this.props.cols,
      rows: this.props.rows,
      autoFit: this.props.autoFit
    });
  }

  componentDidMount() {
    this.state.terminal.open(this.childTerminal);

    window.addEventListener('resize', debounce(this.onWindowResize.bind(this), 100));
    this.onWindowResize();
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.cols !== this.state.cols ||
      newProps.rows !== this.state.rows ||
      newProps.autoFit !== this.state.autoFit
    ) {
      this.setState({
        cols: newProps.cols,
        rows: newProps.rows,
        autoFit: newProps.autoFit
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.cols !== this.state.cols ||
      nextState.rows !== this.state.rows ||
      nextState.autoFit !== this.state.autoFit
    ) {
      if (nextState.autoFit) {
        // If it is autoFit, get the computed size and set it
        this.removeMinWidth();
        const geometry = proposeGeometry(this.state.terminal);
        this.state.terminal.resize(geometry.cols, geometry.rows);
        this.props.onResize(geometry.rows, geometry.cols);
      } else {
        this.addMinWidth(nextState.cols);
        this.state.terminal.resize(nextState.cols, nextState.rows);
        this.props.onResize(nextState.rows, nextState.cols);
      }
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

  onFocus = () => {
    window.addEventListener('beforeunload', this.onBeforeUnload);
  };

  onBlur = () => {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  };

  /**
   * If autoFit is enabled, compute the size and set it
   * Otherwise set the min-width on the console
   */
  onWindowResize() {
    if (this.state.autoFit) {
      this.removeMinWidth();
      const geometry = proposeGeometry(this.state.terminal);
      if (geometry) {
        this.setState({
          rows: geometry.rows,
          cols: geometry.cols
        });
      }
    } else {
      this.addMinWidth(this.state.cols);
    }
  }

  /**
   * Calculate the minimum width of the terminal based on the number of columns
   *
   * @param {Number} cols Number of columns
   */
  addMinWidth(cols) {
    if (this.childTerminal && this.state.terminal.renderer) {
      const padding = 2 * 11;
      const { actualCellWidth } = this.state.terminal.renderer.dimensions;
      const minWidth = actualCellWidth * cols + padding;
      this.childTerminal.style.minWidth = `${minWidth}px`;
    }
  }

  /**
   * Remove the min-width on the console
   */
  removeMinWidth() {
    if (this.childTerminal) {
      this.childTerminal.style.minWidth = '';
    }
  }

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
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

XTerm.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  autoFit: PropTypes.bool,

  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,

  onTitleChanged: PropTypes.func, // (title) => {}
  onData: PropTypes.func, // Data to be sent from terminal to backend; (data) => {}
  onResize: PropTypes.func // (rows, cols) => {}
};

XTerm.defaultProps = {
  cols: 80,
  rows: 25,
  autoFit: false,

  fontFamily: undefined,
  fontSize: undefined,

  onTitleChanged: noop,
  onData: noop,
  onResize: noop
};

export default XTerm;
