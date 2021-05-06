import React from 'react';
import { FileUpload } from '@patternfly/react-core';

export class FileUploadDemo extends React.Component {
  static displayName = 'FileUploadDemo';

  state = { value: '', filename: '', isLoading: false };
  /* eslint-disable-next-line no-console */
  handleClick = (evt: React.MouseEvent) => console.log('clicked', evt.target);
  handleFileChange = (value: string | File, filename: string) => this.setState({ value, filename });
  /* eslint-disable @typescript-eslint/no-unused-vars */
  handleFileReadStarted = (fileHandle: File) => this.setState({ isLoading: true });
  handleFileReadFinished = (fileHandle: File) => this.setState({ isLoading: false });
  /* eslint-enable @typescript-eslint/no-unused-vars */

  render() {
    const { value, filename, isLoading } = this.state;
    return (
      <FileUpload
        id="simple-text-file"
        type="text"
        value={value}
        filename={filename}
        onChange={this.handleFileChange}
        onReadStarted={this.handleFileReadStarted}
        onReadFinished={this.handleFileReadFinished}
        onClick={this.handleClick}
        isLoading={isLoading}
      />
    );
  }
}
