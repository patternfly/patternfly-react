import React from 'react';
import {
  MultipleFileUpload,
  MultipleFileUploadInfo,
  MultipleFileUploadMain,
  MultipleFileUploadTitle,
  MultipleFileUploadTitleIcon,
  MultipleFileUploadTitleText,
  MultipleFileUploadTitleTextSeparator,
  MultipleFileUploadButton,
  MultipleFileUploadStatus
} from '@patternfly/react-core';

export const MultipleFileUploadBasic: React.FunctionComponent = () => {
  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);
  // const [isLoading, setIsLoading] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);

  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }

  // const handleFileInputChange = (_event, file) => setFilename(file.name);
  const handleValueChange = values => setCurrentFiles(values);

  const removeFile = (fileToRemove: File) => {
    const newFiles = currentFiles.filter(file => !Object.is(file, fileToRemove));
    setCurrentFiles(newFiles);
  };

  return (
    <MultipleFileUpload
      values={currentFiles}
      // onFileInputChange={handleFileInputChange}
      onDataChange={handleValueChange}
      // isLoading={isLoading}
    >
      <MultipleFileUploadMain>
        <MultipleFileUploadTitle>
          <MultipleFileUploadTitleIcon />
          <MultipleFileUploadTitleText>
            Drag and drop files here
            <MultipleFileUploadTitleTextSeparator>or</MultipleFileUploadTitleTextSeparator>
          </MultipleFileUploadTitleText>
        </MultipleFileUploadTitle>
        <MultipleFileUploadButton />
        <MultipleFileUploadInfo>Accepted file types: JPEG, Doc, PDF, PNG</MultipleFileUploadInfo>
      </MultipleFileUploadMain>
      {showStatus && (
        <MultipleFileUploadStatus
          statusToggleText={`${currentFiles.length} of ${currentFiles.length} files uploaded`}
          files={currentFiles}
          onRemoveFile={removeFile}
        />
      )}
    </MultipleFileUpload>
  );
};
