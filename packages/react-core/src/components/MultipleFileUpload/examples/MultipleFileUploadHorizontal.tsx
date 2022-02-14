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
  MultipleFileUploadStatusItem,
  Modal
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
  const [modalText, setModalText] = React.useState('');

  // only show the status component once a file has been uploaded, but keep the status list component itself even if all files are removed
  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }

  // determine the icon that should be shown for the overall status list
  const getStatusIcon = () => {
    if (readFileData.length < currentFiles.length) {
      return <InProgressIcon />;
    }

    if (readFileData.every(file => file.loadResult === 'success')) {
      return <CheckCircleIcon />;
    }

    return <TimesCircleIcon />;
  };

  // remove files from both state arrays based on their name
  const removeFiles = (namesOfFilesToRemove: string[]) => {
    const newCurrentFiles = currentFiles.filter(
      currentFile => !namesOfFilesToRemove.some(fileName => fileName === currentFile.name)
    );

    setCurrentFiles(newCurrentFiles);

    const newReadFiles = readFileData.filter(
      readFile => !namesOfFilesToRemove.some(fileName => fileName === readFile.fileName)
    );

    setReadFileData(newReadFiles);
  };

  // callback that will be called by the react dropzone with the newly dropped file objects
  const handleFileDrop = (droppedFiles: File[]) => {
    // identify what, if any, files are re-uploads of already uploaded files
    const currentFileNames = currentFiles.map(file => file.name);
    const reUploads = droppedFiles.filter(droppedFile => currentFileNames.includes(droppedFile.name));

    /** this promise chain is needed because if the file removal is done at the same time as the file adding react
     * won't realize that the status items for the re-uploaded files needs to be re-rendered */
    Promise.resolve()
      .then(() => removeFiles(reUploads.map(file => file.name)))
      .then(() => setCurrentFiles(prevFiles => [...prevFiles, ...droppedFiles]));
  };

  // callback called by the status item when a file is successfully read with the built-in file reader
  const handleReadSuccess = (data: string, file: File) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, { data, fileName: file.name, loadResult: 'success' }]);
  };

  // callback called by the status item when a file encounters an error while being read with the built-in file reader
  const handleReadFail = (error: DOMException, file: File) => {
    setReadFileData(prevReadFiles => [
      ...prevReadFiles,
      { loadError: error, fileName: file.name, loadResult: 'danger' }
    ]);
  };

  // dropzone prop that communicates to the user that files they've attempted to upload are not an appropriate type
  const handleDropRejected = (files: File[], _event: React.DragEvent<HTMLElement>) => {
    if (files.length === 1) {
      setModalText(`${files[0].name} is not an accepted file type`);
    } else {
      const rejectedMessages = files.reduce((acc, file) => (acc += `${file.name}, `), '');
      setModalText(`${rejectedMessages}are not accepted file types`);
    }
  };

  const successfullyReadFileCount = readFileData.filter(fileData => fileData.loadResult === 'success').length;

  return (
    <MultipleFileUpload
      onFileDrop={handleFileDrop}
      dropzoneProps={{
        accept: 'image/jpeg, application/msword, application/pdf, image/png',
        onDropRejected: handleDropRejected
      }}
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
          statusToggleText={`${successfullyReadFileCount} of ${currentFiles.length} files uploaded`}
          statusToggleIcon={getStatusIcon()}
        >
          {currentFiles.map(file => (
            <MultipleFileUploadStatusItem
              file={file}
              key={file.name}
              onClearClick={() => removeFiles([file.name])}
              onReadSuccess={handleReadSuccess}
              onReadFail={handleReadFail}
            />
          ))}
        </MultipleFileUploadStatus>
      )}
      <Modal
        isOpen={!!modalText}
        title="Unsupported file"
        titleIconVariant="warning"
        showClose
        aria-label="unsupported file upload attempted"
        onClose={() => setModalText('')}
      >
        {modalText}
      </Modal>
    </MultipleFileUpload>
  );
};
