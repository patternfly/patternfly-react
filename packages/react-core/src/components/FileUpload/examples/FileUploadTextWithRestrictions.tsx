import React from 'react';
import { FileUpload, Form, FormGroup } from '@patternfly/react-core';

export const TextFileUploadWithRestrictions: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRejected, setIsRejected] = React.useState(false);

  const handleFileInputChange = (_event, file) => {
    setFilename(file.name);
  };

  const handleTextOrDataChange = value => {
    setValue(value);
  };

  const handleClear = _event => {
    setFilename('');
    setValue('');
    setIsRejected(false);
  };

  const handleFileRejected = (_rejectedFiles, _event) => {
    setIsRejected(true);
  };

  const handleFileReadStarted = _fileHandle => {
    setIsLoading(true);
  };

  const handleFileReadFinished = _fileHandle => {
    setIsLoading(false);
  };

  return (
    <Form>
      <FormGroup
        fieldId="text-file-with-restrictions"
        helperText="Upload a CSV file"
        helperTextInvalid="Must be a CSV file no larger than 1 KB"
        validated={isRejected ? 'error' : 'default'}
      >
        <FileUpload
          id="text-file-with-restrictions"
          type="text"
          value={value}
          filename={filename}
          filenamePlaceholder="Drag and drop a file or upload one"
          onFileInputChange={handleFileInputChange}
          onDataChange={handleTextOrDataChange}
          onTextChange={handleTextOrDataChange}
          onReadStarted={handleFileReadStarted}
          onReadFinished={handleFileReadFinished}
          onClearClick={handleClear}
          isLoading={isLoading}
          dropzoneProps={{
            accept: '.csv',
            maxSize: 1024,
            onDropRejected: handleFileRejected
          }}
          validated={isRejected ? 'error' : 'default'}
          browseButtonText="Upload"
        />
      </FormGroup>
    </Form>
  );
};
