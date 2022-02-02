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

interface readFile {
  file: File;
  data: string;
}

export const MultipleFileUploadBasic: React.FunctionComponent = () => {
  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);
  const [readFileData, setReadFileData] = React.useState<readFile[]>([]);
  const [showStatus, setShowStatus] = React.useState(false);

  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }

  const handleValueChange = values => setCurrentFiles(values);

  const handleRemoveFile = (fileToRemove: File) => {
    const newCurrentFiles = currentFiles.filter(file => !Object.is(file, fileToRemove));
    setCurrentFiles(newCurrentFiles);

    const newReadFiles = readFileData.filter(readFile => newCurrentFiles.includes(readFile.file));
    setReadFileData(newReadFiles);
  };

  const handleReadSuccess = (data: string, file: File) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, { data, file }]);
  };

  return (
    <MultipleFileUpload
      currentFiles={currentFiles}
      onDataChange={handleValueChange}
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
          statusToggleIcon={<InProgressIcon />}
          files={currentFiles}
          onRemoveFile={handleRemoveFile}
          onReadSuccess={handleReadSuccess}
        />
      )}
    </MultipleFileUpload>
  );
};
