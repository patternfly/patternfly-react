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
  MultipleFileUploadStatus,
  MultipleFileUploadStatusItem
} from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

interface readFile {
  file: File;
  data?: string;
  loadPercentage?: number;
  loadResult?: undefined | 'danger' | 'success';
  loadError?: DOMException;
}

export const MultipleFileUploadBasic: React.FunctionComponent = () => {
  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);
  const [readFileData, setReadFileData] = React.useState<readFile[]>([]);
  const [showStatus, setShowStatus] = React.useState(false);

  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }

  const getStatusIcon = () => {
    if (readFileData.length < currentFiles.length) {
      return <InProgressIcon />;
    }

    if (readFileData.every(file => file.loadResult === 'success')) {
      return <CheckCircleIcon />;
    }

    return <TimesCircleIcon />;
  };

  const handleFileDrop = (files: File[]) => {
    setCurrentFiles(files);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const newCurrentFiles = currentFiles.filter(file => !Object.is(file, fileToRemove));
    setCurrentFiles(newCurrentFiles);

    const newReadFiles = readFileData.filter(readFile => newCurrentFiles.includes(readFile.file));
    setReadFileData(newReadFiles);
  };

  const handleReadSuccess = (data: string, file: File) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, { data, file, loadPercentage: 100, loadResult: 'success' }]);
  };

  return (
    <MultipleFileUpload
      currentFiles={currentFiles}
      onDataChange={handleFileDrop}
      dropzoneProps={{ accept: 'image/jpeg, application/msword, application/pdf, image/png' }}
      isHorizontal
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
          statusToggleText={`${readFileData.length} of ${currentFiles.length} files uploaded`}
          statusToggleIcon={getStatusIcon()}
        >
          {currentFiles.map(file => (
            <MultipleFileUploadStatusItem
              file={file}
              fileName="fooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooofoooooooooooooooooooooooooooooooooooooo"
              key={`${file.name}${file.size}${file.lastModified}`}
              onClearClick={() => handleRemoveFile(file)}
              onReadSuccess={handleReadSuccess}
            />
          ))}
        </MultipleFileUploadStatus>
      )}
    </MultipleFileUpload>
  );
};
