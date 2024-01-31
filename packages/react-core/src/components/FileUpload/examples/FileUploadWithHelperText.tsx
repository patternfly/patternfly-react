import React from 'react';
import { FileUpload, FileUploadHelperText, HelperText, HelperTextItem, DropEvent } from '@patternfly/react-core';

export const FileUploadWithHelperText: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleTextChange = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value);
  };

  const handleDataChange = (_event: DropEvent, value: string) => {
    setValue(value);
  };

  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue('');
  };

  const handleFileReadStarted = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(true);
  };

  const handleFileReadFinished = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(false);
  };

  return (
    <FileUpload
      id="file-upload-helper-text"
      type="text"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onDataChange={handleDataChange}
      onTextChange={handleTextChange}
      onReadStarted={handleFileReadStarted}
      onReadFinished={handleFileReadFinished}
      onClearClick={handleClear}
      isLoading={isLoading}
      allowEditingUploadedText={false}
      browseButtonText="Upload"
      browseButtonAriaDescribedby="helper-text-example-helpText"
    >
      <FileUploadHelperText>
        <HelperText>
          <HelperTextItem id="helper-text-example-helpText">Upload a CSV file</HelperTextItem>
        </HelperText>
      </FileUploadHelperText>
    </FileUpload>
  );
};
