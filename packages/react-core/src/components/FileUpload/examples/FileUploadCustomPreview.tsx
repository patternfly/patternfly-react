import React from 'react';
import { FileUpload } from '@patternfly/react-core';
import FileUploadIcon from '@patternfly/react-icons/dist/esm/icons/file-upload-icon';

export const CustomPreviewFileUpload: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<File>();
  const [filename, setFilename] = React.useState('');

  const handleFileInputChange = (_, file: File) => {
    setValue(file);
    setFilename(file.name);
  };

  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue(undefined);
  };

  return (
    <FileUpload
      id="customized-preview-file"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onClearClick={handleClear}
      hideDefaultPreview
      browseButtonText="Upload"
    >
      {value && (
        <div>
          <FileUploadIcon width="2em" height="2em" /> Custom preview here for your {value.size}-byte file named{' '}
          {value.name}
        </div>
      )}
    </FileUpload>
  );
};
