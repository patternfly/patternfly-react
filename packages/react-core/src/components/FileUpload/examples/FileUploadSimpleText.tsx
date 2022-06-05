import React from 'react';
import { FileUpload } from '@patternfly/react-core';

export const SimpleTextFileUpload: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileInputChange = (_event, file) => {
    setFilename(file.name);
  };

  const handleTextOrDataChange = value => {
    setValue(value);
  };

  const handleClear = _event => {
    setFilename('');
    setValue('');
  };

  const handleFileReadStarted = _fileHandle => {
    setIsLoading(true);
  };

  const handleFileReadFinished = _fileHandle => {
    setIsLoading(false);
  };

  return (
    <FileUpload
      id="text-file-with-edits-allowed"
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
      allowEditingUploadedText={false}
      browseButtonText="Upload"
    />
  );
};
