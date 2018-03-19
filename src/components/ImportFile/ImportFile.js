import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import ImportFileContent from './ImportFileContent';

class ImportFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: [],
      rejected: [],
      dropzoneRef: '',
      dropzoneState: 'static',
      disabled: props.disabled,
      text: 'or Drag & Drop'
    };
  }

  onDragLeave = () => {
    this.setState({ text: 'or Drag & Drop', dropzoneState: 'static' });
  };

  onDragEnter = () => {
    this.setState({ text: 'Drop Files Here', dropzoneState: 'active' });
  };

  onDropAccepted = () => {
    this.setState({ text: 'Uploading', dropzoneState: 'accept' });
  };

  onDropRejected = () => {
    this.setState({
      text: 'File type is not supported',
      dropzoneState: 'reject'
    });
  };

  onDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected }, () => {
      if (this.state.accepted.length > 0) {
        if (this.state.accepted.length > this.props.maxAmount) {
          this.setState({
            text: 'File Amount limit exceeded',
            dropzoneState: 'reject'
          });
        } else this.onDropAccepted();
      } else this.onDropRejected();
    });
  };

  render() {
    return (
      <Dropzone
        onDrop={(accepted, rejected) => {
          this.onDrop(accepted, rejected);
        }}
        ref={node => {
          this.state.dropzoneRef = node;
        }}
        disabled={this.state.disabled}
        disableClick={this.props.disableClick}
        className="import-file-pf"
        activeClassName="import-file-active-pf"
        acceptClassName="import-file-accept-pf"
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragStart={this.onDragEnter}
        onDropRejected={this.onDropRejected}
        maxSize={this.props.maxSize}
        accept={this.props.acceptedTypes}
      >
        <ImportFileContent
          state={this.state.dropzoneState}
          text={this.state.text}
          dropzoneRef={this.state.dropzoneRef}
          maxAmount={this.props.maxAmount}
          maxSize={this.props.maxSize}
          acceptedTypes={this.props.acceptedTypes}
          acceptedFiles={this.state.accepted}
          rejectedFiles={this.state.rejected}
          progressDone={21}
        />
      </Dropzone>
    );
  }
}

ImportFile.propTypes = {
  /** disabled bool */
  disabled: PropTypes.bool,
  /** Maximum Amount of Files */
  maxAmount: PropTypes.number.isRequired,
  /** Maximum size of a single file */
  maxSize: PropTypes.number.isRequired,
  /** accepted file types */
  acceptedTypes: PropTypes.string,
  /** disable Click on Dropzone that triggers browse */
  disableClick: PropTypes.bool
};
ImportFile.defaultProps = {
  disabled: false,
  acceptedTypes: '',
  disableClick: true
};
export default ImportFile;
