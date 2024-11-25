import React from 'react';
import {
  FileUpload,
  DropzoneErrorCode,
  FileUploadHelperText,
  Form,
  FormGroup,
  HelperText,
  HelperTextItem,
  DropEvent,
  Icon
} from '@patternfly/react-core';

export const TextFileUploadWithRestrictions: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRejected, setIsRejected] = React.useState(false);
  const [message, setMessage] = React.useState('Must be a CSV file no larger than 1 KB');

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleTextChange = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value);
  };

  const handleDataChange = (_event: DropEvent, value: string) => {
    setValue(value);
  };

  const reset = () => {
    setFilename('');
    setValue('');
  };

  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    reset();
    setIsRejected(false);
  };

  const handleFileRejected = () => {
    reset();
    setIsRejected(true);
  };

  const handleFileAccepted = () => {
    setIsRejected(false);
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
            onDropRejected: (rejections) => {
              const error = rejections[0].errors[0];
              if (error.code === DropzoneErrorCode.FileTooLarge) {
                setMessage('File is too big');
              } else if (error.code === DropzoneErrorCode.FileInvalidType) {
                setMessage('File is not a CSV file');
              }
              handleFileRejected();
            },
            onDropAccepted: handleFileAccepted
          }}
          validated={isRejected ? 'error' : 'default'}
          browseButtonText="Upload"
          browseButtonAriaDescribedby="restricted-file-example-helpText"
        >
          <FileUploadHelperText>
            <HelperText isLiveRegion>
              <HelperTextItem id="restricted-file-example-helpText" variant={isRejected ? 'error' : 'default'}>
                {isRejected ? (
                  <>
                    <Icon status="danger" />
                    {message}
                  </>
                ) : (
                  'Upload a CSV file'
                )}
              </HelperTextItem>
            </HelperText>
          </FileUploadHelperText>
        </FileUpload>
      </FormGroup>
    </Form>
  );
};
