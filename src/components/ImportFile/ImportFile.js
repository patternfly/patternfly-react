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
      dropzoneState: 'passive',
      disabled: props.disabled
    };
  }

  onDragEnter = () => {
    this.setState({ dropzoneState: 'active' });
  };

  onDropAccepted = () => {
    this.setState({ dropzoneState: 'accept' });
    this.props.onDrop(this.state.accepted);
  };

  onDropRejected = () => {
    this.setState({
      dropzoneState: 'reject'
    });
  };

  onDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected }, () => {
      if (this.state.accepted.length > 0) {
        if (this.state.accepted.length > this.props.maxAmount) {
          this.setState({
            dropzoneState: 'rejectAmount'
          });
        } else this.onDropAccepted();
      } else this.onDropRejected();
    });
  };

  browseClicked = () => {
    this.dropzoneRef.open();
  };

  reset = () => {
    this.setState({ dropzoneState: 'passive' });
  };

  render() {
    return (
      <Dropzone
        onDrop={(accepted, rejected) => {
          this.onDrop(accepted, rejected);
        }}
        ref={node => {
          this.dropzoneRef = node;
        }}
        disabled={this.state.disabled}
        disableClick
        className="import-file-pf"
        activeClassName="import-file-active-pf"
        acceptClassName="import-file-accept-pf"
        onDragEnter={this.onDragEnter}
        onDragLeave={this.reset}
        onDragStart={this.onDragEnter}
        onDropRejected={this.onDropRejected}
        maxSize={this.props.maxSize}
        accept={this.props.acceptedTypes}
      >
        <ImportFileContent
          state={this.state.dropzoneState}
          text={this.props.text}
          icons={this.props.icons}
          browseClicked={this.browseClicked}
          maxAmount={this.props.maxAmount}
          maxSize={this.props.maxSize}
          acceptedTypes={this.props.acceptedTypes}
          acceptedFiles={this.state.accepted}
          rejectedFiles={this.state.rejected}
          reset={this.reset}
          progressDone={this.props.progressDone}
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
  /** Text array per state */
  text: PropTypes.objectOf(PropTypes.string),
  /** Icons to show */
  icons: PropTypes.objectOf(PropTypes.string),
  /** Progress done so far */
  progressDone: PropTypes.number.isRequired,
  /** onDrop func(acceptedFiles) */
  onDrop: PropTypes.func
};
ImportFile.defaultProps = {
  disabled: false,
  acceptedTypes: '',
  onDrop: null,
  text: {
    passive: 'or Drag & Drop',
    active: 'Drop files here',
    accept: 'Uploading',
    reject: 'File type is not supported',
    rejectAmount: 'File amount limit exceeded'
  },
  icons: {
    passive: 'plus-circle',
    active: 'plus-circle',
    accept: 'chevron-circle-up',
    reject: 'exclamation-circle',
    rejectAmount: 'exclamation-circle'
  }
};
export default ImportFile;
