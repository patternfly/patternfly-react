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
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

export const MultipleFileUploadBasic: React.FunctionComponent = () => {
  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);
  const [readFiles, setReadFiles] = React.useState<File[]>([]);
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
          statusToggleText={`${readFiles.length} of ${currentFiles.length} files uploaded`}
          statusToggleIcon={<InProgressIcon />}
          files={currentFiles}
          onRemoveFile={removeFile}
          onReadFinished={file => setReadFiles([...readFiles, file])}
        />
      )}
    </MultipleFileUpload>
  );
};
