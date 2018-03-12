import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import ImportFileText from './ImportFileText';

/** onDrop onDragOver onDragLeave dropEffect targetAlwaysVisible onFrameDragEnter onFrameDragLeave onFrameDrop */

class ImportFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: [],
      rejected: [],
      disabled: props.disabled,
      text: 'or Drag & Drop',
      hideButton: props.hideButton
    };
  }
  onBrowseClick = () => {
    console.log('browse clicked', this.state.accepted, this.state.rejected);
  };

  onDragEnter = () => {
    this.setState({ text: 'Drop Files Here', hideButton: true });
  };
  onDragLeave = () => {
    this.setState({ text: 'or Drag & Drop', hideButton: false });
  };

  render() {
    return (
      <Dropzone
        className="import-file-pf"
        activeClassName="import-file-pf-active"
        disabled={this.state.disabled}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDrop={(accepted, rejected) => {
          this.setState({ accepted, rejected });
        }}
      >
        <ImportFileText
          hideButton={this.state.hideButton}
          text={this.state.text}
        />
      </Dropzone>
    );
  }
}

ImportFile.propTypes = {
  /** disabled bool */
  disabled: PropTypes.bool,
  /** hideButton bool */
  hideButton: PropTypes.bool
};
ImportFile.defaultProps = {
  disabled: false,
  hideButton: false
};
export default ImportFile;
