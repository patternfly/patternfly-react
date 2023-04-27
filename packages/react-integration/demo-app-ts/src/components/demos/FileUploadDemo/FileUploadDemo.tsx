import React from 'react';
import { FileUpload } from '@patternfly/react-core';
import { DropEvent } from 'react-dropzone';

export class FileUploadDemo extends React.Component {
  static displayName = 'FileUploadDemo';

  state = { value: '', filename: '', isLoading: false };
  /* eslint-disable-next-line no-console */
  handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>, file: File) =>
    this.setState({ value: file, filename: file.name });
  handleDataChange = (_event: DropEvent, value: string) => this.setState({ value });
  /* eslint-disable @typescript-eslint/no-unused-vars */
  handleFileReadStarted = (_event: DropEvent, _fileHandle: File) => this.setState({ isLoading: true });
  handleFileReadFinished = (_event: DropEvent, _fileHandle: File) => this.setState({ isLoading: false });
  /* eslint-enable @typescript-eslint/no-unused-vars */

  render() {
    const { value, filename, isLoading } = this.state;
    return (
      <FileUpload
        id="simple-text-file"
        type="text"
        value={value}
        filename={filename}
        onFileInputChange={this.handleFileInputChange}
        onDataChange={this.handleDataChange}
        onReadStarted={this.handleFileReadStarted}
        onReadFinished={this.handleFileReadFinished}
        isLoading={isLoading}
      />
    );
  }
}
