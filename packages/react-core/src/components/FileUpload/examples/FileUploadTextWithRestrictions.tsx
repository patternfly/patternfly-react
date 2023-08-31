import React from 'react';
import {
  FileUpload,
  Form,
  FormGroup,
  FormHelperText,
  HelperText,
  HelperTextItem,
  DropEvent
} from '@patternfly/react-core';

export const TextFileUploadWithRestrictions: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRejected, setIsRejected] = React.useState(false);

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
    setIsRejected(false);
  };

  const handleFileRejected = () => {
    setIsRejected(true);
  };

  const handleFileReadStarted = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(true);
  };

  const handleFileReadFinished = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(false);
  };

  return (
    <Form>
      <FormGroup fieldId="text-file-with-restrictions-example">
        <FileUpload
          id="text-file-with-restrictions-example"
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
          dropzoneProps={{
            accept: { 'text/csv': ['.csv'] },
            maxSize: 1024,
            onDropRejected: handleFileRejected
          }}
          validated={isRejected ? 'error' : 'default'}
          browseButtonText="Upload"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant={isRejected ? 'error' : 'default'}>
              {isRejected ? 'Must be a CSV file no larger than 1 KB' : 'Upload a CSV file'}
            </HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
