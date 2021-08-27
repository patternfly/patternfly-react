import React, { ChangeEvent } from 'react';
import { FileUpload, TextArea, TextInput } from '@patternfly/react-core';

export class FileUploadDemo extends React.Component {
  static displayName = 'FileUploadDemo';

  state = { value: '', filename: '', isLoading: false };
  /* eslint-disable-next-line no-console */
  handleClick = (evt: React.MouseEvent) => console.log('clicked', evt.target);
  handleFileChange = (...args: any[]) => {
    const [value, filename] = args
    this.setState({ value, filename })
    console.log("onChange",args)
  }
  handleInputChange= (...args: any[])=> {
    console.log("onInputChange",args);
  }

  handleInputChange2= (...args: any[])=> {
    console.log("onInputChange2",args);
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  handleFileReadStarted = (fileHandle: File) => this.setState({ isLoading: true });
  handleFileReadFinished = (fileHandle: File) => this.setState({ isLoading: false });
  /* eslint-enable @typescript-eslint/no-unused-vars */

  render() {
    const { value, filename, isLoading } = this.state;
    return (<>
      <FileUpload
        id="simple-text-file"
        type="text"
        value={value}
        filename={filename}
        onChange={this.handleFileChange}
        onInputChange={this.handleInputChange}
        onReadStarted={this.handleFileReadStarted}
        onReadFinished={this.handleFileReadFinished}
        onClick={this.handleClick}
        onClearClicked={(e) => console.log("clear clicked", e)}
        onTextChanged={(e) => console.log("text changed", e)}
        isLoading={isLoading}
      >
        <TextInput value={value}>

        </TextInput>
      </FileUpload>
      <br></br>
      <input type="file" onChange={this.handleInputChange2} />
    </>
    );
  }
}
