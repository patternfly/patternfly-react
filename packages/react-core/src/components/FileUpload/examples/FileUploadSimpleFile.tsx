import React from 'react';
import { FileUpload } from '@patternfly/react-core';

export const SimpleFileUpload: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(null);
  const [filename, setFilename] = React.useState('');

  const handleFileInputChange = (_event, file) => {
    setFilename(file.name);
  };

  const handleClear = _event => {
    setFilename('');
    setValue('');
  };

  return (
    <FileUpload
      id="simple-file"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onClearClick={handleClear}
      browseButtonText="Upload"
    />
  );
};
