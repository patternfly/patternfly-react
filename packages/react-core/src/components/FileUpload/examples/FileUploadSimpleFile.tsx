import { useState, type FunctionComponent, type MouseEvent as ReactMouseEvent } from 'react';
import { FileUpload } from '@patternfly/react-core';

export const SimpleFileUpload: FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [filename, setFilename] = useState('');

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleClear = (_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
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
