import { useState, type FunctionComponent, type MouseEvent as ReactMouseEvent } from 'react';
import { FileUpload } from '@patternfly/react-core';
import FileUploadIcon from '@patternfly/react-icons/dist/esm/icons/file-upload-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export const CustomPreviewFileUpload: FunctionComponent = () => {
  const [value, setValue] = useState<File>();
  const [filename, setFilename] = useState('');

  const handleFileInputChange = (_, file: File) => {
    setValue(file);
    setFilename(file.name);
  };

  const handleClear = (_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        <div className={spacing.mMd}>
          <FileUploadIcon width="2em" height="2em" /> Custom preview here for your {value.size}-byte file named{' '}
          {value.name}
        </div>
      )}
    </FileUpload>
  );
};
