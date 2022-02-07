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
  fileName: string;
  data?: string;
  loadResult?: 'danger' | 'success';
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

  const handleRemoveFile = (fileToRemove: File) => {
    const newCurrentFiles = currentFiles.filter(file => file.name !== fileToRemove.name);
    setCurrentFiles(newCurrentFiles);

    const newCurrentFileNames = newCurrentFiles.map(file => file.name);
    const newReadFiles = readFileData.filter(readFile => newCurrentFileNames.includes(readFile.fileName));
    setReadFileData(newReadFiles);
  };

  const isInCurrentFiles = (newFile: File) => currentFiles.some(currentFile => currentFile.name === newFile.name);

  const handleFileDrop = (droppedFiles: File[]) => {
    const newFiles = droppedFiles.filter(droppedFile => !isInCurrentFiles(droppedFile));
    setCurrentFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleReadSuccess = (data: string, file: File) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, { data, fileName: file.name, loadResult: 'success' }]);
  };

  const handleReadFail = (error: DOMException, file: File) => {
    setReadFileData(prevReadFiles => [
      ...prevReadFiles,
      { loadError: error, fileName: file.name, loadResult: 'danger' }
    ]);
  };

  const successfullyReadFiles = readFileData.filter(fileData => fileData.loadResult === 'success').length;

  return (
    <MultipleFileUpload
      onDataChange={handleFileDrop}
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
          statusToggleText={`${successfullyReadFiles} of ${currentFiles.length} files uploaded`}
          statusToggleIcon={getStatusIcon()}
        >
          {currentFiles.map(file => (
            <MultipleFileUploadStatusItem
              file={file}
              key={`${file.name}${file.size}${file.lastModified}`}
              onClearClick={() => handleRemoveFile(file)}
              onReadSuccess={handleReadSuccess}
              onReadFail={handleReadFail}
            />
          ))}
        </MultipleFileUploadStatus>
      )}
    </MultipleFileUpload>
  );
};
