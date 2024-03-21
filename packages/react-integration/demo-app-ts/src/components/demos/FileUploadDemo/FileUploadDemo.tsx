import { ChangeEvent, Component } from 'react';
import { FileUpload, DropEvent } from '@patternfly/react-core';

export class FileUploadDemo extends Component {
  static displayName = 'FileUploadDemo';

  state = { value: '', filename: '', isLoading: false };
  /* eslint-disable-next-line no-console */
  handleFileInputChange = (event: ChangeEvent<HTMLInputElement>, file: File) =>
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
