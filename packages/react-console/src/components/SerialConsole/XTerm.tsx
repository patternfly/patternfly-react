import React from 'react';

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import { debounce } from '@patternfly/react-core';

export interface XTermProps {
  /** The number of columns to resize to */
  cols?: number;
  /** The number of rows to resize to */
  rows?: number;
  fontFamily?: string;
  fontSize?: number;
  /** Terminal title has been changed. */
  onTitleChanged?: (title: string) => void;
  /** Data to be sent from terminal to backend; (data) => {} */
  onData?: (e: string) => void;
  /** Terminal has been resized; backend shall be informed. (rows; cols) => {} */
  onResize?: (rows: number, cols: number) => void;
}

export class XTerm extends React.Component<XTermProps> {
  static displayName = 'XTerm';
  static defaultProps: XTermProps = {
    cols: 80,
    rows: 25
  };
  private fitAddon = new FitAddon();
  public terminal: Terminal;
  private ref = React.createRef<HTMLDivElement>();

  constructor(props: XTermProps) {
    super(props);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onFocusIn = this.onFocusIn.bind(this);
    this.onFocusOut = this.onFocusOut.bind(this);

    this.terminal = new Terminal({
      cols: props.cols,
      rows: props.rows,
      cursorBlink: true,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      screenReaderMode: true
    });

    if (props.onData) {
      this.terminal.onData(props.onData);
    }
    if (props.onTitleChanged) {
      this.terminal.onTitleChange(props.onTitleChanged);
    }

    this.terminal.loadAddon(this.fitAddon);
  }

  componentDidMount() {
    this.terminal.open(this.ref.current);

    if (!this.props.rows) {
      window.addEventListener('resize', debounce(this.onWindowResize.bind(this), 100));
      this.onWindowResize();
    }
    this.terminal.focus();
  }

  componentWillUnmount() {
    this.terminal.dispose();
    window.removeEventListener('resize', this.onWindowResize);
    this.onFocusOut();
  }

  onBeforeUnload(event: any) {
    // Firefox requires this when the page is in an iframe
    event.preventDefault();

    // see "an almost cross-browser solution" at
    // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.returnValue = '';
    return '';
  }

  onFocusIn() {
    window.addEventListener('beforeunload', this.onBeforeUnload);
  }

  onFocusOut() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  }

  onWindowResize() {
    const geometry = this.fitAddon.proposeDimensions();
    if (geometry) {
      this.terminal.resize(geometry.rows, geometry.cols);
    }
  }

  /**
   * Backend sent data.
   *
   * @param {string} data String content to be writen into the terminal
   */
  onDataReceived(data: string) {
    if (this.terminal) {
      this.terminal.write(data);
    }
  }

  /**
   * Backend closed connection.
   *
   * @param {string} reason String error to be written into the terminal
   */
  onConnectionClosed(reason: string) {
    const term = this.terminal;
    if (term) {
      term.write(`\x1b[31m${reason || 'disconnected'}\x1b[m\r\n`);
      term.refresh(term.rows, term.rows); // start to end row
    }
  }

  render() {
    // ensure react never reuses this div by keying it with the terminal widget
    return <div ref={this.ref} className="pf-c-console__xterm" onFocus={this.onFocusIn} onBlur={this.onFocusOut} />;
  }
}
