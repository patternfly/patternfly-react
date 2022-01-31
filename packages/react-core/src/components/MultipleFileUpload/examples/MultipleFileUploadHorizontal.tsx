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
  const [showStatus, setShowStatus] = React.useState(false);

  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }

  const handleValueChange = values => setCurrentFiles(values);

  const removeFile = (fileToRemove: File) => {
    const newFiles = currentFiles.filter(file => !Object.is(file, fileToRemove));
    setCurrentFiles(newFiles);
  };

  return (
    <MultipleFileUpload
      currentFiles={currentFiles}
      onDataChange={handleValueChange}
      isHorizontal
      dropzoneProps={{ accept: 'image/jpeg, application/msword, application/pdf, image/png' }}
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
