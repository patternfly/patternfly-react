import React from 'react';
import PropTypes from 'prop-types';
import CopyTextBox from './CopyTextBox';
import CopyButton from './CopyButton';
import BlockBar from './BlockBar';
import { clipboardCopy } from './copy';
import { Form } from '../../index';
import Timer from '../../common/Timer';

class CopyToClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.timer = new Timer();
    this.state = {
      copied: false,
      show: false
    };
  }

  render() {
    const { delay, children, id, copyText, copiedText, block, onCopy } = this.props;
    const { copied, show } = this.state;

    const toggleBlock = () => {
      this.setState({ show: !show });
    };
    const copyFunc = () => {
      onCopy(this.inputRef.current) &&
        this.setState({ copied: true }, () => {
          this.timer.startTimer(() => this.setState({ copied: false }), delay);
        });
    };
    const copyChilds = [
      <CopyTextBox key={`copy-text-box-${id}`} ref={this.inputRef} id={id}>
        {children}
      </CopyTextBox>,
      <CopyButton
        key={`copy-button-${id}`}
        onCopy={copyFunc}
        copied={copied}
        tooltipText={copied ? copiedText : copyText}
        id={id}
      />
    ];
    return block ? (
      <BlockBar toggleBlock={toggleBlock} show={show} text={children}>
        {copyChilds}
      </BlockBar>
    ) : (
      <Form.InputGroup>{copyChilds}</Form.InputGroup>
    );
  }
}

CopyToClipboard.propTypes = {
  /** Content to render inside the block bar */
  children: PropTypes.node.isRequired,
  /** Description of copied data */
  id: PropTypes.string.isRequired,
  /** Milliseconds to reset after copying */
  delay: PropTypes.number,
  /** Tooltip text displayed */
  copyText: PropTypes.string,
  /** Tooltip text displayed when copied */
  copiedText: PropTypes.string,
  /** Flag to render as block bar */
  block: PropTypes.bool,
  /** Copy function */
  onCopy: PropTypes.func
};

CopyToClipboard.defaultProps = {
  delay: 2000,
  copyText: 'Copy to clipboard',
  copiedText: 'Copied',
  block: false,
  onCopy: clipboardCopy
};

export default CopyToClipboard;
